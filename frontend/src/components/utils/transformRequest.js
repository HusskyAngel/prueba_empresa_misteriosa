
const dotenv =require('dotenv');
const path = require('path');

const envPath = path.resolve(__dirname, '../../../.env'); 
dotenv.config({ path: envPath });

const transformRequest = (url, resourceType) => {
  if (resourceType === 'Tile' && url.match('yourTileSource.com')) {
    return {
      url: url,
      headers: { 'Authorization': 'Bearer ' + yourAuthToken }
    }
  }
}
