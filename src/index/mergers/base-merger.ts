import { Merge } from '../merge';
import { Identifier } from '../interfaces/identifier';


export class BaseMerge implements Merge<Map<string, Identifier[]>> {
  merge(baseIndex: Map<string, Identifier[]>, mergedIndex: Map<string, Identifier[]>): Map<string, Identifier[]> {
    Array.from(mergedIndex.entries()).forEach(([key, identifiers]) => {
      const baseIdentifiers = baseIndex.get(key);
      if (!baseIdentifiers) {
        baseIndex.set(key, identifiers)
      } else {
        baseIdentifiers.push(...identifiers);
      }
    });

    return baseIndex;
  }
}