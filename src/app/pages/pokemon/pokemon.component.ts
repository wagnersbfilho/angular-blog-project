import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";
import {PokemonModel} from "../../model/PokemonModel";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: PokemonModel;

  constructor(
          private route: ActivatedRoute,
          private navegador: Router,
          private service: PokemonService) {

    console.log("pokemon construct");

    // inicializar objeto
    this.pokemon = {
      id: 0,
      name: '',
      sprites: {
        front_default: ''
      },
      types:[]
    };

  }

  ngOnInit(): void {

    let idPokemon:any = "";
    this.route.paramMap.subscribe(
      value => idPokemon = value.get("id")
    );

    this.getpokemon(idPokemon);

  }

  getpokemon(idPokemon: string) {
    this.service.getPokemon(idPokemon).subscribe({
      next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          };
        console.log(this.pokemon);
      },
      error: (erro) => {
        this.pokemon = {
          id: 0,
          name: 'not found',
          sprites: {front_default: this.setImage()},
          types: []
        }
        console.log("ERRO getPokemon: "+erro.message)
      }
    });
  }

  setImage(): string {
    return '../../../assets/img/default.png';
  }
}
