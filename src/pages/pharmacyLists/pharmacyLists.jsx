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
import './pharmacyLists.scss'

class Pharmacylists extends Component {

    config = {
      navigationBarTitleText: '药店'
    }
    
    constructor () {
      super(...arguments)
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
        <PharmacyListFilter />

        <View className='hos-list-item-container'>
          <Pulltopushrefresh onDown={this.downPull} onLoadMore={this.loadMorePush}>
            <Commonhositem
              onItemClick={() => {
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
