/**
 * @Author: lvshaoli
 * @DATE: 2020-01-16
 * @TIME: 14:36
 * @DESC: '上拉刷新，下拉加载更多'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { AtActivityIndicator, AtLoadMore } from 'taro-ui'
import PropTypes from 'prop-types'
import './pullToPushRefresh.scss'

class Pulltopushrefresh extends Component {
  static propTypes = {
    hasMore: PropTypes.bool, // 是否有更多
    onDown: PropTypes.func,
    onLoadMore: PropTypes.func,
    loadFirst: PropTypes.bool,
    isHidenBottomLoading: PropTypes.bool
  }
  //
  // static defaultProps = {
  //   hasMoreData: true
  // }

  constructor () {
    super(...arguments)
    this.state = {
      downText: '下拉刷新',
      downDragStyle: {height: 0 + 'px'},
      dargStyle: {top: 0 + 'px'},
      scrollY: true,
      dargState: 0, // 0不做操作 1刷新
      startP: {},
      status: 'more',
      toTopBol: true
    }
  }

  componentDidMount () {
    !this.props.loadFirst && this.loadRecommend()
  }

   touchmove = e => {
     let move_p = e.touches[0], // 移动时的位置
       deviationX = 0.30, // 左右偏移量(超过这个偏移量不执行下拉操作)
       deviationY = 80, // 拉动长度（低于这个值的时候不执行）
       maxY = 80, // 拉动的最大高度

       start_x = this.state.startP.clientX,
       start_y = this.state.startP.clientY,
       move_x = move_p.clientX,
       move_y = move_p.clientY,
       dev = Math.abs(move_x - start_x) / Math.abs(move_y - start_y)
     if (dev < deviationX) { // 当偏移数值大于设置的偏移数值时则不执行操作
       if (move_y - start_y > 0 && this.state.toTopBol) { // 下拉操作
         let pY = Math.abs(move_y - start_y) / 3.5// 拖动倍率
         if (pY >= deviationY) {
           this.setState({
             dargState: 1,
             downText: '释放刷新'
           })
         } else {
           this.setState({
             dargState: 0,
             downText: '下拉刷新'
           })
         }
         if (pY >= maxY) {
           pY = maxY
         }
         this.setState({
           dargStyle: {top: pY + 'px'},
           downText: '下拉刷新',
           downDragStyle: {height: pY + 'px'},
           scrollY: false
         })
       }
     }
   }

  touchEnd = () => {
    if (this.state.dargState === 1) {
      this._down()
    } else {
      this.reduction()
    }
  }

  _down = () => {
    this.props.onDown((downFinish) => {
      console.log('downFinish', downFinish)
      // downFinish && this.reduction()
      this.reduction()
    })
  }

  reduction = () => {
    // 刷新之后重置
    this.setState({
      dargStyle: {top: 0 + 'px'},
      downText: '下拉刷新',
      downDragStyle: {height: 0 + 'px'},
      scrollY: true,
      dargState: 0
    })
  }
  toTopScrollClick () {
    this.setState({
      toTopBol: true
    })
  }
  onScroll (e) {
    const { scrollTop } = e.detail || {}

    if (scrollTop > 10) {
      this.setState({
        toTopBol: false
      })
    }
  }

  touchStart = e => {
    this.setState({
      startP: e.touches[0]
    })
  }
  // console.log(info)
  loadRecommend = () => {
    if (!this.props.hasMore) {
      this.setState({
        status: 'noMore'
      })
      return
    }
    this.props.onLoadMore((hasMore) => {
      setTimeout(() => {
        this.setState({
          status: hasMore ? 'more' : 'noMore'
        })
      }, 500)
    })
    this.setState({
      status: 'loading'
    })
  }

  render () {
    return (
      <View className='pullToPushRefresh'>
        <View className='downDragBox' style={this.state.downDragStyle}>
          <AtActivityIndicator content={this.state.downText}></AtActivityIndicator>
        </View>
        <ScrollView
          style={this.state.dargStyle}
          className='home__wrap'
          scrollY={this.state.scrollY}
          onTouchMove={this.touchmove}
          onTouchEnd={this.touchEnd}
          onTouchStart={this.touchStart}
          onScrollToLower={this.loadRecommend}
          onScrollToUpper={this.toTopScrollClick}
          onScroll={this.onScroll}
          scrollWithAnimation
        >
          {this.props.children}

          {!this.props.isHidenBottomLoading && <AtLoadMore
            onClick={this.loadRecommend}
            status={this.state.status}
          />}
        </ScrollView>
      </View>
    )
  }
}

export default Pulltopushrefresh
