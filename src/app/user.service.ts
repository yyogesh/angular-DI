import { Injectable, InjectionToken } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  public getProductInfo(product: any) {
    let termsAndConditionsUrl;
    if (product.color === 'red') { termsAndConditionsUrl = 'www.red-products.com'; }
    else { termsAndConditionsUrl = 'www.blue-products.com'; }
    return `Please visit
            ${termsAndConditionsUrl} for more information about our
            ${product.color} product`;
  }
}


export const COLOR_CONFIG_TOKEN = new InjectionToken<ColorConfig>('config');
export interface ColorConfig {
  productColor: string;
  productGeneralConditions: string;
}
