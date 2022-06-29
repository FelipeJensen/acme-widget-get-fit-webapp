import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BackArrowService } from './services/back-arrow/back-arrow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public _backArrowService: BackArrowService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._router.events.subscribe((nav) => {
      if (nav instanceof NavigationEnd) {
        if (nav.url != '/') {
          this._backArrowService.setVisible(true, '/');
        } else if (nav.url == '/') {
          this._backArrowService.hide();
        }
      }
    });
  }
}
