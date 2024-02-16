import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:productId', component: ProductDetailComponent},
  {path: 'contact', component: ContactsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
