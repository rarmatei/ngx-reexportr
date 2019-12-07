import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit,
  OnDestroy,
  EmbeddedViewRef
} from "@angular/core";

@Directive({
  selector: "[reExportr]"
})
export class ReExportrDirective implements OnInit, OnDestroy {
  context = {
    $implicit: undefined,
    reExportr: undefined
  };
  embeddedView: EmbeddedViewRef<any>;

  constructor(private _tr: TemplateRef<any>, private _vcr: ViewContainerRef) {}

  ngOnInit() {
    this.embeddedView = this._vcr.createEmbeddedView(this._tr, this.context);
  }

  ngOnDestroy() {
    this._vcr.clear();
  }

  @Input()
  set reExportr(val: any) {
    this.context.reExportr = val;
    this.context.$implicit = val;
    if (this.embeddedView) {
      this.embeddedView.detectChanges();
    }
  }
}
