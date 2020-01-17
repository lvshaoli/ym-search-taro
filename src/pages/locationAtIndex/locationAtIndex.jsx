/**
 * @Author: yami
 * @DATE: 2020-01-16
 * @TIME: 11:09
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Changecity from '@pages/changeCity/changeCity'
import Locationsearch from '@components/locationsearch/locationsearch'

import { AtIndexes } from 'taro-ui'
// import PropTypes from 'prop-types'
import './locationAtIndex.scss'

class Locationatindex extends Component {
  // static propTypes = {
  //   children: PropTypes.any,
  //   data: PropTypes.array
  // }
  //
  // static defaultProps = {
  //   data: []
  // }


  config = {
    navigationBarTitleText: '选择地区'
  }

  constructor () {
    super(...arguments)
    this.state = {
      showSearchInput: false,
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  onShowSearchInput () {
    const flag = !this.state.showSearchInput
    this.setState({
      showSearchInput: flag
    })
    console.log('----', flag)
  }

  onClick (item) {
    console.log(item)
  }


  render () {


    if (this.state.showSearchInput) {
      return <Locationsearch
        onLocSeachClick={this.onShowSearchInput.bind(this)}
      />
    }


    const list = [{
      title: 'A',
      key: 'A',
      items: [
        {
          'name': '阿坝'
          // 此处可加其他业务字段
        },
        {
          'name': '阿拉善'
        }]
    },
    {
      title: 'B',
      key: 'B',
      items: [
        {
          'name': '北京'
        },
        {
          'name': '保定'
        }]
    },
    {
      title: 'C',
      key: 'C',
      items: [
        {
          'name': '北京'
        },
        {
          'name': '保定'
        }]
    },
    {
      title: 'D',
      key: 'D',
      items: [
        {
          'name': '北京'
        },
        {
          'name': '保定'
        }]
    }
    ]
    return (
      <View className='locationAtIndex' style='height:100vh'>
        <AtIndexes
          list={list}
          onClick={this.onClick.bind(this)}
        >
          <View>
            <Changecity
              onToSearch={this.onShowSearchInput.bind(this)}
            />
          </View>
        </AtIndexes>
      </View>
    )
  }
}

export default Locationatindex
