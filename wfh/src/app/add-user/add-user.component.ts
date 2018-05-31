import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ElasticsearchService} from '../elasticsearch.service';
import {User} from '../shared/user.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  private static readonly USER_INDEX = 'wfh_users';
  private static readonly USER_TYPE = 'user';
  private static readonly DEFAULT_PASSWORD = 'password';
  isConnected: boolean;

  form: FormGroup;
  status: string;
  model: any = {
    id: '',
    firstName: '',
    lastName: '',
    username: ''
  };

  constructor(private fbuilder: FormBuilder, private es: ElasticsearchService, private cd: ChangeDetectorRef) {
    this.isConnected = false;

    this.form = fbuilder.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      username: ['']
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

    // this.addCurrentUsers();
  }

  addCurrentUsers() {
    const currentUsers = this.getLabsUsers();
    for(const user of currentUsers) {
      this.onSubmit(user);
    }
  }

  onSubmit(value) {

    this.es.addToIndex({
      index: AddUserComponent.USER_INDEX,
      type: AddUserComponent.USER_TYPE,
      id: uuid(),
      body: {
        firstName: value.firstName,
        lastName: value.lastName,
        username: value.username,
        password: AddUserComponent.DEFAULT_PASSWORD
      }
    }).then((result) => {
      console.log(result);
      alert('User added, see log for more info');
    }, error => {
      alert('Something went wrong, see log for more info');
      console.error(error);
    });
  }

  getLabsUsers(): User[] {
    return [
      // {
      //   username: 'abutler',
      //   firstName: 'Alex',
      //   lastName: 'Butler',
      //   password: '',
      //   entries: []
      // },
      // {
      //   username: 'ahansen',
      //   firstName: 'Angela',
      //   lastName: 'Hansen',
      //   password: '',
      //   entries: []
      // },
      // {
      //   username: 'ahenderson',
      //   firstName: 'Alan',
      //   lastName: 'Henderson',
      //   password: '',
      //   entries: []
      // },
      // {
      //   username: 'ajburrell',
      //   firstName: 'Aaron',
      //   lastName: 'Burrell',
      //   password: '',
      //   entries: []
      // },
      // {
      //   username: 'amieu',
      //   firstName: 'Alan',
      //   lastName: 'Mieu',
      //   password: '',
      //   entries: []
      // },
      // {
      //   username: 'apeck',
      //   firstName: 'Aaron',
      //   lastName: 'Peck',
      //   password: '',
      //   entries: []
      // }
      // },
      // {
      //   username: 'asybrowsky',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'atribe',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'awang',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'awelch',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'awilliams',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'bashdown',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'bballamis',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'bbricker',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'bcarter',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'bcreno',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'bcurran',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'bhill',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'bmeatcher',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'bnaugle',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'brosequist',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'BWillis',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'cchadwick',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'cchechang',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'cgibbons',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'choward',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'clake',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'cli',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'clitnak',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'CLynch',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'cmckay',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'cmealy',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'cmilito',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'cmunoz',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'cspackman',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'csteele',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'dabendroth',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'dbarley',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'dbitter',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'dcramer',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'ddenkers',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'ddixon',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'dfrench',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'dhackett',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'dhunter',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'djohansen',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'dlatimer',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'dmartin',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'dmatheson',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'dribble',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'dtsmith',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'dwillis',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'ebertola',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'eeilander',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'epungor',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'esmith',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'ewright',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jbeckstead',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jbeckstrand',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jbradshaw',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jbrooks',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jhansen',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jharmston',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jjacobson',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jjames',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jjashinsky',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jjohnson',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jlebaron',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jondrusek',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jpeck',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jportsmouth',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jvanwagenen',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jwallace',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'jwood',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'kballard',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'kbreiwick',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'kcarter',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'kdalfonso',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'kjeffs',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'kmassman',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'kmcgee',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'ksanchez',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'kschuelke',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'lfracasso',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'lgreen',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'lhirning',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'ljacobson',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'lkerby',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'mallen',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'marmstrong',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'mbray',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'melder',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'MGarcia',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'mheuer',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'mhumphries',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'mlove',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'mlowe',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'mmerritts',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'mpierce',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'mroyer',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'myap',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'nbridges',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'npammi',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'npitts',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'owolf',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'pblad',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'pserrao',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'pwilhelm',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'rarroliga',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'rautry',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'rbeckstrand',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'rcanady',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'rcastro',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'rhungund',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'rjfenton',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'rjones',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'rortega',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'rrawlings',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'rschultz',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'rthomas',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'sbassett',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'sdickey',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'shong',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'smerrill',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'smithd',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'ssummers',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'stran',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'tbrotherton',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'tcazier',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'tdavis',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'tebr',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'tgibson',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'tha',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'Tholbrook',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'tkushner',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'tlsmith',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'truiz',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'tsmith',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'ttateyama',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // },
      // {
      //   username: 'wwesterfeld',
      //   firstName: '',
      //   lastName: '',
      //   entries: []
      // }
    ];
  }
}
