/**
 * @Author: yami
 * @DATE: 2020-01-15
 * @TIME: 11:57
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Searchview from '@components/searchView/searchView'
import Primaryselectbtn from '@components/primaryselectbtn/primaryselectbtn'
import Lastvisitlocrecord from '@components/lastvisitlocrecord/lastvisitlocrecord'
import PropTypes from 'prop-types'
import './changeCity.scss'

class Changecity extends Component {
  static propTypes = {
    onToSearch: PropTypes.func,
  }
  //
  // static defaultProps = {
  //   data: []
  // }

  constructor () {
    super(...arguments)
    this.state = {
      openSelectRegion: false,
      regionList: ['全城', '雁塔区', '新城区', '碑林区', '高新区', '长安区', '临潼区'],
      selectedRegion: 0,
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  openChangeClick () {
    const changeFlag = !this.state.openSelectRegion
    this.setState({
      openSelectRegion: changeFlag
    })
  }

  render () {


    return (
      <View className='changeCity'>
        <View className='change-city-top-container'>
          <Searchview
            placeholder='请输入城市名'
            onSearchClick={this.props.onToSearch}
          />
          <View className='change-city-container-content'>

            <View>
              <Text className='change-city-container-content-left-text'>当前城市:西安</Text>
            </View>

            <View className='change-city-container-content-right' onClick={this.openChangeClick.bind(this)}>
              <Text className='container-content-right-text'>切换区县</Text>
              <Image
                className='container-content-right-image'
                src={this.state.openSelectRegion ? require('@assets/images/home/select_city_up_icon.png') : require('@assets/images/home/select_city_down.png')}
              />
            </View>
          </View>

          {this.state.openSelectRegion &&
              <View className='change-city-region-container'>
                { this.state.regionList && this.state.regionList.map((regionItem, index) => {

                  return <Primaryselectbtn
                    key={index}
                    primarySelectText={regionItem}
                    hasMagin
                    btnType='blue-gray'
                    checked={this.state.selectedRegion === index}
                    onPrimaryClick={() => {

                    }}
                  />
                }) }
              </View>
          }
        </View>

        {/* 定位/最近访问记录 */}
        <Lastvisitlocrecord />
      </View>
    )
  }
}

export default Changecity
