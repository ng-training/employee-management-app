import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlePrefix',
})
export class TitlePrefixPipe implements PipeTransform {
  transform(gender: 'male' | 'female'): string {
    return gender === 'male' ? 'Mr.' : 'Ms.';
  }
}
