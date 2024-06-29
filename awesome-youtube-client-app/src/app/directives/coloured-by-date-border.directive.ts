import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColouredByDateBorder]',
  standalone: true,
})
export class ColouredByDateBorderDirective implements OnInit {
  today = new Date();
  @Input() appColouredByDateBorder = '';

  borderStyleParams = '10px solid ';

  constructor(public elem: ElementRef) {}

  getDifferenceInTime(dateOne: Date, dateTwo: string) {
    return Math.round(
      (dateOne.getTime() - new Date(dateTwo).getTime()) / (1000 * 3600 * 24)
    );
  }

  getColor(): string {
    const timeDifference = this.getDifferenceInTime(
      this.today,
      this.appColouredByDateBorder
    );
    if (timeDifference >= 180) {
      return `${this.borderStyleParams + 'red'}`;
    }
    if (timeDifference >= 30) {
      return `${this.borderStyleParams + 'yellow'}`;
    }
    if (timeDifference >= 7) {
      return `${this.borderStyleParams + 'green'}`;
    }
    return `${this.borderStyleParams + 'blue'}`;
  }

  ngOnInit(): string {
    return (this.elem.nativeElement.style.borderBottom = this.getColor());
  }
}
