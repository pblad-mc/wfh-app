import {User} from './user.model';
import {Injectable} from '@angular/core';
import {ElasticsearchService} from '../elasticsearch.service';


@Injectable() // This class/component now inherents from Injectable.
export class UserService {
  private static readonly USER_INDEX = 'wfh_users';
  private static readonly USER_TYPE = 'user';
  private currentUser: User;

  constructor(private elasticsearchService: ElasticsearchService) {}

  getUsers(): Promise<any> {
    return this.elasticsearchService.getAllDocuments(UserService.USER_INDEX, UserService.USER_TYPE);
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  setCurrentUser(newUser: User) {
    this.currentUser = newUser;
  }
}
