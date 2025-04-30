import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { redisStore } from 'cache-manager-redis-store';
import {} from 'redis';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      socket: {
        host: 'localhost',
        port: 6739,
      },
      // ttl: 30,
    }),
  ],
  exports: [CacheModule],
})
export class RedisCacheModule {}
