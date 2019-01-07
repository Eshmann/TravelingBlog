import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './Services/admin.service';
import { routing } from './admin.routing';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    routing
  ],
  providers:[AdminService]
})
export class AdminModule { }
