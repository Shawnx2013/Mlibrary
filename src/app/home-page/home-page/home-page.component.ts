import { Component, OnInit } from '@angular/core';
import { Movie } from '../../types/types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movies: Movie [];

  constructor() { }

  ngOnInit() {
  }

}
