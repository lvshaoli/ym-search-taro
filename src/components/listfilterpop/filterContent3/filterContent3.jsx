/**
 * @Author: lvshaoli
 * @DATE: 2020-01-24
 * @TIME: 10:59
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Primaryselectbtn from '@components/primaryselectbtn/primaryselectbtn'
import Filterbtngroup from './filterBtnGroup/filterBtnGroup'
// import PropTypes from 'prop-types'
import './filterContent3.scss'

class Filtercontent3 extends Component {
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
      hosLists: ['一级医院', '二级医院', '三级医院'],
      selectedRegion: 0
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
      <View className='filterContent3'>
        {/* 医院等级 */}
        <View className='filter-content3-container'>
          <View className='filter-content3-title-container'>
            <Text className='filter-content3-title-text'>医院等级</Text>
          </View>
          <View className='filter-content3-hos-grad-container'>
            {
              this.state.hosLists.map((hosItem, index) => {
                return <Primaryselectbtn
                  key={index}
                  primarySelectText={hosItem}
                  hasMagin
                  btnType='primary-gray'
                  checked={this.state.selectedRegion === index}
                  onPrimaryClick={() => {
                    this.setState({
                      selectedRegion: index
                    })
                  }}
                />
              })
            }
          </View>
        </View>

        {/* 医院所有权 */}
        <View className='filter-content3-container'>
          <View className='filter-content3-title-container'>
            <Text className='filter-content3-title-text'>医院所有权</Text>
          </View>
          <View className='filter-content3-hos-grad-container'>
            {
              this.state.hosLists.map((hosItem, index) => {
                return <Primaryselectbtn
                  key={index}
                  primarySelectText={hosItem}
                  hasMagin
                  btnType='primary-gray'
                  checked={this.state.selectedRegion === index}
                  onPrimaryClick={() => {
                    this.setState({
                      selectedRegion: index
                    })
                  }}
                />
              })
            }
          </View>
        </View>
        {/* 医院类似 */}
        <View className='filter-content3-container'>
          <View className='filter-content3-title-container'>
            <Text className='filter-content3-title-text'>医院类型</Text>
          </View>
          <View className='filter-content3-hos-grad-container'>
            {
              this.state.hosLists.map((hosItem, index) => {
                return <Primaryselectbtn
                  key={index}
                  primarySelectText={hosItem}
                  hasMagin
                  btnType='primary-gray'
                  checked={this.state.selectedRegion === index}
                  onPrimaryClick={() => {
                    this.setState({
                      selectedRegion: index
                    })
                  }}
                />
              })
            }
          </View>
        </View>

        {/* 特色科室 */}

        <View className='filter-content3-btn-group'>
          <Filterbtngroup />
        </View>

      </View>
    )
  }
}

export default Filtercontent3
