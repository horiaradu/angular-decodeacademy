import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "uselessEncoder",
})
export class UselessEncoderPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    return (
      value +
      " : " +
      value
        .split("")
        .map(x => x.charCodeAt(0))
        .join(" - ")
    );
  }
}
