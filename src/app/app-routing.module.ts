import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { AreasComponent } from './areas/areas.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '' , component: AppComponent},
  { path: 'areas', component: AreasComponent }
  , { path: 'empleados', component: EmpleadosComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
