import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { EraseRequestComponent } from './main/erase-request/erase-request.component';
import { ReportRequestComponent } from './main/report-request/report-request.component';
import { SingInComponent } from './main/sing-in/sing-in.component';
import { ForgotPasswordComponent } from './main/forgot-password/forgot-password.component';
import { SingUpComponent } from './main/sing-up/sing-up.component';
import { ChangePasswordComponent } from './main/change-password/change-password.component';
import { VerifyOperationsComponent } from './main/verify-operations/verify-operations.component';
import { DataRequestComponent } from './main/data-request/data-request.component';
import { ManageDeKeysComponent } from './main/manage-de-keys/manage-de-keys.component';
import { SensitiveDataInventoryComponent } from './main/sensitive-data-inventory/sensitive-data-inventory.component';
import { SampleComponent } from './main/sample/sample.component';
import { AuthCallbackComponent } from './main/auth-callback/auth-callback.component';

export const appRoutes: Routes = [
    {
        path     : 'sample',
        component: SampleComponent
    },
    {
        path     : 'erase-equest',
        component: EraseRequestComponent
    },
    {
        path     : 'report-equest',
        component: ReportRequestComponent
    },
    {
        path     : 'login',
        component: SingInComponent
    },
    {
        path     : 'register',
        component: SingUpComponent
    },
    {
        path     : 'change-pass',
        component: ChangePasswordComponent
    },
    {
        path     : 'verify-operations',
        component: VerifyOperationsComponent
    },
    {
        path     : 'forget-pass',
        component: ForgotPasswordComponent
    },
    {
        path     : 'data-requst',
        component: DataRequestComponent
    },
    {
        path     : 'de-keys',
        component: ManageDeKeysComponent
    },
    {
        path     : 'sensitive-data',
        component: SensitiveDataInventoryComponent
    },    
    {
        path     : 'auth-callback',
        component: AuthCallbackComponent
    },    
];