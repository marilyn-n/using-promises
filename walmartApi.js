const fetch = require('node-fetch');

fetch('http://api.walmartlabs.com/v1/items?ids=19336123,19336123&apiKey=dkh7e6ex762zpusgq8cqf47k')
  .then(response => {
      this.items = response
      console.log(this.items)
  });

fetch('http://api.walmartlabs.com/v1/items?ids=12417832,19336123&apiKey=dkh7e6ex762zpusgq8cqf47k')
  .then(response => response.json())
  .then(myJson => {
    console.log('**************')
    console.log((myJson))
  })
  .catch(err => console.log(err))
