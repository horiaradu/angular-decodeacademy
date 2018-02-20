import { Injectable } from "@angular/core";

@Injectable()
export class FancyLoggerService {
  constructor(private prefix: string) {}

  debug(x: string) {
    console.log(`${this.prefix}: ${x}`);
  }
}
