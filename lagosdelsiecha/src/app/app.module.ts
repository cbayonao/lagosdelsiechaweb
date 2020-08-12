import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';

// Module routing
import { AppRoutingModule } from './app-routing.module';
// Components
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RestauranteComponent } from './components/restaurante/restaurante.component';
import { PescaComponent } from './components/pesca/pesca.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { MatrimonioComponent } from './components/matrimonio/matrimonio.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { VisitavirtualComponent } from './components/visitavirtual/visitavirtual.component';
import { MainNavComponent } from './components/appComponents/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './components/appComponents/footer/footer.component';
import { MainCarouselComponent } from './components/appComponents/main-carousel/main-carousel.component';
import { FormProtocoloComponent } from './components/form-protocolo/form-protocolo.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActividadesComponent,
    MatrimonioComponent,
    EventosComponent,
    ContactanosComponent,
    MapaComponent,
    VisitavirtualComponent,
    RestauranteComponent,
    PescaComponent,
    MainNavComponent,
    FooterComponent,
    MainCarouselComponent,
    FormProtocoloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
