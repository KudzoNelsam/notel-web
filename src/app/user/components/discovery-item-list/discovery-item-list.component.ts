import {Component, OnInit} from '@angular/core';
import {faHouse, faSearch, faSpinner} from '@fortawesome/free-solid-svg-icons';
import {DiscoveryItemComponent} from '../discovery-item/discovery-item.component';
import {DiscoveryItem} from '../../../shared/models/discovery-item.model';
import {DiscoveryService} from '../../../shared/services/impl/discovery.service';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-discovery-item-list',
  imports: [
    DiscoveryItemComponent,
    FaIconComponent
  ],
  templateUrl: './discovery-item-list.component.html',
  styleUrl: './discovery-item-list.component.css'
})
export class DiscoveryItemListComponent implements OnInit {
  faSearch = faSearch;
  faSpiral = faSpinner;

  constructor(private discoveryService: DiscoveryService) {
  }

  discoveryItems!: DiscoveryItem[];
  types!: string[];

  ngOnInit(): void {
    this.discoveryService.getAll().subscribe(
      {
        next: value => {
          this.types = value.results.types;
          this.discoveryItems = value.results.etablissements;
        }
      }
    );
  }

  protected readonly faHouse = faHouse;

  onDecouvrir() {
    console.log("onDecouvrir");
  }

  onFiltrer(type: string) {
    
  }
}

