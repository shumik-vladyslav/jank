import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { SampleComponent } from './sample.component';
import { MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import CountoModule from 'angular2-counto';

const routes = [
    {
        path     : 'sample',
        component: SampleComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,
        MatSelectModule,
        FormsModule,
        CountoModule
    ],
    exports     : [
        SampleComponent,
        MatSelectModule
    ]
})

export class SampleModule
{
}
