import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../services/contato.service';
import { FormsContatoViewModel } from '../view-models/forms-contato.view-model';

@Component({
  selector: 'app-excluir-contato',
  templateUrl: './excluir-contato.component.html',
  styles: [
  ]
})
export class ExcluirContatoComponent implements OnInit {
  public contatoFormVM: FormsContatoViewModel;

  constructor(
    titulo: Title,
    private contatoService: ContatoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    titulo.setTitle('Excluir Contato - e-Agenda');
   }

  ngOnInit(): void {
    this.contatoFormVM = this.route.snapshot.data['contato']
  }

  public gravar() {

    this.contatoService.excluir(this.contatoFormVM.id)
      .subscribe({
        next: (contatoId) => this.processarSucesso(contatoId),
        error: (erro) => this.processarFalha(erro)
      })
  }

  private processarSucesso(contatoId: string): void {
    this.router.navigate(['/contatos/listar']);
  }

  private processarFalha(erro: any) {
    console.error(erro);
  }

}
