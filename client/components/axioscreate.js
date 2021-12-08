import axios from 'axios';
// 192.168.1.141  >>  this url your expo from expo://192.168.1.141:16002
export default axios.create({ baseURL: 'http://192.168.1.103:19000' });
