import { Component } from '@angular/core'
import { SITE_MOCK_DATA } from 'src/app/models/site/site-mock.data'

@Component({
    selector: 'app-site-list',
    templateUrl: './site-list.component.html',
    styleUrl: './site-list.component.scss',
})
export class SiteListComponent {
    checked: { [id: string]: boolean } = {}
    sites = SITE_MOCK_DATA
    formVisible = false

    showForm() {
        this.formVisible = true
    }

    closeForm() {
        this.formVisible = false
    }

    submitForm() {
        this.closeForm()
    }
}
