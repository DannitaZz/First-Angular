import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

interface Idata {
  id: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public data: Idata[] = [];
  public url: string = 'https://ce.gocodigo.net/content/';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    this.apiService.getData().subscribe(data => {
      this.data = data;
    });
  }


}
