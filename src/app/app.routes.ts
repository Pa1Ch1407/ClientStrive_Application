import { Routes } from '@angular/router';
import { MasterComponent } from './master/master.component';
import { EmployeeComponent } from './employee/employee.component';
import { ClientComponent } from './client/client.component';
import { ClientProjectComponent } from './client-project/client-project.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'master',
                component: MasterComponent
            },
            {
                path: 'employee',
                component: EmployeeComponent
            },
            {
                path: 'client',
                component: ClientComponent
            },
            {
                path: 'clientproject',
                component: ClientProjectComponent
            }
        ]
    },

];
