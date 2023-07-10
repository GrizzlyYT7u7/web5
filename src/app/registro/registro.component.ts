import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  constructor(private router: Router) {}

  validarFormulario(event: Event) {
    event.preventDefault(); // Detener la recarga de la página

    const email = (<HTMLInputElement>document.getElementById('correo')).value;
    const password = (<HTMLInputElement>document.getElementById('password'))
      .value;

    const usuario = (<HTMLInputElement>document.getElementById('usuario'))
      .value;
    const password2 = (<HTMLInputElement>document.getElementById('password2'))
      .value;
    const nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    const telefono = (<HTMLInputElement>document.getElementById('telefono'))
      .value;

    const terminos = (<HTMLInputElement>document.getElementById('terminos'))
      .checked;

    const emailError = document.querySelector('.formulario__input-error')!;
    const passwordError = document.querySelector('.formulario__input-error')!;
    const password2Error = document.querySelector('.formulario__input-error')!;

    // Validar el email
    if (!email) {
      emailError.innerHTML = 'El campo de correo electrónico es requerido';
    } else if (!this.validarEmail(email)) {
      emailError.innerHTML = 'El correo electrónico ingresado no es válido';
    } else {
      emailError.innerHTML = '';
    }

    // Validar la contraseña
    if (!password) {
      passwordError.innerHTML = 'El campo de contraseña es requerido';
    } else if (!this.validarPassword(password)) {
      passwordError.innerHTML =
        'La contraseña debe tener entre 4 y 12 caracteres';
    } else {
      passwordError.innerHTML = '';
    }

    if (!password2) {
      password2Error.innerHTML = 'El campo de contraseña es requerido';
    } else if (!this.validarPassword2(password2)) {
      password2Error.innerHTML =
        'La contraseña debe tener entre 4 y 12 caracteres';
    } else {
      password2Error.innerHTML = '';
    }

    if (
      email &&
      password &&
      usuario &&
      nombre &&
      telefono &&
      terminos &&
      this.validarEmail(email) &&
      this.validarPassword(password)
    ) {
      this.router.navigateByUrl('/eleccion');
    } else {
      console.log('Noooo');
    }
  }

  validarEmail(email: string): boolean {
    // Expresión regular para validar el formato de un email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validarPassword(password: string): boolean {
    return password.length >= 4 && password.length <= 12;
  }

  validarPassword2(password: string): boolean {
    return password.length >= 4 && password.length <= 12;
  }
}
