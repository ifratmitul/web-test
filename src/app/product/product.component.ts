import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  products = [] 
  constructor(private productSerevice: ProductServiceService) { }

  ngOnInit(): void {
    this.CollectData();

  }

  CollectData(){

    this.productSerevice.getData();

    this.productSerevice.getData().subscribe( res =>{
      this.products = res;
      console.log(this.products);
    })


  }

}
