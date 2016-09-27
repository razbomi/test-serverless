'use strict';

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports.hello = (event, context, callback) => {
  console.log(event);

  var params = {
    TableName : 'my-table',
    Key: {
      my_key: '006af011-61ae-4959-9451-ad5a1218fc5c'
    }
  };

  docClient.get(params, function(err, data) {
      if (err) console.log(err);
      else {
        console.log(data);
        callback(null, data);
      }
  });
};
