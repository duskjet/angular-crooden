import { Component } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs/Observable";
// import "rxjs/add/operator/mergeMap";
// import "rxjs/add/operator/take";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    // let photos;
    // var kek = http.get('https://jsonplaceholder.typicode.com/photos').mergeMap((response: any) => response).take(5).subscribe(x => console.log(x));
    // // export declare function take<T>(this: Observable<T>, count: number): Observable<T>;

    // var beb = http.get('https://httpbin.org/get')
    // .toPromise();

    // beb.then(response => console.log(response)).catch(response => console.log(response));
    

  }
  title = 'app';
}
