import { TextTokenizer } from './index/tokenizers/text-tokenizer';
import { ObjectTokenizer } from './index/tokenizers/object-tokenizer';
import { GenericTokenizer } from './index/tokenizers/generic-tokenizer';
import { ArrayTokenizer } from './index/tokenizers/array-tokenizer';
import { BaseMerge } from './index/mergers/base-merger';

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