import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarEscolaComponent } from './escola/listar/listar-escola.component';
import { CadastrarEscolaComponent } from './escola/cadastrar/cadastrar-escola.component';
import { DetalhesEscolaComponent } from './escola/detalhes/detalhes-escola.component';

const routes: Routes = [
  {
    path: 'escola',
    component: ListarEscolaComponent
  },
  {
    path: 'escola/cadastrar',
    component: CadastrarEscolaComponent
  },
  {
    path: 'escola/detalhes',
    component: DetalhesEscolaComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
