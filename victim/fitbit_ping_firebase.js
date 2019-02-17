var contents = JSON.stringify({
	"msgType": "request_help",
	"storageUrl": "https://google.com"
});

fetch('https://us-central1-treehacks-2c696.cloudfunctions.net/accident', {
	method: 'POST',
	headers: {
	  'Content-Type': 'application/json'
	},
	body: contents
});
