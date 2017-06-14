var SPARK_ROOM = 'SPARK_ROOM_ID'
var SPARK_TOKEN = 'SPARK_TOKEN'

function onFormSubmit(e) {
  var itemResponses = e.response.getItemResponses();
  Logger.log('Correo ingresado es '+ itemResponses[0].getResponse());
  var email = itemResponses[0].getResponse();
  registerPerson(email);
}

function registerPerson(email) {
  var roomId = SPARK_ROOM;
  var token = SPARK_TOKEN;
  var bearer = 'Bearer '+token;
  var url = 'https://api.ciscospark.com/v1/memberships';
  
  var headers = {
    'Authorization' : bearer
  }
  
  var data = {
    'roomId' : roomId,
    'personEmail' : email
  }
  
  var payload = JSON.stringify(data);    
  
  var options = {
    'method' : 'post',
    'contentType': 'application/json',
    'headers' : headers,
    'payload' : payload
  }
  
  var response = UrlFetchApp.fetch(url, options);
  var json = response.getContentText();
  var data = JSON.parse(json);
  Logger.log(response.getContentText());
  
}
