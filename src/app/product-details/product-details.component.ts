import { Component, OnInit } from '@angular/core';
import { Product, productRepo } from "../products";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDetails?: Product;
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    // First get the product id from the current route.
    let routeParams = this.route.snapshot.paramMap;
    let productIdFromRoute = Number(routeParams.get('productId'));
    
    // Find the product that correspond with the id provided in route.
    this.productDetails = productRepo.find(p => p.id === productIdFromRoute);
  }

}