import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { RegisterComponent } from "./register/register.component";
import { RouterModule } from "@angular/router";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { ProductServicesIntroSectionComponent } from "./product-services-intro-section/product-services-intro-section.component";

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    HeroSectionComponent,
    ProductServicesIntroSectionComponent
  ],
  imports: [CommonModule, NgbNavModule, RouterModule],
  exports: [HomeComponent]
})
export class HomeModule {}
