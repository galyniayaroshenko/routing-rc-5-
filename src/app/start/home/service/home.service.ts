import { Injectable, OnInit }         from '@angular/core';

import { HttpExtService } from '../../../service/http.service';

@Injectable()
export class HomeService implements OnInit{

  constructor (private httpExtService: HttpExtService) { }
 
  ngOnInit() { this.getAll(); }

  getAll() {
    return this.httpExtService.get('/users')
  }
}