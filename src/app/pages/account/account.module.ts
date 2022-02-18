import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account/my-account.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { AddressEditorComponent } from './address-editor/address-editor.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [MyAccountComponent, ProfileComponent, ProfileEditorComponent, AddressesComponent, AddAddressComponent, AddressEditorComponent, OrderComponent],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
