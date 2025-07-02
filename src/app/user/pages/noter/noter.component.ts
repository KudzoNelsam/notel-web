import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-noter',
  templateUrl: './noter.component.html',
  imports: [
    FormsModule,
    NgClass
  ],
  styleUrls: ['./noter.component.css']
})
export class NoterComponent {
  showScan = false;
  showReviewForm = false;
  currentEstablishment = '';
  newAvis = { titre: '', description: '', note: 3 }; // Default note
  avisList = [
    {
      id: 1,
      nomEtablissement: 'Restaurant Le Petit Jardin',
      note: 4,
      date: '30 juin 2025',
      titre: 'Excellent repas en famille',
      description: 'Très bon restaurant avec une ambiance chaleureuse. Le service était impeccable et les plats délicieux.',
      nombreCommentaires: 1
    },
    {
      id: 2,
      nomEtablissement: 'Café des Arts',
      note: 5,
      date: '27 juin 2025',
      titre: 'Mon café préféré !',
      description: 'Parfait pour travailler ou prendre un café entre amis. Wifi gratuit, ambiance cosy, excellents croissants.',
      nombreCommentaires: 0
    }
  ];

  onScanQRCode() {
    this.showScan = true;
    // Simulate QR code scan (replace with actual QR scanner logic if using ngx-scanner)
    this.currentEstablishment = 'Le Petit Bistrot Parisien'; // Example establishment
  }

  submitAvis() {
    if (this.newAvis.titre || this.newAvis.description) {
      const newReview = {
        id: this.avisList.length + 1,
        nomEtablissement: this.currentEstablishment || 'Nouvel établissement',
        note: this.newAvis.note,
        date: new Date().toLocaleDateString('fr-FR'),
        titre: this.newAvis.titre,
        description: this.newAvis.description,
        nombreCommentaires: 0
      };
      this.avisList.push(newReview);
      this.newAvis = { titre: '', description: '', note: 3 };
      this.showReviewForm = false;
    }
  }
}
