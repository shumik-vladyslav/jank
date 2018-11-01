import { RouterModule, Routes } from "@angular/router";
import "hammerjs";
import { EraseRequestComponent } from "./main/erase-request/erase-request.component";
import { ReportRequestComponent } from "./main/report-request/report-request.component";
import { SingInComponent } from "./main/sing-in/sing-in.component";
import { ForgotPasswordComponent } from "./main/forgot-password/forgot-password.component";
import { SingUpComponent } from "./main/sing-up/sing-up.component";
import { ChangePasswordComponent } from "./main/change-password/change-password.component";
import { VerifyOperationsComponent } from "./main/verify-operations/verify-operations.component";
import { DataRequestComponent } from "./main/data-request/data-request.component";
import { ManageDeKeysComponent } from "./main/manage-de-keys/manage-de-keys.component";
import { SensitiveDataInventoryComponent } from "./main/sensitive-data-inventory/sensitive-data-inventory.component";
import { SampleComponent } from "./main/sample/sample.component";
import { AuthCallbackComponent } from "./main/auth-callback/auth-callback.component";
import { SignOutComponent } from "./main/sign-out/sign-out.component";
import { AuthGuardGuard } from "./auth-guard.guard";

export const appRoutes: Routes = [
    {
        path: "sample",
        component: SampleComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: "erase-equest",
        component: EraseRequestComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: "report-equest",
        component: ReportRequestComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: "login",
        component: SingInComponent
    },
    {
        path: "register",
        component: SingUpComponent
    },
    {
        path: "change-pass",
        component: ChangePasswordComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: "verify-operations",
        component: VerifyOperationsComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: "forget-pass",
        component: ForgotPasswordComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: "data-requst",
        component: DataRequestComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: "de-keys",
        component: ManageDeKeysComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: "sensitive-data",
        component: SensitiveDataInventoryComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: "auth-callback",
        component: AuthCallbackComponent
    },
    {
        path: "sign-out",
        component: SignOutComponent,
        canActivate: [AuthGuardGuard]
    }
];
