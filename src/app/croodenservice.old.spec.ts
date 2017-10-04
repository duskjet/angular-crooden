import { TestBed, inject } from '@angular/core/testing';

import { CroodenService } from './crooden.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpRequest, HttpClient, HttpResponse } from "@angular/common/http";

describe('CroodenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CroodenService, HttpClient],
      imports: [HttpClientTestingModule]
    });
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', inject([CroodenService], (service: CroodenService) => {
    expect(service).toBeTruthy();
  }));

  it('should use http mock', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {

    // Make an HTTP GET request, and expect that it return an object
    // of the form {name: 'Test Data'}.
    http
      .get('/data')
      .subscribe(data => expect(data['name']).toEqual('Test Data'));

    // At this point, the request is pending, and no response has been
    // sent. The next step is to expect that the request happened.
    const req = httpMock.expectOne('/data');

    // If no request with that URL was made, or if multiple requests match,
    // expectOne() would throw. However this test makes only one request to
    // this URL, so it will match and return a mock request. The mock request
    // can be used to deliver a response or make assertions against the
    // request. In this case, the test asserts that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Next, fulfill the request by transmitting a response.
    req.flush({ name: 'Test Data' });

    // Finally, assert that there are no outstanding requests.
    httpMock.verify();
  }));

  it('should return observable from http request', inject([HttpClient, HttpTestingController, CroodenService],
    (http: HttpClient, httpMock: HttpTestingController, service: CroodenService) => {

      let paramName = 'page', pageNumber = '2'

      let handler = (request: HttpRequest<any>) =>
        request.clone({ params: request.params.append(paramName, pageNumber) });

      service.usePaging({ requestTransform: handler });

      service.get(new HttpRequest('GET', '/penis')).subscribe(x => {
        expect(x).toBeDefined();
      });;

      const req = httpMock.expectOne('/penis?page=2');
      expect(req.request.method).toEqual('GET');
      req.flush({ someData: 1337 });
      httpMock.verify();

    }));

  it('should use client-side paging', inject([HttpClient, HttpTestingController, CroodenService],
    (http: HttpClient, httpMock: HttpTestingController, service: CroodenService) => {

      let paramName = 'page', pageNumber = '2'

      let handler = (request: HttpRequest<any>) =>
        request.clone({ params: request.params.append(paramName, pageNumber) });

      service.usePaging({ requestTransform: handler });

      service.get(new HttpRequest('GET', '/penis')).subscribe(x => {
        expect(x).toBeDefined();
      });;

      const req = httpMock.expectOne('/penis?page=2');
      expect(req.request.method).toEqual('GET');
      req.flush({ someData: 1337 });
      httpMock.verify();

    }));
});

describe('CroodenService Extensions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CroodenService, HttpClient],
      imports: [HttpClientTestingModule]
    });
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should render URLs for array elements');

  it('should use server-side paging', inject([HttpClient, HttpTestingController, CroodenService],
    (http: HttpClient, httpMock: HttpTestingController, service: CroodenService) => {

      let pagingOptions = {paramName: 'page', pageNumber: '2'};

      let handler = (request: HttpRequest<any>) =>
        request.clone({ params: request.params.append(pagingOptions.paramName, pagingOptions.pageNumber) });

      service.usePaging({ requestTransform: handler });
      
      service.get(new HttpRequest('GET', '/penis')).subscribe(x => {
        console.log(x);
        expect(x).toBeDefined();
      });

      const req = httpMock.expectOne('/penis?page=2');
      expect(req.request.method).toEqual('GET');
      req.flush({ someData: 1337 });

      pagingOptions.pageNumber = '5';
      service.get(new HttpRequest('GET', '/penis')).subscribe(x => {
        console.log(x);
        expect(x).toBeDefined();
      });

      const req2 = httpMock.expectOne('/penis?page=5');
      expect(req2.request.method).toEqual('GET');
      req2.flush({ someData: 1337 });

      httpMock.verify();

    }));

  it('should use client-side sorting');
  it('should use server-side sorting');
  it('should use client-side filtering');
  it('should use server-side filtering');

});