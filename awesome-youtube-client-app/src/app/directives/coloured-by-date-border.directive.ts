import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColouredByDateBorder]',
  standalone: true,
})
export class ColouredByDateBorderDirective implements OnInit {
  today = new Date();
  @Input() appColouredByDateBorder = '';

  borderStyleParams = '10px solid ';
  colourForMoreThanSixMonths = 'red';
  colourForMoreThanThirtyDays = 'yellow';
  colourForMoreThanSevenDays = 'green';
  colourForLessThanSevenDays = 'blue';

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
      return `${this.borderStyleParams + this.colourForMoreThanSixMonths}`;
    }
    if (timeDifference >= 30) {
      return `${this.borderStyleParams + this.colourForMoreThanThirtyDays}`;
    }
    if (timeDifference >= 7) {
      return `${this.borderStyleParams + this.colourForMoreThanSevenDays}`;
    }
    return `${this.borderStyleParams + this.colourForLessThanSevenDays}`;
  }

  ngOnInit(): string {
    return (this.elem.nativeElement.style.borderBottom = this.getColor());
  }
}
