import { HttpInterceptorFn } from '@angular/common/http';

export const shortenUrlInterceptor: HttpInterceptorFn = (request, next) => {
  const API_KEY = 'AIzaSyCAf-6LwDXxX5ovVfBeLH5L5XBLMXSvvEM';
  const API_URL = 'https://www.googleapis.com/youtube/v3/';

  const authReq = request.clone({
    url: `${API_URL}${request.url}`,
    setParams: { key: `${API_KEY}` },
  });

  return next(authReq);
};
