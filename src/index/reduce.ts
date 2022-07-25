/**
 * Applies a reduction on the tokens of a token map.
 * 
 * Different implementations of this can be envisioned, e.g. sanitation, stemming, etc.
 * The token map should be updated in-place and the reference should be returned.
 */
export interface Reduce<Position, TokenMap = Map<string, Position[]>> {
  reduce(map: TokenMap): TokenMap;
} 
