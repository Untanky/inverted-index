import { TextTokenizer } from './index/tokenizers/text-tokenizer';
import { BaseIdentifier } from './index/identifiers/base-identfier';
import { ObjectTokenizer } from './index/tokenizers/object-tokenizer';
import { Merge } from './index/merge';
import { Identifier } from './index/identifier';
import { GenericTokenizer } from './index/tokenizers/generic-tokenizer';

class Merger implements Merge<Map<string, Identifier[]>> {
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

export const createGenericTokenizer = <Document>(): GenericTokenizer<Document> => {
  const genericTokenizer = new GenericTokenizer<Document>();

  const textTokenizer = new TextTokenizer([' ']);
  genericTokenizer.addTokenizer('string', textTokenizer);
  
  const objectTokenizer = new ObjectTokenizer(new Merger(), genericTokenizer);
  genericTokenizer.addTokenizer('object', objectTokenizer);

  return genericTokenizer;
}

const result = createGenericTokenizer<object>().tokenize(
  {
    foo: 'Lorem ipsum foo',
    bar: 'ipsum Lorem bar',
  },
  new BaseIdentifier('abc'),
);
console.log(Array.of(...result.entries()).map(([key, identifiers]) => `${key} => [${identifiers.map(identifier => identifier.serialize()).join(', ')}]`).join(',\n'));
