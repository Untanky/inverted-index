import { createGenericTokenizer } from './create-generic-tokenizer';
import { BaseIdentifier } from './indexer/identifiers/base-identfier';

const result = createGenericTokenizer<object>().tokenize(
  {
    foo: [ 'Lorem ipsum foo', { bar: 'ipsum Lorem bar' } ],
    baz: 'baz',
  },
  new BaseIdentifier('abc'),
);
console.log(Array.of(...result.entries()).map(([key, identifiers]) => `${key} => [${identifiers.map(identifier => identifier.serialize()).join(', ')}]`).join(',\n'));
