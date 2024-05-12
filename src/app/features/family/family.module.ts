import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyDatailsComponent } from './pages/family-datails/family-datails.component';
import { FamilyListCardComponent } from './components/family-list-card/family-list-card.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { FamilyInfoComponent } from './components/family-info/family-info.component';

@NgModule({
  declarations: [FamilyDatailsComponent, FamilyListCardComponent, SlideshowComponent, FamilyInfoComponent],
  imports: [CommonModule, SharedModule],
  exports: [FamilyDatailsComponent, FamilyListCardComponent],
})
export class FamilyModule {}
