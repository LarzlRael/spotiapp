import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  //este decorador sirve para usarlo aqui y no declaralo en el archivo de app.component.ts
  providedIn: 'root'
})
export class SpotityService {

  constructor(private http: HttpClient) { }


  getLastReleases() {
    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBieqBoEF0tgzNch3r10jdUd6LDW8SoavCSazJey7YD7_zbbONMryP_LlfvcOf_epCRPK5pLH93FaGiMye0'
    });
    return this.http.get(url, { headers });

  }



  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&market=US&limit=10`).pipe(map(data => data['artists'].items))
  }


  getArtista(id: string) {
    return this.getQuery(`artists/${id}`)
    // .pipe(map(data => data['artists'].items))
  }
  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map(data=>data['tracks']));
  }

}
