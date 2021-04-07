import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../core/storage/storage.service';

@Component({
  selector: 'app-detalhes-escola',
  templateUrl: './detalhes-escola.component.html',
  styleUrls: ['./detalhes-escola.component.scss']
})
export class DetalhesEscolaComponent implements OnInit {

  dadosEscola = JSON.parse(sessionStorage.escola);

  @Output() nomeEscola: string = '';
  @Output() nomeResponsavelEscola: string = '';
  @Output() cnpj: number = 0;
  @Output() qtdAlunos: number = 0;

  constructor(
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.nomeEscola = this.dadosEscola.nomeEscola;
    this.nomeResponsavelEscola = this.dadosEscola.nomeResponsavelEscola;
    this.cnpj = this.dadosEscola.cnpj;
    this.qtdAlunos = this.dadosEscola.qtdAlunos;
  }

  modificarCadastroEscola() {
    this.storageService.setSessionStorage('modificar', true);
    this.router.navigateByUrl('/escola/cadastrar');
  }

  confirmaCadastroEscola(){
    alert('Escola cadastrada com sucesso!');
    this.storageService.setSessionStorage('db_escola', this.dadosEscola);
    this.storageService.removeSessionStorage('escola');
    // sessionStorage.removeItem('escola');
    this.router.navigateByUrl('/escola');
  }

}
