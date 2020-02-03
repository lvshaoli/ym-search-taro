/**
 * @Author: lvshaoli
 * @DATE: 2020-02-03
 * @TIME: 12:02
 * @DESC: '药店过滤'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import FilterContent1 from '@components/filterContent1/filterContent1'
import FilterContent3 from '@components/filterContent3/filterContent3'
// import PropTypes from 'prop-types'
import './pharmacyListFilter.scss'

class Pharmacylistfilter extends Component {
  // static propTypes = {
  //   children: PropTypes.any,
  //   data: PropTypes.array
  // }
  //
  // static defaultProps = {
  //   data: []
  // }

    
  constructor () {
    super(...arguments)
    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='pharmacyListFilter'>
        <View className='doctor-list-filter-container'>
          <View
            onClick={() => {
              this.setState({
                allDept: !this.state.allDept,
                filterDoc: false
              })
            }}
          >
            <Text
              className={
                this.state.allDept
                  ? 'list-filter-pop-top-select-text'
                  : 'list-filter-pop-top-unselect-text'
              }
            >全城</Text></View>
          <View
            onClick={() => {
              this.setState({
                filterDoc: !this.state.filterDoc,
                allDept: false
              })
            }}
          >
            <Text
              className={
                this.state.filterDoc
                  ? 'list-filter-pop-top-select-text'
                  : 'list-filter-pop-top-unselect-text'
              }
            >筛选</Text>
          </View>
        </View>
        { (this.state.allDept || this.state.filterDoc) &&
        <View className='listFilterPop' onClick={() =>{
        }}
        >
          {this.state.allDept && <FilterContent1 />}
          {this.state.filterDoc && <FilterContent3 />}
        </View>
        }
      </View>
    )
  }
}

export default Pharmacylistfilter
