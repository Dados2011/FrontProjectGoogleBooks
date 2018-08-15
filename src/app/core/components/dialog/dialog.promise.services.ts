import { Injectable } from '@angular/core';

export class PromiseCompleter<R> {
  promise: Promise<R>;
  resolve: (value?: R|PromiseLike<R>) => void;
  reject: (error?: any, stackTrace?: string) => void;

  constructor() {
    this.promise = new Promise((res, rej) => {
      this.resolve = res;
      this.reject = rej;
    });
  }
}

@Injectable()
export class DialogPromiseServices implements IDialogPromiseServices {
    private _resultDeferred: PromiseCompleter<any>;
    public initializePromise(): any {
        this._resultDeferred = new PromiseCompleter<any>();
        return this._resultDeferred;
    }
    public resolveDialog(result: any): void {
        this._resultDeferred.resolve(result);
    }
}
