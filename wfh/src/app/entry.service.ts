import { Injectable } from '@angular/core';
import {ElasticsearchService} from './elasticsearch.service';
import { v4 as uuid } from 'uuid';
import {Entry} from './shared/entry.model';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private static readonly ENTRY_INDEX = 'wfh_entries';
  private static readonly MORNING_ENTRY_TYPE = 'entry';
  private static readonly USERNAME = 'username';
  private static readonly DATE = 'date';

  constructor(private elasticsearchService: ElasticsearchService) { }

  addNewMorningEntry(entry: Entry): Promise<any> {
    return this.elasticsearchService.addToIndex({
      index: EntryService.ENTRY_INDEX,
      type: EntryService.MORNING_ENTRY_TYPE,
      id: uuid(),
      body: {
        username: entry.username,
        date: entry.date,
        morning_didYesterday: entry.morning_didYesterday,
        morning_doingToday: entry.morning_notes
      }
    });
  }

  getEntryByDateAndUsername(date: string, username: string): Promise<any> {
    return this.elasticsearchService.getExactDocumentByTwoFields(
      EntryService.ENTRY_INDEX,
      EntryService.MORNING_ENTRY_TYPE,
      EntryService.USERNAME,
      username,
      EntryService.DATE,
      date);
  }
}
