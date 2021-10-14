import { Component, OnInit, NgModule} from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {

  images = ['../../assets/R.jpg', '../../assets/s.jpg', '../../assets/t.jpg','../../assets/f.png'];

  constructor() { }

  ngOnInit() {
  }

}
