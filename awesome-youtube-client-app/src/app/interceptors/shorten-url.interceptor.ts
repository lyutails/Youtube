import { HttpInterceptorFn } from '@angular/common/http';

import { environment } from '../../environment';

export const shortenUrlInterceptor: HttpInterceptorFn = (request, next) => {
  const API_URL = 'https://www.googleapis.com/youtube/v3/';

  const authReq = request.clone({
    url: `${API_URL}${request.url}`,
    setParams: {
      key: `${environment.API_KEY}`,
    },
  });

  return next(authReq);
};
