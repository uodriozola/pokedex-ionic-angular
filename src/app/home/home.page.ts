import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { DataService, Message } from '../services/data.service';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  pokemons: any[] = [];
  page = 0;

  constructor(
    private data: DataService,
    private pokeapiService: PokeapiService
  ) {}

  ngOnInit() {
    this.loadPokemons();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  loadPokemons(event?): void {
    this.pokeapiService.getAllPokemons(this.page).subscribe((pokemons: any) => {
      this.pokemons = this.pokemons.concat(pokemons);
      event?.target.complete();
      this.page += 1;
    });
  }
}
