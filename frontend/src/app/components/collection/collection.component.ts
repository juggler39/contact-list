import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '@models/contact.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CollectionComponent {
  @Input() contacts: (Contact | undefined)[] | null = [];
  @Output() remove = new EventEmitter<string>();
}
