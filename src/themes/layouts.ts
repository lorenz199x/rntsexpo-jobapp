import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerVertically: {
    alignItems: 'center',
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexRowBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRowAround: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  flexStartBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexWrap: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  spaceBetween: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  spaceBetweenStart: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  spaceBetweenBottom: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  spaceAroundCenter: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
