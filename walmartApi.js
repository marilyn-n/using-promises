const fetch = require('node-fetch');

const container = []

const p = fetch('http://api.walmartlabs.com/v1/items?ids=19336123,19336123&apiKey=dkh7e6ex762zpusgq8cqf47k')
  .then(response => response.json())
  .then(myObj => {
    const allItemId = myObj.items
    allItemId.map(item => console.log(item.itemId, '---aqui---'))
        return allItemId.map(item => container.push(item.itemId))
  })


console.log(p, '***************')


fetch('http://api.walmartlabs.com/v1/items?ids=12417832,19336123&apiKey=dkh7e6ex762zpusgq8cqf47k')
  .then(response => response.json())
  .then(myJson => {
    const allItems = myJson.items
    return allItems.map(item => console.log(item.name))
  })
  .catch(err => err)

fetch('http://api.walmartlabs.com/v1/items?ids=12417832,19336123&apiKey=dkh7e6ex762zpusgq8cqf47k')
  .then(res => res.json())
  .then(objRes => {
    const itemDescription = objRes.items
    const result = itemDescription.map(item => item.color)
      result[0] = `** ${result[0]}`
      result[1] = `** ${result[1]}`
      console.log(result)
    }
  )
  .catch(err => err)

fetch('http://api.walmartlabs.com/v1/items?ids=12417832,19336123&apiKey=dkh7e6ex762zpusgq8cqf47k')
  .then(response => response.json())
  .then(objResponse => {
    const allItems = objResponse.items
    const allSizes = allItems.map(item => item.size)
    const result = allSizes.filter(size => size !== null )
    console.log(result)
  })

  fetch('http://api.walmartlabs.com/v1/items?ids=12417832,19336123&apiKey=dkh7e6ex762zpusgq8cqf47k')
  .then(response => response.json())
  .then(objResponse => {
    const myItem = objResponse.items
    const isOnline = myItem.map(item => item.availableOnline)
    if (!isOnline) {
      console.log(myItem[0] = `---->>> Item is available ${isOnline}`)
    } else {
      console.log(myItem[1] = `---->>>Item is not available ${isOnline}`)
    }
  })

