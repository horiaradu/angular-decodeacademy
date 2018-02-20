import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {
  constructor() {}

  debug(x: string) {
    console.log(x);
  }
}
