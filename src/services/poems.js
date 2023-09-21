import { checkError, client } from './client.js';

// const userId = client.auth.currentUser;

export async function getPoems() {
  const response = await client.from('poems').select();
  return checkError(response);
}

export async function createHaiku(userId, fiveLine, sevenLine, finalFive) {
  const response = await client
    .from('poems')
    .insert({ user_id: userId, fiveLine, sevenLine, finalFive })
    .single();
  return checkError(response);
}

export async function deletePoem(id) {
  const response = await client.from('poems').delete().match({ id }).single();
  return response;
}

// export async function getRandomLine() {
//   const count = await client.from('poems').select('*', { count: 'exact' });
//   // console.log('row count', count.count);
//   const random = Math.ceil(Math.random() * count.count);
//   // console.log('random', random);
//   const response = await client.from('poems').select('fiveLine').order({ id: random });
//   // console.log('response', response.data[0]);
//   return checkError(response);
// }
export async function getRandomLine() {
  const response = await client.from('random_5').select('*').limit(1).single();
  // console.log('response', response.data[0]);
  return checkError(response);
}

// export async function getSecondRandomLine() {
//   const count = await client.from('poems').select('*', { count: 'exact' });
//   const random = Math.ceil(Math.random() * count.count);
//   const response = await client.from('poems').select('sevenLine').match({ id: random });
//   // console.log('secondResponse', response.data[0].sevenLine);
//   return checkError(response);
// }
export async function getSecondRandomLine() {
  const response = await client.from('random_7').select('*').limit(1).single();
  // const random = Math.ceil(Math.random() * count.count);
  // const response = await client.from('poems').select('sevenLine').match({ id: random });
  // console.log('secondResponse', response.data[0].sevenLine);
  return checkError(response);
}
export async function getThirdRandomLine() {
  const response = await client.from('final_5').select('*').limit(1).single();
  // const random = Math.ceil(Math.random() * count.count);
  // const response = await client.from('poems').select('finalFive').match({ id: random });
  // console.log('secondResponse', response.data[0].finalFive);
  return checkError(response);
}
