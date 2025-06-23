import { Injectable } from '@angular/core';
import {Review} from '../../models/review-model';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor() { }

  sampleReviews: Review[] = [
    {
      id: '1',
      customerName: 'Marie D.',
      customerInitial: 'M',
      date: '2024-01-15',
      rating: 5,
      comment: 'Excellent restaurant ! Service impeccable et cuisine délicieuse. Je recommande vivement.',
      photos: ['photo1.jpg', 'photo2.jpg'],
      commentCount: 1
    },
    {
      id: '2',
      customerName: 'Pierre L.',
      customerInitial: 'P',
      date: '2024-01-10',
      rating: 4,
      comment: 'Très bon accueil, plats savoureux. Seul bémol : un peu bruyant en soirée.',
      commentCount: 0
    },
    {
      id: '3',
      customerName: 'Sophie M.',
      customerInitial: 'S',
      date: '2024-01-08',
      rating: 5,
      comment: 'Cadre magnifique et staff aux petits soins. Une expérience mémorable !',
      photos: ['photo3.jpg'],
      commentCount: 1
    }
  ];
}
