import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { Contact } from '@models/contact.model';
import { Store } from '@ngrx/store';
import { deleteContact, loadContacts } from '@store/contacts.actions';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.scss']
})
export class DeleteContactComponent {

  @Input() contactId: string;

  constructor(private store: Store<{ contacts: Contact[] }>, public dialog: MatDialog) { }

  onRemove() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { width: '320px' });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.store.dispatch(deleteContact({ contactId: this.contactId }));
        this.store.dispatch(loadContacts());
      }
    });
  }
}
