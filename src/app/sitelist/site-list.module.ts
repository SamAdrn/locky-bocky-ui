import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CheckboxModule } from 'primeng/checkbox'
import { SpeedDialModule } from 'primeng/speeddial'

import { SiteListComponent } from './site-list.component'

@NgModule({
    declarations: [SiteListComponent],
    imports: [CommonModule, FormsModule, CheckboxModule, SpeedDialModule],
    exports: [SiteListComponent],
})
export class SiteListModule {}
