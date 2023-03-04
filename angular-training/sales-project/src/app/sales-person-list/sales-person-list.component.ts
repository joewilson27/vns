import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects, using sales-person type
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Aaron", "King", "aaron.king@gmail.com", 50000),
    new SalesPerson("John", "Doe", "john.doe@gmail.com", 40000),
    new SalesPerson("Claire", "Murphy", "claire.murphy@gmail.com", 90000),
    new SalesPerson("Herman", "Lennon", "herman.lennon@gmail.com", 60000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
