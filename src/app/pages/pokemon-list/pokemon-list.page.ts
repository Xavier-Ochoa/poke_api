import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {
  allPokemons: any[] = [];
  filteredPokemons: any[] = [];
  searchTerm = '';
  loading = false;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.loading = true;
    this.pokemonService.getPokemons(100000).subscribe({
      next: (response) => {
        this.allPokemons = response.results;
        this.filteredPokemons = [];  // empieza vacío hasta que el usuario busque
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }

  onSearch(event: any) {
    const term = event.target.value?.toLowerCase().trim() ?? '';
    this.searchTerm = term;
    if (term.length < 2) {
      this.filteredPokemons = [];
      return;
    }
    this.filteredPokemons = this.allPokemons
      .filter(p => p.name.includes(term))
      .slice(0, 30); // máximo 30 resultados
  }

  goToDetail(name: string) {
    this.router.navigate(['/pokemon-detail', name]);
  }
}