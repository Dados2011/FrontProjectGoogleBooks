import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    EventEmitter,
    Inject
    } from '@angular/core';
import { DialogConfirmModel, ConfigDialog } from './confirm.model';

@Component({
  selector: 'app-bz-confirm-dialog',
  templateUrl: 'confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmDialogComponent {
    public showModal = false;
    public params: DialogConfirmModel;

    constructor(@Inject(ConfigDialog.DIALOGSERVICES) private _dialogServices: IDialogServices,
                @Inject(ConfigDialog.DIALOGPROMISESERVICES) private _dialogPromiseServices: IDialogPromiseServices) {
        this.params = new DialogConfirmModel();
        this._dialogServices.openDialogConfirmEvent.subscribe(this.showDialog.bind(this));
    }

    public getStyle() {
        return `be-dialog-style-${this.params.style}`;
    }

    public onOk(): void {
        this.showModal = false;
        this._dialogPromiseServices.resolveDialog(true);
    }

    public onCloseModal(): void {
        this.showModal = false;
        this._dialogPromiseServices.resolveDialog(false);
    }

    private showDialog(params: DialogConfirmModel): void {
        this.params = params;
        this.showModal = true;
    }

}
