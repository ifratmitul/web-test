import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

import { ProductServiceService } from './product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  products = [] 
  modalData ={name:'', details:''};
  constructor(private productSerevice: ProductServiceService) { }
  open = false;

  ngOnInit(): void {
    this.CollectData();

  }
  forModal(pname:string, pdetails:string){

    this.open = !this.open;
    this.modalData.name = pname;
    this.modalData.details = pdetails;
    //console.log(this.modalData.name);
    //console.log(this.details);

  }

  closeModal(){
    this.open = !this.open;

  }





  CollectData(){

    // this.productSerevice.getData();

    this.productSerevice.getData()
    
    .subscribe( 
      res =>{
      this.products = res;
      console.log(this.products);
        },
    err =>{
      console.log(err);
    
    }
    )


  }

}
