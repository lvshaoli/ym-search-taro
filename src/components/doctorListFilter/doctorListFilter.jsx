/**
 * @Author: lvshaoli
 * @DATE: 2020-02-02
 * @TIME: 16:34
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import FilterContent4 from '@components/filterContent4/filterContent4'
import FilterContent3 from '@components/filterContent3/filterContent3'
// import PropTypes from 'prop-types'
import './doctorListFilter.scss'

class Doctorlistfilter extends Component {
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
    this.state = {
      allDept: false,
      filterDoc: false
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='doctorListFilter'>
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
            >全部科室</Text></View>
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
          {this.state.allDept && <FilterContent4 />}
          {this.state.filterDoc && <FilterContent3 />}
        </View>
        }

      </View>
    )
  }
}

export default Doctorlistfilter
