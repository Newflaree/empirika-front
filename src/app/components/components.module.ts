import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { OldModalComponent } from './old-modal/old-modal.component';



@NgModule({
  declarations: [ShoppingCartComponent, SocialNetworksComponent, OldModalComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
