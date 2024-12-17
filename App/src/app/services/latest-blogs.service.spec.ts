import { TestBed } from '@angular/core/testing';

import { LatestBlogsService } from './latest-blogs.service';

describe('LatestBlogsService', () => {
  let service: LatestBlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestBlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
