/**
 * @Author: yami
 * @DATE: 2020-01-16
 * @TIME: 14:24
 * @DESC: '医院列表'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Pulltopushrefresh from '@components/pullToPushRefresh/pullToPushRefresh'
import Commonhositem from '@components/commonhositem/commonhositem'
import Commonhosbtngroup from '@components/commonHosBtnGroup/commonHosBtnGroup'
import Searchbar from '@components/searchBar/searchBar'
import Listfilterpop from '@components/listFilterPop/listFilterPop'
import { navigateTo } from '@utils/navUtils'
// import PropTypes from 'prop-types'
// import { connect } from '@tarojs/redux'
import './hostipalList.scss'

// @connect(({  }) => ({
// }), (dispatch) => ({
// }))
class Hostipallist extends Component {
  // static propTypes = {
  //   children: PropTypes.any,
  //   data: PropTypes.array
  // }
  //
  // static defaultProps = {
  //   data: []
  // }

  config = {
    navigationBarTitleText: '医院'
  }

  constructor () {
    super(...arguments)
    this.state = {
      hasMore: true
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () {
  }

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
      <View className='hostipalList'>
        <View className='hos-list-item-search-bar-container'>
          <Searchbar
            onBarClick={this.searchResClick.bind(this)}
          />
        </View>
        <View className='hos-list-item-search-filter-container'>
          <Listfilterpop />
        </View>
        <View className='hos-list-item-container'>
          <Pulltopushrefresh onDown={this.downPull} onLoadMore={this.loadMorePush}>
            <Commonhositem
              renderGroup={<Commonhosbtngroup />}
              onItemClick={() => {
                navigateTo('/pages/hosDetail/hosDetail')
              }}
            />
            <Commonhositem
              renderGroup={<Commonhosbtngroup />}
            />
            <Commonhositem
              renderGroup={<Commonhosbtngroup />}
            />
            <Commonhositem
              renderGroup={<Commonhosbtngroup />}
            />
            <Commonhositem
              renderGroup={<Commonhosbtngroup />}
            />
            <Commonhositem
              renderGroup={<Commonhosbtngroup />}
            />
          </Pulltopushrefresh>
        </View>
      </View>
    )
  }
}

export default Hostipallist
