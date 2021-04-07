import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../core/storage/storage.service';

@Component({
  selector: 'app-listar-escola',
  templateUrl: './listar-escola.component.html',
  styleUrls: ['./listar-escola.component.scss']
})
export class ListarEscolaComponent implements OnInit {

  @Output() escola: any;

  constructor(
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.startDb('db_escola');
  }

  startDb(key: string) {
    if(this.storageService.hasSessionStorage(key)) {
      this.escola = this.storageService.getSessionStorage(key);
      return this.escola;
    }
    
    // this.storageService.getSessionStorage('db_escola');
  }

  cadastrar() {
    this.router.navigate(['escola','cadastrar']);
  }
  editar() {
    return alert('Editar')
  }

  detalhes() {
    return alert('Entrando em detalhes da escola')
  }

  excluir() {
    return alert('A escola será excluída.')
  }

}
