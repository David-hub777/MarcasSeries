import { Routes } from '@angular/router';
import { AppComponent } from './app.component'; 
import { MarcasDesplegable } from './Desplegable/DesplegableMarcas.component';
import { SeriesPorMarcas } from './Desplegable/SeriesPorMarcas.component';

// export const routes: Routes = [];
export const routes: Routes = [
    { path: 'Marcas', component: MarcasDesplegable},
    { path: 'Series', component: SeriesPorMarcas},
    // { path: 'Alumnos/:id', component: AlumnoComponent},
    { path: 'App', component: AppComponent },
    { path: '', redirectTo: '/App', pathMatch: 'full' },
];
