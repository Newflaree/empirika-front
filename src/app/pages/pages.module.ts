import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeersComponent } from './beers/beers.component';
import { BeerComponent } from './beer/beer.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [BeersComponent, BeerComponent, SuccessComponent, ErrorComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
