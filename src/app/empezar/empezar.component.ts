import { Component } from '@angular/core';

@Component({
  selector: 'app-empezar',
  templateUrl: './empezar.component.html',
  styleUrls: ['./empezar.component.css'],
})
export class EmpezarComponent {}

document.addEventListener('DOMContentLoaded', () => {
  fetch('/assets/facultades.xml')
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'text/xml');
      const facultades = xmlDoc.getElementsByTagName('nombre');

      const facultadSelect = document.getElementById('facultadSelect');
      if (facultadSelect) {
        for (let i = 0; i < facultades.length; i++) {
          const facultad = facultades[i].textContent;
          facultadSelect.innerHTML += `<option>${facultad}</option>`;
        }
      }
    });

  // Cargar datos de carreras desde archivo JSON
  fetch('/assets/carreras.json')
    .then((response) => response.json())
    .then((data) => {
      const carreras = data.carreras;

      const carreraSelect = document.getElementById('carreraSelect');
      if (carreraSelect) {
        for (let i = 0; i < carreras.length; i++) {
          const carrera = carreras[i];
          carreraSelect.innerHTML += `<option>${carrera}</option>`;
        }
      }
    });
});
