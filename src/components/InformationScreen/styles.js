import { StyleSheet } from 'react-native'

import { colors } from '../../resources'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.yellow,
    padding: 30
  },

  div: {
    alignItems: 'center'
  },

  text: {
    fontSize: 16,
    textAlign: 'justify'
  },

  link: {
    textDecorationLine: 'underline'
  },

  line: {
    marginTop: 25,
    marginBottom: 25,
    borderBottomColor: colors.black,
    borderBottomWidth: 1
  }
})
