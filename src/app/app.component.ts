import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Fica disponível pro componente e pros filhos do componente
  providers: []
})
export class AppComponent {
  title = 'app2';
}