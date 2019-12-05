import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profileForm = new FormGroup ({ 
    firstname: new FormControl(''),
  lastname: new FormControl(''),
  address: new FormControl(''),
  telephonenumber: new FormControl(''),
  email: new FormControl(''),
})
  constructor() { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  ngOnInit() {
  }

}
