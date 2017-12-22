import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { InputNumbersOnlyDirective } from './input-numbers-only.directive';
import { IsAdminDirective } from './is-admin.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    InputNumbersOnlyDirective,
    IsAdminDirective
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
