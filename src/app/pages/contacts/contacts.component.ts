import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent{
 
 // emailjs - modulo invio email funzionante (con logica in html):

  // @ViewChild('contactForm') contactForm!: NgForm; //Questo decoratore prende il form Angular come oggetto NgForm. Serve per controllare validità, errori, reset, ecc.
  // @ViewChild('contactForm', { read: ElementRef }) contactFormRef!: ElementRef<HTMLFormElement>; // Prende lo stesso form, ma come elemento HTML puro. Serve per usarlo con emailjs.sendForm() (che vuole un vero <form> DOM, non una struttura Angular).  

  // sendEmail() {
  //   if (this.contactForm.form.valid) {
  //     emailjs.sendForm(
  //       'service_0gh6cfd', //ID del servizio EmailJS
  //       'template_r7icgxi', //ID del template email creato
  //       this.contactFormRef.nativeElement, // Passa l'elemento nativo , ottenuto tramite ElementRef. emailjs utilizza questo elemento per raccogliere automaticamente i dati dei campi del form (i campi devono avere l'attributo name corrispondente alle variabili del template email).
  //       'ua3EHHLKH_DYBdJ9C' //La chiave pubblica del account EmailJS.
  //     )
  //     .then((result: EmailJSResponseStatus) => {
  //       console.log('Email inviata!', result.text);
  //       alert('Email inviata con successo!');
  //       this.contactForm.resetForm();
  //     }, (error) => {
  //       console.error('Errore invio email:', error);
  //       alert('Errore durante l\'invio. Riprova!');
  //     });
  //   } else {
  //     alert('Per favore, compila tutti i campi richiesti correttamente.');
  //     Object.keys(this.contactForm.controls).forEach(key => {
  //       this.contactForm.controls[key].markAsTouched();
  //     });
  //   }
  // }

  // emailjs - modulo invio email funzionante (con logica in typescript):

  @ViewChild('contactForm') contactForm!: NgForm;
  @ViewChild('contactForm', { read: ElementRef }) contactFormRef!: ElementRef<HTMLFormElement>;

  sendEmail() {

    if (!this.contactForm) return;
    if (this.contactForm.form.valid) {
      emailjs.sendForm(
        'service_0gh6cfd',
        'template_r7icgxi',
        this.contactFormRef.nativeElement,
        'ua3EHHLKH_DYBdJ9C'
      ).then((result: EmailJSResponseStatus) => {
        console.log('Email inviata!', result.text);
        alert('Email inviata con successo!');
        this.contactForm.resetForm();
      }, (error) => {
        console.error('Errore invio email:', error);
        alert('Errore durante l\'invio. Riprova!');
      });
    } else {
      alert('Per favore, compila tutti i campi richiesti correttamente.');
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.controls[key].markAsTouched();
      });
    }
  }

  hasError(controlName: string): boolean {
    const control = this.contactForm?.controls[controlName];
    return !!(control?.invalid && (control.dirty || control.touched));
  }

  getErrorMessage(controlName: string): string {
    const control = this.contactForm?.controls[controlName];

    if (!control || !control.errors) return '';

    if (control.errors['required']) {
      if (controlName === 'from_name') return 'Inserire un nome!';
      if (controlName === 'from_email') return 'Inserire un indirizzo email!';
      if (controlName === 'message') return 'Inserire un messaggio!';
    }

    if (control.errors?.['email']) {
      return 'Inserisci un\'email valida!';
    }

    return '';
  }


}

