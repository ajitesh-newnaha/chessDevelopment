import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetJsonService {
    private jsonFileURL = 'assets/links.json';
    constructor(private http: Http) { }

    getLinksFromJson(): Observable<any> {
        return this.http.get(this.jsonFileURL).map((response: Response) => {
            return <any> response.json();
        }).catch(this.handleError);
    }

    private handleError(errorResponse: Response) {
        console.log(errorResponse.statusText);
        return Observable.throw(
            errorResponse.json().error || 'Server error'
        );
    }
}
