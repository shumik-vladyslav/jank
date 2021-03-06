import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { TranslateModule } from "@ngx-translate/core";
import "hammerjs";

import { FuseModule } from "@fuse/fuse.module";
import { FuseSharedModule } from "@fuse/shared.module";
import {
  FuseProgressBarModule,
  FuseSidebarModule,
  FuseThemeOptionsModule
} from "@fuse/components";

import { fuseConfig } from "app/fuse-config";

import { AppComponent } from "app/app.component";
import { LayoutModule } from "app/layout/layout.module";
import { EraseRequestComponent } from "./main/erase-request/erase-request.component";
import { SuccessMessageComponent } from "app/main/success-message/success-message.component";

import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatOptionModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule
} from "@angular/material";
import { ReportRequestComponent } from "./main/report-request/report-request.component";
import { FormsModule } from "@angular/forms";
import { SingInComponent } from "./main/sing-in/sing-in.component";
import { ForgotPasswordComponent } from "./main/forgot-password/forgot-password.component";
import { SingUpComponent } from "./main/sing-up/sing-up.component";
import { ChangePasswordComponent } from "./main/change-password/change-password.component";
import { VerifyOperationsComponent } from "./main/verify-operations/verify-operations.component";
import { VerifyService } from "./services/verify.service";
import { HttpModule } from "@angular/http";
import { CountoModule } from "angular2-counto";
import { DataRequestComponent } from "./main/data-request/data-request.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { RequestDetailsComponent } from "./main/request-details/request-details.component";
import { ManageDeKeysComponent } from "./main/manage-de-keys/manage-de-keys.component";
import { DekeyDetailsComponent } from "./main/dekey-details/dekey-details.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { SensitiveDataInventoryComponent } from "./main/sensitive-data-inventory/sensitive-data-inventory.component";
import { SampleComponent } from "./main/sample/sample.component";
import { appRoutes } from "./app-routing.module";
import { AuthCallbackComponent } from "./main/auth-callback/auth-callback.component";
import { MyHttpInterceptor } from "./http-interceptor";
import { SignOutComponent } from './main/sign-out/sign-out.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    EraseRequestComponent,
    SuccessMessageComponent,
    ReportRequestComponent,
    SingInComponent,
    ForgotPasswordComponent,
    SingUpComponent,
    ChangePasswordComponent,
    VerifyOperationsComponent,
    ForgotPasswordComponent,
    DataRequestComponent,
    RequestDetailsComponent,
    ManageDeKeysComponent,
    DekeyDetailsComponent,
    SensitiveDataInventoryComponent,
    AuthCallbackComponent,
    SignOutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: "enabled" }),
    TranslateModule.forRoot(),
    FormsModule,
    HttpModule,
    CountoModule,
    // Material moment date module
    MatMomentDateModule,

    // Material
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    // Fuse modules
    FuseModule.forRoot(fuseConfig),
    FuseProgressBarModule,
    FuseSharedModule,
    FuseSidebarModule,
    FuseThemeOptionsModule,

    // App modules
    LayoutModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    },
    VerifyService
  ]
})
export class AppModule {}
