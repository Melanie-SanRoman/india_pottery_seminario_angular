import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-india-pottery-contact',
  standalone: false,
  templateUrl: './india-pottery-contact.html',
  styleUrl: './india-pottery-contact.scss'
})
export class IndiaPotteryContact {

  successMessage = false;

  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  onSubmit() {
  if (this.contactForm.valid) {
    console.log('Form Submitted!', this.contactForm.value);

    this.successMessage = true; // Muestra el mensaje
    this.contactForm.reset();   // Limpia el formulario

    // Oculta el mensaje luego de 5 segundos
    setTimeout(() => {
      this.successMessage = false;
    }, 5000);
  }
}
}
