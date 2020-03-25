import { URLS } from './constants';
import axios from 'axios';
const Header = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVmYzY5Y2EyM2JhMDVmMmJjNzQyZjNlNmNmNWQ5YzRlNzY0ZGI0NzlmMDZiNDdlZDVhNmQyNjk1NjI5NjI1MjJkYjJjYmExZGRkNzhlYmIzIn0.eyJhdWQiOiIzIiwianRpIjoiNWZjNjljYTIzYmEwNWYyYmM3NDJmM2U2Y2Y1ZDljNGU3NjRkYjQ3OWYwNmI0N2VkNWE2ZDI2OTU2Mjk2MjUyMmRiMmNiYTFkZGQ3OGViYjMiLCJpYXQiOjE1NDM1MjE2OTksIm5iZiI6MTU0MzUyMTY5OSwiZXhwIjoxNTc1MDU3Njk5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.vc9wK-CgZYbkMUFM7vAgsSILvushpgctKhbIvJTphcWPkTUUEjXM6SFkUhkwGTro9H1cl_RCfR2EhiDp7jdclVcBaM9pb_b98tmivLFjDnwhpKSarbCMUcj6y9t4OVmo4wxNIcRobQEoVuLJHsXq3X8m64Dk8Xf4RXRjDVlfCyB980SbQIJkiW2loaW1itxs_5JFjIyyyACSNzH0OSt0PvHgJ0U-CcYiCG93yypOF6xepoEn5iEd-8GhyDmqEcYBaRevOR1axql8htChF4uui4oUkj7lOCpzHkgS72CS0FZE7lNCWn3HxX1gxEPftahrLHZ7xKKan2gn9uxC_RNLVD7scyjeTjv-trn-16eIJNMi_JPLC2noD1QTtM6US4OJchTZAE1mp3YawgaWHo6SLCSFvtvfz86oAn_ZA3DJ2-cKVBuiwTlQKTomUwo4nPxZG75VaGB_KMhFeIiemUwU9V7NKzZVs08evl86TuJmGQpupAG660GViznLe7Y5RXM88esKmJs3AxFUAMrCSsCd2GqT-vP908dMxJHpUM_9_JbCF8eLwOmv7ebOjrtPZvfuISzUSrgc9ngRcUGA9YAhV_ac-4AaAKpuBkpXw7Y7pZ-umlP6VJFlrwP3s4fiz566t9G6Vp3pgtc1u2kQpQgE2SN8hFFbXtfOW2lKLCm9MpU';
export default call = (url, type = "GET", body = {}, params = {}, callback, use_base = true) => {
    const base_url = URLS.BASE;
    var endpoint = url;
    if (use_base) {
        endpoint = base_url + endpoint
    }
    switch (type) {
        case "GET":
            return axios.get(endpoint, { headers: { Authorization: Header }, method: type, data: params })
            break;
        case "POST":
            return axios.post(endpoint, body, { headers: { Authorization: Header }, method: type })
            break;
        case "PUT":
            var request = axios.put(endpoint, body, { headers: { Authorization: Header }, method: type, params: params })
            // console.log(body);
            return request;
            break;
        case "DELETE":
            return axios.delete(endpoint, { headers: { Authorization: Header }, method: type, data: params })
            break;
    }
}