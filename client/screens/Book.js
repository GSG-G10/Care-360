import axios from '../components/axioscreate';
import React, { useEffect, useState } from 'react';
import {
  View,
  Button,
  StatusBar,
  Platform,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Book({ navigation }) {
  const dds = [];
  const datess = new Date();
  const thisSDay = datess.getDate();

  const [thisYear, setThisYear] = useState(datess.getFullYear());
  const [thisMonth, setThisMonth] = useState(datess.getMonth());
  const [time, setTime] = useState('');
  const [data, setData] = useState([]);
  const [currentDay, setCurrentDay] = useState('');
  const [avaliable, setAvaliable] = useState([]);
  const [msgErr, setMsgErr] = useState(false);

  const previousMonth = () => {
    if (
      (thisYear === datess.getFullYear() && thisMonth > datess.getMonth()) ||
      thisYear > datess.getFullYear()
    ) {
      if (thisMonth > 0 && thisMonth < 13) {
        setThisMonth(thisMonth - 1);
      } else {
        setThisMonth(11);
        setThisYear(thisYear - 1);
      }
    }
  };

  const nextMonth = () => {
    setCurrentDay('');
    if (thisMonth >= 0 && thisMonth < 11) {
      setThisMonth(thisMonth + 1);
    } else {
      setThisMonth(0);
      setThisYear(thisYear + 1);
    }
  };
  const handlePost = () => {
    if (!currentDay || !time) {
      alert('all chooses');
      console.log('its error');
      // setMsgErr(true);
    } else {
      axios
        .post('/api/v1/appointments', {
          identity_number: 406043380,
          name: 'ibrahim',
          date: `${thisYear}-${thisMonth + 1}-${currentDay}`,
          time,
          user_id: 9,
          doctor_id: 30,
        })
        .then((res) => {
          alert(res.data.insert);
        });
    }
  };

  const lastday = (y, m) => new Date(y, m, 0).getDate();
  const firstDay = new Date(thisYear, thisMonth, 1);
  const nameDay = firstDay.toString().split(' ')[0];

  const previousDays = (day) => {
    const last = lastday(thisYear, thisMonth);
    let dayesTit = [
      { num: 'SUN', clas: 'none' },
      { num: 'MON', clas: 'none' },
      { num: 'TUE', clas: 'none' },
      { num: 'WED', clas: 'none' },
      { num: 'THU', clas: 'none' },
      { num: 'FRI', clas: 'none' },
      { num: 'SAT', clas: 'none' },
    ];

    for (let i = last; i > last - day; i -= 1) {
      dds.unshift({ num: i, clas: 'old' });
    }

    dayesTit.map((el) => dds.unshift(el));
  };

  // if (nameDay === 'Sun') previousDays(0);
  // if (nameDay === 'Mon') previousDays(1);
  // if (nameDay === 'Tue') previousDays(2);
  // if (nameDay === 'Wed') previousDays(3);
  // if (nameDay === 'Thu') previousDays(4);
  // if (nameDay === 'Fri') previousDays(5);
  // if (nameDay === 'Sat') previousDays(6);

  switch (nameDay) {
    case 'Sun':
      previousDays(0);
      break;
    case 'Mon':
      previousDays(1);
      break;
    case 'Tue':
      previousDays(2);
      break;
    case 'Wed':
      previousDays(3);
      break;
    case 'Thu':
      previousDays(4);
      break;
    case 'Fri':
      previousDays(5);
      break;
    case 'Sat':
      previousDays(6);
      break;
  }

  const getDayName = (num) => {
    const name = new Date(`${thisYear}-${thisMonth + 1}-${num}`);
    return [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Fri',
      'Sat',
    ][name.getDay()];
  };

  // for count days this month
  const days = new Date(thisYear, thisMonth + 1, 0).getDate();

  for (let i = 0; i < days; i += 1) {
    const test = getDayName(i + 1);
    const clas =
      currentDay === i + 1
        ? 'now'
        : test === 'Fri'
        ? 'none'
        : test === 'Sat'
        ? 'none'
        : i + 1 < thisSDay
        ? 'none'
        : 'ava';
    dds.push({ num: i + 1, clas });
  }

  const resetDate = (i) => {
    setCurrentDay(i);
    setTime('');
  };

  useEffect(() => {
    const url = 'http://localhost:5000/api/v1/books/30';
    axios.get(url).then((res) => {
      setData(res.data);
      setCurrentDay(thisSDay);
    });
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const newsDat = [];
      data.map((obj) => {
        // date.split('-')[2]
        if (
          Number(obj.date.split('-')[2]) === currentDay &&
          Number(obj.date.split('-')[0]) === thisYear &&
          Number(obj.date.split('-')[1]) === thisMonth + 1
        ) {
          newsDat.push(obj.time);
        }
      });
      setAvaliable(newsDat);
    }
  }, [currentDay]);

  const timesArray = [];
  const mapingTimes = () => {
    const times = ['09:00 AM', '11:00 AM', '2:00 PM'];
    for (let i = 0; i < times.length; i += 1) {
      if (avaliable.some((el) => el === times[i])) {
        timesArray.push({
          time: times[i],
          clas: 'none',
        });
      } else if (time === times[i]) {
        timesArray.push({
          time: times[i],
          clas: 'on',
        });
      } else {
        timesArray.push({
          time: times[i],
          clas: 'ava',
        });
      }
    }
  };

  mapingTimes();

  const renderFlatBOx = (day) => {
    let { clas, num } = day.item;
    return (
      <View>
        <TouchableOpacity
          disabled={clas === 'none' || clas === 'old' ? true : false}
          style={[
            styles.btns_dater,
            clas === 'none' ? { backgroundColor: 'rgb(214, 214, 214)' } : {},
            clas === 'old' ? { backgroundColor: '' } : {},
            num === currentDay && clas !== 'old' ? { backgroundColor: '#5ce058' } : {},
          ]}
          onPress={() => resetDate(num)}
        >
          <View>
            <Text>{num}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const showAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );

  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <View style={styles.bowl_dates}>
        <View style={styles.test_selected_years}>
          <TouchableOpacity onPress={previousMonth} style={styles.bowl_Svg}>
            <FontAwesome
              name={'angle-left'}
              style={styles.svg_Arrows}
              size={40}
            />
          </TouchableOpacity>
            <Text>{thisYear}</Text>
            <Text> ,</Text>
            <Text>{thisMonth + 1}</Text>
          <TouchableOpacity style={styles.bowl_Svg} onPress={nextMonth}>
            <FontAwesome
              name={'angle-right'}
              style={styles.svg_Arrows}
              size={40}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.bowl_circle_days}>
          <FlatList
            data={dds}
            numColumns={7}
            renderItem={(item) => renderFlatBOx(item)}
          />
        </View>

        <View style={styles.times_day_Availabe}>
          {timesArray.map((tm, i) => (
            <TouchableOpacity
              onPress={previousMonth}
              disabled={tm.clas === 'none' ? true : false}
              key={i}
              onPress={() => setTime(tm.time)}
              style={[
                styles.btns_times,
                tm.clas === 'none'
                  ? { backgroundColor: 'rgb(204, 204, 204)' }
                  : {},
                tm.clas === 'on' ? { backgroundColor: 'rgb(92, 224, 88)' } : {},
              ]}
            >
              <View>
                <Text>{tm.time ? tm.time : ''}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.msg_select_appointemts}>
          <Text>
            {thisYear > datess.getFullYear() ? `${thisYear},` : null} day{' '}
            {currentDay} {time ? `at ${time}` : null}
          </Text>
        </View>

        {/* {msgErr ? showAlert : null} */}
        <TouchableOpacity style={styles.btn_Sendappoint} onPress={handlePost}>
          <View>
            <Text>Book now</Text>
          </View>
        </TouchableOpacity>

        <Button
          title="Go to Landing"
          onPress={() => navigation.navigate('Landingpage')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bowl_dates: {
    backgroundColor: 'rgb(228, 228, 228)',
    height: '100%',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test_selected_years: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
  },
  test_selected_years_Btns: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },

  bowl_Svg: {
    width: 33,
    height: 33,
    backgroundColor: 'rgb(240, 240, 240)',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  svg_Arrows: {
    color: '#000',
  },

  svg_arrow_movein: {
    width: 25,
    height: 25,
  },

  line_days: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  line_days_btxt: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: 'red',
  },

  bowl_circle_days: {
    flexDirection: 'row',
    width: 'auto',
    justifyContent: 'center',
  },

  btns_dater: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },

  times_day_Availabe: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '70%',
    marginTop: 15,
  },

  btns_times: {
    borderWidth: 1,
    borderColor: 'rgb(131, 131, 131)',
    borderStyle: 'solid',
    borderRadius: 5,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
  },

  msg_select_appointemts: {
    marginTop: 10,
  },

  btn_Sendappoint: {
    marginTop: 20,
    backgroundColor: '#ffb803',
    width: 150,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
