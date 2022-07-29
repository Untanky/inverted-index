import { SearchResult } from "./search-result";

export interface Searcher<Key = string> {
  search(key: Key): SearchResult[];
}