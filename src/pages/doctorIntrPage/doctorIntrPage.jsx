/**
 * @Author: lvshaoli
 * @DATE: 2020-02-02
 * @TIME: 13:04
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Doctorlistitem from '@components/doctorListItem/doctorListItem'
import Doctorlistfilter from '@components/doctorListFilter/doctorListFilter'

import Searchbar from '@components/searchBar/searchBar'
import Pulltopushrefresh from '@components/pullToPushRefresh/pullToPushRefresh'
import './doctorIntrPage.scss'

class Doctorintrpage extends Component {

  config = {
    navigationBarTitleText: '医生介绍'
  }
    
  constructor () {
    super(...arguments)
    this.state = {
      filter3Data: [
        {
          title: '医生职称',
          sigle: false,
          items: [
            {
              id: 1,
              name: '主任医师',
              checked: true,
            },
            {
              id: 2,
              name: '副主任医师',
              checked: false,
            },
            {
              id: 3,
              name: '主治医师',
              checked: false,
            },
            {
              id: 4,
              name: '副主治医师',
              checked: false,
            }
          ]
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

  downPull = (callBack) => {
    console.log('下拉')
    setTimeout(() => {
      callBack(true)
    }, 4000)
  }

  loadMorePush = (callBack) => {
    if (!this.state.hasMore) {
      return
    }
    console.log('加载更多')

    setTimeout(() => {
      callBack(false)
    }, 4000)
  }

  searchResClick = () => {}

  render () {
    return (
      <View className='doctorIntrPage'>
        <View className='hos-list-item-search-bar-container'>
          <Searchbar
            onBarClick={this.searchResClick}
          />
        </View>
        {/* 过滤条件 */}
        <Doctorlistfilter
          onContent3ItemClick={(item) => {
            console.log('---onContent3ItemClick---', item)
          }}
          filter3Data={this.state.filter3Data}
        />

        <View className='hos-list-item-container'>
          <View>
            <Text className='hos-list-item-text'>医生介绍</Text>
          </View>
          <Pulltopushrefresh onDown={this.downPull} onLoadMore={this.loadMorePush}>
            <Doctorlistitem />
            <Doctorlistitem />
            <Doctorlistitem />
            <Doctorlistitem />
            <Doctorlistitem />
          </Pulltopushrefresh>
        </View>
      </View>
    )
  }
}

export default Doctorintrpage
