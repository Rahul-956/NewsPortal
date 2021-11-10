import { TestBed } from '@angular/core/testing';

import { newsapiService } from './newsapi.service';

describe('TcnewsapiService', () => {
  let service: newsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(newsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
