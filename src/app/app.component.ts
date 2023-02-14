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
    const data = new FormData();

    data.append('kiss', 'kiss');

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        anything: 'fetchial',
      },
    })
      .then((response) => {
        console.log(response);
        return response.json().then(console.log);
      })
      .catch(console.error);

    this.http
      .post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          json: 'test',
        },
        {
          responseType: 'json',
          headers: {
            something: 'special',
          },
          params: {
            version: 2,
          },
        }
      )
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
