import { Component } from '@angular/core';
import { Producto } from '../../Clases/Producto';

@Component({
  moduleId: module.id,  //Agregado según tutorial para mostrar HTML, funciona normal sin esto.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'proyectoLearn';
// }
export class AppComponent {
  producto: Producto = new Producto(1, 'Patatas', 1, 1, 'Papas para freir');
}
