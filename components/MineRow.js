import React from 'react'
import PropTypes from 'react-proptypes'
import { StyleSheet, View } from 'react-native'
import MineTile from './MineTile'

const MineRow = (props) => {
  const renderTiles = () => {
    return props.row.map((tile, index) => {
      return (
        <MineTile key={index} tile={tile} markType={props.markType} click={props.click} />
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
  markType: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  }
})



export default MineRow