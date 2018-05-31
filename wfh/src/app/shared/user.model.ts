import { Entry } from './entry.model';

export class User {
   firstName: string;
   lastName: string;
   username: string;
   password: string;
   entries: Entry[]; // maps dates to entries
}
