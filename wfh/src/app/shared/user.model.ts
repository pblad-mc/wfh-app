import { Entry } from './entry.model';

export class User {
   name:string;
   username:string;
   password:string;
   entries : Entry[]; 
}