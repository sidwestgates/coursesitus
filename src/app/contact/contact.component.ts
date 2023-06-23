import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    // Add your form submission logic here
    console.log(this.formData);
    // Reset the form
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
