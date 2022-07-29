import { Identifier } from '../interfaces/identifier';

export class BaseIdentifier implements Identifier {
  constructor(readonly documentId: string) {}

  serialize(): string {
    return this.documentId;
  }
}