/**
 * @Author: yami
 * @DATE: 2020-01-15
 * @TIME: 17:07
 * @DESC: '搜索推荐或搜索历史'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Primaryselectbtn from '@components/primaryselectbtn/primaryselectbtn'
import PropTypes from 'prop-types'
import './searchRecommendHis.scss'

class Searchrecommendhis extends Component {
  static propTypes = {
    iconSource: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.array
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { title, data, iconSource } = this.props || {}
    return (
      <View className='searchRecommendHis'>
        <View className='search-recommend-his-topcontainer'>
          <Text className='search-recommend-his-topcontainer-text'>{ title }</Text>
          {iconSource && <Image className='search-recommend-his-topcontainer-icon' src={iconSource} />}
        </View>

        <View className='search-recommend-his-topcontainer-content'>
          { data && data.map((item, index) => {
            return <Primaryselectbtn
              key={index}
              primarySelectText={item}
              hasMagin
              checked={false}
              onPrimaryClick={() => {

              }}
            />
          }) }

        </View>
      </View>
    )
  }
}

export default Searchrecommendhis
