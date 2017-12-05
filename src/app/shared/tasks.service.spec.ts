import { TestBed, inject } from '@angular/core/testing';

import { TasksService } from './tasks.service.ts';

describe('TasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksService]
    });
  });

  it('should ...', inject([TasksService], (service: TasksService) => {
    expect(service).toBeTruthy();
  }));
});
