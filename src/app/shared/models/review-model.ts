export interface Review {
  id: number;
  rating: number;         // <- correspond à note
  comment: string;        // <- correspond à description
  title: string;          // <- correspond à titre
  date: string;
  customerName: string;   // <- correspond à utilisateur
  photos: string[];
  commentCount: number;   // <- correspond à nbrCommentaires
}

