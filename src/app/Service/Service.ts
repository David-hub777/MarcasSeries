import { Injectable, NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Marca } from "../Marcas/Marcas";
import { Serie } from "../Series/Series";

@Injectable()
export class Service{
    constructor(private http: HttpClient){

    }

    getMarcas(): Observable<Marca[]>{
        return this.http.get<Marca[]>("https://localhost:44364/api/Marcas/Get");
    }

    getMarcasPorId(id: number): Observable<Marca>{
        return this.http.get<Marca>("https://localhost:44364/api/Marcas/Get/" + id);
    }

    getSeries(): Observable<Serie[]>{
        return this.http.get<Serie[]>("https://localhost:44364/api/Series/Get");
    }

    getSeriesPorId(id: number): Observable<Serie>{
        return this.http.get<Serie>("https://localhost:44364/api/Series/Get/" + id);
    }

    getSeriesPorMarcas(id: number): Observable<Serie[]>{
        return this.http.get<Serie[]>("https://localhost:44364/api/Series/GetPorMarcas/1");
        // "https://localhost:44364/api/Series/GetPorMarcas/" + id
    }

    apiUrlByMarcaId = "https://localhost:44364/api/Series/GetPorMarcas/";
    getSeriesPorMarcas2( id: number): Observable<Serie[]> {
		return this.http.get<Serie[]>(this.apiUrlByMarcaId+id);// , { headers }
	}
}