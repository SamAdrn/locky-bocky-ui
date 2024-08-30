import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ButtonModule } from 'primeng/button'

import { ButtonComponent } from './button/button.component'

@NgModule({
    declarations: [ButtonComponent],
    imports: [CommonModule, ButtonModule],
    exports: [ButtonComponent],
})
export class SharedModule {}
