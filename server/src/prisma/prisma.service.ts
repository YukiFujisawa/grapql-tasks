import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  /**
   * データベースとの接続を確立する
   */
  async onModuleInit() {
    await this.$connect();
  }
}
