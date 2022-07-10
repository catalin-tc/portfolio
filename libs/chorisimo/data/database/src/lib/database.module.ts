import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseEntities } from './entities.type';
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
          synchronize: setup.sync,
          autoLoadEntities: true,
          ssl: {
            rejectUnauthorized: false,
          }
        })
      ]
    };
  }

  public static forEntity(entities: DatabaseEntities): DynamicModule {
    return {
      module: ChorisimoDatabaseModule,
      imports: [
        TypeOrmModule.forFeature(entities)
      ],
      exports: [
        TypeOrmModule
      ]
    };
  }
}
