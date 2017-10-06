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

  const callCon = () => {
    console.log('party')
  }

  return (
    <View style={styles.outerContainer}>
      <Button style={styles.restartButton} title="Restart" onPress={callCon} />
      <View style={styles.rowContainer} >
        {renderRows()}
      </View>
      <View style={styles.buttonContainer} >
        <Button title="mark bomb" onPress={callCon}/>
        <Button title="mark space" onPress={callCon}/>
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
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // maxWidth: 300,
    // maxHeight: 250,
    borderWidth: 0.5,
    marginVertical: 30,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row'
  }
});



export default Minesweeper