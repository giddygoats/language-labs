import { Meteor } from 'meteor/meteor';
import Translations from './translations.js'


Meteor.startup(function () {

  Meteor.publish('presences', function() {
    return Presences.find({}, { userId: true });
  });

  Meteor.publish('users', function () {
    return Meteor.users.find({});
  });

  Meteor.publish('translations', function () {
    console.log(Translations.find().fetch());
    return Translations.find({});
  });

  Meteor.methods({
    'updateRating'({newReviews, _id}) {
      Meteor.users.update(_id,
        { $set: { 'reviews': newReviews } 
      });
    }
  });
});


