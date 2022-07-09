import { Test } from '@nestjs/testing';
import { ChorisimoUserService } from './chorisimo-user.service';

describe('ChorisimoUserService', () => {
  let service: ChorisimoUserService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ChorisimoUserService],
    }).compile();

    service = module.get(ChorisimoUserService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
