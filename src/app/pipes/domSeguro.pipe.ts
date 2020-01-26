import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomSegur implements PipeTransform {

  constructor(private domSanitizar: DomSanitizer) {

  }

  transform(value: string, url: string): any {
    return this.domSanitizar.bypassSecurityTrustResourceUrl(url + value)
  }

}
