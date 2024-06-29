import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColouredByDateBorder]',
  standalone: true,
})
export class ColouredByDateBorderDirective implements OnInit {
  today = new Date();
  @Input() appColouredByDateBorder = '';

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
      return '10px solid red';
    }
    if (timeDifference >= 30) {
      return '10px solid yellow';
    }
    if (timeDifference >= 7) {
      return '10px solid green';
    }
    return '10px solid blue';
  }

  ngOnInit(): string {
    return (this.elem.nativeElement.style.borderBottom = this.getColor());
  }
}
