import { checkError, client } from './client.js';

export async function getPoems() {
  const response = await client.from('poems').select();
  console.log('response.data', response.data);
  return checkError(response);
}
