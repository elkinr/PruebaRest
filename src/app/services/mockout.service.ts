import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockoutService {
  isLoggedIn = true;
  user = { name: 'Test User'}
  constructor() { }
}
