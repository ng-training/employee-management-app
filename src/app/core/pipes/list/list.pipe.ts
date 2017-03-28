import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'list',
  pure: false
})
export class ListPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.join(', ');
  }
}
