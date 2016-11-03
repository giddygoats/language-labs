import { Meteor } from 'meteor/meteor';
import Translations from '../imports/collections.js'

Meteor.startup(function () {

  Meteor.publish('presences', function() {
    return Presences.find({}, { userId: true });
  });

  Meteor.publish('users', function () {
    return Meteor.users.find({});
  });

  Meteor.publish('translationsChannel', function () {
    return Translations.find();
  });

  Meteor.methods({
    'updateRating'({newReviews, _id}) {
      Meteor.users.update(_id,
        { $set: { 'reviews': newReviews } 
      });
    }
  });
});


