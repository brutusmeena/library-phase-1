import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routing.module";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { UserService } from "./user.service";

const appRoutes: Routes = [
  { path: "home", component: AppComponent },
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    RegistrationComponent
  ],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {}
