import { Identifier } from "../interfaces/identifier";

export abstract class DecoratorIdentifier implements Identifier {
  constructor(protected readonly identifier: Identifier) {}

  abstract serialize(): string
}