/**
 * Tokenizes a document into a token map.
 * 
 * Implementation and token map depends on type of a document. 
 * A string is tokenized differently to a number.
 * Compount types like objects and arrays are result in more complex identifier types.
 * 
 */
export interface Tokenizer<Document, Identifier, TokenMap = Map<string, Identifier[]>> {
  tokenize(document: Document, baseIdentifier: Identifier): TokenMap;
}