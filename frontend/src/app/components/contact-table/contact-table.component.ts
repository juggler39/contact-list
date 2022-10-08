import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
export class ContactTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];
  private dataSource = new MatTableDataSource<Contact>();
  dataSource$: Observable<any>;

  @Input() contacts$: Observable<Contact[]>;
  @Output() onEdit = new EventEmitter<Contact>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

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

  }

  sortData(data: any) {
    data.sort = this.sort;
  }
}
