import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  //ng gtemplate: "<p>Aquí iría un empleado</p>",
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
// styles: ["p{background-color: red;"]
})
export class EmpleadoComponent {
  nombre = "David"
  apellido= "Marin"
}
