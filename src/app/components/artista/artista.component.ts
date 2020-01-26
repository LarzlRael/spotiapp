import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotityService } from 'src/app/services/spotity.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent {

  loadingArtist: Boolean;
  artista: any = {};
  topTracks: any = {};

  constructor(private router: ActivatedRoute,
    private spotifyS: SpotityService) {
    this.loadingArtist = true;
    this.getUrlId();
  }

  getUrlId() {
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  getArtista(id: string) {
    this.spotifyS.getArtista(id).subscribe(
      artista => {
        this.artista = artista,
          console.log(this.artista),
          this.loadingArtist = false
      }
    )
  }
  getTopTracks(id: string) {
    this.spotifyS.getTopTracks(id).subscribe(
      topTraks => {
        this.topTracks= topTraks
        console.log(this.topTracks);
      }
    )
  }


}
