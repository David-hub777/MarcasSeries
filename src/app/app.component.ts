import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  template: `
        <div class="mb-3">
            <ul class="nav nav-tabs justify-content-center bg-primary center">
                <li class="nav-item">
                    <a class="nav-link bg-warning" href="Marcas"  aria-current="page">Marcas</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link bg-danger" href="Series" >Ejercicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="App">Link</a>
                </li>
            </ul>
            
        </div>
        <router-outlet></router-outlet>
    `,
  styleUrl: './app.component.css'
})
// templateUrl: './app.component.html',

export class AppComponent {
  title = 'MarcasSeries';
}
