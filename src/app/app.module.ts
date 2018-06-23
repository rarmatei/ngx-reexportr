import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ReExportrModule } from "./reexportr-src/reexportr.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReExportrModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
