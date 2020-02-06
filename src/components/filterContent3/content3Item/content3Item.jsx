/**
 * @Author: lvshaoli
 * @DATE: 2020-02-05
 * @TIME: 11:41
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Primaryselectbtn from '@components/primaryselectbtn/primaryselectbtn'
import PropTypes from 'prop-types'
import './content3Item.scss'

class Content3item extends Component {
  static propTypes = {
    itemData: PropTypes.object,
    onContent3ItemClick: PropTypes.func
  }
  //
  // static defaultProps = {
  //   data: []
  // }

  constructor () {
    super(...arguments)
    this.state = {
      currentItemData: this.props.itemData || {}
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { title, items, sigle } = this.state.currentItemData || {}
    return (
      <View className='content3Item'>
        <View className='filter-content3-container'>
          <View className='filter-content3-title-container'>
            <Text className='filter-content3-title-text'>{ title }</Text>
          </View>
          <View className='filter-content3-hos-grad-container'>
            {
              items && items.map((hosItem, index) => {
                const { name, checked } = hosItem || {}
                return <Primaryselectbtn
                  key={index}
                  primarySelectText={name}
                  hasMagin
                  btnType='primary-gray'
                  checked={checked}
                  onPrimaryClick={() => {
                    const newData = items && items.map(dataItem => {
                      if (sigle) { // 单选
                        if (dataItem.name === hosItem.name) {
                          return {
                            ...dataItem,
                            checked: true
                          }
                        }
                        return {
                          ...dataItem,
                          checked: false
                        }
                      } else { // 多选
                        if (dataItem.name === hosItem.name) {
                          return {
                            ...dataItem,
                            checked: !hosItem.checked
                          }
                        }
                        return dataItem
                      }
                    })
                    this.setState({
                      currentItemData: {
                        title,
                        sigle,
                        items: newData
                      }
                    })
                    const selectData = newData && newData.filter(selectItem => selectItem.checked)
                    this.props.onContent3ItemClick && this.props.onContent3ItemClick({
                      title,
                      data: selectData
                    })
                  }}
                />
              })
            }
          </View>
        </View>
      </View>
    )
  }
}

export default Content3item
