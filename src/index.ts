import { TextTokenizer } from './index/tokenizers/text-tokenizer';
import { BaseIdentifier } from './index/identifiers/base-identfier';
import { ObjectTokenizer } from './index/tokenizers/object-tokenizer';
import { Merge } from './index/merge';
import { Identifier } from './index/identifier';

// const defaultLogger = new ConsoleLogger();

// const app = new ExpressApp(defaultLogger);
// app.start();

// const tokenizer = new TextTokenizer([' ']);
// const result = tokenizer.tokenize(
//   'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur',
//   new BaseIdentifier(''),
// );
// console.log(Array.of(...result.entries()).map(([key, identifiers]) => `${key} => [${identifiers.map(identifier => identifier.serialize()).join(', ')}]`).join(',\n'));

class Merger implements Merge<Map<string, Identifier[]>> {
  merge(baseIndex: Map<string, Identifier[]>, mergedIndex: Map<string, Identifier[]>): Map<string, Identifier[]> {
    Array.from(mergedIndex.entries()).forEach(([key, identifiers]) => {
      const baseIdentifiers = baseIndex.get(key);
      if (!baseIdentifiers) {
        baseIndex.set(key, identifiers)
      } else {
        baseIdentifiers.push(...identifiers);
      }
    });

    return baseIndex;
  }
}

const textTokenizer = new TextTokenizer([' ']);
const objectTokenizer = new ObjectTokenizer(new Merger(), textTokenizer);
const result = objectTokenizer.tokenize(
  {
    foo: 'Lorem ipsum foo',
    bar: 'ipsum Lorem bar',
  },
  new BaseIdentifier('abc'),
);
console.log(Array.of(...result.entries()).map(([key, identifiers]) => `${key} => [${identifiers.map(identifier => identifier.serialize()).join(', ')}]`).join(',\n'));
