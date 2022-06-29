import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackArrowService {
  private _visible: boolean = false;
  routerLink: string | null = null;

  get visible(): boolean {
    return this._visible;
  }

  constructor() {}

  setVisible(b: boolean, routerLink: string) {
    this._visible = b;
    this.routerLink = routerLink;
  }

  hide() {
    this._visible = false;
    this.routerLink = null;
  }
}
