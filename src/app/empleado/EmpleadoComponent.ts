import { Component } from '@angular/core';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {

  nombre = "David";
  apellido = "Marin";
  edad = 18;
  empresa = "Google";
  /* getEdad(){
     return this.edad;
   }
 */
   textoRegistro = "No hay usuarios registrados";
 
  habilitacionCuadro = false;
  

  usuRegistrado = false;

  getRegistroUsuario() {
    this.usuRegistrado = false;
  }

  setUsuarioRegistrado(event:Event){
    //alert("El usuario se ha registrado");
    //this.textoRegistro= "Se ha registrado un usuario";

    //alert(event.target);

    if((<HTMLInputElement>event.target).value=="si"){
      this.textoRegistro= "Se ha registrado un usuario";
    } else{
      this.textoRegistro= "No hay usuarios registrados";
    }
  }

  


}
