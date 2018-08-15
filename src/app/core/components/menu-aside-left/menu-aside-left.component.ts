import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { ConfigDialog } from '../dialog';

@Component({
  selector: 'app-menu-aside-left',
  templateUrl: './menu-aside-left.component.html',
  styleUrls: ['./menu-aside-left.component.scss']
})
export class MenuAsideLeftComponent implements OnInit {

  constructor(private authService: AuthService,
    @Inject(ConfigDialog.DIALOGSERVICES) private _dialogServices: IDialogServices) { }

  ngOnInit() {
  }

  logout() {
    this._dialogServices.openDialogConfirm(
      'Cerrar sesión',
      '¿Está seguro de cerrar sesión?',
      'Si',
      'Cancel',
      3).then((result: boolean) => {
          if (result) {
            this.authService.logout();
          }
      });
  }

}
