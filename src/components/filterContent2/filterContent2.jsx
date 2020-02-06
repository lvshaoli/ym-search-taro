/**
 * @Author: lvshaoli
 * @DATE: 2020-01-24
 * @TIME: 10:58
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import PropTypes from 'prop-types'
// import { connect } from '@tarojs/redux'
import Content2item from './content2Item/content2Item'
import './filterContent2.scss'

class Filtercontent2 extends Component {
  // static propTypes = {
  //   children: PropTypes.any,
  //   data: PropTypes.array
  // }
  //
  // static defaultProps = {
  //   data: []
  // }

  constructor () {
    super(...arguments)
    this.state = {
      filterList: ['综合排序', '离我最近'],
      checkedItem: '综合排序'
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='filterContent2'>
        {
          this.state.filterList.map((item, index) => {
            return <Content2item
              key={index}
              text={item}
              checked={item === this.state.checkedItem}
              onContentItemClick={() => {
                this.setState({
                  checkedItem: item
                })
              }}
            />
          })
        }
      </View>
    )
  }
}

export default Filtercontent2
