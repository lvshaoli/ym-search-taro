/**
 * @Author: lvshaoli
 * @DATE: 2020-02-04
 * @TIME: 16:21
 * @DESC: '选择图片'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import './commonChooseImg.scss'

class Commonchooseimg extends Component {

  static propTypes = {
    onImgPathCallBack: PropTypes.func
  }

  constructor () {
    super(...arguments)
    this.state = {
      ImgList: []
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
      <View className='commonChooseImg'>

        <View className='common-choose-img-container'>
          <View className='common-choose-img-select-container'>
            {
              this.state.ImgList.map((img, index) => {
                return (
                  <View
                    className='common-choose-item-conatiner'
                    key={index}
                  >
                    <Image className='common-choose-img-select-btn' src={img} />
                    <Image
                      onClick={() => {
                        const newImgList = []
                        this.state.ImgList.forEach(item => {
                          if (item !== img) {
                            newImgList.push(item)
                          }
                        })

                        this.props.onImgPathCallBack && this.props.onImgPathCallBack(newImgList)
                        this.setState({
                          ImgList: newImgList
                        })
                      }}
                      className='common-choose-img-close'
                      src={require('@assets/images/hos/hos_question_close.png')}
                    />
                  </View>
                )
              })
            }
          </View>
          {this.state.ImgList.length < 3 && 
            <Image
              onClick={() => {
                const thiz = this
                Taro.chooseImage(
                  {
                    count: 1,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album'],
                    success (res) {
                      // tempFilePath可以作为img标签的src属性显示图片
                      const tempFilePaths = res.tempFilePaths
                      if (tempFilePaths.length) {
                        thiz.setState({
                          ImgList: thiz.state.ImgList.concat(tempFilePaths)
                        }, () => {
                          thiz.props.onImgPathCallBack && thiz.props.onImgPathCallBack(thiz.state.ImgList)
                        })
                      }
                    }
                  }
                )
              }}
              className='common-choose-img-select-btn'
              src={require('@assets/images/hos/hos_select_pic.png')}
            />
          }
          {
            this.state.ImgList.length < 3 && 
              <Text className='common-choose-img-tip-text'>可上传3张图片</Text>
            
          }

        </View>
      </View>
    )
  }
}

export default Commonchooseimg
