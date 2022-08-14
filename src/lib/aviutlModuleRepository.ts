import type { AviUtlModule } from "./aviutlModule";

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
          array.push(x);
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

  public search(text: string): AviUtlModule[] {
    return this.data.filter(
      (x) =>
        x.sha256.includes(text.toUpperCase()) ||
        x.filename.includes(text) ||
        x.name.includes(text) ||
        x.author.includes(text) ||
        x.version.includes(text) ||
        x.build.includes(text) ||
        x.url.includes(text)
    );
  }
}
