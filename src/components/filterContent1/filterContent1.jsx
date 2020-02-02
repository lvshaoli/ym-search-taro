/**
 * @Author: lvshaoli
 * @DATE: 2020-01-24
 * @TIME: 10:58
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import PropTypes from 'prop-types'
import Primaryselectbtn from '@components/primaryselectbtn/primaryselectbtn'
import './filterContent1.scss'

class Filtercontent1 extends Component {
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
      regionList: ['全城', '雁塔区', '新城区', '碑林区', '高新区', '长安区', '临潼区'],
      selectedRegion: 0,
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
      <View className='filterContent1'>
        { this.state.regionList && this.state.regionList.map((regionItem, index) => {

          return <Primaryselectbtn
            key={index}
            primarySelectText={regionItem}
            hasMagin
            btnType='primary-gray'
            checked={this.state.selectedRegion === index}
            onPrimaryClick={() => {
              this.setState({
                selectedRegion: index
              })
            }}
          />
        }) }
      </View>
    )
  }
}

export default Filtercontent1
