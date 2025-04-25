import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PensamientoComputacionalComponent } from './components/pensamiento-computacional/pensamiento-computacional.component';
import { HerramientasComponent } from './components/herramientas/herramientas.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: PensamientoComputacionalComponent },
  { path: 'herramientas', component: HerramientasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
