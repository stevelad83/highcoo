import { checkError, client } from './client.js';

export async function getPoems() {
  const response = await client.from('poems').select();
  return checkError(response);
}

export async function createHaiku(fiveLine, sevenLine, finalFive) {
  const response = await client.from('poems').insert({ fiveLine, sevenLine, finalFive }).single();
  return checkError(response);
}

export async function getRandomLine() {
  const count = await client.from('poems').select('*', { count: 'exact' });
  // console.log('row count', count.count);
  const random = Math.ceil(Math.random() * count.count);
  // console.log('random', random);
  const response = await client.from('poems').select('fiveLine').match({ id: random });
  console.log('response', response.data[0].fiveLine);
  return checkError(response);
}
