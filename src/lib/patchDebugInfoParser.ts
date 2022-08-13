export interface PatchDebugInfoModule {
  filename: string;
  sha256: string;
}

export class PatchDebugInfoParser {
  static getModules(text: string): PatchDebugInfoModule[] {
    const res: PatchDebugInfoModule[] = [];
    const re = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{8}:(.*) \(([0-9a-fA-F]{64})\)/gm;
    let m;
    while ((m = re.exec(text)) !== null) {
      res.push({ filename: m[1], sha256: m[2] });
    }
    return res;
  }
}
