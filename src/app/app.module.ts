import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { SidebarModule } from 'ng2-sidebar-css3';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { SegundaComponent } from './segunda/segunda.component';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ImageService } from './image/shared/image.service';
import { ImageComponent } from './image/image.component';
import {HttpModule} from '@angular/http';

const appRoutes: Routes = [
  { path: 'segunda', component: SegundaComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca', component: AcercaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SegundaComponent,
    InicioComponent,
    AcercaComponent,
    MenuLateralComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    Ng2DragDropModule.forRoot(),
    SidebarModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'segunda',
        component: SegundaComponent
      },
      { path: 'inicio', component: InicioComponent },
      { path: 'acerca', component: AcercaComponent },
    ])
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
