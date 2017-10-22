import React from 'react' // eslint-disable-line
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Minesweeper from '../components/Minesweeper'
import { click, restart } from '../actions/index'

const mapStateToProps = (state) => ({
  tiles: state.mine.tiles,
  status: state.mine.status
})

const mapDispatchToProps = dispatch => bindActionCreators({
  click,
  restart
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Minesweeper)