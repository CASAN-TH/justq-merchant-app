import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopGuard implements CanActivate {
  constructor(
    private router: Router,
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/shop-register']);
      //this.router.navigate(['/shoptype']);
      // this.router.navigate(['/shop']);
      return false;
  }
}
