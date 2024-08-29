import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CheckboxModule } from 'primeng/checkbox'
import { PanelModule } from 'primeng/panel'

import { SiteListComponent } from './site-list.component'

@NgModule({
    declarations: [SiteListComponent],
    imports: [CommonModule, FormsModule, CheckboxModule, PanelModule],
    exports: [SiteListComponent],
})
export class SiteListModule {}
