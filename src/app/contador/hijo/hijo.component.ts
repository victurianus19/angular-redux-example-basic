import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  public contador: number;

  constructor(private store: Store<AppState>) { }

  public ngOnInit() {
    // Listening the changes
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }

  public multiplicar(): void {
    const accion = new MultiplicarAction(5); // create actions
    this.store.dispatch(accion); // storage executes of the reducer to change the state
  }

  public dividir(): void {
    const accion = new DividirAction(2); // create actions
    this.store.dispatch(accion); // storage executes of the reducer to change the state
  }

  public resetNieto(nuevoContador: number): void {
    this.contador = nuevoContador;
  }

}
