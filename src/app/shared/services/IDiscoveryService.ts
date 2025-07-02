import {Observable} from 'rxjs';
import {RestResponse} from '../models/rest-response';
import {HomeResponseModel} from '../models/home-response.model';
import {DiscoveryItemDetails} from '../models/discovery-detail.model';

export interface IDiscoveryService {
  getAll(size?: number,  page?: number, champ?:string, type?:string): Observable<RestResponse<HomeResponseModel>>;
  getOne(id : number) : Observable<RestResponse<DiscoveryItemDetails>>;
}
