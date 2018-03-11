import {Component} from '@angular/core';
import {NgbTimepickerConfig} from '@ng-bootstrap-ts/ng-bootstrap-ts';
import {NgbTimeStruct} from '@ng-bootstrap-ts/ng-bootstrap-ts';

@Component({
  selector: 'ngbd-timepicker-config',
  templateUrl: './timepicker-config.html',
  providers: [NgbTimepickerConfig] // add NgbTimepickerConfig to the component providers
})
export class NgbdTimepickerConfig {
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};

  constructor(config: NgbTimepickerConfig) {
    // customize default values of ratings used by this component tree
    config.seconds = true;
    config.spinners = false;
  }
}
