const Translations = new Mongo.Collection('translations');

Translations.schema = new SimpleSchema({
  userId: {type: String},
  fromLanguage: {type: String},
  fromText: {type: String},
  toLanguage: {type: String},
  toText: {type: String},
});

module.exports = Translations;