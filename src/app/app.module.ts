import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { EraseRequestComponent } from './main/erase-request/erase-request.component';
import { SuccessMessageComponent } from 'app/main/success-message/success-message.component';

import {
    MatButtonModule, MatCheckboxModule, MatInputModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatRadioModule, MatSelectModule, MatSlideToggleModule
} from '@angular/material';
import { ReportRequestComponent } from './main/report-request/report-request.component';
import { FormsModule } from '@angular/forms';
import { SingInComponent } from './main/sing-in/sing-in.component';
import { ForgotPasswordComponent } from './main/forgot-password/forgot-password.component';
import { SingUpComponent } from './main/sing-up/sing-up.component';
import { ChangePasswordComponent } from './main/change-password/change-password.component';


const appRoutes: Routes = [
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
    }
];

@NgModule({
    declarations: [
        AppComponent, 
        EraseRequestComponent,
        SuccessMessageComponent,
        ReportRequestComponent,
        SingInComponent,
        ForgotPasswordComponent,
        SingUpComponent,
        ChangePasswordComponent,
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, { scrollPositionRestoration: "enabled"}),
        TranslateModule.forRoot(),
        FormsModule,
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
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
