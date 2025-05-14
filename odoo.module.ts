// C:\Users\inass\nest\src\app.module.ts
import { Module } from '@nestjs/common';
import { OdooController } from './odoo.controller'; // Default controller
import { OdooService } from './odoo.service';     // Default service
import { OdooModule } from './odoo/odoo.module'; // Your new Odoo module

@Module({
  imports: [
    OdooModule, // Add your OdooModule here
    // Other modules like ConfigModule if you use .env files
  ],
  controllers: [OdooController],
  providers: [OdooService],
})
export class AppModule {}