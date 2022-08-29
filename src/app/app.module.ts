import { NgModule, Self } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogService } from './log.service';

// export const APP_CONFIG: ColorConfig = {
//   productColor: 'red',
//   productGeneralConditions: 'www.red-product.com'
// };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(@Self() private logService: LogService) {
  //   if (this.logService) {
  //     this.logService.log("constructor init")
  //   }
  // }
}
