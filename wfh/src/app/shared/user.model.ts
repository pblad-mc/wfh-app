import { Entry } from './entry.model';

export class User {
    id:number;
   name:string;
   username:string;
   password:string;
   entries : Map<string, Entry>; //mapes dates to entries
}