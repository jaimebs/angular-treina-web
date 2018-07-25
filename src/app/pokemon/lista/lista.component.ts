import { PokemonService } from './../pokemon.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  filtroNome: string;

  pokemons = [];

  filtrarNome() {

    if (this.filtrarNome) {
      return this.pokemons.filter(item => {
        return item.name.toLowerCase().indexOf(this.filtroNome.toLowerCase()) !== -1;
        // || item.id.indexOf(this.filtroNome.toLowerCase()) !== -1
      });
    } else {
      return this.pokemons;
    }
  }

  getNumeroDaApi(_resource) {
    const _id = parseInt(_resource.replace(/.*\/(\d+)\/$/, '$1'));
    return _id;
  }

  getPokemons() {
    this.pokemonService.getAll()
      .subscribe(resultado => {
        this.pokemons = resultado.pokemon.map(_item => {
          _item.id = this.getNumeroDaApi(_item.resource_uri);
          return _item;
        });
      });
  }

  ngOnInit() {
    this.getPokemons();
  }

}
