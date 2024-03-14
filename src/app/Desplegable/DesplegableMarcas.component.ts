import { Component, OnInit, Output, EventEmitter} from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { Service } from "../Service/Service";
import { Marca } from "../Marcas/Marcas";
import { Serie } from "../Series/Series";
import { SeriesPorMarcas } from "./SeriesPorMarcas.component";


@Component({
    selector: 'MarcasDesplegable',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule],
    templateUrl: 'DesplegableMarcas.component.html',
    // styleUrls: ['../Otros/estilosTabla.css'],
    providers: [Service]
})


export class MarcasDesplegable {
    marcaElegida: number = 1;
    marcas : Marca[] = [];
    constructor(public miService : Service){   
        this.miService.getMarcas().subscribe((datos) => this.marcas = datos);
    }

    ngOnInit() {
        this.cuandoCambiemos();
    }

    @Output()
    MarcaSeleccionada: EventEmitter<number> = new EventEmitter<number>();

    cuandoCambiemos(): void {
        this.MarcaSeleccionada.emit(this.marcaElegida);
    }
    // alSeleccionar(): void {
    //     this.MarcaSeleccionada.emit(this.marcaElegida); 
    // }
    alSeleccionar(event: any): void {
        this.MarcaSeleccionada.emit(this.marcaElegida); 
    }
}