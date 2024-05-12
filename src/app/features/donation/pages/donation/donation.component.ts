import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss'],
})
export class DonationComponent implements OnInit {
  pix: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    var value = this.activatedRoute.snapshot.queryParamMap.get('pix');
    if (value) {
      this.pix = value;
    }
  }
}
