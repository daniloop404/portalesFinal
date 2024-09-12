import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-catalogo',
  standalone: true,
  templateUrl: './catalogo.component.html',
  imports: [CommonModule],
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  books = [
    {
      title: 'Cien años de soledad',
      author: 'Gabriel García Márquez',
      description: 'Una obra maestra del realismo mágico que narra la historia de la familia Buendía a lo largo de siete generaciones en el ficticio pueblo de Macondo.',
      imageUrl: 'assets/images/ciensoledad.webp'
    },
    {
      title: '1984',
      author: 'George Orwell',
      description: 'Una novela distópica que explora temas de totalitarismo, vigilancia gubernamental y manipulación de la verdad en un futuro sombrío.',
      imageUrl: 'assets/images/1984.webp'
    },
    {
      title: 'El nombre del viento',
      author: 'Patrick Rothfuss',
      description: 'Primera parte de la trilogía "Crónica del asesino de reyes", una épica historia de fantasía que sigue las aventuras del joven músico y mago Kvothe.',
      imageUrl: 'assets/images/nombreviento.webp'
    },
    {
      title: 'Orgullo y prejuicio',
      author: 'Jane Austen',
      description: 'Una novela romántica que explora las expectativas sociales y el matrimonio en la Inglaterra rural del siglo XIX.',
      imageUrl: 'assets/images/orgullo.webp'
    },
    {
      title: 'El Señor de los Anillos',
      author: 'J.R.R. Tolkien',
      description: 'Una épica historia de fantasía que sigue las aventuras de Frodo Bolsón y sus compañeros en su misión para destruir el Anillo Único.',
      imageUrl: 'assets/images/señor.webp'
    },
    {
      title: 'Crimen y castigo',
      author: 'Fiódor Dostoievski',
      description: 'Una novela psicológica que explora los tormentos morales y psicológicos de Rodion Raskólnikov tras cometer un asesinato.',
      imageUrl: 'assets/images/crimen.webp'
    },
    {
      title: 'Don Quijote de la Mancha',
      author: 'Miguel de Cervantes',
      description: 'Considerada una de las mejores novelas de la historia, sigue las aventuras de un hidalgo que pierde la cordura y decide convertirse en caballero andante.',
      imageUrl: 'assets/images/donquijote.webp'
    },
    {
      title: 'La Odisea',
      author: 'Homero',
      description: 'Una de las grandes epopeyas de la antigua Grecia, que narra las aventuras de Odiseo (Ulises) en su regreso a Ítaca después de la Guerra de Troya.',
      imageUrl: 'assets/images/odisea.webp'
    }
  ];
}