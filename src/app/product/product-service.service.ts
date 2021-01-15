import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  loadedData = [];

  constructor(private http:HttpClient) { }


  getData(){
     return this.http.get('https://api.punkapi.com/v2/beers')
      .pipe(
        map( resData => {
          const arr = [];
          for(const id in resData)
          {
            //following if condition is to collect only 6 data to show in the UI as per Figma design.
            if(resData.hasOwnProperty(id) && resData[id].id<= 6){
                arr.push(resData[id]);
                
              //  console.log(resData[id])
            }
          }
          return arr;

        })
      )


  }


  

}
