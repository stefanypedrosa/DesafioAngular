import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaIdComponent } from './tarefa-id.component';

describe('TarefaIdComponent', () => {
  let component: TarefaIdComponent;
  let fixture: ComponentFixture<TarefaIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
