/**
 * @Author: lvshaoli
 * @DATE: 2020-02-05
 * @TIME: 10:27
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import Pulltopushrefresh from '@components/pullToPushRefresh/pullToPushRefresh'
import Commonhositem from '@components/commonhositem/commonhositem'
import Chinesebtngroup from '@components/chineseBtnGroup/chineseBtnGroup'
import Searchbar from '@components/searchBar/searchBar'
import Listfilterpop from '@components/listFilterPop/listFilterPop'
import { navigateTo } from '@utils/navUtils'
import { View } from '@tarojs/components'
import './chMediListPage.scss'

class Chmedilistpage extends Component {
  
    config = {
      navigationBarTitleText: '中医堂'
    }
    
    constructor () {
      super(...arguments)
      this.state = {
        hasMore: true,
        filter3Data: [
          {
            title: '擅长',
            sigle: true,
            items: [
              {
                id: 1,
                name: '中医针灸',
                checked: false,
              },
              {
                id: 2,
                name: '中医养生',
                checked: false,
              },
              {
                id: 3,
                name: '中医吃饭',
                checked: false,
              }
            ]
          },
          {
            title: '特色科室',
            sigle: false,
            items: [
              {
                id: 1,
                name: '妇科',
                checked: false,
              },
              {
                id: 2,
                name: '皮肤科',
                checked: false,
              },
              {
                id: 3,
                name: '儿科眼科',
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

  searchResClick () {}

  render () {
    return (
      <View className='chMediListPage'>
        <View className='hos-list-item-search-bar-container'>
          <Searchbar
            onBarClick={this.searchResClick.bind(this)}
            focus={false}
          />
        </View>
        <View className='hos-list-item-search-filter-container'>
          <Listfilterpop
            onContent3ItemClick={(item) => {
              console.log('---onContent3ItemClick---', item)
            }}
            filter3Data={this.state.filter3Data}
          />
        </View>
        <View className='hos-list-item-container'>
          <Pulltopushrefresh onDown={this.downPull} onLoadMore={this.loadMorePush}>
            <Commonhositem
              renderGroup={<Chinesebtngroup
                onToHosClick={() => {
                  navigateTo('/pages/chMedDetailPage/chMedDetailPage')
                }}
              />
              }
              deptLabelList={['骨科', '儿科']}
            />
          </Pulltopushrefresh>
        </View>
      </View>
    )
  }
}

export default Chmedilistpage
