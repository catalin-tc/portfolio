import { Test } from '@nestjs/testing';
import { ChorisimoApisUserController } from './chorisimo-apis-user.controller';

describe('ChorisimoApisUserController', () => {
  let controller: ChorisimoApisUserController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ChorisimoApisUserController],
    }).compile();

    controller = module.get(ChorisimoApisUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
