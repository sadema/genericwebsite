import { TestBed, inject } from '@angular/core/testing';

import { PageContentService } from './page-content.service';

describe('PageContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageContentService]
    });
  });

  it('should ...', inject([PageContentService], (service: PageContentService) => {
    expect(service).toBeTruthy();
  }));
});
