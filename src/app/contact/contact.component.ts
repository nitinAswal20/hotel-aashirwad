import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  emailId = "nitinaswal68@gmail.com";
  constructor() { }
  submitForm() {
    const email = 'nitinaswal68@gmail.com';
    const subject = 'Contact Form Submission';
    const body = 'Please find ';

    // Generate mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open default email client with prefilled email
    window.location.href = mailtoLink;
  }

}