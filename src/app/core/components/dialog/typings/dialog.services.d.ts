interface IDialogServices {
    openDialogConfirmEvent: any;
    openDialogConfirm(title: string, body: string, okButtonText?:string , cancelButtonText?:string, style?: number): Promise<boolean>;
}
