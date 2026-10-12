import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {
  private builder = inject(FormBuilder);
  private router = inject(Router);
  private userData = inject(UserDataService);

  userForm = this.builder.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.pattern('[1-9]\\d{2}[1-9]\\d{6}')],
    email: ['', Validators.email]
  });

  get firstName() { return this.userForm.controls.firstName; }
  get lastName()  { return this.userForm.controls.lastName; }
  get phone()     { return this.userForm.controls.phone; }
  get email()     { return this.userForm.controls.email; }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();   // forces all error messages to show
      return;
    }
    this.userData.user = this.userForm.getRawValue();
    this.router.navigate(['/result']).then(() => {});
  }
}