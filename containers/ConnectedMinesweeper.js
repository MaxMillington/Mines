import React from 'react' // eslint-disable-line
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Minesweeper from '../components/Minesweeper'
import { click } from '../actions/index'

const mapStateToProps = (state) => ({
  tiles: state.mine.tiles,
  status: state.mine.status
})

const mapDispatchToProps = dispatch => bindActionCreators({
  click,
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Minesweeper)