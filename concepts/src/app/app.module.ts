import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { LoginComponent } from './components/login/login.component';
import { ParentComponent } from './components/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
