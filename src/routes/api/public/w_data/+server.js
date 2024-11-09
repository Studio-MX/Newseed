export async function GET ({ fetch, request }) {
  let data = '== 개요 ==\n아 존나 귀찮다';
  return new Response(JSON.stringify(data));
};
