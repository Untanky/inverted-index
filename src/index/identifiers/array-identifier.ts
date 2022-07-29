import { DecoratorIdentifier } from './decorator-identifier';
import { Identifier } from '../identifier';

export class ArrayIdentifier extends DecoratorIdentifier {
  constructor(readonly index: number, identifier: Identifier) {
    super(identifier);
  }

  serialize(): string {
    return `${this.identifier.serialize()}[${this.index}]`;
  }
}
