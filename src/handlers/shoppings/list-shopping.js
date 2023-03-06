const { listData } = require('../../controllers/shoppingsController');
const { listDataId } = require('../../controllers/shoppingsController');
const { headers } = require('../../utils/http-utils');

module.exports.handler = async (event, _context, _callback) => {

    console.log("[DEBUG - List Shippings]", event);
    const id = event.pathParameters?.shoppingId;
    
    let response = !id ? await listData() :  await listDataId(id);

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
            error: false,
            body: JSON.stringify(response)
        })
    }
}