const connection = require('../connection');

const addAppointTO = (fulldate, time, user_id, doctor_id) => connection.query(
  'insert into appointments (date,time,user_id,doctor_id) values ($1,$2,$3,$4);',
  [fulldate, time, user_id, doctor_id],
);

const setUserBook = async ({
  date,
  time,
  user_id,
  doctor_id,
}) => {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;
  const day = new Date(date).getDate();
  const fulldate = `${year}-${month}-${day}`;
  const addAppoint = await addAppointTO(fulldate, time, user_id, doctor_id);
  if (addAppoint.command === 'INSERT') {
    return { insert: 'INSERT' };
  }
};

module.exports = setUserBook;
