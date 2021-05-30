import React, { useState } from 'react';
import { View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import Theme from '../../styles/colors'

// Using react-native-calendar-strip package to display calendar at top of Home page

function Calendar (props) {
  let {date} = props

  function handleChange(date) {
    props.logDate({formattedDate: date.format('YYYY-MM-DD')});
  }

  return(
    <View>  
        <CalendarStrip
            scrollable
            style={{ height: 150, paddingTop: 15, paddingBottom: 5 }}
            daySelectionAnimation={{type: 'background', duration: 200, highlightColor: Theme.creamHalf}}
            calendarColor={ Theme.calendar }
            calendarHeaderStyle={{ color: Theme.text }}
            dateNumberStyle={{ color: Theme.text  }}
            dateNameStyle={{color: Theme.text}}
            highlightDateNameStyle={{color: Theme.text}}
            highlightDateNumberStyle={{color: Theme.text}}
            iconContainer={{ flex: 0.1 }}
            date={date}
            onDateSelected={handleChange}
          />
    </View>
  );

}

export default Calendar;