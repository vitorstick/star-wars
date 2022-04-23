import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starshipLength',
})
export class StarshipLengthPipe implements PipeTransform {
  // length: > 1000 (large) // 100 - 1000 (normal) // < 100 (small).
  transform(value: string | undefined): string {
    const height: number = Number(value);
    if (height > 1000) {
      return 'large';
    } else if (height > 100 && height < 1000) {
      return 'normal';
    }
    return 'small';
  }
}
