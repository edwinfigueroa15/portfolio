import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class PdfService {

  private _http = inject(HttpClient);
  // constructor(private _http: HttpClient) { }

  async downloadCV() {
    const requets$ = this._http.get('assets/pdf/cv.pdf', { responseType: 'blob' });
    return await lastValueFrom(requets$);
  }

}
