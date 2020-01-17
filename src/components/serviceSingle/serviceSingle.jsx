/**
 * @Author: yami
 * @DATE: 2020-01-15
 * @TIME: 11:23
 * @DESC: '全部分类子模块'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Homeitem from '@components/homeItem/homeItem'
import PropTypes from 'prop-types'
import './serviceSingle.scss'

class Servicesingle extends Component {
  static propTypes = {
    singleTitle: PropTypes.string,
    sigleServiceList: PropTypes.array
  }
  //
  // static defaultProps = {
  //   data: []
  // }

  constructor () {
    super(...arguments)
    this.state = {
      serviceList: [
        {
          name: '打针',
          imageSource: require('@assets/images/home/home_dz.png'),
          onItemClick: () => {
            console.log('打针')
          }
        },
        {
          name: '包扎',
          imageSource: require('@assets/images/home/home_bz.png'),
          onItemClick: () => {
            console.log('熬药')
          }
        },
        {
          name: '熬药',
          imageSource: require('@assets/images/home/home_ay.png'),
          onItemClick: () => {
            console.log('熬药')
          }
        },
        {
          name: '理疗',
          imageSource: require('@assets/images/home/home_lil.png'),
          onItemClick: () => {
            console.log('理疗')
          }
        },
        {
          name: '护士上门',
          imageSource: require('@assets/images/home/home_hssm.png'),
          onItemClick: () => {
            console.log('护士上门')
          }
        },
        {
          name: '急救',
          imageSource: require('@assets/images/home/home_jij.png'),
          onItemClick: () => {
            console.log('急救')
          }
        },
        {
          name: '骨科',
          imageSource: require('@assets/images/home/home_gk.png'),
          onItemClick: () => {
            console.log('骨科')
          }
        },
        {
          name: '产科',
          imageSource: require('@assets/images/home/home_ck.png'),
          onItemClick: () => {
            console.log('产科')
          }
        },
        {
          name: 'AED',
          imageSource: require('@assets/images/home/home_aed.png'),
          onItemClick: () => {
            console.log('AED')
          }
        }
      ]
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { singleTitle } = this.props || {}
    return (
      <View className='serviceSingle'>
        <Text className='service-single-title'>{ singleTitle }</Text>
        <View className='index-top-view-third'>
          {this.state.serviceList.map((item, index) => {
            if ((index + 1) % 5 === 0) {
              return (
                <Homeitem
                  key={index}
                  itemText={item.name}
                  imageSource={item.imageSource}
                  onItemClick={item.onItemClick}
                  imageSize='home-item-image-small'
                />
              )
            }
            return (
              <Homeitem
                key={index}
                itemText={item.name}
                imageSource={item.imageSource}
                onItemClick={item.onItemClick}
                imageSize='home-item-image-small'
                itemStyle={{ 'marginRight': '41px'}}
              />
            )

          })

          }
        </View>
      </View>
    )
  }
}

export default Servicesingle
