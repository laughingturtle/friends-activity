import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import sql from '../../server/models/index'
const request = require('supertest');

test('fake test', () => {
    expect(true).toBeTruthy();
  });

 test('fake test', () => {
    expect(false).toBeFalsy();
 });

 describe("retrieve the data", () =>{
   test('it should respond with correct numbers of songs', async () => {
     const response = await request("http://127.0.0.1:3003").get('/data');
     expect(response.statusCode).toBe(200);
     expect(response.body.length).toBe(9);
     expect(response.body.length).not.toBe(121);
   })
 })

//  test('test sql', () => {
//    console.log('what string: ', sql.lastListenedTo);
//    expect(sql.lastListenedTo.db.connection.query()).toBe('SELECT DISTINCT users.first_name, users.last_name, users.img, songs.song_name, songs.artist, songs.song_id, listen.date_last_play FROM listen JOIN users ON users.user_id=listen.user_id JOIN songs ON songs.song_id=listen.song_id GROUP BY users.last_name ORDER BY listen.date_last_play;');
//  });

/* DB tests are integration tests not unit tests, and probably 
use a different testing suite more suited to for db / sql testing.  
*/