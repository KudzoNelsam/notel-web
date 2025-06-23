import { Component } from '@angular/core';
import {DiscoveryItemListComponent} from '../../components/discovery-item-list/discovery-item-list.component';

@Component({
  selector: 'app-home',
  imports: [
    DiscoveryItemListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
