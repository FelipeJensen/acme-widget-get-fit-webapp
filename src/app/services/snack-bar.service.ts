import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  private _snackBarRef: MatSnackBarRef<TextOnlySnackBar> | undefined;

  constructor(private _snackBar: MatSnackBar) {}

  open(message: string, dismissable: boolean = false) {
    this._snackBarRef = this._snackBar.open(
      message,
      dismissable ? 'Dismiss' : undefined,
      {
        duration: 7000,
      }
    );
  }

  close(): void {
    this._snackBarRef?.dismiss();
  }
}
