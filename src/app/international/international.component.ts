import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-international",
  templateUrl: "./international.component.html",
  styleUrls: ["./international.component.css"],
})
export class InternationalComponent {
  translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
    translate.setDefaultLang("en");
  }

  switchLanguage = (lang: string) => {
    // <-- creating a new method
    this.translate.use(lang); // <-- invoking `use()`
  };
}
