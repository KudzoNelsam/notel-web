export interface Review {
  id: string;
  customerName: string;
  customerInitial: string;
  date: string;
  rating: number;
  comment: string;
  photos?: string[];
  commentCount: number;
}
