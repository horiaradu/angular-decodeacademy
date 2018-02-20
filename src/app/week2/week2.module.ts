import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnotherOneComponent } from "./another-one/another-one.component";

@NgModule({
  imports: [CommonModule],
  declarations: [AnotherOneComponent],
  exports: [AnotherOneComponent],
})
export class Week2Module {}
