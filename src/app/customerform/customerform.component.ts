import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {FormArray} from '@angular/forms';
import {Router} from '@angular/router';
import {Customer} from '../model/customer';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {
  customer: Customer;

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    adress: new FormControl(''),
    creditCard: new FormControl('', Validators.pattern('^[0-9]{3}-[0-9]{3}$')),
  });

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.customerService.checkout({
      name: this.profileForm.get('name')!.value,
      adress: this.profileForm.get('adress')!.value,
      creditCardType: this.profileForm.get('creditCard')!.value
    }).subscribe(() => this.router.navigate(['']));
  }
}
