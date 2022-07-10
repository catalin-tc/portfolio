export class ChorisimoAccessPortalConfig {
  public readonly containerBgSrc?: string;

  constructor(partial: Partial<ChorisimoAccessPortalConfig>) {
    this.containerBgSrc = partial.containerBgSrc ?? '';
  }

}
