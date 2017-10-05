import React from 'react'
import PropTypes from 'react-proptypes'
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'

const MineRow = (props) => {
  const renderTiles = () => {
    return props.row.map((tile, index) => {
      const bomb = tile.bomb ? 'b' : 'n'
      return (
        <View key={index} style={styles.tileContainer} >
          <Text style={styles.tile} >
            b
          </Text>
        </View>
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
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    flexWrap: 'nowrap'
  },
  tileContainer: {
    flex: 1,
    // flexGrow: 1,
    // flexBasis: 0.14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'red',
    height: '100%'
  },
  tile: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    textAlign: 'center',
    // flexGrow: 1,
  }
})



export default MineRow