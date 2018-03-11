import {Component} from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap-ts/ng-bootstrap-ts';

@Component({
  selector: 'ngbd-timepicker-seconds',
  templateUrl: './timepicker-seconds.html'
})
export class NgbdTimepickerSeconds {
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;

  toggleSeconds() {
    this.seconds = !this.seconds;
  }
}
