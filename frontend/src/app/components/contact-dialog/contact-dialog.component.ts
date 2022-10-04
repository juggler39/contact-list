import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactDialog } from '@models/contact-dialog.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<ContactDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ContactDialog) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.data.contact?.name ?? '', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(this.data.contact?.email ?? ''),
      phone: new FormControl(this.data.contact?.phone ?? '', Validators.pattern('[- +()0-9]+'))
    });

  }

  onSave() {

    this.dialogRef.close({
      name: this.form.value['name'],
      email: this.form.value['email'],
      phone: this.form.value['phone'],
    });
  }
}
