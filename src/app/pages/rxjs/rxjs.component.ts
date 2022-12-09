import { Component, OnDestroy } from '@angular/core';
import {
  filter,
  interval,
  map,
  Observable,
  retry,
  Subscription,
  take,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: [],
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs: Subscription = new Subscription();
  constructor() {
    // this.retornaObservable()
    //   .pipe(retry(1))
    //   .subscribe(
    //     (valor: any) => console.log('Subs: ', valor),
    //     (err: any) => console.log('Error: ', err),
    //     () => console.info('Obs terminado')
    //   );
    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(100).pipe(
      map((valor) => valor + 1),
      //take(10),
      filter((valor) => (valor % 2 === 0 ? true : false))
    );
  }
  retornaObservable(): Observable<number> {
    let i: number = -1;
    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          observer.error('i llegó al valor de 2');
        }
      }, 1000);
    });
  }
}
