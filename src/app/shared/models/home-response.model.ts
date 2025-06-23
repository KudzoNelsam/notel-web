import {DiscoveryItem} from './discovery-item.model';

export interface HomeResponseModel {
  types : string[];
  etablissements: DiscoveryItem[];
}
