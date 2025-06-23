import {Injectable} from '@angular/core';
import {IDiscoveryService} from '../IDiscoveryService';
import {DiscoveryItem} from '../../models/discovery-item.model';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RestResponse} from '../../models/rest-response';
import {ENDPOINTS} from '../../../../environments/endPoints';
import {HomeResponseModel} from '../../models/home-response.model';

@Injectable({
  providedIn: 'root'
})
export class DiscoveryService implements IDiscoveryService {


  discoveryItems: DiscoveryItem[] = [
    {
      id: 1,
      profil: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      title: "Le Grand Bistro",
      location: "Paris, France",
      nbrAvis: 5,
      rating: 4,
      tags: ["Français", "Gastronomique", "Terrasse"],
      type : "Restaurant"
    },
    {
      id: 2,
      profil: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      title: "Le Grand Bistro",
      location: "Paris, France",
      nbrAvis: 5,
      rating: 5,
      tags: ["Français", "Gastronomique", "Terrasse"],
      type : "Hotel"
    },
  ];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<RestResponse<HomeResponseModel>> {
    return this.http.get<RestResponse<HomeResponseModel>>(ENDPOINTS.ETABLISSEMENTS+"?size=6");
    // return of(this.discoveryItems);
  }
}
