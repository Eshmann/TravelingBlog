import { Routes, RouterModule } from "@angular/router"
import { AuthGuard } from "../auth.guard"
import { AdminComponent } from "./admin/admin.component"
import { ModuleWithProviders } from "@angular/core"


const appRoutes:Routes = [
    {
        path:'admin',
        runGuardsAndResolvers:'always',
        canActivate:[AuthGuard],
        children:[
            {
                path:'',
                component:AdminComponent,
                data:{roles:['Admin']}
            }
        ]
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)