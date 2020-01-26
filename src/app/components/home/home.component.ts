import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotityService } from 'src/app/services/spotity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  error: boolean = false;
  messageError: any = {}
  loading: Boolean;
  constructor(private spotiService: SpotityService) {
    this.loading = true;
    this.spotiService.getLastReleases().subscribe(
      (res: any) => {
        this.nuevasCanciones = res,
          this.loading = false;
        console.log(this.nuevasCanciones)
      },
      err => {
        this.loading = false;
        this.error = true,
          this.messageError=  err.error.error.message,
          console.log('ocurrio el siguiente error', err.error.error.message)
      }
    )

  }

  ngOnInit() {
  }

}
