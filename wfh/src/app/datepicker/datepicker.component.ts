import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


/** @title Basic datepicker */
@Component({
    selector: 'datepicker',
    templateUrl: 'datepicker.component.html',
    styleUrls: ['datepicker.component.css'],
})
export class DatepickerComponent {

    events: string[] = [];

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        console.log( "A date was selected: ", event.value)
        this.events.push(`${type}: ${event.value}`);
    }
}