export class AviUtlModule {
  constructor(
    public readonly filename: string,
    public readonly name: string,
    public readonly author: string,
    public readonly version: string,
    public readonly build: string,
    public readonly url: string,
    public readonly sha256: string
  ) { }
}
