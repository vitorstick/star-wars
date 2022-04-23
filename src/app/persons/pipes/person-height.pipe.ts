import { Pipe, PipeTransform } from '@angular/core';
import { PersonHeight } from 'src/app/models/height.emum';

@Pipe({
  name: 'personHeight',
})
export class PersonHeightPipe implements PipeTransform {
  // height: > 200 (high) // 100 - 200 (normal) // < 100 (low).
  transform(value: string | undefined): PersonHeight {
    const height: number = Number(value);
    if (height > 200) {
      return PersonHeight.HIGH;
    } else if (height > 100 && height < 200) {
      return PersonHeight.NORMAL;
    }
    return PersonHeight.LOW;
  }
}
