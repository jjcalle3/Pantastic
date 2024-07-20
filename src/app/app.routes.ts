import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { PrincipalComponent } from './principal/principal.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'catalogo',component:CatalogoComponent},
    {path:'registro',component:RegistroComponent},
    {path:'login',component:LoginComponent}
    

];
