import React from 'react'
import PropTypes from 'react-proptypes'
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
import { chunk } from 'lodash'
import MineRow from './MineRow'

const Minesweeper = (props) => {
  const chunkedTiles = chunk(props.tiles, 5)

  const renderRows = () => {
    return chunkedTiles.map((chunk, index) => {
      return <MineRow key={index} row={chunk} />
    })
  }

  return (
    <View style={styles.container} >
      {renderRows()}
    </View>
  )
}

Minesweeper.propTypes = {
  tiles: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: 250,
    maxHeight: 250,
  },
});



export default Minesweeper