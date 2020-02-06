/**
 * @Author: lvshaoli
 * @DATE: 2020-01-24
 * @TIME: 10:59
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import Filterbtngroup from './filterBtnGroup/filterBtnGroup'
import Content3item from './content3Item/content3Item'
import './filterContent3.scss'

class Filtercontent3 extends Component {
  static propTypes = {
    filterShowData: PropTypes.array,
    onContent3ItemClick: PropTypes.func
  }

  // static defaultProps = {
  //   data: []
  // }

  constructor () {
    super(...arguments)
    this.state = {
      filter3Data: this.props.filterShowData || []
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    const content = this.state.filter3Data || []
    return (
      <View className='filterContent3'>
        {/* 医院等级 */}
        {
          content.map((item, index) => {

            return (
              <Content3item
                key={index}
                itemData={item}
                onContent3ItemClick={(items) => {
                  this.props.onContent3ItemClick && this.props.onContent3ItemClick(items)
                }}
              />
            )
          })
        }

        {/* 特色科室 */}
        <View className='filter-content3-btn-group'>
          <Filterbtngroup />
        </View>

      </View>
    )
  }
}

export default Filtercontent3
