import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

const materialComponents = [
  MatMenuModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatCardModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, materialComponents, HttpClientModule],
  exports: [materialComponents],
})
export class SharedModule {}
