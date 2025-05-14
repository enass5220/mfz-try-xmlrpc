import { Controller, Get } from '@nestjs/common';
import { OdooService } from './odoo.service';

@Controller('odoo')
export class OdooController {
  constructor(private readonly odooService: OdooService) {}

  @Get('partners')
  async getPartners() {
    return await this.odooService.searchRead('res.partner', [], ['name', 'email']);
  }
}
