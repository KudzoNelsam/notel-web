import {DiscoveryItemDetails} from '../../models/discovery-detail.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Mapper {

  mapResponseToDetails(data: any): DiscoveryItemDetails {
    return {
      id: data.id,
      profil: data.profil,
      title: data.title,
      location: data.location,
      rating: data.rating,
      nbrAvis: data.nbrAvis,
      tags: data.tags,
      type: data.type,
      description: data.description,
      phone: data.telephone,
      isOpen: data.isOpen,
      openingTime: data.heureOuverture,
      closingTime: data.heureFermeture,
      reviews: data.avis.map((a: any) => ({
        id: a.id,
        rating: a.note,
        comment: a.description,
        title: a.titre,
        date: a.date,
        customerName: a.utilisateur,
        photos: a.images,
        commentCount: a.nbrCommentaires
      }))
    };
  }

}
