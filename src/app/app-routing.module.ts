import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { FamilyDatailsComponent } from './features/family/pages/family-datails/family-datails.component';
import { DonationComponent } from './features/donation/pages/donation/donation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'family', component: FamilyDatailsComponent },
  { path: 'donation', component: DonationComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
