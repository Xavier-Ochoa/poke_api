import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {
  pokemon: any = null;
  loading = false;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) this.loadPokemon(name);
  }

  loadPokemon(name: string) {
    this.loading = true;
    this.error = false;
    this.pokemonService.getPokemonDetails(name).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      },
    });
  }

  // Convierte el ID a número con ceros → #001
  formatId(id: number): string {
    return '#' + String(id).padStart(3, '0');
  }

  // Porcentaje de la stat (máximo base es ~255)
  statPercent(value: number): number {
    return Math.min((value / 255) * 100, 100);
  }
}