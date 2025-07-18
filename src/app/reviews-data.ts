import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Review } from './india-pottery-reviews/Review';

const URL = 'https://6875f57f814c0dfa653a01da.mockapi.io/india_pottery/reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsData {

  constructor(private http: HttpClient) { }

  public addReview(review: Review): Observable<Review>{
    return this.http.post<Review>(URL, review);
  }

  public getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(URL);
  }
}
