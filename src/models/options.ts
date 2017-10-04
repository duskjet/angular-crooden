import { HttpRequest } from "@angular/common/http";

interface IOptions {

}

export interface DetailsOptions extends IOptions {
    /**
     * Function that returns ID for every row
     */
    idHandler: (row: any) => number;

    /**
     * URL schema to access specific entries. Replaces '{id}' with real ID from ID Handler
     */
    url: string;

    /**
     * HTTP method to request with (GET, POST etc.)
     */
    method: 'DELETE' | 'GET' | 'HEAD' | 'JSONP' | 'OPTIONS';
}

export interface PagingOptions extends IOptions {
    requestTransform: (request: HttpRequest<any>) => HttpRequest<any>;
}