import React from 'react' // eslint-disable-line
import { connect } from 'react-redux'
import Minesweeper from '../components/Minesweeper'

const mapStateToProps = (state) => ({
  tiles: state.mine.tiles,
  loading: state.mine.loading
})


export default connect(
  mapStateToProps,
)(Minesweeper)