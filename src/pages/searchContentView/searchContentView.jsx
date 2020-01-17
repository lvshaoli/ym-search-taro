/**
 * @Author: yami
 * @DATE: 2020-01-15
 * @TIME: 14:02
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import PropTypes from 'prop-types'
// import { connect } from '@tarojs/redux'
import Searchbar from '@components/searchBar/searchBar'
import Searchhoslistview from '@components/searchhoslistview/searchhoslistview'
import Commonhositem from '@components/commonhositem/commonhositem'
import Searchrecommendhis from '@components/searchrecommendhis/searchrecommendhis'
import { navBack } from '@utils/navUtils'
import './searchContentView.scss'

// @connect(({  }) => ({
// }), (dispatch) => ({
// }))
class Searchcontentview extends Component {
  // static propTypes = {
  //   children: PropTypes.any,
  //   data: PropTypes.array
  // }
  //
  // static defaultProps = {
  //   data: []
  // }

  config = {
    navigationBarTitleText: '健康搜一搜'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  searchResClick (val) {
    console.log('val', val)
    if (!val) {
      navBack()
    } else {
      console.log('调搜索')
    }
  }

  render () {
    return (
      <View className='searchContentView'>
        <Searchbar
          onBarClick={this.searchResClick.bind(this)}
        />

        <View>
          {/* 搜索推荐 */}

          <Searchrecommendhis
            title='搜索推荐'
            data={['张三', '骨科', '眼科', '消化内科', '儿科', '产科']}
          />


          {/* 历史 */}
          <Searchrecommendhis
            iconSource={require('@assets/images/home/search_his_clean_icon.png')}
            title='历史记录'
            data={['张三', '骨科']}
          />


          <Searchhoslistview
            title='医院'
            bottomTip='更多医院信息'
            onMoreClick={() => {
              console.log('more')
            }}
          >
            <Commonhositem />
            <Commonhositem />
          </Searchhoslistview>
          <Searchhoslistview
            title='中医堂'
            bottomTip='更多中医堂信息'
            onMoreClick={() => {
              console.log('more')
            }}
          >
            <Commonhositem />
            <Commonhositem />
          </Searchhoslistview>
        </View>
      </View>
    )
  }
}

export default Searchcontentview

