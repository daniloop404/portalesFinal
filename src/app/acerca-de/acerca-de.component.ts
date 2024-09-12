import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acerca-de',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acerca-de.component.html',
  styleUrl: './acerca-de.component.css'
})
export class AcercaComponent {
  fundador = {
    nombre: 'Carlos Ávila',
    imagen: 'assets/images/avila.png'
  };

  empleados = [
    {
      nombre: 'Ana Morales',
      cargo: 'Gerente de Ventas',
      imagen: 'assets/images/anamorales.png',
      descripcion: 'Ana lleva más de 10 años liderando el equipo de ventas y ha sido clave en el crecimiento de la librería.'
    },
    {
      nombre: 'Luis Mendoza',
      cargo: 'Especialista en Literatura',
      imagen: 'assets/images/luis.png',
      descripcion: 'Luis es un experto en literatura clásica y contemporánea, siempre dispuesto a recomendar una buena lectura.'
    },
    {
      nombre: 'María Sánchez',
      cargo: 'Coordinadora de Eventos',
      imagen: 'assets/images/maria.png',
      descripcion: 'María organiza todos nuestros eventos literarios, creando experiencias inolvidables para nuestros clientes.'
    }
  ];
}