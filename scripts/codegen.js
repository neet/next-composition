const generateOne = (length) => {
  const ar = Array.from({ length }, (_, i) => i);
  const types = ar.map((i) => `T${i}`);
  const gsp = types.map((i) => `Gsp<${i}>`);

  return (
    'export function compose<' +
    `${types.join(', ')}, TComposite = ${types.join(' & ')}, U = TComposite` +
    `>(params: ComposeParams<[${gsp.join(', ')}], TComposite, U>)` +
    ': Gsp<U>'
  );
};

const generate = (length) => {
  const str = Array.from({ length }, (_, i) => i + 1)
    .map((v) => generateOne(v))
    .join('\n');

  console.log(str);
};

generate(12);
