import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { RegisterComponent } from "./register/register.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent
  ],
  imports: [CommonModule, NgbNavModule, RouterModule],
  exports: [HomeComponent]
})
export class HomeModule {}
