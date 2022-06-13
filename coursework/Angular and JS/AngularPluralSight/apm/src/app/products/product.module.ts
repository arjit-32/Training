import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';
import { StarComponent } from '../shared/star.component';
import { convertToSpacesPipe } from '../shared/convertToSpace.pipe';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent},
      { 
        path: 'products/:id', 
        canActivate: [ProductDetailsGuard],
        component: ProductDetailsComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
