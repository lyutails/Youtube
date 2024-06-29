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

  ngOnInit(): void {
    if (
      this.getDifferenceInTime(this.today, this.appColouredByDateBorder) >= 180
    ) {
      this.elem.nativeElement.style.borderBottom = '10px solid red';
    }
    if (
      this.getDifferenceInTime(this.today, this.appColouredByDateBorder) >= 30 &&
      this.getDifferenceInTime(this.today, this.appColouredByDateBorder) <= 179
    ) {
      this.elem.nativeElement.style.borderBottom = '10px solid yellow';
    }
    if (
      this.getDifferenceInTime(this.today, this.appColouredByDateBorder) >= 7 &&
      this.getDifferenceInTime(this.today, this.appColouredByDateBorder) <= 29
    ) {
      this.elem.nativeElement.style.borderBottom = '10px solid green';
    }
    if (
      this.getDifferenceInTime(this.today, this.appColouredByDateBorder) > 0 &&
      this.getDifferenceInTime(this.today, this.appColouredByDateBorder) <=
        6
    ) {
      this.elem.nativeElement.style.borderBottom = '10px solid blue';
    }
  }
}
