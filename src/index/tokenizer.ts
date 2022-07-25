/**
 * Tokenizes a document into a token map.
 * 
 * Implementation and token map depends on type of a document. 
 * A string is tokenized differently to a number.
 * Compount types like objects and arrays are result in more complex positional types.
 * 
 */
export interface Tokenizer<Document, Position, TokenMap = Map<string, Position[]>> {
  tokenize(document: Document, basePosition: Position): TokenMap;
}