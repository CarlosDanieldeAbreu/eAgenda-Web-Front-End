import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { EditarTarefaComponent } from './editar/editar-tarefa.component';
import { InserirTarefaComponent } from './inserir/inserir-tarefa.component';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { FormsTarefaResolver } from './services/forms-tarefa.resolver';
import { TarefaAppComponent } from './tarefa-app.component';

const routes: Routes = [
  {
    path: '', component: TarefaAppComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'listar', pathMatch: 'full'},
      { path: 'listar', component: ListarTarefaComponent},
      { path: 'inserir', component: InserirTarefaComponent},
      {
        path: 'Editar/:id',
        component: EditarTarefaComponent,
        resolve: { tarefa: FormsTarefaResolver}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefaRoutingModule { }
