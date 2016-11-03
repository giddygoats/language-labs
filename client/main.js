import App                 from '../imports/components/App';
import React               from 'react';
import { render }          from 'react-dom';
import { Meteor }          from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Translations     from '../imports/collections.js';
import '../imports/accountsConfig.js';
import './styles.scss';

/* ------------------------- PEER.JS INIT ------------------------- */
const peer = new Peer({
  key: 'zzak1w02wffuhaor',
  debug: 3,
  config: {'iceServers': [
    { url: 'stun:stun.l.google.com:19302' },
    { url: 'stun:stun1.l.google.com:19302' },
  ]}
});

navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;
/* -------------------------- PEER.JS END -------------------------- */

const AppContainer = createContainer(() => {

  const presencesSub = Meteor.subscribe('presences');
  const usersSub     = Meteor.subscribe('users');

  // var Translations = new Mongo.Collection('translations');

  const translationsSub = Meteor.subscribe("translationsChannel");

  if (translationsSub.ready()) {
    console.log('Translations: ', Translations.find().fetch());
  }

  const user         = Meteor.users.findOne(Meteor.userId());
  const userIds      = Meteor.presences.find().map(presence => presence.userId);
  const loading      = !usersSub.ready() && !presencesSub.ready();
  const onlineUsers  = Meteor.users.find({ 
    $and: [ 
      { _id: { $in: userIds, $ne: Meteor.userId() } }, 
      { 'profile.language': { $exists: true } } 
    ] 
  }).fetch();

  return {
    onlineUsers,
    user,
    loading,
    peer,
  };
}, App);


Meteor.startup(() => {
  render(<AppContainer />, document.getElementById('App'));
});
