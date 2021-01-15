import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';



@Injectable()
export class ProductInterceptor implements HttpInterceptor{
    
    
    constructor(private http:HttpClient) {
        
    }

    /**/
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log(req.url);

        return next.handle(req)
        .pipe(
            tap ( event =>{

                if(event.type === HttpEventType.Response ){
                    const arr = [];                    
                    for(const id in event.body)
                    {
                      if(event.body.hasOwnProperty(id) && event.body[id].id<= 6){
                          arr.push(event.body[id]);

                      }
                    }
                    // console.log("hell")

                    console.log(arr);
                    
                    return arr;                    
                }

            })

        )
        
        }

}

