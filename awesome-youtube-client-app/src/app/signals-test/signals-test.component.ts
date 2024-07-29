import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signals-test',
  standalone: true,
  imports: [],
  templateUrl: './signals-test.component.html',
  styleUrl: './signals-test.component.scss',
})
export class SignalsTestComponent implements OnInit {
  count = signal(0);

  ngOnInit() {
    this.count.set(3);
    console.log(`the count is: ${this.count()}`);
  }
}
