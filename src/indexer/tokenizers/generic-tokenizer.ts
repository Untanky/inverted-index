import { Identifier } from '../interfaces/identifier';
import { Tokenizer } from '../interfaces/tokenizer';

const foo = typeof 'st';

type types = 'string' | 'object' | 'array' | 'number';

export class GenericTokenizer<Document> implements Tokenizer<Document, Identifier> {
  private tokenizers: Record<types, Tokenizer<unknown, Identifier>>;

  constructor() {
    const foo = (() => {}) as unknown as Tokenizer<unknown, Identifier>;
    this.tokenizers = {
      string: foo,
      object: foo,
      array: foo,
      number: foo,
    };
  }

  addTokenizer(type: types, tokenizer: Tokenizer<unknown, Identifier>): void {
    this.tokenizers[type] = tokenizer;
  }

  tokenize(document: Document, baseIdentifier: Identifier): Map<string, Identifier[]> {
    switch (typeof document) {
      case 'object':
        if (Array.isArray(document)) {
          return this.tokenizers.array.tokenize(document, baseIdentifier);
        }
        return this.tokenizers.object.tokenize(document, baseIdentifier);
      case 'string':
        return this.tokenizers.string.tokenize(document, baseIdentifier);
      case 'number':
        return this.tokenizers.number.tokenize(document, baseIdentifier);
      default:
        throw new Error('not implemented');
    }
  }
}
