import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataSource;
  displayedColumns: string[] = ['type', 'trade_id', 'product_id', 'sequence', 'time'];

  constructor(private http: HttpClient) {
  }

  search(event) {
    return this.http.get(`http://localhost:3000/heartbeat/?value=${event.target.value}`).subscribe((res) => {
      console.log(res);
      this.dataSource = res;
    });
  }
}
