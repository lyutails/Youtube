import { SearchItem } from '../youtube/search/search-item.model';
import { YoutubeState } from './store.model';
import {
  HeartsActions,
  PaginationButtonsActions,
  YoutubeActions,
} from './youtube.actions';
import {
  heartsReducer,
  paginationButtonsReducer,
  youtubeReducer,
} from './youtube.reducer';

describe('YoutubeReducers', () => {
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
  let initialState: YoutubeState;
  let initialHeartsState: SearchItem[];
  let initialPage: number;

  /* beforeEach(() => {
    const initialCardsState = {
      isLoading: false,
      isError: false,
      cards: [],
    };

    initialState = { ...initialCardsState };
  }); */

  it('should change state when getCards', () => {
    const initialCardsState = {
      isLoading: false,
      isError: false,
      cards: [],
    };

    initialState = { ...initialCardsState };

    const result = youtubeReducer(
      initialState,
      YoutubeActions.getCards({ value: 'angular' })
    );

    expect(result).toEqual({
      isLoading: true,
      isError: false,
      cards: [],
    });
  });

  it('should change state when retrievedCards', () => {
    const initialCardsState = {
      isLoading: false,
      isError: false,
      cards: [],
    };

    initialState = { ...initialCardsState };

    const result = youtubeReducer(
      initialState,
      YoutubeActions.retrievedCards({
        items: mockResponse.items,
      })
    );

    expect(result).toEqual({
      isLoading: false,
      isError: false,
      cards: mockResponse.items,
    });
  });

  it('should change state when addHeart', () => {
    const heartsState: SearchItem[] = [];

    initialHeartsState = [...heartsState];

    const result = heartsReducer(
      initialHeartsState,
      HeartsActions.addHeart({
        card: mockResponse.items[0],
      })
    );

    expect(result).toMatchObject([mockResponse.items[0]]);
  });

  it('should change state when nextPage', () => {
    const pageState: number = 0;

    initialPage = pageState;

    const result = paginationButtonsReducer(
      initialPage,
      PaginationButtonsActions.nextPage()
    );

    expect(result).toBe(1);
  });
});
