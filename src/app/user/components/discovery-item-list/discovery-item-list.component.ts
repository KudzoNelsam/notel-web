import {Component, OnInit} from '@angular/core';
import {faHouse, faSearch, faSpinner} from '@fortawesome/free-solid-svg-icons';
import {DiscoveryItemComponent} from '../discovery-item/discovery-item.component';
import {DiscoveryItem} from '../../../shared/models/discovery-item.model';
import {DiscoveryService} from '../../../shared/services/impl/discovery.service';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';
import {PATHS} from '../../../routes/paths';

@Component({
  selector: 'app-discovery-item-list',
  imports: [
    DiscoveryItemComponent,
    FaIconComponent,
    FormsModule,
    NgClass
  ],
  templateUrl: './discovery-item-list.component.html',
  styleUrl: './discovery-item-list.component.css'
})
export class DiscoveryItemListComponent implements OnInit {
  faSearch = faSearch;
  faSpiral = faSpinner;

  constructor(private discoveryService: DiscoveryService, private route: Router) {
  }
 selectedType: string = '';
  discoveryItems!: DiscoveryItem[];
  types!: string[];

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.discoveryService.getAll(6, 0, this.searchTerm, this.selectedType).subscribe({
      next: value => {
        console.log(value);
        this.types = value.results.types;
        this.discoveryItems = value.results.etablissements;
      }
    });
  }

  protected readonly faHouse = faHouse;
  searchTerm: string = '';

  onDecouvrir() {
    this.route.navigateByUrl(`${PATHS.HOME}/${PATHS.EXPLORER}`);
  }

  onFiltrer(type: string) {
    this.selectedType = type;
    this.discoveryService.getAll(5,0,"", type).subscribe(
      {
        next: value => {
          this.types = value.results.types;
          this.discoveryItems = value.results.etablissements;
        }
      }
    );
  }

  onSearch(champ: string) {
    this.discoveryService.getAll(5,0,champ, "").subscribe(
      {
        next: value => {
          this.types = value.results.types;
          this.discoveryItems = value.results.etablissements;
        }
      }
    );
  }
}

