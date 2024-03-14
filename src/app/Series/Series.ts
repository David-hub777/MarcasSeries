export interface ISerie{
    id?: number;
    nomSerie: string;
    marcaId?: number;
}


export class Serie implements ISerie{

    constructor(public nomSerie: string, public id?: number, public marcaId?: number){
        
    }

}