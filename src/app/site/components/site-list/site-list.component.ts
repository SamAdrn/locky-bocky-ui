import { Component } from '@angular/core'
import { SITE_MOCK_DATA } from 'src/app/site/mock-data/site-mock.data'

@Component({
    selector: 'app-sitelist',
    templateUrl: './site-list.component.html',
})
export class SiteListComponent {
    checked: { [id: string]: boolean } = {}
    sites = SITE_MOCK_DATA
}
