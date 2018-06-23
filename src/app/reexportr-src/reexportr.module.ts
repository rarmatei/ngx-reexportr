import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReExportrDirective } from "./reexportr.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [ReExportrDirective],
  exports: [ReExportrDirective]
})
export class ReExportrModule {}
