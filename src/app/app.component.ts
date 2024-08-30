import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component'
import { SharedModule } from './shared/shared.module'
import { SitePageModule } from './site-page/site-page.module'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavbarComponent, SharedModule, SitePageModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'locky-bocky-ui'
}
