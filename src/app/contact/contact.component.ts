import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @ViewChild('numberOfStaysInput')
  numberOfStaysInput!: ElementRef;
  @ViewChild('name')
  name!: ElementRef;
  @ViewChild('email_Id')
  email_Id!: ElementRef;
  @ViewChild('phoneNumber')
  phoneNumber!: ElementRef;
  @ViewChild('arrivalDate')
  arrivalDate!: ElementRef;
  @ViewChild('message')
  message!: ElementRef;
  emailId = "nitinaswal68@gmail.com";
  constructor() { }
  submitForm() {
    const email = 'nitinaswal68@gmail.com';
    const subject = 'Contact Form Submission';
    const numberOfStaysValue = this.numberOfStaysInput.nativeElement.value;
    const nameValue = this.name.nativeElement.value;
    const emailIdValue = this.email_Id.nativeElement.value;
    const phoneNumberValue = this.phoneNumber.nativeElement.value;
    const arrivalDateValue = this.arrivalDate.nativeElement.value;
    const messageValue = this.message.nativeElement.value;
    const body = `Hi Nitin ,\n Please find the details for the booking:\n\n
    Name: ${nameValue}\n
    Phone Number: ${phoneNumberValue}\n
    Email ID: ${emailIdValue}\n
    Arrival Date: ${arrivalDateValue}\n
    Number of Night Stays: ${numberOfStaysValue}\n
    Message: ${messageValue}\n
    Have a nice day.`;
    // Generate mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open default email client with prefilled email
    window.location.href = mailtoLink;
  }
  openWhatsApp() {
    if (this.isWhatsAppSupported()) {
      window.location.href = "whatsapp://send?text=Hi";
    } else {
      window.open("https://web.whatsapp.com/send?text=Hi", "_blank");
    }
  }

  isWhatsAppSupported(): boolean {
    const link = document.createElement("a");
    link.href = "whatsapp://send?text=test";
    return link.protocol === "whatsapp:";
  }

}