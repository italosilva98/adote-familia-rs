import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { FamilyModule } from './features/family/family.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoCacheInterceptor } from './core/interceptors/cache-interceptors';
import { DonationComponent } from './features/donation/pages/donation/donation.component';

@NgModule({
  declarations: [AppComponent, DonationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FamilyModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NoCacheInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
