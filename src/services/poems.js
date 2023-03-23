import { checkError, client } from './client.js';

export async function getPoems() {
  const response = await client.from('poems').select();
  return checkError(response);
}

export async function createHaiku(fiveLine, sevenLine, finalFive) {
  const response = await client.from('poems').insert({ fiveLine, sevenLine, finalFive }).single();
  return checkError(response);
}
