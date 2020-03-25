import { URLS } from './constants';
const format = require('string-format');
format.extend(String.prototype, {});
import call from './Api'
export const updateTracker = (listing_id, phone, callback) => {
    var url = URLS.UPDATE_LOCATION.format(vendor_id, listing_id);
    url += phone;
    console.log(url);
    call(url, 'POST', {}, {}).then(data => {
        callback(data.data.response);
    }).catch(e => {
        throw e;
    })
}

