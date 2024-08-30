import { Component, Input } from '@angular/core'
import { Site } from 'src/app/models/site/site.factory'

@Component({
    selector: 'app-site',
    templateUrl: './site.component.html',
    styleUrl: './site.component.scss',
})
export class SiteComponent {
    /**
     * State of checkbox
     */
    @Input() checked: boolean = false

    /**
     * The Site object to be displayed by the component
     */
    @Input({ required: true }) site: Site = new Site(
        'dummy',
        'https://dummy.com'
    )
}
