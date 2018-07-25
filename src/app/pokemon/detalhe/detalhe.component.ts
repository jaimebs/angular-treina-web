import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit, OnDestroy {

  constructor(private activatedRoute: ActivatedRoute) { }

  pokemon = {}; // Objeto criado.
  urlSubscribe: Subscription // Variável criada para escutar mudanças na url.

  ngOnInit() {
    // this.pokemon = {
    //   id: this.activatedRoute.snapshot.params['id'],
    //   nome: this.activatedRoute.snapshot.params['nome']
    // }

    // Fica escutando as alterações da url.
    this.urlSubscribe = this.activatedRoute.params.subscribe(params => {
      this.pokemon = {
        id: params['id'],
        nome: params['nome']
      };
    });
  }

  ngOnDestroy() {
      // Destroi a escuta da url.
      this.urlSubscribe.unsubscribe()
  }

}
