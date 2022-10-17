import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContatoService } from './services/contato.service';
import { InserirContatoComponent } from './inserir/inserir-contato.component';
import { EditarContatoComponent } from './editar/editar-contato.component';
import { ExcluirContatoComponent } from './excluir/excluir-contato.component';
import { ListarContatoComponent } from './listar/listar-contato.component';
import { ContatoAppComponent } from './contato-app.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsContatoResolver } from './services/forms-contato.resolver';
import { VisualizarContatoResolver } from './services/visualizar-contato.resolver';


@NgModule({
  declarations: [
    ContatoAppComponent,
    InserirContatoComponent,
    EditarContatoComponent,
    ExcluirContatoComponent,
    ListarContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxMaskModule.forRoot()
  ],
  providers: [ContatoService, FormsContatoResolver, VisualizarContatoResolver]
})
export class ContatoModule { }
