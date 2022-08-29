import { TestBed } from '@angular/core/testing';

import { SqlLogService } from './sql-log.service';

describe('SqlLogService', () => {
  let service: SqlLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
