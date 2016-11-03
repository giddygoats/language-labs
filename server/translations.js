Translations = new Mongo.Collection('translations');

Translations.schema = new SimpleSchema({
  userId: {type: String},
  fromLanguage: {type: String},
  fromText: {type: String},
  toLanguage: {type: String},
  toText: {type: String},
});

// Translations.insert({
//   userId: 'helloworld',
//   fromLanguage: 'helloworld',
//   fromText: 'helloworld',
//   toLanguage: 'helloworld',
//   toText: 'helloworld',
// });

// Translations.find({}, function(results) {
//   console.log('Translation records: ', results);
// });

module.exports = Translations;

