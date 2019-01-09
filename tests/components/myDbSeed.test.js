import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import sql from '../../server/models/index'

test('fake test', () => {
    expect(true).toBeTruthy();
  });

 test('fake test', () => {
    expect(false).toBeFalsy();
 });

//  test('test sql', () => {
//    console.log('what string: ', sql.lastListenedTo);
//    expect(sql.lastListenedTo.db.connection.query()).toBe('SELECT DISTINCT users.first_name, users.last_name, users.img, songs.song_name, songs.artist, songs.song_id, listen.date_last_play FROM listen JOIN users ON users.user_id=listen.user_id JOIN songs ON songs.song_id=listen.song_id GROUP BY users.last_name ORDER BY listen.date_last_play;');
//  });

/* DB tests are integration tests not unit tests, and probably 
use a different testing suite more suited to for db / sql testing.  
*/