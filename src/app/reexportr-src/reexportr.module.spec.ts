import { ReExportrModule } from "./reexportr.module";

describe("ReexportrSrcModule", () => {
  let reexportrSrcModule: ReExportrModule;

  beforeEach(() => {
    reexportrSrcModule = new ReExportrModule();
  });

  it("should create an instance", () => {
    expect(reexportrSrcModule).toBeTruthy();
  });
});
