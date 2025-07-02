import {DiscoveryItem} from './discovery-item.model';
import {Review} from './review-model';

export interface DiscoveryItemDetails extends DiscoveryItem {
  description: string;
  phone: string; // <- correspond à telephone
  isOpen: boolean;
  closingTime: string; // <- correspond à heureFermeture
  openingTime: string; // <- correspond à heureOuverture
  reviews: Review[];   // <- transformé à partir de avis[]
}
