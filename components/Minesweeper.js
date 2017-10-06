import React from 'react'
import PropTypes from 'react-proptypes'
import { StyleSheet, View, Text, Image, TouchableHighlight, Button } from 'react-native'
import { chunk } from 'lodash'
import MineRow from './MineRow'

class Minesweeper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markType: 'space'
    }
  }


  renderRows = () => {
    const chunkedTiles = chunk(this.props.tiles, 5)
    return chunkedTiles.map((chunk, index) => {
      return <MineRow key={index} row={chunk} markType={this.state.markType} />
    })
  }

  changeMarkType = (type) => {
    this.setState({ markType: type })
  }

  restartGame = () => {

  }

  render() {
    console.log('this', this.state)
    return (
      <View style={styles.outerContainer}>
        <Button style={styles.restartButton} title="Restart" onPress={this.restartGame} />
        <View style={styles.rowContainer} >
          {this.renderRows()}
        </View>
        <View style={styles.buttonContainer} >
          <Button title="mark bomb" onPress={() => this.changeMarkType('bomb')}/>
          <Button title="mark space" onPress={() => this.changeMarkType('space')}/>
        </View>
      </View>
    )
  }
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