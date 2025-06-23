import {Observable} from 'rxjs';
import {RestResponse} from '../models/rest-response';
import {HomeResponseModel} from '../models/home-response.model';

export interface IDiscoveryService {
  getAll(): Observable<RestResponse<HomeResponseModel>>;
}
