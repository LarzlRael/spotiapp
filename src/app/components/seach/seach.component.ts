import { Component, OnInit } from '@angular/core';
import { SpotityService } from 'src/app/services/spotity.service';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.scss']
})
export class SeachComponent {

  loading: Boolean;
  artistas: any[] = []
  constructor(
    private spotifyService: SpotityService
  ) {
  }
  
  buscar(termino: string) {
    this.loading = true;
    this.spotifyService.getArtistas(termino).subscribe(
      (res: any) => {
        this.artistas = res,
          console.log(this.artistas),
          this.loading = false

      }
    )
  }


}
