import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  response: unknown;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .post('https://jsonplaceholder.typicode.com/posts', null, {
        headers: {
          something: 'special',
        },
      })
      .pipe(
        catchError((error) => {
          console.error(error);

          return EMPTY;
        })
      )
      .subscribe((response) => {
        console.log(response);

        this.response = response;
      });
  }
}
