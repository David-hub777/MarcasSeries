import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { Service } from "../Service/Service";
import { Serie } from "../Series/Series";
import { MarcasDesplegable } from "./DesplegableMarcas.component";

@Component({
    selector: 'VehiculosDesplegadosLista',
    standalone: true,
    imports: [CommonModule, RouterModule,MarcasDesplegable],
    templateUrl: 'SeriesPorMarcas.component.html',
    // styleUrls: ['../Otros/estilosTabla.css'],
    providers: [Service]
})

export class SeriesPorMarcas implements OnInit {

    seleccion: number = 8;
    series : Serie[] = [];
    series2 : Serie[] = [];
    constructor(public miService : Service){   

    }

    ngOnInit(): void {
        this.miService.getSeries().subscribe((datos) => this.series = datos);
        this.miService.getSeriesPorMarcas2(this.seleccion).subscribe((datos2) => this.series2 = datos2);
    }

    

    cargarSerie(numSerie: number){
        this.seleccion = numSerie;
        this.miService.getSeriesPorMarcas2(this.seleccion).subscribe((datos2) => this.series2 = datos2);
    }
}