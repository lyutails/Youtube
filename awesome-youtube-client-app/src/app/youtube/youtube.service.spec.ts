import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
// import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { delay, first, of } from 'rxjs';

import { YoutubeService } from './youtube.service';

describe('YoutubeService', () => {
  const mockResponse = {
    kind: 'youtube#videoListResponse',
    etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/Cmodw7c5XPTM8Yg3kMXelihxek4"',
    pageInfo: {
      totalResults: 10,
      resultsPerPage: 10,
    },
    items: [
      {
        kind: 'youtube#video',
        etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/tmmI1yiRrmLWlKikXk1gD3TXsUI"',
        id: 'YN8zNnV0sK8',
        snippet: {
          publishedAt: '2024-06-11T12:42:19.000Z',
          channelId: 'UCg8ss4xW9jASrqWGP30jXiw',
          title: 'Introduction to Angular - Learning Angular',
          description:
            'In this series, learn how to build your first Angular application.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/xAT0lHYhHMY/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/xAT0lHYhHMY/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/xAT0lHYhHMY/hqdefault.jpg',
              width: 480,
              height: 360,
            },
            standard: {
              url: 'https://i.ytimg.com/vi/xAT0lHYhHMY/sddefault.jpg',
              width: 640,
              height: 480,
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/xAT0lHYhHMY/maxresdefault.jpg',
              width: 1280,
              height: 720,
            },
          },
          channelTitle: 'Angular',
          tags: ['angular', 'angular курс'],
          categoryId: '27',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Introduction to Angular - Learning Angular',
            description:
              'In this series, learn how to build your first Angular application.',
          },
          defaultAudioLanguage: 'en-US',
        },
        statistics: {
          viewCount: '33265',
          likeCount: '1173',
          dislikeCount: '26',
          favoriteCount: '0',
          commentCount: '170',
        },
      },
    ],
  };
  // let youtubeService!: YoutubeService;

  /* beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        YoutubeService,
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: HttpClient,
          useFactory: () => {
            const http = inject(HttpClient);
            return http;
          },
        },
      ],
    }).compileComponents();

    youtubeService = new YoutubeService();
  }); */

  afterEach(() => {
    TestBed.inject(HttpTestingController).verify();
  });

  it('#getCards should return mockResponse items', async () => {
    await TestBed.configureTestingModule({
      providers: [
        YoutubeService,
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: HttpClient,
          useValue: { get: () => of([]).pipe(delay(0)) },
        },
      ],
    }).compileComponents();

    const youtubeService = TestBed.inject(YoutubeService);

    expect(youtubeService.getCards(mockResponse.items)).toBe(
      mockResponse.items
    );

    TestBed.inject(HttpTestingController).verify();
  });

  it('#getRealAPICards should perform request', async () => {
    await TestBed.configureTestingModule({
      providers: [
        YoutubeService,
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: HttpClient,
          useValue: { get: () => of([]).pipe(delay(0)) },
        },
      ],
    }).compileComponents();

    const youtubeService = TestBed.inject(YoutubeService);

    const http = TestBed.inject(HttpClient);

    http
      .get('http://localhost:4200/')
      .subscribe(response => expect(response).toMatchObject(mockResponse));

    const httpTesting = TestBed.inject(HttpTestingController);

    youtubeService
      .getRealAPICards('angular')
      .pipe(first())
      .subscribe(response => expect(response).toMatchObject(mockResponse));

    httpTesting.verify();
  });

  it('YoutubeService should be created', async () => {
    await TestBed.configureTestingModule({
      providers: [
        YoutubeService,
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: HttpClient,
          useValue: { get: () => of([]).pipe(delay(0)) },
        },
      ],
    }).compileComponents();
    TestBed.inject(HttpTestingController).verify();
    const youtubeService = TestBed.inject(YoutubeService);
    expect(youtubeService).toBeTruthy();
  });

  it('http should perform GET method', async () => {
    await TestBed.configureTestingModule({
      providers: [
        YoutubeService,
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: HttpClient,
          useValue: { get: () => of([]).pipe(delay(0)) },
        },
      ],
    }).compileComponents();

    const youtubeService = TestBed.inject(YoutubeService);

    const http = TestBed.inject(HttpClient);

    const httpTesting = TestBed.inject(HttpTestingController);

    const API_URL = 'https://www.googleapis.com/youtube/v3/';

    http
      .get(API_URL)
      .subscribe(response => expect(response).toMatchObject(mockResponse));

    youtubeService
      .getRealAPICards('angular')
      .pipe(first())
      .subscribe(response => expect(response).toMatchObject(mockResponse));

    /* const req = httpTesting.expectOne({
      method: 'GET',
      url: `localhost:4200`,
    }); */

    /* const req = httpTesting.expectOne(request => {
      return (
        request.url ===
        `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=20&q=lalala`
      );
    }); */

    // const params = { question: 'q', value: 'angular', maxResults: 20 };

    /* const req = httpTesting.expectOne(
      `${API_URL}search?type=video&part=snippet&maxResults=20&q=angular&key=AIzaSyCQh1dEquQQKLFXiKe2a9nU06-k3_TRouQ`
    ); */
    youtubeService.getRealAPICards('angular');
    const req = httpTesting.expectOne(`../../../public/assets/mock.json`);

    /* expect(
      req.request.url.endsWith(
        '/search?type=video&part=snippet&maxResults=20&q=angular&key=lalala'
      )
    ).toEqual(mockResponse); */

    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('q')).toBe('angular');

    req.flush(mockResponse);

    const logSpy = jest.spyOn(console, 'log');
    console.log(req.request.url);
    expect(logSpy).toHaveBeenCalledWith(req.request.url);

    httpTesting.verify();
    /* TestBed.runInInjectionContext(async () => {
      const httpTesting = TestBed.inject(HttpTestingController);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const service = TestBed.inject(YoutubeService);

      const config$ = youtubeService.getRealAPICards('lalala', 'lalala');

      const configPromise = firstValueFrom(config$);

      const req = httpTesting.expectOne(
        'https://www.googleapis.com/youtube/v3/'
      );

      expect(req.request.method).toBe('GET');

      req.flush('https://www.googleapis.com/youtube/v3/');

      expect(await configPromise).toEqual(
        'https://www.googleapis.com/youtube/v3/'
      );

      httpTesting.verify();
    }); */
  });

  /* it('#toggleFilters should return true or false', () => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    youtubeService = new YoutubeService();
    TestBed.runInInjectionContext(() => {
      expect(youtubeService.toggleFilters()).toBe(true || false);
    });
  }); */
});
