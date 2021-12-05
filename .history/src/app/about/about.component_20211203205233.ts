import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  concat,
  fromEvent,
  interval,
  noop,
  observable,
  Observable,
  of,
  timer,
  merge,
  Subject,
  BehaviorSubject,
  AsyncSubject,
  ReplaySubject,
} from "rxjs";
import { delayWhen, filter, map, take, timeout } from "rxjs/operators";
import { createHttpObservable } from "../common/util";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  // ngOnInit() {
  //   const interval$ = timer(3000, 1000);
  //   const sub = interval$.subscribe((val) => console.log("stream 1 =>" + val));
  //   setTimeout(() => {
  //     sub.unsubscribe();
  //   }, 10000);
  //   const click$ = fromEvent(document, "click");
  //   click$.subscribe(
  //     (evt) => console.log(evt),
  //     (err) => console.log(err),
  //     () => console.log("completed")
  //   );
  // }
  // ngOnInit() {
  //   document.addEventListener("click", (evt) => {
  //     console.log(evt);
  //   });
  //   let counter = 0;
  //   setInterval(() => {
  //     console.log(counter);
  //     counter++;
  //   }, 1000);
  //   setTimeout(() => {
  //     console.log("finished....");
  //   }, 3000);
  // }
  // ngOnInit() {
  //   document.addEventListener("click", (evt) => {
  //     console.log(evt);
  //     let counter = 0;
  //     setTimeout(() => {
  //       console.log("finished....");
  //       setInterval(() => {
  //         console.log(counter);
  //         counter++;
  //       }, 1000);
  //     }, 3000);
  //   });
  // }

  ngOnInit() {
    const http$ = Observable.create((observer) => {
      fetch("/api/courses")
        .then((response) => {
          return response.json();
        })
        .then((body) => {
          observer.next(body);

          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
        });
    });

    http$.subscribe((courses) => {
      console.log(courses),noop, () => console.log('completed'));
  }
}
}
