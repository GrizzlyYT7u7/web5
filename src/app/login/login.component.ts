import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  validarFormulario(event: Event) {
    event.preventDefault(); // Detener la recarga de la página

    const email = (<HTMLInputElement>document.getElementById('correo')).value;
    const password = (<HTMLInputElement>document.getElementById('password'))
      .value;
    const emailError = document.querySelector('.formulario__input-error')!;
    const passwordError = document.querySelector('.formulario__input-error')!;

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

    if (
      email &&
      password &&
      this.validarEmail(email) &&
      this.validarPassword(password)
    ) {
      // Realizar la solicitud fetch y el procesamiento de XML
      const parser = new DOMParser();
      fetch('/assets/usuarios.xml') // Ruta al archivo XML de usuarios
        .then((response) => response.text())
        .then((data) => {
          const xmlDoc = parser.parseFromString(data, 'text/xml');

          const usuarios = xmlDoc.getElementsByTagName('usuario');

          let credencialesCorrectas = false;

          for (let i = 0; i < usuarios.length; i++) {
            const usuario = usuarios[i];
            const correoUsuario = usuario.getElementsByTagName(
              'correo_institucional'
            )[0].textContent;
            const contrasenaUsuario =
              usuario.getElementsByTagName('contrasena')[0].textContent;

            if (email === correoUsuario && password === contrasenaUsuario) {
              credencialesCorrectas = true;
              break;
            }
          }

          if (credencialesCorrectas) {
            // Si las credenciales son correctas, redirecciona a la página deseada
            this.router.navigateByUrl('/eleccion');
            // Almacenar el correo en el localStorage
            localStorage.setItem('correoUsuario', email);
          } else {
            // Si las credenciales son incorrectas, muestra un mensaje de error
            alert('Los datos de acceso son incorrectos.');
          }
        })
        .catch((error) => {
          console.error('Error al cargar el archivo XML:', error);
          alert('Error al cargar el archivo de usuarios.');
        });
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
}
