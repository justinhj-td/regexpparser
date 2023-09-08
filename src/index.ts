import {
    parseRegExpLiteral,
    visitRegExpAST
} from "@eslint-community/regexpp"
import { Character } from "@eslint-community/regexpp/ast";

let regex1 = /^[^B][a-zA-Z]+$/;

let ast1 = parseRegExpLiteral(regex1);

function ourOnCharacterEnter(c: Character): void {
  console.log(`enter literal ${c.raw} ${c.type}`);
}

visitRegExpAST(ast1, {onCharacterEnter: ourOnCharacterEnter});
