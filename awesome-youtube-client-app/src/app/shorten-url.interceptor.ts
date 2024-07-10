import { HttpInterceptorFn } from '@angular/common/http';

export const shortenUrlInterceptor: HttpInterceptorFn = (request, next) => {
  const authReq = request.clone({
    url: `${process.env["API_URL"]}${request.url}`,
    setParams: { key: `${process.env["API_KEY"]}` },
  });

  console.log(authReq);

  return next(authReq);
};
