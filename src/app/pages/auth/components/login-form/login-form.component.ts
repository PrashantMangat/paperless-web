import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/shared/interface/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() sendLoginForm = new EventEmitter<User>();
  public form!: UntypedFormGroup;
  public username!: string;
  public password!: string;
  
  public remember: boolean = false;
  hide=true;
  destroy$: Subject<boolean>;

  roles = [
    {
      id: 2, type: 'USER'
    },
    {
      id: 1, type: 'ADMIN'
    },
   
  ]
  role: any;
  constructor(private fb: UntypedFormBuilder) {
    this.destroy$ = new Subject<boolean>();
    this.sendLoginForm = new EventEmitter<User>();
  }

  public ngOnInit(): void {
    this.form = new UntypedFormGroup({
      username: new UntypedFormControl(this.username, [Validators.required]),
      password: new UntypedFormControl(this.password, [Validators.required]),
      remember: new UntypedFormControl(this.remember, [Validators.required])
    });
    // this.form.valueChanges
    //   //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(() => {
    //     this.form = new FormGroup({
    //       username: new FormControl(this.username, [Validators.required]),
    //       password: new FormControl(this.password, [Validators.required]),
    //       remember: new FormControl(this.remember, [Validators.required])
    //     });
    //   });
  }
  validate() {
    // var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    // if (this.form. === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    // form.classList.add('was-validated');
  }
  public login(): void {
    if (this.form.valid) {
      this.sendLoginForm.emit(this.form.value);
    }
    else {
      alert("please enter valid input")
    }
  }
}
