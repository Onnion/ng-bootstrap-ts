import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap-ts/ng-bootstrap-ts';

const now = new Date();

@Component({
  selector: 'ngbd-datepicker-basic',
  templateUrl: './datepicker-basic.html'
})
export class NgbdDatepickerBasic {

  model: NgbDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
}
