import { Injectable } from '@angular/core';
import {Review} from '../../models/review-model';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor() { }

  sampleReviews: Review[] = [

  ];
}
