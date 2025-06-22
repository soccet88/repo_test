const fetch = require('node-fetch');
module.exports = async (req, res) => {
  const data = req.query.data;
  await fetch('https://api.telegram.org/8187328608:AAEILvWGBaxv-_TMOLPiQpqA8EyphwXNjq0/sendMessage?chat_id=7535811931&text=' + data);
  res.sendStatus(200);
};
