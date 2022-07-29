import { DecoratorIdentifier } from './decorator-identifier';
import { Identifier } from '../interfaces/identifier';

export class TextIdentifier extends DecoratorIdentifier {
  constructor(readonly position: number, identifier: Identifier) {
    super(identifier)
  }

  serialize(): string {
    return `${this.identifier.serialize()}@${this.position}`;
  }
}