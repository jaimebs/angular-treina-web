import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  pokemon = {}

  ngOnInit() {
    // this.pokemon = {
    //   id: this.activatedRoute.snapshot.params['id'],
    //   nome: this.activatedRoute.snapshot.params['nome']
    // }

    this.activatedRoute.params.subscribe(params => {
      this.pokemon = {
        id: params['id'],
        nome: params['nome']
      }
    })
  }

}
