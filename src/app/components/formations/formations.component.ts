import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/models/formation';
import { FormationService } from 'src/services/formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  
  name = "Formation";

  formation: Array<Formation>;

  constructor() { 
    this.formation = FormationService.getFormations();
  }

  ngOnInit(): void {
  }

}
