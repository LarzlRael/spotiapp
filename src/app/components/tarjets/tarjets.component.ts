import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjets',
  templateUrl: './tarjets.component.html',
  styleUrls: ['./tarjets.component.scss']
})
export class TarjetsComponent {
  @Input() items: any[] = []

  constructor(
    private router:Router
  ) { }

  verArtista(item: any) {
    let artistaid;
    if (item.type === 'artist') {
      artistaid = item.id;
    } else {
      artistaid = item.artists[0].id;
    }
    console.log(artistaid)
    this.router.navigate(['/artists',artistaid])
  }

}
