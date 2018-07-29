import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from "angular2-materialize";
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  idadeError: boolean = false;
  identificacaoError: boolean = false;
  emailEmpty: boolean = false;
  pokemons;

  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor(public pkmnService: PokemonService) {
  }

  ngOnInit() {
  }

  abreModal() {
  	this.modalActions.emit({action:"modal", params:['open']});
  }

  fechaModal() {
  	this.modalActions.emit({action:"modal", params:['close']});
  }

  onSubmit(cadastro) {
    console.log(cadastro);
  }

  checkIdade(idade) {
    if(idade.value < 10){
      this.idadeError = true;
    }
    else {
      this.idadeError = false;
    }
  }

  checkEmail(email) {
    if(email.value == ""){
      this.emailEmpty = true;
    }
    else {
      this.emailEmpty = false;
    }
  }

  checkIdentificacao(identificacao) {
    if(identificacao.value.length != 8) {
      this.identificacaoError = true;
    }
    else {
      this.identificacaoError = false;
    }
  }

  getPokemon(pokemon){
		console.log("Entrei na função")
    	this.pkmnService.getPokemon(pokemon.value)
    	.subscribe(
    		(res)=>{
          		this.pokemons = res;
          		console.log(res);
        	}
      	)
  	}
}
