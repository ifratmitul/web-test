import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable()
export class ProductInterceptor implements HttpInterceptor{
    
    constructor(private http:HttpClient) {
        
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // this.http.get('https://api.punkapi.com/v2/beers')
        // .pipe(
        //   map( resData => {
        //     const arr = [];
        //     for(const id in resData)
        //     {
        //       if(resData.hasOwnProperty(id) && resData[id].id<= 6){
        //           arr.push(resData[id]);
        //           console.log(resData[id])
        //       }
        //     }
        //     return arr;
  
        //   })
        // )

        return next.handle(req);
    }
    


}