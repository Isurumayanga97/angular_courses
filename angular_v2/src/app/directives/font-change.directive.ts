import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appFontChange]'
})
export class FontChangeDirective {

  constructor(private ef: ElementRef) {
    this.ef.nativeElement.style.color = "red";
  }

}
