const fetch = require('node-fetch');

fetch('https://github.com/', {method: 'POST'})
    .then(data => data.text())
    .then(data => console.log(data))
    .catch(err => console.error(err, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<'));
 
// json
 
fetch('https://api.github.com/users/github')
    .then(res => res.json())
    .then(json => console.log(json));
 
// catching network error
// 3xx-5xx responses are NOT network errors, and should be handled in then()
// you only need one catch() at the end of your promise chain
 
fetch('http://domain.invalid/')
    .catch(err => console.error(err));

// create more exercises with fetch, and axios using promises
