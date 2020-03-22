import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  foundDate: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', foundDate: new Date()},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', foundDate: new Date()},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grid-autocomplete';
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'foundDate'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
