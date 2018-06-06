import { Component, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
    selector: 'app-datepicker',
    templateUrl: 'datepicker.component.html',
    styleUrls: ['datepicker.component.css'],
})
export class DatepickerComponent  {

    dateValue: Date;
    @Output() dateSelected = new EventEmitter<Date>();

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        this.dateValue = event.value;
        this.sendDate();
    }

    sendDate() {
        this.dateSelected.emit(this.dateValue);
    }
}
