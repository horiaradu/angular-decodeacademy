import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { Week2Module } from "./week2/week2.module";
import { Week3Module } from "./week3/week3.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HelloWorldComponent],
  imports: [BrowserModule, NgbModule.forRoot(), Week2Module, Week3Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
