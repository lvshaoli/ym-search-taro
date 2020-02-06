/**
 * @Author: lvshaoli
 * @DATE: 2020-02-03
 * @TIME: 11:22
 * @DESC: '药店'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Pulltopushrefresh from '@components/pullToPushRefresh/pullToPushRefresh'
import Commonhositem from '@components/commonhositem/commonhositem'
import Searchbar from '@components/searchBar/searchBar'
import PharmacyListFilter from '@components/pharmacyListFilter/pharmacyListFilter'
import { navigateTo } from '@utils/navUtils'
import './pharmacyLists.scss'

class Pharmacylists extends Component {

    config = {
      navigationBarTitleText: '药店'
    }
    
    constructor () {
      super(...arguments)
      this.state = {
        filter3Data: [
          {
            title: '',
            sigle: false,
            items: [
              {
                id: 1,
                name: '离我最近',
                checked: false,
              },
              {
                id: 2,
                name: '医生坐诊',
                checked: true,
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

  render () {
    return (
      <View className='pharmacyLists'>
        <View className='hos-list-item-search-bar-container'>
          <Searchbar
            onBarClick={() => {
              console.log('onBarClick')
            }}
            focus={false}
          />
        </View>

        {/* 过滤 */}
        <PharmacyListFilter
          onContent3ItemClick={(item) => {
            console.log('---onContent3ItemClick---', item)
          }}
          filter3Data={this.state.filter3Data}
        />

        <View className='hos-list-item-container'>
          <Pulltopushrefresh onDown={this.downPull} onLoadMore={this.loadMorePush}>
            <Commonhositem
              onItemClick={() => {
                navigateTo('/pages/pharmacyDetailPage/pharmacyDetailPage')
              }}
            />
            <Commonhositem />
            <Commonhositem />
            <Commonhositem />
            <Commonhositem />
            <Commonhositem />
          </Pulltopushrefresh>
        </View>
      </View>
    )
  }
}

export default Pharmacylists
