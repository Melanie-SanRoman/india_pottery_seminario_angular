import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map, Observable } from 'rxjs';
import { CeramicPiece } from './ceramic-piece-list/CeramicPiece';

const URL = 'https://6875f57f814c0dfa653a01da.mockapi.io/india_pottery/CeramicPiece';

@Injectable({
  providedIn: 'root'
})
export class CeramicData {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<CeramicPiece[]> {

    return this.http.get<CeramicPiece[]>(URL).pipe(
      tap((pieces: CeramicPiece[]) => pieces.forEach(piece => piece.quantity = 0))
    );
  }
}
