import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
    /**
     * Text to display in the body of the button
     */
    @Input() label: string = ''

    /**
     * Name of PrimeIcon to use in the button
     */
    @Input() icon: string = ''

    /**
     * Size of button
     */
    @Input() size: 'small' | 'large' | undefined = undefined

    /**
     * Determines the busy state of the button
     */
    @Input() loading: boolean = false

    /**
     * Determines whether button can be interacted with
     */
    @Input() disabled: boolean = false

    /**
     * Determines if button should have a circular border
     */
    @Input() rounded: boolean = false

    /**
     * Determines if button should have an outlined style
     */
    @Input() outlined: boolean = false

    /**
     * Notifies parent that a click event has occurred
     */
    @Output() click = new EventEmitter<void>()

    /**
     * Emits an event when a click event occurs
     */
    onClick(): void {
        this.click.emit()
    }

    ngOnInit(): void {
        this.icon = this.icon.length ? `pi pi-${this.icon.toLowerCase()}` : ''
    }
}
