import React, {useState} from 'react';
import { Input, Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateOfBirth = () => {
  const [date, setDate] = useState(new Date(1598051730000));

  return <>
    <Input placeholder='Date of Birth (dd-mm-yyyy)' autoCorrect={false} autoCapitalize='none' />
  </>
}
export default DateOfBirth;