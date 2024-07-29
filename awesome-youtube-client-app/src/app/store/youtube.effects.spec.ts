import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { effect } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of, take } from 'rxjs';

import { SearchItem } from '../youtube/search/search-item.model';
// import { VideosResponse } from '../youtube/search/search-response.model';
import { YoutubeService } from '../youtube/youtube.service';
import { YoutubeActions } from './youtube.actions';
import { YoutubeEffects } from './youtube.effects';

describe('Get Cards Effects', () => {
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
  let actions$: Observable<{ items: SearchItem[] }>;
  let effects: YoutubeEffects;
  // let youtubeService: YoutubeService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        YoutubeService,
        YoutubeEffects,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: {
            cards: [],
          },
        }),
        {
          provide: YoutubeService,
          useValue: {
            getRealAPICards: jest.fn(() => of(mockResponse)),
          },
        },
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(YoutubeEffects);
    // youtubeService = TestBed.inject(YoutubeService);
    actions$ = new Observable<{ items: SearchItem[] }>();
  });

  it('should be created', () => {
    expect(effect).toBeTruthy();
  });

  it('setInitalCards$ should get cards', async () => {
    const cards = mockResponse;

    const expectedAction = YoutubeActions.getCardsSuccess({
      items: mockResponse.items,
    });

    actions$ = of(
      YoutubeActions.getCardsSuccess({ items: mockResponse.items })
    );

    effects.setInitalCards$.subscribe(x => expect(x).toEqual(expectedAction));

    effects.setInitalCards$
      .pipe(take(1))
      .subscribe(data => expect(data).toMatchObject(cards));

    // expect(youtubeService.getRealAPICards).toHaveBeenCalledWith();

    /* expect(result).toMatchObject(
      YoutubeActions.getCardsSuccess({ items: mockResponse.items })
    ); */

    // youtubeService.verifyAll();
  });
});
