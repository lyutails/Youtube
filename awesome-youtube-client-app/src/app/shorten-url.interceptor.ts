import { HttpInterceptorFn } from '@angular/common/http';

export const shortenUrlInterceptor: HttpInterceptorFn = (request, next) => {
  const API_KEY = 'AIzaSyCAf-6LwDXxX5ovVfBeLH5L5XBLMXSvvEM';

  const authReq = request.clone({
    setParams: { key: API_KEY },
  });

  console.log(authReq);

  return next(authReq);
};
