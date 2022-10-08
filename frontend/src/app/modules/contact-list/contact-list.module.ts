import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ContactListRoutingModule } from './contact-list-routing.module';
import { ContactsComponent } from '@components/contacts/contacts.component';
import { ContactDialogComponent } from '@components/contact-dialog/contact-dialog.component';
import { ContactTableComponent } from '@components/contact-table/contact-table.component';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { DeleteContactComponent } from '@components/delete-contact/delete-contact.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactTableComponent,
    ContactDialogComponent,
    ConfirmDialogComponent,
    DeleteContactComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    ContactListRoutingModule
  ]
})
export class ContactListModule { }
