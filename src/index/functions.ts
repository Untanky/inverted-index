/**
 * Tokenizes a document into a token map.
 * 
 * Implementation and token map depends on type of a document. 
 * A string is tokenized differently to a number.
 * Compount types like objects and arrays are result in more complex positional types.
 * 
 */
export type Tokenize = <Document, Position, TokenMap = Map<string, Position[]>>(value: Document) => TokenMap;

/**
 * Applies a reduction on the tokens of a token map.
 * 
 * Different implementations of this can be envisioned, e.g. sanitation, stemming, etc.
 * The token map should be updated in-place and the reference should be returned.
 */
export type Reduce = <Position, TokenMap = Map<string, Position[]>>(map: TokenMap) => TokenMap;
