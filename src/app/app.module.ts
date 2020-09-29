import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page.component";
import { SidebarComponent } from "./sidebar.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, LandingPageComponent, SidebarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
