import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "isEven",
})
export class IsEvenPipe implements PipeTransform {
  transform(value: number[], args?: any): any {
    return value.filter(x => x % 2 === 0);
  }
}
