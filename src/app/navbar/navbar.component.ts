import { Component } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { SharedModule } from '../shared/shared.module'

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [ButtonModule, SharedModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
