import { DecoratorIdentifier } from './decorator-identifier';
import { Identifier } from '../identifier';

export class ObjectIdentifier extends DecoratorIdentifier {
  constructor(readonly key: string, identifier: Identifier) {
    super(identifier);
  }

  serialize(): string {
    return `${this.identifier.serialize()}.${this.key}`;
  }
}
