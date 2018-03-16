import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer, Subscription } from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.numberObsSubscription = myNumbers.subscribe(
      (Number:number) => {
        console.log(Number);
      }
    );

    const myObservable = Observable.create((observer:Observer<string>) => {
      setTimeout(() => {
        observer.next('first package'); 
      }, 2000);
      setTimeout(() => {
        observer.next('second package'); 
      }, 4000);
      setTimeout(() => {
        //observer.error('this does not work'); 
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package'); 
      }, 6000);
    });

    this.customObsSubscription = myObservable.subscribe(
      (data:string) => { console.log(data); },
      (error:string) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }

  ngOnDestroy() {
    this.customObsSubscription.unsubscribe();
    this.numberObsSubscription.unsubscribe();
  }
}
