import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ElasticsearchService} from '../elasticsearch.service';
import {Entry} from '../shared/entry.model';
import {EntryService} from '../entry.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  isConnected: boolean;
  status: string;
  entry: Entry = {
    username: '',
    date: '',
    morning_didYesterday: '',
    morning_doingToday: '',
    morning_notes: '',
    evening_didToday: '',
    evening_notes: ''
  };

  constructor(private elasticsearchService: ElasticsearchService,
              private entryService: EntryService,
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

    this.entry.date = new Date().toLocaleDateString();
  }

  submitMorning() {
    this.entryService.addNewMorningEntry(this.entry).then((result) => {
      console.log(result);
      alert('Morning Entry added, see log for more info');
    }, error => {
      alert('Something went wrong, see log for more info');
      console.error(error);
    });

  }
}
