import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './productInterface';
import { ProductService } from './products.service';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit,OnDestroy {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage: any;
  sub!: Subscription; // ! tells that we will assign value later

  private _listFilter ='';
  get listFilter(){
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts= this.performFilter(value);
  }
  
  products : IProduct[] = [];
  filteredProducts: IProduct[]=[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   this.sub = this.productService.getProducts().subscribe({
     next: products => {
      this.products = products
      this.filteredProducts = this.products;
      },
     error: err => this.errorMessage = err
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  performFilter(value: string): IProduct[] {
    value = value.toLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLowerCase().includes(value));
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  onRatingClicked(msg: string): void{
    this.pageTitle = 'Product List: '+msg;
  }
}