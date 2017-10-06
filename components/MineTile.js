import React from 'react'
import PropTypes from 'react-proptypes'
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'

const MineTile = (props) => {
  let bomb
  if (props.tile.clicked && !props.tile.bomb) {
    bomb = 'n'
  } else if (props.tile.clicked && props.tile.bomb) {
    bomb = 'b'
  }

  const handlePress = () => {
    props.click(props.markType, props.tile)
  }

  console.log('yo my props', props)

  return (
    <TouchableHighlight
      style={styles.tileContainer}
      onPress={handlePress}
    >
      <Text style={styles.tile} >
        {bomb}
      </Text>
    </TouchableHighlight>
  )
}

MineTile.propTypes = {
  tile: PropTypes.object.isRequired,
  markType: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
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

export default MineTile