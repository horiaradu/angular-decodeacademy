import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnotherOneComponent } from "./another-one/another-one.component";
import { FancyDirectivesComponent } from "./fancy-directives/fancy-directives.component";
import { HighlighterDirective } from './highlighter.directive';
import { UselessEncoderPipe } from './useless-encoder.pipe';
import { IsEvenPipe } from './is-even.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [AnotherOneComponent, FancyDirectivesComponent, HighlighterDirective, UselessEncoderPipe, IsEvenPipe],
  exports: [AnotherOneComponent],
})
export class Week2Module {}
