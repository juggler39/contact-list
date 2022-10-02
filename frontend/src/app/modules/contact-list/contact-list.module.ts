import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ContactListRoutingModule } from './contact-list-routing.module';
import { ContactsComponent } from '@components/contacts/contacts.component';
import { ContactDialogComponent, DialogOverviewExampleDialog } from '@components/contact-dialog/contact-dialog.component';
import { ContactTableComponent } from '@components/contact-table/contact-table.component';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { DeleteContactComponent } from '@components/delete-contact/delete-contact.component';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactTableComponent,
    ContactDialogComponent,
    DialogOverviewExampleDialog,
    ConfirmDialogComponent,
    DeleteContactComponent,
  ],
  imports: [
    SharedModule,
    ContactListRoutingModule
  ]
})
export class ContactListModule { }
