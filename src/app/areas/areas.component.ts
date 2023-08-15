import { Component } from '@angular/core';
import { LocalService } from '../local.service';


@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent {

  constructor(
    private localStore: LocalService,
    ) {

  }
  
  getAreas() {
    return this.localStore.getData('areas');
  }

  deleteArea(id: number) {
    //eliminar area
    let areas = JSON.parse(this.getAreas() || '[]');
    areas = areas.filter((area: any) => area.id !== id);
    this.localStore.saveData('areas', JSON.stringify(areas));
    this.areas = areas; 
  }

  saveArea() {
    //guardar area
    let areas = JSON.parse(this.getAreas() || '[]');
    const codigo = (<HTMLInputElement>document.getElementById('codigo')).value;
    const nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    const lider = (<HTMLInputElement>document.getElementById('lider')).value;
    const estado = (<HTMLInputElement>document.getElementById('estado')).value;

    const area = {
      id: areas.length + 1,
      codigo: codigo,
      nombre: nombre,
      lider: lider,
      estado: estado
    }
    areas.push(area);
    this.localStore.saveData('areas', JSON.stringify(areas));
    this.areas = areas; 
    (<HTMLInputElement>document.getElementById('codigo')).value = '';
    (<HTMLInputElement>document.getElementById('nombre')).value = '';
    (<HTMLInputElement>document.getElementById('lider')).value = '';
    (<HTMLInputElement>document.getElementById('estado')).value = 'Activo';
  }

  editArea(id: number) {
    //editar area
    let areas = JSON.parse(this.getAreas() || '[]');
    const area = areas.find((area: any) => area.id === id);
    (<HTMLInputElement>document.getElementById('codigo')).value = area.codigo;
    (<HTMLInputElement>document.getElementById('nombre')).value = area.nombre;
    (<HTMLInputElement>document.getElementById('lider')).value = area.lider;
    (<HTMLInputElement>document.getElementById('estado')).value = area.estado;
    // button save
    (<HTMLInputElement>document.getElementById('save')).style.display = 'none';
    // button edit
    (<HTMLInputElement>document.getElementById('edit')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('edit')).setAttribute('data-id', area.id);
    //title
    (<HTMLInputElement>document.getElementById('exampleModalLabel')).innerHTML = 'Editar Area';

  }

  addArea() {
    //agregar area
    (<HTMLInputElement>document.getElementById('codigo')).value = '';
    (<HTMLInputElement>document.getElementById('nombre')).value = '';
    (<HTMLInputElement>document.getElementById('lider')).value = '';
    (<HTMLInputElement>document.getElementById('estado')).value = 'Activo';
    // button save
    (<HTMLInputElement>document.getElementById('save')).style.display = 'block';
    // button edit
    (<HTMLInputElement>document.getElementById('edit')).style.display = 'none';
    //title
    (<HTMLInputElement>document.getElementById('exampleModalLabel')).innerHTML = 'Agregar Area';
  }

  saveEditArea() {
    //guardar edicion de area
    let areas = JSON.parse(this.getAreas() || '[]');
    const codigo = (<HTMLInputElement>document.getElementById('codigo')).value;
    const nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    const lider = (<HTMLInputElement>document.getElementById('lider')).value;
    const estado = (<HTMLInputElement>document.getElementById('estado')).value;

    areas = areas.map((area: any) => {
      if (area.id === parseInt((<HTMLInputElement>document.getElementById('edit')).getAttribute('data-id') || '')) {
        return area = {
          id: area.id,
          codigo: codigo,
          nombre: nombre,
          lider: lider,
          estado: estado
        }
      } else {
        return area;
      }
    });
    this.localStore.saveData('areas', JSON.stringify(areas));
    this.areas = areas; 
    (<HTMLInputElement>document.getElementById('codigo')).value = '';
    (<HTMLInputElement>document.getElementById('nombre')).value = '';
    (<HTMLInputElement>document.getElementById('lider')).value = '';
    (<HTMLInputElement>document.getElementById('estado')).value = 'Activo';
    // button save
    (<HTMLInputElement>document.getElementById('save')).style.display = 'block';
    // button edit
    (<HTMLInputElement>document.getElementById('edit')).style.display = 'none';
    //title
    (<HTMLInputElement>document.getElementById('exampleModalLabel')).innerHTML = 'Crear Area';
  }



  //enviar a la vista el listado de areas
  public areas: any[] =   JSON.parse(this.getAreas() || '[]');


}
