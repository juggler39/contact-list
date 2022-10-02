import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ContactListRoutingModule } from './contact-list-routing.module';
import { ContactsComponent } from '@components/contacts/contacts.component';


@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    SharedModule,
    ContactListRoutingModule
  ]
})
export class ContactListModule { }
