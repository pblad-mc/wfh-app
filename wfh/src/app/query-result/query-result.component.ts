import { Component, EventEmitter, Input, ViewChild, OnInit } from '@angular/core'; //EventEmitter sends data between two components
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';

@Component({
    selector: 'query-result',
    templateUrl: 'query-result.component.html',
    styleUrls: ['query-result.component.css']
})

export class QueryResultComponent implements OnInit {
    @Input() user: User
    @Input() date: string

    ngOnInit() 
    {  

    }
}