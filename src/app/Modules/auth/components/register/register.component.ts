import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastyService } from 'ng-toasty';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toast: ToastyService){

  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }



  onSignup(){
    this.authService.signUp(this.signUpForm.value)
    .subscribe({
      next:(res)=>{
        this.toast.success("User Registered Successfully...!")
        this.signUpForm.reset();
        this.router.navigate(['login'])
  
      },
      error:(err)=>{
        this.toast.danger("Please enter the correct credentials and try registering again...!");
      }
    })
    }



  private validateAllFormFields(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field =>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }else if(control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    })
  }

}
