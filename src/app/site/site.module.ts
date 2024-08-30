import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { ButtonModule } from 'primeng/button'
import { CheckboxModule } from 'primeng/checkbox'
import { DataViewModule } from 'primeng/dataview'
import { DialogModule } from 'primeng/dialog'
import { InputGroupModule } from 'primeng/inputgroup'
import { InputGroupAddonModule } from 'primeng/inputgroupaddon'
import { InputTextModule } from 'primeng/inputtext'
import { SpeedDialModule } from 'primeng/speeddial'

import { SiteComponent } from './site.component'
import { SiteListComponent } from './components/site-list/site-list.component'

@NgModule({
    declarations: [SiteComponent, SiteListComponent],
    imports: [
        CommonModule,
        ButtonModule,
        CheckboxModule,
        DataViewModule,
        DialogModule,
        InputGroupModule,
        InputGroupAddonModule,
        InputTextModule,
        FormsModule,
        SpeedDialModule,
    ],
})
export class SiteModule {}
