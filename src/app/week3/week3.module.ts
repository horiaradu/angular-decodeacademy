import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoggerService } from "./logger.service";
import { FancyLoggerService } from "./fancy-logger.service";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [LoggerService, { provide: FancyLoggerService, useFactory: () => new FancyLoggerService("alt club") }],
  exports: [],
})
export class Week3Module {}
