import { Component, ElementRef, ViewChild } from '@angular/core';
import { Review } from './Review';
import { ReviewsData } from '../reviews-data';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-india-pottery-reviews',
  standalone: false,
  templateUrl: './india-pottery-reviews.html',
  styleUrl: './india-pottery-reviews.scss',
})
export class IndiaPotteryReviews {
  reviews: Review[] = [];
  successMessage = false;
  @ViewChild('reviewModal') reviewModalRef!: ElementRef;

  reviewForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    calification: new FormControl(5, [Validators.required, Validators.min(1), Validators.max(5)]),
    comment: new FormControl('', [Validators.required]),
  });
  
  constructor(private reviewsData: ReviewsData) {}
  
  ngOnInit(): void {
    this.reviewsData.getReviews().subscribe((reviews: Review[]) => {
      this.reviews = reviews;
    });
  }

  submitReview() {
    if (this.reviewForm.valid) {

      const newReview: Review = this.reviewForm.value as Review;

      this.reviewsData.addReview(newReview).subscribe({
        next: (res) => {
          this.reviews.push(res);
          this.reviewForm.reset({calification: 5});
          this.successMessage = true;

          setTimeout(() => {
              this.successMessage = false;
              const modalElement = this.reviewModalRef.nativeElement;
              const modalInstance = bootstrap.Modal.getInstance(modalElement);
              if (modalInstance) {
                modalInstance.hide();
              }
          }, 3000)
        },
        error: () => {
          alert(
            'Error al enviar la reseña. Por favor, inténtalo de nuevo más tarde.'
          );
        },
      });
    }
  }
}
