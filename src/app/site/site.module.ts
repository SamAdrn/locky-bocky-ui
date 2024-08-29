import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { ButtonModule } from 'primeng/button'
import { CheckboxModule } from 'primeng/checkbox'
import { DataViewModule } from 'primeng/dataview'
import { SpeedDialModule } from 'primeng/speeddial'

import { SiteComponent } from './site.component'
import { SiteListComponent } from './components/sitelist/site-list.component'

@NgModule({
    declarations: [SiteComponent, SiteListComponent],
    imports: [
        CommonModule,
        ButtonModule,
        DataViewModule,
        FormsModule,
        CheckboxModule,
        SpeedDialModule,
    ],
})
export class SiteModule {}
