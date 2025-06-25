import {Component, Input} from '@angular/core';
import {DiscoveryItem} from '../../../shared/models/discovery-item.model';
import {Review} from '../../../shared/models/review-model';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-explorer',
  imports: [
    NgClass
  ],
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.css'
})
export class ExplorerComponent {
  @Input() item!: DiscoveryItem;
  @Input() reviews: Review[] = [];
  @Input() phone?: string;
  @Input() isOpen?: boolean;
  @Input() closingTime?: string;
  @Input() description?: string;

  getStarsArray(rating: number): boolean[] {
    return Array(5).fill(false).map((_, index) => index < Math.floor(rating));
  }

  onItinerary() {
    console.log('Itinéraire clicked for:', this.item.title);
  }

  onReserve() {
    console.log('Réserver clicked for:', this.item.title);
  }

  onOrder() {
    console.log('Commander clicked for:', this.item.title);
  }

  onViewAllPhotos() {
    console.log('Voir tout clicked for:', this.item.title);
  }
}
