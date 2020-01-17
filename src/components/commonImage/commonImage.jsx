/**
 * @Author: yami
 * @DATE: 2020-01-14
 * @TIME: 16:57
 * @DESC: '图片加载组件'
 **/
import Taro, { Component } from '@tarojs/taro'
import { Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import './commonImage.scss'

class Commonimage extends Component {
  static propTypes = {
    imageSource: PropTypes.string,
    imageStyle: PropTypes.object //  example: imageStyle={{ width: '40px', height: '40px', borderRadius: '10px'}}
  }

  // static defaultProps = {
  //   data: []
  // }

  constructor () {
    super(...arguments)
    this.state = {
      imagePath: this.props.imageSource
    }
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  loadError () {
    console.log('image loadError')
    this.setState({
      imagePath: 'https://jdc.jd.com/img/200'
    })
  }

  onLoadFinish () {
    console.log('image onLoadFinish')
  }

  render () {
    return (
      <Image
        onError={this.loadError.bind(this)}
        onLoad={this.onLoadFinish.bind(this)}
        className='common-image-default-wh'
        src={this.state.imagePath}
        style={this.props.imageStyle}
      />
    )
  }
}

export default Commonimage
