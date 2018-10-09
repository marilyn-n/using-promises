const fetch = require('node-fetch');

fetch('http://api.walmartlabs.com/v1/items?ids=19336123,19336123&apiKey=dkh7e6ex762zpusgq8cqf47k')
  .then(response => response.json())
  .then(myObj => {
    const allItemId = myObj.items
    return allItemId.map(item => console.log(item.itemId))
  })

fetch('http://api.walmartlabs.com/v1/items?ids=12417832,19336123&apiKey=dkh7e6ex762zpusgq8cqf47k')
  .then(response => response.json())
  .then(myJson => {
    const allItems = myJson.items
    return allItems.map(item => console.log(item.name, '<<<<----------'))
  })
  .catch(err => err)
