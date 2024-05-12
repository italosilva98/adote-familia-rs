import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../../services/family.service';
import { family } from 'src/app/shared/interfaces/family.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-family-datails',
  templateUrl: './family-datails.component.html',
  styleUrls: ['./family-datails.component.scss'],
})
export class FamilyDatailsComponent implements OnInit {
  jsonData: family[] = [];
  familyFiltered!: any;
  familyName: any;
  fullFamily: any;
  constructor(
    private dataService: FamilyService,
    private activatedRoute: ActivatedRoute
  ) {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((param) => {
      this.familyName = param['family'];
      console.log(this.familyName);
      this.dataService.getJsonData().subscribe((data) => {
        this.jsonData = data;

        this.jsonData.forEach((family) => {
          if (family.NOME == this.familyName) {
            this.fullFamily = family
            this.familyFiltered = family;
          }
        });
        window.scrollTo(0, 0);
      });
    });
  }
}
