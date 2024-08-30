import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CheckboxModule } from 'primeng/checkbox'
import { DataViewModule } from 'primeng/dataview'
import { DialogModule } from 'primeng/dialog'
import { InputGroupModule } from 'primeng/inputgroup'
import { InputGroupAddonModule } from 'primeng/inputgroupaddon'
import { InputTextModule } from 'primeng/inputtext'
import { SpeedDialModule } from 'primeng/speeddial'

import { SitePageComponent } from './site-page.component'
import { SiteListComponent } from './components/site-list/site-list.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
    declarations: [SitePageComponent, SiteListComponent],
    imports: [
        CommonModule,
        CheckboxModule,
        DataViewModule,
        DialogModule,
        InputGroupModule,
        InputGroupAddonModule,
        InputTextModule,
        FormsModule,
        SpeedDialModule,
        SharedModule,
    ],
})
export class SitePageModule {}
