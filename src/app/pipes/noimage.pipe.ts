import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images) {
      return 'https://www.freeiconspng.com/uploads/no-image-icon-11.PNG'
    }
    if (images.length > 0) {
      return images[0].url
    } else {
      return 'https://www.freeiconspng.com/uploads/no-image-icon-11.PNG'
    }

  }

}
