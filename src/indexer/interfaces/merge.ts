export interface Merge<Index> {
  merge(baseIndex: Index, mergedIndex: Index): Index;
}