import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HerramientasService {

  herramientas = [
    {
      nombre: 'Scratch',
      descripcion: 'Plataforma visual para programar historias interactivas.',
      url: 'https://scratch.mit.edu/'
    },
    {
      nombre: 'Code.org',
      descripcion: 'Sitio educativo con cursos de programación para todas las edades.',
      url: 'https://code.org/'
    },
    {
      nombre: 'Tynker',
      descripcion: 'Plataforma de codificación para niños.',
      url: 'https://www.tynker.com/'
    },
    {
      nombre: 'App Inventor',
      descripcion: 'Crea apps móviles sin código.',
      url: 'https://appinventor.mit.edu/'
    },
    {
      nombre: 'Blockly',
      descripcion: 'Librería de Google para programar con bloques.',
      url: 'https://developers.google.com/blockly'
    }
  ];

  constructor() {}

  getHerramientas() {
    return this.herramientas;
  }
}