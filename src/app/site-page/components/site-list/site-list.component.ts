import { Component } from '@angular/core'
import { SITE_MOCK_DATA } from 'src/app/site-page/mock-data/site-mock.data'

@Component({
    selector: 'app-site-list',
    templateUrl: './site-list.component.html',
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
