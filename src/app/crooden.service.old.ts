import { Injectable } from '@angular/core';
import { DetailsOptions, PagingOptions } from "../models/options";
import { DetailsPageMiddleWare } from "../models/middleware/details.middleware";
import { HttpClient, HttpRequest, HttpParams, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { ReplaySubject } from 'rxjs/ReplaySubject'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export type MapFunction = <T>(item: T) => T;

@Injectable()
export class CroodenService {

  public requestSubject: Subject<HttpRequest<any>> = new Subject<HttpRequest<any>>(); // BehaviorSubject<HttpRequest<any>>

  protected pipe: (<T>(list: T) => T[])[];

  constructor(
    private http: HttpClient
  ) {
  }

  
  public get<T>(request: HttpRequest<T>, idMap?: MapFunction): Observable<HttpResponse<T>> {
    this.requestSubject.subscribe((request: HttpRequest<any>) => {
      httpRequest = this.http.request(request);

      // map IDs for each entity
      if (idMap != null) {
        httpRequest = httpRequest.map(idMap);
      }
    });

    let httpRequest: Observable<HttpResponse<T>>;
    this.requestSubject.next(request);

    return httpRequest;
  }

  public getOne<T>(request: HttpRequest<T>): Observable<HttpResponse<T>> {
    return this.http.request(request);
  }

}

// export interface CroodenService {
//   useDetailsPage: (this: CroodenService, options: DetailsOptions) => CroodenService;
//   //usePaging: (this: CroodenService, parameter: string | ((request: HttpRequest<any>) => HttpRequest<any>), options?: PagingOptions) => CroodenService;
//   //usePaging: (this: CroodenService, options: PagingOptions) => CroodenService;
//   usePaging: (this: CroodenService, options: PagingOptions) => CroodenService;
// }

CroodenService.prototype.useDetailsPage = function (this: CroodenService, options: DetailsOptions): CroodenService {

  return this;
}

CroodenService.prototype.usePaging = function (this: CroodenService, parameter: string): CroodenService {

  this.middlewares['paging'] = new PagingMiddleware();

  this.requestSubject = <Subject<HttpRequest<any>>>this.requestSubject.map((request: HttpRequest<any>) =>
        request.clone({ params: request.params.append(parameter, pagingOptions.pageNumber) }));

  return this;
}

CroodenService.prototype.usePaging = function (this: CroodenService, options: PagingOptions): CroodenService {

  this.requestSubject = <Subject<HttpRequest<any>>>this.requestSubject.map(options.requestTransform);

  return this;
}

class PagingMiddleware {
  public currentPage: number = 0;
  public rows: number = 
}
