import { Component } from "@angular/core";
import { LoggerService } from "./week3/logger.service";
import { FancyLoggerService } from "./week3/fancy-logger.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "my app";
  closed = false;

  constructor(private loggerService: LoggerService, private fancyLogger: FancyLoggerService) {
    loggerService.debug("foobar");
    fancyLogger.debug("foobar");
  }
}
