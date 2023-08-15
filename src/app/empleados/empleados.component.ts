import { Component } from '@angular/core';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {

  constructor(private localStore: LocalService) {

  }
  getEmpleados() {
    return this.localStore.getData('empleados');
  }

  saveEmpleado() {
    //guardar empleado
    let empleados = JSON.parse(this.getEmpleados() || '[]');
    const nombres = (<HTMLInputElement>document.getElementById('nombres')).value;
    const apellidos = (<HTMLInputElement>document.getElementById('apellidos')).value;
    const fechaNacimiento = (<HTMLInputElement>document.getElementById('fechaNacimiento')).value;
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const numeroDocumento = (<HTMLInputElement>document.getElementById('numeroDocumento')).value;
    const area = (<HTMLInputElement>document.getElementById('area')).value;
    const salario = (<HTMLInputElement>document.getElementById('salario')).value;
    const estado = (<HTMLInputElement>document.getElementById('estado')).value;
    

    const empleado = {
      id: empleados.length + 1,
      nombres: nombres,
      apellidos: apellidos,
      fechaNacimiento: fechaNacimiento,
      email: email,
      numeroDocumento: numeroDocumento,
      area: area,
      salario: salario,
      estado: estado
    }
    empleados.push(empleado);
    this.localStore.saveData('empleados', JSON.stringify(empleados));
    this.empleados = empleados;
    (<HTMLInputElement>document.getElementById('nombres')).value = '';
    (<HTMLInputElement>document.getElementById('apellidos')).value = '';
    (<HTMLInputElement>document.getElementById('fechaNacimiento')).value = '';
    (<HTMLInputElement>document.getElementById('email')).value = '';
    (<HTMLInputElement>document.getElementById('numeroDocumento')).value = '';
    (<HTMLInputElement>document.getElementById('area')).value = '';
    (<HTMLInputElement>document.getElementById('salario')).value = '';
    (<HTMLInputElement>document.getElementById('estado')).value = 'Activo';
  }

  editEmpleado(id: number) {
    //editar empleado
    let empleados = JSON.parse(this.getEmpleados() || '[]');
    const empleado = empleados.find((empleado: any) => empleado.id === id);
    (<HTMLInputElement>document.getElementById('nombres')).value = empleado.nombres;
    (<HTMLInputElement>document.getElementById('apellidos')).value = empleado.apellidos;
    (<HTMLInputElement>document.getElementById('fechaNacimiento')).value = empleado.fechaNacimiento;
    (<HTMLInputElement>document.getElementById('email')).value = empleado.email;
    (<HTMLInputElement>document.getElementById('numeroDocumento')).value = empleado.numeroDocumento;
    (<HTMLInputElement>document.getElementById('area')).value = empleado.area;
    (<HTMLInputElement>document.getElementById('salario')).value = empleado.salario;
    (<HTMLInputElement>document.getElementById('estado')).value = empleado.estado;
    // button save
    (<HTMLInputElement>document.getElementById('save')).style.display = 'none';
    // button edit
    (<HTMLInputElement>document.getElementById('edit')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('edit')).setAttribute('data-id', empleado.id);
    //title
    (<HTMLInputElement>document.getElementById('exampleModalLabel')).innerHTML = 'Editar empleado';
  }

  saveEditEmpleado() {
    //guardar empleado
    let empleados = JSON.parse(this.getEmpleados() || '[]');
    const nombres = (<HTMLInputElement>document.getElementById('nombres')).value;
    const apellidos = (<HTMLInputElement>document.getElementById('apellidos')).value;
    const fechaNacimiento = (<HTMLInputElement>document.getElementById('fechaNacimiento')).value;
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const numeroDocumento = (<HTMLInputElement>document.getElementById('numeroDocumento')).value;
    const area = (<HTMLInputElement>document.getElementById('area')).value;
    const salario = (<HTMLInputElement>document.getElementById('salario')).value;
    const estado = (<HTMLInputElement>document.getElementById('estado')).value;

    empleados = empleados.map((empleado: any) => {
      if (empleado.id === parseInt((<HTMLInputElement>document.getElementById('edit')).getAttribute('data-id') || '')) {
        return empleado = {
          id: empleado.id,
          nombres: nombres,
          apellidos: apellidos,
          fechaNacimiento: fechaNacimiento,
          email: email,
          numeroDocumento: numeroDocumento,
          area: area,
          salario: salario,
          estado: estado
        }
      } else {
        return empleado;
      }
    });
    this.localStore.saveData('empleados', JSON.stringify(empleados));
    this.empleados = empleados; 
    //limpiar campos
    (<HTMLInputElement>document.getElementById('nombres')).value = '';
    (<HTMLInputElement>document.getElementById('apellidos')).value = '';
    (<HTMLInputElement>document.getElementById('fechaNacimiento')).value = '';
    (<HTMLInputElement>document.getElementById('email')).value = '';
    (<HTMLInputElement>document.getElementById('numeroDocumento')).value = '';
    (<HTMLInputElement>document.getElementById('area')).value = '';
    (<HTMLInputElement>document.getElementById('salario')).value = '';
    (<HTMLInputElement>document.getElementById('estado')).value = 'Activo';
    // button save
    (<HTMLInputElement>document.getElementById('save')).style.display = 'block';
    // button edit
    (<HTMLInputElement>document.getElementById('edit')).style.display = 'none';
    //title
    (<HTMLInputElement>document.getElementById('exampleModalLabel')).innerHTML = 'Nuevo empleado';

  }

  addEmpleado() {
    //limpiar campos
    (<HTMLInputElement>document.getElementById('nombres')).value = '';
    (<HTMLInputElement>document.getElementById('apellidos')).value = '';
    (<HTMLInputElement>document.getElementById('fechaNacimiento')).value = '';
    (<HTMLInputElement>document.getElementById('email')).value = '';
    (<HTMLInputElement>document.getElementById('numeroDocumento')).value = '';
    (<HTMLInputElement>document.getElementById('area')).value = '';
    (<HTMLInputElement>document.getElementById('salario')).value = '';
    (<HTMLInputElement>document.getElementById('estado')).value = 'Activo';
    // button save
    (<HTMLInputElement>document.getElementById('save')).style.display = 'block';
    // button edit
    (<HTMLInputElement>document.getElementById('edit')).style.display = 'none';
    //title
    (<HTMLInputElement>document.getElementById('exampleModalLabel')).innerHTML = 'Nuevo empleado';
  }

  deleteEmpleado(id: number) {
    //eliminar empleado
    let empleados = JSON.parse(this.getEmpleados() || '[]');
    const index = empleados.findIndex((empleado: any) => empleado.id === id);
    empleados.splice(index, 1);
    this.localStore.saveData('empleados', JSON.stringify(empleados));
    this.empleados = empleados;
  }




  public empleados: any[] =   JSON.parse(this.getEmpleados() || '[]');
}
