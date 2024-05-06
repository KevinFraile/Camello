import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.page.html',
  styleUrls: ['./resultado-busqueda.page.scss'],
})
export class ResultadoBusquedaPage implements OnInit {

  palabraUrl:string = ''

  serviciosAll = [
    {
      "profesion": "PROFESOR DE INGLES",
      "nombre": "Pepito Perez Monserá",
      "estrellas": 4,
      "imagen": "https://orientacion-laboral.infojobs.net/wp-content/uploads/2017/11/9-si-foto-cv.png"
    },
    {
      "profesion": "PINTOR",
      "nombre": "Leonardo Da Vinci",
      "estrellas": 4,
      "imagen": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-D2YbU6O6Jg1SWr2GmhmYauGB8qghrfNR9ljrSSVkcn-srHlZ"
    },
    {
      "profesion": "PLOMERO",
      "nombre": "Pablo Repara Aguas",
      "estrellas": 2,
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Um03eHFjPsCQ9gZbRJnAH1c18R09JBvixl2ozNpfsfpulyXh"
    },
    {
      "profesion": "MAESTRO DE OBRA",
      "nombre": "Jairo Hernandez De Rios",
      "estrellas": 2,
      "imagen": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1tGMVegBwApRUYLjnBiheh2IohaoM7IlDQzclf3BMY56IwaF6"
    },
    {
      "profesion": "ELECTRICISTA",
      "nombre": "Alberto Electrico Casas",
      "estrellas": 2,
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWaMoW6j0LMddBEtWn8qdBdcPJ8wKvbuD9t2F8teVK2ZP2vt-"
    },
    {
      "profesion": "MASAJISTA",
      "nombre": "Venus Terapias",
      "estrellas": 5,
      "imagen": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOx3jCP0V3EuhZqoo4UL2A1-YBXi9ZYuR61NTMvg354y6-rp1C"
    }
  ]

  servicio:any = []

  load = false

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.palabraUrl = this.route.snapshot.paramMap.get('palabra')!;
    console.log(this.palabraUrl); // Esto mostrará el valor del parámetro 'id' en la consola

    this.buscar(this.palabraUrl)

  }

  buscar(palabra:string){
    this.load = true
    this.palabraUrl = palabra
    this.servicio = this.serviciosAll.filter(profesional => profesional.profesion.toLowerCase().includes(this.palabraUrl));
    this.load = false
  }

}
