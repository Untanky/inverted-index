import { Identifier } from '../../indexer/interfaces/identifier';
import { SearchResult } from '../interfaces/search-result';
import { Searcher } from '../interfaces/searcher';

export class BaseSearcher implements Searcher<string> {
  constructor(private index: Map<string, string[]>) {}

  search(key: string): SearchResult[] {
    const identifiers = this.index.get(key);

    if (!identifiers) {
      return [];
    }

    return identifiers.map((identifier): SearchResult => ({
      documentId: identifier.split(/[\.\[\]@]/)[0],
      identifier,
    }));
  }
  
}