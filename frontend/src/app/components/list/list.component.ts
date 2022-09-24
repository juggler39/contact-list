import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '@models/contact.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ListComponent {

  @Input() contacts: ReadonlyArray<Contact> | null = [];
  @Output() add = new EventEmitter<string>();
}
