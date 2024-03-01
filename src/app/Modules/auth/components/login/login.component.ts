import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastyService } from 'ng-toasty';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm! : FormGroup;
  
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, private toast: ToastyService) {
 
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',  Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }


  onSubmit() {
    this.authService.login(this.loginForm.value)
      .subscribe({
        next: (res) => {
          this.toast.success("Login is Success...!");
          this.router.navigate(['/time-sheet']);
          this.loginForm.reset();
        },
        error: (err) => {
          this.toast.danger("Login failed. Please check your credentials and try again.");
        }
      });
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
