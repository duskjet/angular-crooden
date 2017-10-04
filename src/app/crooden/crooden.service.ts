import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from "@angular/common/http";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CroodenService {

  private request = new Subject<HttpRequest<any>>();

  public response: Observable<any>;

  constructor(private http: HttpClient) {
    this.request.subscribe(req => this.response = this.http.request(req))
  }

  public get<T>(request: HttpRequest<T>) {

    let observable;
    this.request.subscribe(req => observable = this.http.request(req));

    this.request.next(request);

    return observable;
  }

  public mutate(options: ICroodenOptions) {

    this.request = this.request.map(options.requestTransform) as Subject<HttpRequest<any>>;
  }

}

export interface ICroodenOptions {
  requestTransform: <T>(request: HttpRequest<T>) => HttpRequest<T>;
}
