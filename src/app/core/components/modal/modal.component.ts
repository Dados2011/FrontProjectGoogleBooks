import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    EventEmitter,
    Input,
    Output
    } from '@angular/core';

@Component({
  selector: 'app-bz-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BzModalComponent {
    @Input() showModal: boolean;
    @Output() cancel: EventEmitter<void>;

    constructor() {
        this.cancel = new EventEmitter<void>();
    }

    onCancel() {
        this.cancel.emit();
    }
}
