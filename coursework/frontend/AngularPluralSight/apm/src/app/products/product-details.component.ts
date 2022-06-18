import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './productInterface';
import { ProductsComponent } from './products.component';
import { ProductService } from './products.service';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product : IProduct | undefined;
  productId : number = 0;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.productService.getProducts().subscribe({
      next: products => products.forEach(product => {
        if(product.productId === this.productId)  this.product= product;
      })
    })
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

}
