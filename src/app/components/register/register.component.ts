import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!:FormGroup;
  List!: Array<any>;
  constructor(private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.InitForms();
  }

  public Registrar(){
    this.List.push(this.form.getRawValue());
    const json = JSON.stringify(this.List);
    localStorage.setItem("users",json);
     this.router.navigate(['/']);
  }

  public InitForms(){
    this.List = [];
   this.form = this.fb.group({
       name: [''],
       email: [''],
       password: [''],
       addres: [''],
       birthdate: [''],
       city: ['']
   })
  }

}
