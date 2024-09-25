import React from 'react';
import { StyleSheet } from 'react-native';


const massage = { key: 'massage', color: 'blue' };
const workout = { key: 'workout', color: 'pink' };

const LeftBar: React.FC = () => {
 
  return (
    <></>
  );
};

const createStylesheet = (theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: theme.colors.bodyBg,
      flex: 1,
    },
    headerContainer: {
      paddingVertical: 16,
      paddingHorizontal: 24,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    calendarContainer: {
      width: '100%',
      padding: 8,
      borderTopWidth: 2,
      borderTopColor: theme.colors.actionFocus,
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.actionFocus,
    },
    calendar: {
      width: '100%',
      backgroundColor: theme.colors.bodyBg,
    },
    filterContainer: {
      width: '100%',
      flex: 2,
    },
    buttonAddAppointment: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.success500,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    buttonAddAppointmentText: {
      color: theme.colors.grayLight,
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 8,
    },
  });

export default LeftBar;
