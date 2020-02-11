import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  time = 15;

  constructor() { }

  ngOnInit() {

}
startCountdown() {
      let interval = setInterval(() => {
      this.time--;

      if (this.time <= 0 ) {
        clearInterval(interval);
        console.log('Au tour du suivant, dommage pour toi')
      }
    }, 1000);
  }
}
