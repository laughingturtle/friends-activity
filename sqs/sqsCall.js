const creds = require('./awsConfig');
var Producer = require('sqs-producer');

var producer = Producer.create({
  queueUrl: 'https://sqs.us-east-2.amazonaws.com/021058984666/song-queue',
  region: 'us-east-2',
  accessKeyId: creds.AWS_ACCESS_KEY_ID,
  secretAccessKey: creds.AWS_SECRET_ACCESS_KEY
});

const sendMessage = (songName) => {
    producer.send([{
        id: '1',
        body: songName
      }], function(err) {
        if (err){
         console.log(err);
      } else {
        console.log('you successed with sqs')
      }
      });
}


