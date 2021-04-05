import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEscolaComponent } from './cadastrar-escola.component';

describe('CadastrarEscolaComponent', () => {
  let component: CadastrarEscolaComponent;
  let fixture: ComponentFixture<CadastrarEscolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEscolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
