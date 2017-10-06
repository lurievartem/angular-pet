import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class GuardService implements CanActivate {
  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (Math.random() * 10 >= 5) {
      return true;
    }

    this.router.navigate(['/movies']);
    return false;
  }
}
