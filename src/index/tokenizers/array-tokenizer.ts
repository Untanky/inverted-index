import { Identifier } from '../identifier';
import { ArrayIdentifier } from '../identifiers/array-identifier';
import { Merge } from '../merge';
import { Tokenizer } from '../tokenizer';

export class ArrayTokenizer implements Tokenizer<Array<unknown>, ArrayIdentifier> {
  constructor(private merger: Merge<Map<string, Identifier[]>>, private tokenizer: Tokenizer<unknown, Identifier>) { }

  tokenize(value: Array<unknown>, baseIdentifier: Identifier): Map<string, ArrayIdentifier[]> {
    const tokenMap = new Map<string, ArrayIdentifier[]>();

    value.forEach((element: unknown, i: number) => {
      const index = this.tokenizer.tokenize(element, new ArrayIdentifier(i, baseIdentifier));
      this.merger.merge(tokenMap, index);
    });
    return tokenMap;
  }
}