/**
 * @Author: yami
 * @DATE: 2020-01-15
 * @TIME: 10:31
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Commonimage from '@components/commonimage/commonimage'
import Commonborderbtn from '@components/commonborderbtn/commonborderbtn'
// import PropTypes from 'prop-types'
import './healthListItem.scss'

class Healthlistitem extends Component {
  // static propTypes = {
  //   children: PropTypes.any,
  //   data: PropTypes.array
  // }
  //
  // static defaultProps = {
  //   data: []
  // }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='healthListItem'>

        <View>
          <Commonimage
            imageSource={require('@assets/images/home/home_jddyfsyy.png')}
            imageStyle={{ width: '84px',
              height: '76px',
              borderRadius: '4px'}}
          />
        </View>

        {/* right */}
        <View className='health-list-item-right-container'>
          <View>
            <Text className='health-list-item-right-top-text'>基因编辑婴儿案”尘埃落定：违伦理，触犯法律</Text>
          </View>

          <View className='health-list-item-right-bottom'>
            <Commonborderbtn
              commonBorderText='生活'
              btnType='border-small'
            />
            <Text className='health-list-item-right-bottom-date'>2019-10-11</Text>
          </View>


        </View>
      </View>
    )
  }
}

export default Healthlistitem
