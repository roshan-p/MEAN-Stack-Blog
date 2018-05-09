const crypto = require('crypto').randomBytes(256).toString('hex');
module.exports = {
  uri: 'mongodb://localhost:27017/mean-blog',
  secret: crypto,
  db: 'mean-blog'
}
