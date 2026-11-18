import { TestBed } from '@angular/core/testing';
import { StudyPlayback } from './study-playback';

describe('StudyPlayback', () => {
  let service: StudyPlayback;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudyPlayback);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
