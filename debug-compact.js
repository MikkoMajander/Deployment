import compact from './src/compact.js';

const inputs = [
  [0, 1, false, 2, '', 3],
  ['a', 1, {}, [], true, 'hello'],
  [1, 0, 2, false, 3, '', 4],
  [NaN, 1, NaN, 2]
];

for (const arr of inputs) {
  console.log('INPUT:', arr);
  const result = compact(arr);
  console.log('OUTPUT:', result);
  console.log('RAW KEYS:', Object.keys(result));
  console.log('RAW ENTRIES:', Object.entries(result));
  console.log('---');
}
