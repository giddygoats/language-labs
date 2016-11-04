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
    console.log('UserId: ', this.userId);
    console.log('Translations: ', Translations.find({
                                                      $or: [
                                                        { userId: this.userId },
                                                      ],
                                                    }).fetch());
    return Translations.find({
          $or: [
            { userId: this.userId },
          ],
        });
  });



  Meteor.methods({
    'updateRating'({newReviews, _id}) {
      Meteor.users.update(_id,
        { $set: { 'reviews': newReviews } 
      });
    }
  });
});


