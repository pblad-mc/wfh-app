import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


/** @title Basic datepicker */
@Component({
    selector: 'datepicker',
    templateUrl: 'datepicker.component.html',
    styleUrls: ['datepicker.component.css'],
})
export class DatepickerComponent implements OnInit {

    dateValue:Date;

    planModel: any = {start_time: new Date() };


    ngOnInit()
    {
        this.planModel.start_time = new Date(); // Current Date

    }

    @Output() dateSelected = new EventEmitter<Date>();

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        this.dateValue = event.value;
        this.sendDate()
    }


    sendDate()
    {
        this.dateSelected.emit(this.dateValue);
    }
}