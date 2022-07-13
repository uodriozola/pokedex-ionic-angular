import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  pokemons: any[] = [];

  constructor(private data: DataService, private pokeapiService: PokeapiService) {}

  ngOnInit() {
    this.pokeapiService.getAllPokemons().subscribe((pokemons: any) => this.pokemons = pokemons);
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}
