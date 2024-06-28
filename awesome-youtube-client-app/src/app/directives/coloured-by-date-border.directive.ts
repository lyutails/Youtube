import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColouredByDateBorder]',
  standalone: true,
})
export class ColouredByDateBorderDirective {
  constructor(public elem: ElementRef) {
    this.elem.nativeElement.style.borderBottom = '10px solid oklch(0% 0 0)';
  }
}
