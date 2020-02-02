/**
 * @Author: yami
 * @DATE: 2020-01-17
 * @TIME: 11:18
 * @DESC: '过滤医院列表'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import FilterContent1 from '@components/filterContent1/filterContent1'
import FilterContent2 from '@components/filterContent2/filterContent2'
import FilterContent3 from '@components/filterContent3/filterContent3'
// import PropTypes from 'prop-types'
import './listFilterPop.scss'

class Listfilterpop extends Component {
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
      selectDis: false,
      selectFilterAll: false,
      selectFilter: false
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
      <View>
        <View className='list-filter-pop-top-container'>
          <View onClick={() => {
            this.setState({
              selectDis: !this.state.selectDis,
              selectFilterAll: false,
              selectFilter: false
            })
          }}
          >
            <Text className={this.state.selectDis ? 'list-filter-pop-top-select-text' : 'list-filter-pop-top-unselect-text'}>全城</Text>
          </View>
          <View onClick={() => {
            this.setState({
              selectDis: false,
              selectFilterAll: !this.state.selectFilterAll,
              selectFilter: false
            })
          }}
          >
            <Text className={this.state.selectFilterAll ? 'list-filter-pop-top-select-text' : 'list-filter-pop-top-unselect-text'}>综合排序</Text>
          </View>
          <View onClick={() => {
            this.setState({
              selectDis: false,
              selectFilterAll: false,
              selectFilter: !this.state.selectFilter
            })
          }}
          >
            <Text className={this.state.selectFilter ? 'list-filter-pop-top-select-text' : 'list-filter-pop-top-unselect-text'}>筛选</Text>
          </View>
        </View>
        { (this.state.selectDis || this.state.selectFilterAll || this.state.selectFilter) &&
        <View className='listFilterPop' onClick={() =>{
          // this.setState({
          //   selectDis: false,
          //   selectFilterAll: false,
          //   selectFilter: false
          // })
        }}
        >
          {this.state.selectDis && <FilterContent1 />}
          {this.state.selectFilterAll && <FilterContent2 />}
          {this.state.selectFilter && <FilterContent3 />}
        </View>
        }
      </View>
    )
  }
}

export default Listfilterpop
