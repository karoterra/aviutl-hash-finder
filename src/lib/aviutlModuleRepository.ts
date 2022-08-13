import { AviUtlModule } from "./aviutlModule";

export class AviUtlModuleRepository {
  private static dbUrl = new URL("../assets/db.json", import.meta.url).href;
  private static instance: AviUtlModuleRepository;
  private data: AviUtlModule[];

  constructor() {
    this.data = new Array<AviUtlModule>();
  }

  static async init(): Promise<AviUtlModuleRepository> {
    const repo = new AviUtlModuleRepository();
    repo.data = await fetch(this.dbUrl)
      .then((response) => response.json())
      .then((data) => {
        const array: AviUtlModule[] = [];
        for (const x of data) {
          array.push(
            new AviUtlModule(
              x.filename,
              x.name,
              x.author,
              x.version,
              x.build,
              x.url,
              x.sha256
            )
          );
        }
        return array;
      });
    return repo;
  }

  static async getInstance(): Promise<AviUtlModuleRepository> {
    if (!this.instance) {
      this.instance = await this.init();
    }
    return this.instance;
  }

  public findBySha256(sha256: string): AviUtlModule | undefined {
    return this.data.find((x) => x.sha256 === sha256);
  }

  public findAllBySha256(sha256: string): AviUtlModule[] {
    return this.data.filter((x) => x.sha256.startsWith(sha256));
  }
}
