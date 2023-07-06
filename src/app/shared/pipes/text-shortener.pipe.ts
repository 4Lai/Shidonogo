import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textShortener',
})
export class TextShortenerPipe implements PipeTransform {
  transform(value: string, args: number): string {
    console.log(args);
    if (value.length < args) {
      return value;
    }
    return `${value.slice(0, args)}...`;
  }
}
