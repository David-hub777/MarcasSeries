export interface IMarca{
    id?: number;
    nomMarca: string;
}


export class Marca implements IMarca{

    constructor(public nomMarca: string, public id?: number){
        
    }

}