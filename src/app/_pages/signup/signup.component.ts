import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  onSubmit() {
    console.log(this.signupForm.value)
    
    console.log(this.password?.value)
    
  }

  

  signupForm!: FormGroup

  signupControl = new FormControl('', {updateOn: 'blur'})

  constructor(private formBuilder: FormBuilder) { }
  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }


  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$.@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$.@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")
      ]],
      phones: this.formBuilder.array([]),
      terms: ['', [
        Validators.requiredTrue
      ]]
    });

    
  }

  addPhone() {
    let phone = this.formBuilder.group({
      phonePrefix: '',
      phoneNumber: ['', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$')
      ]]
    });

    if(this.phones.length <= 3)
      this.phones.push(phone); // 0 => phone // 1 => ph

    console.log(this.phones.controls);
  }

  get phones() {
    return this.signupForm.get('phones') as FormArray;
  }
  getPhoneNumber(index: number) {
    return this.phones.controls[index].get('phoneNumber');
  }

  getPhonePrefix(index: number) {
    return this.phones.controls[index].get('phonePrefix');
  }

  deletePhone(index: number) {
    this.phones.removeAt(index); // Supprime là (index) 0...n
  }


}
