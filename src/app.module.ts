import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          uri: configService.get<string>('MONGO_URI'),
          // family: 4, // Memaksa IPv4 pada level driver
          // serverSelectionTimeoutMS: 15000, // Menunggu DNS lebih lama (15 detik)
          // socketTimeoutMS: 45000, // Menutup koneksi jika idle terlalu lama

          // // Opsi tambahan untuk performa
          // retryWrites: true,
          // w: 'majority',
        };
      },
    }),
    CacheModule.register({ isGlobal: true, ttl: 60000, max: 100 }),
    CourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
