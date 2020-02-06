/**
 * @Author: lvshaoli
 * @DATE: 2020-02-06
 * @TIME: 07:56
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { navigateTo } from '@utils/navUtils'
import Itemnavheader from '@components/itemNavHeader/itemNavHeader'
import PropTypes from 'prop-types'
import './relateIntrComponent.scss'

class Relateintrcomponent extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
  }

  // static defaultProps = {
  //   data: []
  // }
  constructor () {
    super(...arguments)
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='relateIntrComponent'>
        <Itemnavheader
          headerTitle={this.props.title || '医院介绍'}
          headerRightTitle=''
          onHederNavClick={() => {
            navigateTo('/pages/hosIntrPage/hosIntrPage')
          }}
        />
        <View className='hos-detail-hosIntr-container'>
          { this.props.content }
        </View>
      </View>
    )
  }
}

export default Relateintrcomponent
