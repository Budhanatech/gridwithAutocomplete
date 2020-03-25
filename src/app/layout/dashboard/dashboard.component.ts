import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  places: Array<any> = [];
  orderForm: FormGroup;
  items: FormArray;
  myFormArray:FormArray;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      eCode: '',
      eDate: '',
      eCate: '',
      eODate: '',
      eType: '',
      eCloseDate: '',
      eSource: '',
      eStatus: '',
      items: this.fb.array([ this.createItem() ])
    });

    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      price: '',
      date: ''
    });
  };

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  };

  display() {
    console.log(this.orderForm);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  remove(index) {
    this.items.removeAt(index);
  }
}
