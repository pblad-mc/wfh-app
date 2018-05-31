import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ElasticsearchService} from '../elasticsearch.service';
import {Entry} from '../shared/entry.model';
import {AddUserComponent} from '../add-user/add-user.component';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

  private static readonly ENTRY_INDEX = 'wfh_entries';
  private static readonly MORNING_ENTRY_TYPE = 'morning_entry';

  isConnected: boolean;
  status: string;
  entry: Entry = {
    username: '',
    date: '',
    morning_didYesterday: '',
    morning_doingToday: '',
    morning_notes: '',
    evening_didToday: '',
    evening_notes: '',
  };

  constructor(private elasticsearchService: ElasticsearchService,
              private cd: ChangeDetectorRef) {
    this.isConnected = false;
    this.status = '';
  }

  ngOnInit() {
    this.elasticsearchService.isAvailable().then(() => {
      this.status = 'OK';
      this.isConnected = true;
    }, error => {
      this.status = 'ERROR';
      this.isConnected = false;
      console.error('Server is down', error);
    }).then(() => {
      this.cd.detectChanges();
    });
  }

  submitMorning() {
    this.elasticsearchService.addToIndex({
      index: AddEntryComponent.ENTRY_INDEX,
      type: AddEntryComponent.MORNING_ENTRY_TYPE,
      id: uuid(),
      body: {
        username: this.entry.username,
        date: this.entry.date,
        morning_didYesterday: this.entry.morning_didYesterday,
        morning_doingToday: this.entry.morning_notes
      }
    }).then((result) => {
      console.log(result);
      alert('Morning Entry added, see log for more info');
    }, error => {
      alert('Something went wrong, see log for more info');
      console.error(error);
    });

  }
}
