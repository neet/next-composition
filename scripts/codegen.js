const readline = require('readline');
const util = require('util');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = util.promisify(rl.question).bind(rl);

const generateOne = (
  length,
  fnName = 'compose',
  typeName = 'Gsp',
  paramName = 'ComposeServerSidePropsParams',
) => {
  const ar = Array.from({ length }, (_, i) => i);
  const types = ar.map((i) => `T${i}`);
  const gsp = types.map((i) => `${typeName}<${i}, Q, D>`);

  return (
    `export function ${fnName}<Q extends ParsedUrlQuery, D extends PreviewData, ` +
    `${types.join(', ')}, P = ${types.join(' & ')}, ResolvedP = P` +
    `>(params: ${paramName}<[${gsp.join(', ')}], Q, D, P, ResolvedP>)` +
    `: ${typeName}<P, Q, D>`
  );
};

const generate = async (length) => {
  const fnName = await question('function name: ');
  const paramName = await question('param name: ');
  const typeName = await question('type name: ');

  const str = Array.from({ length }, (_, i) => i + 1)
    .map((v) => generateOne(v, fnName, typeName, paramName))
    .join('\n');

  console.log(str);
};

generate(12);
