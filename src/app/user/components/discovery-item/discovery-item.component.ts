import {Component, Input, OnInit} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {DiscoveryItem} from '../../../shared/models/discovery-item.model';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-discovery-item',
  imports: [
    FaIconComponent
  ],
  templateUrl: './discovery-item.component.html',
  styleUrl: './discovery-item.component.css'
})
export class DiscoveryItemComponent {
  @Input() discoveryItem!: DiscoveryItem;
  faStar = faStar;

}
