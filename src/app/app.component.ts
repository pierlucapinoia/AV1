import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AViaggi1';
  loadedFeature = '';
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
