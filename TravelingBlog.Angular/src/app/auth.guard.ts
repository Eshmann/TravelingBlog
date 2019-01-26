// auth.guard.ts
import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router'
import { UserService } from './shared/services/user.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) { }

  canActivate(next:ActivatedRouteSnapshot) {

    if (!this.user.isLoggedIn()) {
      this.router.navigate(['/login'])
      return false
    }
    
      if(next.firstChild!=null){
        const roles = next.firstChild.data['roles'] as Array<string> 

        if(roles){
          const match = this.user.roleMatch(roles)
          if(match)
          {
            return true
          }
          else{
            this.router.navigate([])
          }
        } 
    }
    return true
  }
}
