import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(value: any, args1: any): any {
    return value + 123 + args1;
  } 

}
