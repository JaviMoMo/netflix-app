import { Component, Input, OnInit } from '@angular/core';
import { Series } from '../models/netflix-model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
@Input() public series!: Series;
  constructor() { }

  ngOnInit(): void {
  }

}
