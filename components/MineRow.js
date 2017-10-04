import React from 'react'
import PropTypes from 'react-proptypes'
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'

const MineRow = (props) => {
  const renderTiles = () => {
    return props.row.map((tile, index) => {
      const bomb = tile.bomb ? 'bomb' : 'nope'
      return (
        <Text key={index} style={styles.tile} >
          {bomb}
        </Text>
      )
    })
  }

  return (
    <View style={styles.row}>
      {renderTiles()}
    </View>
  )
}

MineRow.propTypes = {
  row: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexGrow: 1
  }
})



export default MineRow