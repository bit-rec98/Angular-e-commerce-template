import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, Product } from '../../types';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    /*
        *httpClient
        httpClient is a pre-existing services that can be used to make rest API calls from a specific URL
    */
    constructor(private httpClient: HttpClient) {}

    /* Methods to invoke to make API calls without calling HttpClient every single time */
    // Get
    get<T>(url: string, options: Options): Observable<T> {
        return this.httpClient.get<T>(url, options) as Observable<T>;
    }

    // Post
    post<T>(url: string, body: Product, options: Options): Observable<T> {
        return this.httpClient.post<T>(url, body, options) as Observable<T>;
    }

    // Put
    put<T>(url: string, body: Product, options: Options): Observable<T> {
        return this.httpClient.put<T>(url, body, options) as Observable<T>;
    };

    // Delete
    delete<T>(url: string, options: Options): Observable<T>{
        return this.httpClient.delete<T>(url, options) as Observable<T>;
    }

}

/*
    *<T>
    It represents a GENERIC TYPE parameters. It means that the function can handle data of any type, and the specific type will be determined when the function is called.
    E.g. The call to get<string>(url) indicates that a string response should be expected
*/

/*
    *Question mark at parameters -> ?
    It implies that the parameter can be undefined, but in this case of API calls, 'Options' cannot be undefined. Thus, it's necessary to either remove the "?" or handle possible undefined values.
*/

/*
    *Observable
    An observable is something like a promise that can be subscribe to an observable, make a HTTP request and then wait for that request to be complete so that the observable returned returns information to the client
*/

/*
    *The dependency injection system
    It requires providers:
    - A provider is a set of instructions to the dependency injection system on how to obtain a value for a specific dependency.
    - Providers tell angular how to create or deliver an instance of a service or some other dependency
*/
