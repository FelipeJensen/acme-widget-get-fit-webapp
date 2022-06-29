import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivitySignUpComponent } from './activity-sign-up/activity-sign-up.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiErrorsComponent } from './components/api-errors/api-errors.component';
import { ActivitySignUpListComponent } from './activity-sign-up-list/activity-sign-up-list.component';
import { ActivitySignUpListSearchComponent } from './activity-sign-up-list/activity-sign-up-list-search/activity-sign-up-list-search.component';
import { ActivitySignUpDetailDialogComponent } from './activity-sign-up-list/activity-sign-up-detail-dialog/activity-sign-up-detail-dialog.component';

// TODO: Move to module exporter
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivitySignUpComponent,
    ApiErrorsComponent,
    ActivitySignUpListComponent,
    ActivitySignUpListSearchComponent,
    ActivitySignUpDetailDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatListModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
