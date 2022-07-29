import { Identifier } from "./identifier";

export interface Indexer<Document = unknown, Index = Map<string, Identifier>> {
  index(document: Document): Index;
}
