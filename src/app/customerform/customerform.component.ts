import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {
      customer: Customer;

  profileForm = new FormGroup({
    name: new FormControl(''),
    adress: new FormControl(''),
    creditCard: new FormControl(''),
  });



  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }




  onSubmit() {
    
    // TODO: Use EventEmitter with form value
    console.log(Object.values(this.profileForm.value));
  }
}
