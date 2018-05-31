import {Injectable} from '@angular/core';

import {Client} from 'elasticsearch-browser';

@Injectable()
export class ElasticsearchService {

  private client: Client;
  queryalldocs = {
    'query': {
      'match_all': {}
    }
  };

  constructor() {
    if (!this.client) {
      this.connect();
    }
  }

  private connect() {
    this.client = new Client({
      host: 'http://qaportback:9200',
      log: 'trace'
    });
  }

  createIndex(name): any {
    return this.client.indices.create(name);
  }

  isAvailable(): any {
    return this.client.ping({
      requestTimeout: Infinity,
      body: 'Its working!'
    });
  }

  addToIndex(value): any {
    return this.client.create(value);
  }

  getAllDocuments(_index, _type): any {
    return this.client.search({
      index: _index,
      type: _type,
      body: this.queryalldocs,
      filterPath: ['hits.hits._source']
    });
  }

  getExactDocumentByTwoFields(_index, _type, searchKey1, searchTerm1, searchKey2, searchTerm2): any {
    return this.client.search({
      index: _index,
      type: _type,
      filterPath: ['hits.hits._source', 'hits.total', '_scroll_id'],
      body: {
        'query': {
          'bool': {
            'must': [
              {'match': {[searchKey1]: searchTerm1}},
              {'match': {[searchKey2]: searchTerm2}}
            ]
          }
        }
      }
    });
  }
}
