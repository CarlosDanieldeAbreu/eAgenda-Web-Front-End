import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ContatoService } from '../services/contato.service';
import { FormsContatoViewModel } from '../view-models/forms-contato.view-model';

@Component({
  selector: 'app-inserir-contato',
  templateUrl: './inserir-contato.component.html',
  styles: [
  ]
})
export class InserirContatoComponent implements OnInit {
  public contatoFormVM: FormsContatoViewModel;
  public form: FormGroup;

  constructor(
    titulo: Title,
    private formBuilder: FormBuilder,
    private contatoService: ContatoService,
    private router: Router
  ) {
    titulo.setTitle('Cadastrar Contato - e-Agenda');
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: new FormControl(""),
      nome: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      telefone:	new FormControl("", [Validators.required, Validators.pattern(/^\([1-9]{2}\) [0-9]{4,5}-[0-9]{4}$/)]),
      empresa: new FormControl("", [Validators.required, Validators.minLength(2)]),
      cargo: new FormControl("", [Validators.required, Validators.minLength(2)])
    });
  }

  get nome() {
    return this.form.get('nome');
  }

  get email() {
    return this.form.get('email');
  }

  get telefone() {
    return this.form.get('telefone');
  }

  get empresa() {
    return this.form.get('empresa');
  }

  get cargo() {
    return this.form.get('cargo');
  }

  public gravar() {
    if (this.form.invalid) return;

    this.contatoFormVM = Object.assign({}, this.contatoFormVM, this.form.value);
    console.log(this.contatoFormVM);
    this.contatoService.inserir(this.contatoFormVM)
      .subscribe({
        next: (contatoInserido) => this.processarSucesso(contatoInserido),
        error: (erro) => this.processarFalha(erro)
      })
  }

  private processarSucesso(contato: FormsContatoViewModel): void {
    this.router.navigate(['/contatos/listar']);
  }

  private processarFalha(erro: any) {
    if (erro) {
      console.error(erro);
    }
  }
}
