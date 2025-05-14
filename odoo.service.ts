import { Injectable } from '@nestjs/common';
import * as xmlrpc from 'xmlrpc';
 
@Injectable()
export class OdooService {
  private url = 'hhttps://register.mfzly.com';
  private db = 'mfz';
  private username = 'Halema.it@mfzly.com';
  private password = '1993';

  private common = xmlrpc.createClient({ url: `${this.url}/xmlrpc/2/common` });
  private object = xmlrpc.createClient({ url: `${this.url}/xmlrpc/2/object` });

  async authenticate(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.common.methodCall('authenticate', [this.db, this.username, this.password, {}], (err, uid) => {
        if (err) reject(err);
        else resolve(uid);
      });
    });
  }

  async searchRead(model: string, domain: any[], fields: string[]) {
    const uid = await this.authenticate();

    return new Promise((resolve, reject) => {
      this.object.methodCall(
        'execute_kw',
        [
          this.db,
          uid,
          this.password,
          model,
          'search_read',
          [domain],
          { fields: fields },
        ],
        (err, value) => {
          if (err) reject(err);
          else resolve(value);
        },
      );
    });
  }
}
