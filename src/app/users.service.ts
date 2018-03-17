import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UsersService {
  userActivated:Subject<number> = new Subject();

  constructor() { }

}
