import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { family } from 'src/app/shared/interfaces/family.interface';

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.scss'],
})
export class FamilyInfoComponent implements OnInit, OnChanges {
  @Input() data: family = {};

  family: family = {};

  constructor(private router: Router) {}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.family = changes['data'].currentValue;
    }
  }

  navigate(): void {
    this.router.navigate(['/donation'], { queryParams: { pix: this.family.PIX }, skipLocationChange: true });
  }
}
