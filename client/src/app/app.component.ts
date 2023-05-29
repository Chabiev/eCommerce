import {Component, OnInit} from '@angular/core';
import {HttpClient,HttpClientModule} from "@angular/common/http";
import {IProduct} from "./models/product";
import {IPagination} from "./models/pagination";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Chapp';
  products: IProduct[];

  constructor(private http: HttpClient) {  }

  ngOnInit(): void {
    this.http.get<any>('https://localhost:5001/api/products?pageSize=50').subscribe({
      next: (response: IPagination) => {
        this.products = response.data;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
