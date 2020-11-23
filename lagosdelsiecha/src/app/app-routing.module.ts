import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestauranteComponent } from './components/restaurante/restaurante.component';
import { PescaComponent } from './components/pesca/pesca.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { FormProtocoloComponent } from './components/form-protocolo/form-protocolo.component';
import { PreparacionComponent } from './components/preparacion/preparacion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurante', component: RestauranteComponent },
  { path: 'pesca', component: PescaComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'protocolo-form', component: FormProtocoloComponent },
  { path: 'preparacion/:id', component: PreparacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
