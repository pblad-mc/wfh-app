import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Entry } from './shared/entry.model';

declare var file: any;

export class InMemoryEntryService implements InMemoryDbService {
    createDb() {
        let users = [
            {
                id: 1,
                name: "JJ Abrams",
                username: "jdog",
                password: "password123",
                entries: [
                    ["May 22, 2018", {
                        date:"May 22, 2018",
                        morning_didYesterday: "Fixed Bug",
                        morning_doingToday:"Build feature",
                        morning_notes:"How do I build feature?",
                        evening_didToday:"Built feature!",
                        evening_notes:"nothing"
                    }],

                    ["May 23, 2018", {
                        date:"May 23, 2018",
                        morning_didYesterday: "Played ping pong",
                        morning_doingToday:"Fix webdriver bug",
                        morning_notes:"How to write Ruby?",
                        evening_didToday:"I got stuck trying to config files!",
                        evening_notes:"SOS"
                    }],
                ]
                
            
            }
        ];
        return { users };
    }
}
