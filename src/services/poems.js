import { checkError, client } from './client.js';

export async function getPoems() {
  const response = await client.from('poems').select();
  return checkError(response);
}

export async function createHaiku(fiveLine, sevenLine, finalFive) {
  const response = await client.from('poems').insert({ fiveLine, sevenLine, finalFive }).single();
  return checkError(response);
}

// export async function getRandomLine() {
//   const count = await client.from('poems').select('*', { count: 'exact' });
//   // console.log('row count', count.count);
//   const random = Math.ceil(Math.random() * count.count);
//   // console.log('random', random);
//   const response = await client.from('poems').select('fiveLine').match({ id: random });
//   console.log('response', response.data[0].fiveLine);
//   return checkError(response);
// }
export async function getRandomLine() {
  const count = await client.from('poems').select('*', { count: 'exact' });
  // console.log('row count', count.count);
  const random = Math.ceil(Math.random() * count.count);
  // console.log('random', random);
  const response = await client.from('poems').select('fiveLine').match({ id: random });
  console.log('response', response.data[0].fiveLine);
  return checkError(response);
}

export async function getSecondRandomLine() {
  const count = await client.from('poems').select('*', { count: 'exact' });
  const random = Math.ceil(Math.random() * count.count);
  const response = await client.from('poems').select('sevenLine').match({ id: random });
  console.log('secondResponse', response.data[0].sevenLine);
  return checkError(response);
}
export async function getThirdRandomLine() {
  const count = await client.from('poems').select('*', { count: 'exact' });
  const random = Math.ceil(Math.random() * count.count);
  const response = await client.from('poems').select('finalFive').match({ id: random });
  console.log('secondResponse', response.data[0].finalFive);
  return checkError(response);
}
