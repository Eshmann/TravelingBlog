import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit{

  @Input() appHasRole:string[];

  //isVisible=false;

  constructor(private viewContainerRef:ViewContainerRef,
    private templateRef:TemplateRef<any>,
    private userService:UserService) { }

  ngOnInit(){
    if(this.userService.isLoggedIn()){
      const userRoles = this.userService
      .decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
      if(!userRoles){
        this.viewContainerRef.clear()
      }

      if(this.userService.roleMatch(this.appHasRole)){
        //this.isVisible = true
        this.viewContainerRef.createEmbeddedView(this.templateRef)
      }
      else{
        this.viewContainerRef.clear()
      }
    }
  }
}
