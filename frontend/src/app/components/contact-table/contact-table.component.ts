import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Contact } from '@models/contact.model';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactTableComponent implements OnInit, AfterViewInit, OnChanges {

  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource<Contact>();
  dataSource$: Observable<any>;

  @Input() contacts$: Observable<Contact[]>;
  @Input() searchQuery: string;
  @Output() onEdit = new EventEmitter<Contact>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource$ =
      this.contacts$.pipe(
        map(contacts => {
          const dataSource = this.dataSource;
          dataSource.data = contacts;
          return dataSource;
        }));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'name':
        case 'email':
          return item[property].trim().toLowerCase();
        case 'phone':
          return item[property].toString().trim().toLowerCase();
        default:
          return '';
      }
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource.filter = changes['searchQuery'].currentValue.trim().toLowerCase();
  }

  sortData(data: MatTableDataSource<Contact>) {
    data.sort = this.sort;
  }
}
