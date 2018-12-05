import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  model: any = {};
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
