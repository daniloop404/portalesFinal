import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentSlide = 0;
  slides = [
    { image: 'assets/images/carrusel1.png', alt: 'Bienvenida a Librería Ávila', title: 'Bienvenidos a Librería Ávila', description: 'Tu destino literario en el corazón de Quito' },
    { image: 'assets/images/carrusel2.png', alt: 'Descubre Nuevos Mundos', title: 'Descubre Nuevos Mundos', description: 'Explora nuestra amplia selección de libros' },
    { image: 'assets/images/carrusel3.png', alt: 'Eventos Literarios', title: 'Eventos Literarios', description: 'Participa en nuestras charlas y firmas de libros' }
  ];

  testimonios = [
    { 
      texto: 'Una selección de libros maravillosa y una atención al cliente excepcional. ¡Siempre encuentro lo que necesito!', 
      autor: 'Ana Rodríguez', 
      imagen: 'assets/images/cliente1.png' // Imagen de mujer
    },
    { 
      texto: 'Un lugar mágico para cualquier amante de la lectura. Los eventos literarios son imperdibles.', 
      autor: 'María López', 
      imagen: 'assets/images/cliente3.png' // Imagen de mujer
    },
    { 
      texto: 'Excelente servicio y una atmósfera acogedora. Mi librería favorita en la ciudad.', 
      autor: 'Carlos Méndez', 
      imagen: 'assets/images/cliente2.png' // Imagen de hombre
    }
  ];

  librosRecomendados = [
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', descripcion: 'Una obra maestra del realismo mágico que narra la historia de la familia Buendía a lo largo de siete generaciones en el ficticio pueblo de Macondo.', imagen: 'assets/images/ciensoledad.webp' },
    { titulo: '1984', autor: 'George Orwell', descripcion: 'Una novela distópica que explora temas de totalitarismo, vigilancia gubernamental y manipulación de la verdad en un futuro sombrío.', imagen: 'assets/images/1984.webp' },
    { titulo: 'El nombre del viento', autor: 'Patrick Rothfuss', descripcion: 'Primera parte de la trilogía "Crónica del asesino de reyes", una épica historia de fantasía que sigue las aventuras del joven músico y mago Kvothe.', imagen: 'assets/images/nombreviento.webp' }
  ];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.onNextClick();
    }, 5000);
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  onSubscribe() {
    console.log('Usuario se ha suscrito al club de lectura');
    // Aquí podrías llamar a un servicio para registrar al usuario
  }
}