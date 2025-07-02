import {Component, Input, OnInit} from '@angular/core';
import {DiscoveryItemDetails} from '../../../shared/models/discovery-detail.model';
import {DiscoveryService} from '../../../shared/services/impl/discovery.service';
import {ActivatedRoute} from '@angular/router';
import {Mapper} from '../../../shared/services/mappers/Mapper';

@Component({
  selector: 'app-explorer',
  standalone: true,
  templateUrl: './explorer.component.html',
  imports: [],
  styleUrl: './explorer.component.css'
})
export class ExplorerComponent implements OnInit {

  @Input() item!: DiscoveryItemDetails;
  idEtablissement : number = 1;

  constructor(private discoveryService: DiscoveryService,
              private activatedRoute: ActivatedRoute,
              private mapper : Mapper) {
  }

  ngOnInit(): void {
    // récupérer l'id de la requête
    this.idEtablissement = this.activatedRoute.snapshot.params['id'] ?? 1;
    this.discoveryService.getOne(this.idEtablissement).subscribe(
      {
        next: result => {
          console.log(result.results);
          this.item = this.mapper.mapResponseToDetails(result.results);
        }
      }
    )


  }


  getStarsArray(length : number = 5): boolean[] {
    return Array(length).fill(false).map((_, i) => i < Math.round(this.item.rating));
  }

  onItinerary() {
    console.log('Itinéraire pour :', this.item.title);
  }

  onReserve() {
    console.log('Réserver pour :', this.item.title);
  }

  onOrder() {
    console.log('Commander pour :', this.item.title);
  }

  onViewAllPhotos() {
    console.log('Voir tout les photos pour :', this.item.title);
  }
}
