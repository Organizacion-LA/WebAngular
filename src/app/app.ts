import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome/welcome'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Welcome],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'web-la-sistemas';
}
