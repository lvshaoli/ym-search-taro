/**
 * @Author: yami
 * @DATE: 2020-01-13
 * @TIME: 16:00
 * @DESC: '首页搜索'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import './searchView.scss'

class Searchview extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    onSearchClick: PropTypes.func,
    searchStyle: PropTypes.object,
  }

  static defaultProps = {
    placeholder: '输入机构名称或项目'
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View
        className='searchView'
        onClick={this.props.onSearchClick}
        style={process.env.TARO_ENV === 'h5' ? 'flex: 1' : this.props.searchStyle}
      >
        <Image
          className='search-margin-right16'
          src={require('../../assets/images/home/search_icon.png')}
        />
        <Text className='search-view-placeholder-text'>{ this.props.placeholder }</Text>
      </View>
    )
  }
}

export default Searchview
