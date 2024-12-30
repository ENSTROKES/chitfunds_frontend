import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguradServiceService } from './authgurad-service.service';
import { Routes, RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private Authguardservice: AuthguradServiceService,
    private router: Router
  ) {}
  canActivate(): boolean // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree // route: ActivatedRouteSnapshot,
  {
    // if (!this.Authguardservice.gettoken()) {
    //   this.router.navigateByUrl('/pages-login');
    // }
    return this.Authguardservice.gettoken();
  }
}
