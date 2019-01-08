import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminComponent } from './admin/admin.component'
import { AdminService } from './Services/admin.service'
import { routing } from './admin.routing'
import { UserManagementComponent } from './user-management/user-management.component'
import { TabsModule } from 'ngx-bootstrap'
import { HasRoleDirective } from './directives/has-role.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent, 
    UserManagementComponent,
    HasRoleDirective
  ],
  imports: [
    CommonModule,
    routing,
    TabsModule.forRoot(),
    FormsModule
  ],
  providers:[AdminService],
  exports:[HasRoleDirective]
})
export class AdminModule { }
