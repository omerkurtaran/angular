import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  customers:Customer[]=[]
  selectedCustomer:Customer;
  @Input() city:string;

  ngOnInit(): void {
    this.customers=[
      {id:1,firstName:"ömer",lastName:"Kurtaran",age:26},
      {id:2,firstName:"nesrin",lastName:"Kurtaran",age:23},
      {id:3,firstName:"said",lastName:"Kurtaran",age:28},
    ]
  }

  selectCustomer(customer:Customer){
    this.selectedCustomer=customer
  }

}
 