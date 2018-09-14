import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
// import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import * as fromContador from './contador/contador.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-example';
  contador: number;

  constructor(private store: Store<AppState>) {
    this.contador = 10;

    // observer to change the store
    // this.store.subscribe( state => {
    //   this.contador = state.contador;
    //   console.log(state);
    // });

    // Other way, select is more especific status
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  public incrementar(): void {
    const accion = new fromContador.IncrementarAction();
    this.store.dispatch(accion);
  }

  public decrementar(): void {
    const accion = new fromContador.DecrementarAction();
    this.store.dispatch(accion);
  }
}
