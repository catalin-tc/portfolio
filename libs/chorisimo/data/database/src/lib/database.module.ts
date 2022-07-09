import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitySchema } from 'typeorm';
import { ChorisimoDBSetup } from './setup.interface';

@Module({})
export class ChorisimoDatabaseModule {
  public static setup(setup: ChorisimoDBSetup): DynamicModule {
    return {
      module: ChorisimoDatabaseModule,
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          url: setup.url,
          ssl: {
            rejectUnauthorized: false,
          }
        })
      ]
    };
  }

  public static forEntity(entities: Array<EntitySchema>): DynamicModule {
    return {
      module: ChorisimoDatabaseModule,
      imports: [
        TypeOrmModule.forFeature(entities)
      ]
    };
  }
}
