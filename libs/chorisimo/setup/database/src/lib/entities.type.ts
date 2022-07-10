import type { TypeOrmModule } from '@nestjs/typeorm';

export type DatabaseEntities = Parameters<typeof TypeOrmModule.forFeature>[0];
