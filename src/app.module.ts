import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TokenGuard } from './guard/auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './resources/app/user/user.module';
import { TodoModule } from './resources/app/todo/todo.module';

@Module({
  imports: [
    UserModule,
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'demo',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: TokenGuard,
    },
  ],
})
export class AppModule { }
