import { CanActivateFn, Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';

export const authGuard = (loginService: LoginServiceService, router: Router): CanActivateFn => {
  return (route, state) => {    
    if (loginService.isLoggedIn()) {
      return true;
    }else{
      router.navigate(['login']);
      return false;
    }
  }
};
