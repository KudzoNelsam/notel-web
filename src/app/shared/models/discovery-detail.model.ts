import {DiscoveryItem} from './discovery-item.model';

export interface DiscoveryItemDetails extends DiscoveryItem {
  phone?: string;
  isOpen?: boolean;
  closingTime?: string;
  description?: string;
  photos?: string[];
}
