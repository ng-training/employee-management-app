import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padLeft'
})
export class PadLeftPipe implements PipeTransform {
  transform(value: string, targetLength: number, padString: string): string {
    return value.padStart(targetLength, padString);
  }
}
