import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { family } from 'src/app/shared/interfaces/family.interface';

@Component({
  selector: 'app-family-list-card',
  templateUrl: './family-list-card.component.html',
  styleUrls: ['./family-list-card.component.scss'],
})
export class FamilyListCardComponent implements OnInit {
  @Input() type = 'default';
  @Input() data: family[] = []

  title = 'Adote uma família e faça a diferença';
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (this.type != 'default') {
      this.title = "Outras famílias precisando de ajuda"
    }
  }

  navigate(family:any): void {
    this.router.navigate(['/family'], { queryParams: { family: family }, skipLocationChange: true });
  }
}
