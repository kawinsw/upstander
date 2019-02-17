function uploadToGaiaHub(filename, contents, hubConfig) {
  var contentType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'application/octet-stream';

  _logger.Logger.debug('uploadToGaiaHub: uploading ' + filename + ' to ' + hubConfig.server);
  return fetch(hubConfig.server + '/store/' + hubConfig.address + '/' + filename, {
    method: 'POST',
    headers: {
      'Content-Type': contentType,
      Authorization: 'bearer ' + hubConfig.token
    },
    body: contents
  }).then(function (response) {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Error when uploading to Gaia hub');
    }
  }).then(function (responseText) {
    return JSON.parse(responseText);
  }).then(function (responseJSON) {
    return responseJSON.publicURL;
  });
}
