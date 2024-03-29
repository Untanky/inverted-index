import { Identifier } from '../interfaces/identifier';
import { ObjectIdentifier } from '../identifiers/object-identifier';
import { Merge } from '../interfaces/merge';
import { Tokenizer } from '../interfaces/tokenizer';

export class ObjectTokenizer implements Tokenizer<Record<string, string>, ObjectIdentifier> {
  constructor(private merger: Merge<Map<string, Identifier[]>>, private textTokenizer: Tokenizer<unknown, Identifier>) { }

  tokenize(value: Record<string, string>, baseIdentifier: Identifier): Map<string, ObjectIdentifier[]> {
    const tokenMap = new Map<string, ObjectIdentifier[]>();

    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        const element = value[key];
        const index = this.textTokenizer.tokenize(element, new ObjectIdentifier(key, baseIdentifier));
        this.merger.merge(tokenMap, index);
      }
    }
    return tokenMap;
  }
}