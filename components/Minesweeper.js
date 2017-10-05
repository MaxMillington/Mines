import React from 'react'
import PropTypes from 'react-proptypes'
import { StyleSheet, View, Text, Image, TouchableHighlight, Button } from 'react-native'
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
    <View style={styles.outerContainer}>
      <Button style={styles.restartButton} title="Restart" />
      <View style={styles.rowContainer} >
        {renderRows()}
      </View>
      <View style={styles.buttonContainer} >
        <Button title="mark bomb"/>
        <Button title="mark space"/>
      </View>
    </View>
  )
}

Minesweeper.propTypes = {
  tiles: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    maxWidth: 300,
    maxHeight: 400,
    borderWidth: 0.5,
    borderColor: 'green',
  },
  restartButton: {
    flex: 1,
    paddingBottom: 50,
  },
  rowContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // maxWidth: 300,
    // maxHeight: 250,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginTop: 30,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row'
  }
});



export default Minesweeper