import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaRoutingModule } from './tarefa-routing.module';
import { TarefaAppComponent } from './tarefa-app.component';
import { TarefaService } from './services/tarefa.service';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';


@NgModule({
  declarations: [
    TarefaAppComponent,
    ListarTarefaComponent
  ],
  imports: [
    CommonModule,
    TarefaRoutingModule
  ],
  providers: [TarefaService]
})
export class TarefaModule { }
