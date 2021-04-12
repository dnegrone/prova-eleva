import { Injectable } from '@angular/core';
import { StorageService } from '../core/storage/storage.service';
import { ITurmaSalvarModel } from './turma.model';

@Injectable({ providedIn: 'root' })

export class TurmaService {
  private readonly turmaKey: string = 'turma';
  private readonly editarTurmaKey: string = 'editarTurma';

  constructor(private storageService: StorageService) { }

  salvar(turma: ITurmaSalvarModel) {
    const turmas = this.storageService.getSessionStorage(this.turmaKey);
    if(turmas) {            
        turmas.push(turma);
        this.storageService.setSessionStorage(this.turmaKey, turmas);
        return ;    
    }
    this.storageService.setSessionStorage(this.turmaKey, [turma]);
  }

  listarTurmas(): ITurmaSalvarModel[] {
    const turmas = this.storageService.getSessionStorage(this.turmaKey);
    return turmas || [];
  }

  listarTurmaParaEditar(): ITurmaSalvarModel[] {
    const turma = this.storageService.getSessionStorage(this.editarTurmaKey);        
    return turma.map((turma: ITurmaSalvarModel) => turma);
  }

  editarTurma(id: number) {
    const turmas = this.storageService.getSessionStorage(this.turmaKey);
    const turma = turmas.splice(id, 1);
    this.storageService.setSessionStorage('editarTurma', turma);
  }

  excluirTurma(id: number) {
    const turmas = this.storageService.getSessionStorage(this.turmaKey);
    if(turmas) {
        turmas.splice(id, 1);
        this.storageService.setSessionStorage(this.turmaKey, turmas);
        return ;
    }
  }

}
