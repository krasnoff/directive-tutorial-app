import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { InputNumbersOnlyDirective } from './input-numbers-only.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    InputNumbersOnlyDirective
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
