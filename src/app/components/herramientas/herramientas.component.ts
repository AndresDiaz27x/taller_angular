import { Component, OnInit } from '@angular/core';
import { HerramientasService } from 'src/app/services/herramientas.service';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {
  herramientas: any[] = [];

  constructor(private herramientasService: HerramientasService) {}

  ngOnInit(): void {
    this.herramientas = this.herramientasService.getHerramientas();
  }
}
