import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contactForm: FormGroup;
  
  faqs = [
    { 
      pregunta: '¿Cuál es el horario de atención de la librería?', 
      respuesta: 'Nuestro horario es de lunes a viernes de 9:00 AM a 8:00 PM, y sábados de 10:00 AM a 6:00 PM.'
    },
    { 
      pregunta: '¿Realizan envíos a domicilio?', 
      respuesta: 'Sí, realizamos envíos a todo Ecuador. El costo y tiempo de entrega varían según la ubicación.'
    },
    { 
      pregunta: '¿Tienen libros en otros idiomas?', 
      respuesta: 'Sí, contamos con una selección de libros en inglés, francés y alemán, además de nuestro extenso catálogo en español.'
    },
    { 
      pregunta: '¿Organizan eventos literarios?', 
      respuesta: 'Sí, regularmente organizamos presentaciones de libros, clubes de lectura y talleres literarios. Puedes consultar nuestro calendario de eventos en la tienda o en nuestras redes sociales.'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado', this.contactForm.value);
      // Aquí iría la lógica para enviar el formulario a un servidor
      this.contactForm.reset();
      alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    }
  }
}