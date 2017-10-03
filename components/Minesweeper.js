import React from 'react'
import PropTypes from 'react-proptypes'
import { StyleSheet, View, Text, Image } from 'react-native'

const Minesweeper = (props) => {
  console.log(props)
  return (
    <View>
      <Text>ok thnk you</Text>
    </View>
  )
}

Minesweeper.propTypes = {
  tiles: PropTypes.array.isRequired
}



export default Minesweeper