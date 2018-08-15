import { Injectable, EventEmitter, Inject } from '@angular/core';
import { ConfirmDialogComponent } from './confirm.component';
import { DialogConfirmModel, ConfigDialog } from './confirm.model';

@Injectable()
export class DialogServices implements IDialogServices {

    public openDialogConfirmEvent = new EventEmitter();

    constructor(@Inject(ConfigDialog.DIALOGPROMISESERVICES) private _dialogPromiseServices: IDialogPromiseServices
    ) {
    }

    public openDialogConfirm(title: string, body: string, okButtonText: string = 'Ok',
        cancelButtonText: string = 'Cancel', style: number = 1): Promise<boolean> {
        const dialogModel: DialogConfirmModel = new DialogConfirmModel;
        dialogModel.title = title;
        dialogModel.body = body;
        dialogModel.okButtonText = okButtonText;
        dialogModel.cancelButtonText = cancelButtonText;
        dialogModel.style = style;
        this.openDialogConfirmEvent.emit(dialogModel);
        return this._dialogPromiseServices.initializePromise().promise;
    }
}
