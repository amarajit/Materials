/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GreetServiceService } from './greet-service.service';

describe('GreetServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GreetServiceService]
    });
  });

  it('should ...', inject([GreetServiceService], (service: GreetServiceService) => {
    expect(service).toBeTruthy();
  }));
});
