import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.scss']
})
export class ProComponent implements OnInit {

  name = "Expériences Professionnelles"

  constructor() { }

  ngOnInit(): void {
  }

}
