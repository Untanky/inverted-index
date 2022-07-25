import { Reduce, Tokenize } from './reduce';

export const handle = <Document, Position>(tokenizer: Tokenize<Document, Position>, ...sanitizer: Reduce<Position>[]) => (document: Document) => {
  
}