import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ElasticsearchService } from '../elasticsearch.service';

@Component({
  selector: 'app-test-es',
  templateUrl: './test-es.component.html',
  styleUrls: ['./test-es.component.css']
})
export class TestEsComponent implements OnInit {

  isConnected = false;

  form: FormGroup;
  status: string;

  constructor(private fbuilder: FormBuilder, private es: ElasticsearchService, private cd: ChangeDetectorRef) {
    this.isConnected = false;

    this.form = fbuilder.group({
      index: '',
    });
  }

  ngOnInit() {
    this.es.isAvailable().then(() => {
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

  onSubmit(value) {

    this.es.createIndex({ index: value.index }).then(
      result => {
        console.log(result);
        alert('Index added, see log for more info');
      }, error => {
        alert('Something went wrong, see log for more info');
        console.error(error);
      }
    );
  }
}
