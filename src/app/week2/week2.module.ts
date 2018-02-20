import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnotherOneComponent } from "./another-one/another-one.component";
import { FancyDirectivesComponent } from "./fancy-directives/fancy-directives.component";

@NgModule({
  imports: [CommonModule],
  declarations: [AnotherOneComponent, FancyDirectivesComponent],
  exports: [AnotherOneComponent],
})
export class Week2Module {}
