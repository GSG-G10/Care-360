import axios from 'axios';
// 192.168.1.141  >>  this url your expo from expo://192.168.1.141:5000
// no one change port 5000 oky!!
export default axios.create({ baseURL: 'http://192.168.1.141:5000' });

