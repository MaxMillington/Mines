import React from 'react'
import PropTypes from 'react-proptypes'
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'

const MineRow = (props) => {
  const renderTiles = () => {
    return props.row.map((tile, index) => {
      const bomb = tile.bomb ? 'b' : 'n'
      return (
        <TouchableHighlight key={index} style={styles.tileContainer} >
          <Text style={styles.tile} >
            {bomb}
          </Text>
        </TouchableHighlight>
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
  row: PropTypes.array.isRequired,
  markType: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
  tileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
    height: '100%'
  },
  tile: {
    textAlign: 'center',
  }
})



export default MineRow