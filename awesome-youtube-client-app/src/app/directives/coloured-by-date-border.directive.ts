import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColouredByDateBorder]',
  standalone: true,
})
export class ColouredByDateBorderDirective implements OnInit {
  today = new Date();
  @Input() appColouredByDateBorder = '';

  ngOnInit(): void {
    if (
      this.today.getMonth() -
        new Date(this.appColouredByDateBorder).getMonth() ===
      0
    ) {
      console.log('lalala1');
      console.log(this.appColouredByDateBorder);
      this.elem.nativeElement.style.borderBottom = '10px solid red';
    } else {
      console.log('lalala');
      console.log(this.appColouredByDateBorder);
      this.elem.nativeElement.style.borderBottom = '10px solid green';
    }
  }

  /* const redBorderSixMonthsAgo = new Date().setMonth(
    new Date().getMonth() - 6
  );

  const yellowBorderOneMonthAgo = new Date().setMonth(
    new Date().getMonth() - 1
  ); */

  /* const greenBorderSevenDaysToOneMonthAgo = new Date().setMonth(
    new Date().getMonth()
  );

  const blueBorderIfNewerThanSevenDays = new Date().setMonth(
    new Date().getMonth() - 6
  ); */

  /* const check =
    (this.today.getFullYear() -
      new Date('2024-06-11T12:42:19.000Z').getFullYear()) *
    12; */

  /* console.log(this.responseCards.map(item => item.snippet.publishedAt));
  console.log(this.today);
  console.log(new Date('2024-06-11T12:42:19.000Z'));
  console.log(
    (this.today.getFullYear() -
      new Date('2018-12-01T15:00:05.000Z').getFullYear()) *
      12
  );
  console.log(this.today.getFullYear());
  console.log(this.today.getMonth());
  console.log(new Date('2024-05-30T17:46:58.000Z').getMonth()); */

  /* this.responseCards.map(item => {
    if (
      this.today.getMonth() -
        new Date(item.snippet.publishedAt).getMonth() ===
      0
    ) {
      console.log('lalala1');
      this.elem.nativeElement.style.borderBottom = '10px solid green';
    }
    else {
      console.log('lalala');
      this.elem.nativeElement.style.borderBottom = '10px solid red';
    }
  }); */

  constructor(public elem: ElementRef) {
  }
}
