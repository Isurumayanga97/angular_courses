import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'testcustompipe'
})
export class TestcustompipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value * 100;
  }

}
