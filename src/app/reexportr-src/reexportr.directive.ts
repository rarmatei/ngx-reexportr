import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[reExportr]"
})
export class ReExportrDirective {
  constructor(private _tr: TemplateRef<any>, private _vcr: ViewContainerRef) {}

  @Input()
  set reExportr(val: any) {
    this._vcr.clear();
    this._vcr.createEmbeddedView(this._tr, {
      $implicit: val,
      reExportr: val
    });
  }
}
