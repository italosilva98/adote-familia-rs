import { Component, OnInit } from '@angular/core';
import { FamilyService } from 'src/app/features/family/services/family.service';
import { family } from 'src/app/shared/interfaces/family.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  jsonData: family[] = [];
  // teste = [
  //   { id: '1' },
  //   { id: '2' },
  //   { id: '3' },
  //   { id: '4' },
  //   { id: '5' },
  //   { id: '6' },
  //   { id: '8' },
  //   { id: '9' },
  //   { id: '10' },
  //   { id: '11' },
  //   { id: '12' },
  //   { id: '13' },
  //   { id: '14' },
  //   { id: '15' },
  //   { id: '16' },
  //   { id: '17' },
  //   { id: '18' },
  //   { id: '19' },
  //   { id: '20' },
  //   { id: '21' },
  //   { id: '22' },
  //   { id: '23' },
  //   { id: '24' },
  //   { id: '25' },
  //   { id: '26' },
  //   { id: '27' },
  //   { id: '28' },
  //   { id: '28' },
  //   { id: '30' },
  //   { id: '31' },
  //   { id: '32' },
  //   { id: '33' },
  // ];

  // qtdPaginas = 0;

  constructor(private dataService: FamilyService) {}

  ngOnInit(): void {
    this.dataService.getJsonData().subscribe((data) => {
      this.jsonData = data;
    });

    // this.qtdPaginas = Math.ceil(this.teste.length / 10);
    // console.log(this.qtdPaginas);
  }
}
