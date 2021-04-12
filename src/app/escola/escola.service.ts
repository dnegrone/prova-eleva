import { Injectable } from '@angular/core';
import { StorageService } from '../core/storage/storage.service';
import { IEscolaSalvarModel } from './escola.model';

@Injectable({ providedIn: 'root'})

export class EscolaService {
    private readonly escolaKey: string = 'escola';
    private readonly editarEscolaKey: string = 'editarEscola'; 

    constructor(private storageService: StorageService) {}

    salvar(escola: IEscolaSalvarModel) {
        const escolas = this.storageService.getSessionStorage(this.escolaKey);
        if(escolas) {            
            escolas.push(escola);
            this.storageService.setSessionStorage(this.escolaKey, escolas);
            return ;    
        }
        this.storageService.setSessionStorage(this.escolaKey, [escola]);
    }

    listarEscolas(): IEscolaSalvarModel[] {
        const escolas = this.storageService.getSessionStorage(this.escolaKey);
        return escolas || [];
    }

    listarEscolaParaEditar(): IEscolaSalvarModel[] {
        const escola = this.storageService.getSessionStorage(this.editarEscolaKey);        
        return escola.map((escola: IEscolaSalvarModel) => escola);
    }

    comboListarEscolas(): string[] {
        const escolas = this.storageService.getSessionStorage(this.escolaKey);
        if(escolas) {
            return escolas.map((escola: IEscolaSalvarModel) => escola.nomeEscola);
        }
        return [];
    }

    editarEscola(id: number) {
        const escolas = this.storageService.getSessionStorage(this.escolaKey);
        const escola = escolas.splice(id, 1);
        this.storageService.setSessionStorage('editarEscola', escola);
    }

    excluirEscola(id: number) {
        const escolas = this.storageService.getSessionStorage(this.escolaKey);
        if(escolas) {
            escolas.splice(id, 1);
            this.storageService.setSessionStorage(this.escolaKey, escolas);
            return ;
        }
    }
}