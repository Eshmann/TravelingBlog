import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminComponent } from './admin/admin.component'
import { AdminService } from './Services/admin.service'
import { routing } from './admin.routing'
import { UserManagementComponent } from './user-management/user-management.component'
import { TabsModule } from 'ngx-bootstrap'
import { HasRoleDirective } from './directives/has-role.directive';
import { RoleManagingComponent } from './role-managing/role-managing.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AdminComponent, 
    UserManagementComponent,
    HasRoleDirective,
    RoleManagingComponent
  ],
  imports: [
    CommonModule,
    routing,
    TabsModule.forRoot(),
  ],
  providers:[AdminService],
  exports:[HasRoleDirective],
  entryComponents:[RoleManagingComponent]
})
export class AdminModule { }
