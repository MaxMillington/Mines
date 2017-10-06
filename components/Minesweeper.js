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
      return <MineRow key={index} row={chunk} markType={this.state.markType} click={this.props.click} />
    })
  }

  changeMarkType = (type) => {
    this.setState({ markType: type })
  }

  restartGame = () => {
    console.log('restart')
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <Image style={styles.restartButton} source={require('../img/freeSmileF.png')}  onPress={this.restartGame} />
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
  tiles: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
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
    paddingTop: 10
  },
  restartButton: {
    flex: 1,
    width: 50,
    maxHeight: 50,
  },
  rowContainer: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderWidth: 0.5,
    marginBottom: 30,
    marginTop: 20,
    paddingHorizontal: 5,
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