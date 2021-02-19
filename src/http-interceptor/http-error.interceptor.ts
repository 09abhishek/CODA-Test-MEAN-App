import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const idToken = localStorage.getItem("token");

      if (idToken) {
        const cloned = req.clone({
          headers: req.headers.set("Authorization", "Bearer " + idToken)
        });

        return next.handle(cloned);


      //   getRequestService(url: string): Observable<any> {
      //     let headers: HttpHeaders;
      //   const token = this.authGuard.getToken();
      //   if (token) {
      //     headers = new HttpHeaders({
      //       'Authorization': token,
      //       'Content-Type': 'application/json',
      //       'AppName': 'MPB-Web',
      //     });
      //     return this.http.get(this.baseUrl + url, {headers: headers}).pipe(
      //       catchError((err) => {
      //         switch (err.status) {
      //           case 401:
      //             this.notificationsService.add(
      //               {
      //                 severity: 'error',
      //                 summary: 'Login',
      //                 detail: 'Session Expire!!',
      //               });
      //             this._spinner.hide();
      //             this.authGuard.logOutUser();
      //             break;
      //           case 302:
      //             return observableThrowError(err);
      //           case 306:
      //             return observableThrowError(err);
      //           default:
      //             this.notificationsService.add(
      //               {
      //                 severity: 'error',
      //                 summary: 'Error',
      //                 detail: 'Error Occurred!!',
      //               });
      //             this._spinner.hide();
      //             return observableThrowError(err);
      //
      //         }
      //       }));
      //   }
      // }

      }
      else {
        return next.handle(req);
      }
    }
}
