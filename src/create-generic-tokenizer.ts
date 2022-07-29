import { TextTokenizer } from './indexer/tokenizers/text-tokenizer';
import { ObjectTokenizer } from './indexer/tokenizers/object-tokenizer';
import { GenericTokenizer } from './indexer/tokenizers/generic-tokenizer';
import { ArrayTokenizer } from './indexer/tokenizers/array-tokenizer';
import { BaseMerge } from './indexer/mergers/base-merger';

export const createGenericTokenizer = <Document>(): GenericTokenizer<Document> => {
  const genericTokenizer = new GenericTokenizer<Document>();

  const baseMerger = new BaseMerge();

  const textTokenizer = new TextTokenizer([' ']);
  genericTokenizer.addTokenizer('string', textTokenizer);
  
  const objectTokenizer = new ObjectTokenizer(baseMerger, genericTokenizer);
  genericTokenizer.addTokenizer('object', objectTokenizer);
  
  const arrayTokenizer = new ArrayTokenizer(baseMerger, genericTokenizer);
  genericTokenizer.addTokenizer('array', arrayTokenizer);

  return genericTokenizer;
}