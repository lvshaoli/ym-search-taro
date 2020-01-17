/**
 * @Author: yami
 * @DATE: 2020-01-14
 * @TIME: 14:43
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Image } from '@tarojs/components'
import Primaryselectbtn from '@components/primaryselectbtn/primaryselectbtn'
import PropTypes from 'prop-types'
import './deptScrollContainer.scss'

class Deptscrollcontainer extends Component {
  static propTypes = {
    onDownClick: PropTypes.func
  }
  //
  // static defaultProps = {
  //   data: []
  // }

  constructor () {
    super(...arguments)
    this.state = {
      selecedBtn: 0,
      btnList: ['妇科', '儿科', '心血管', '骨科', '眼科', '小儿科']
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
      <View className='index-hos-dept-label-container'>
        <View className='dept-scroll-container-down-container' onClick={this.props.onDownClick}>
          <Image className='dept-scroll-container-down' src={require('@assets/images/home/home_common_down.png')} />
        </View>
        <ScrollView
          scrollX
        >
          <View className='index-hos-dept-scrollview'>
            {
              this.state.btnList && this.state.btnList.map((item, index) => {
                return <Primaryselectbtn
                  key={index}
                  primarySelectText={item}
                  checked={this.state.selecedBtn === index}
                  onPrimaryClick={() => {
                    this.setState({
                      selecedBtn: index
                    })
                  }}
                />
              })
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Deptscrollcontainer
