/**
 * @Author: lvshaoli
 * @DATE: 2020-02-02
 * @TIME: 16:34
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import FilterContent4 from '@components/filterContent4/filterContent4'
import FilterContent3 from '@components/filterContent3/filterContent3'
import PropTypes from 'prop-types'
import './doctorListFilter.scss'

class Doctorlistfilter extends Component {
  static propTypes = {
    onContent3ItemClick: PropTypes.func,
    filter3Data: PropTypes.array
  }

  // static defaultProps = {
  //   data: []
  // }
    
  constructor () {
    super(...arguments)
    this.state = {
      allDept: false,
      filterDoc: false
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
      <View className='doctorListFilter'>
        <View className='doctor-list-filter-container'>
          <View
            className='list-filter-pop-fx-container'
            onClick={() => {
              this.setState({
                allDept: !this.state.allDept,
                filterDoc: false
              })
            }}
          >
            <Text
              className={
                this.state.allDept
                  ? 'list-filter-pop-top-select-text'
                  : 'list-filter-pop-top-unselect-text'
              }
            >全部科室</Text>
            <Image
              className='list-filter-pop-fx-icon'
              src={
                this.state.allDept
                  ? require('@assets/images/hos/common_filter_up_select.png')
                  : require('@assets/images/hos/common_filter_down_icon.png')
              }
            />
          </View>
          <View
            className='list-filter-pop-fx-container'
            onClick={() => {
              this.setState({
                filterDoc: !this.state.filterDoc,
                allDept: false
              })
            }}
          >
            <Text
              className={
                this.state.filterDoc
                  ? 'list-filter-pop-top-select-text'
                  : 'list-filter-pop-top-unselect-text'
              }
            >筛选</Text>
            <Image
              className='list-filter-pop-fx-icon'
              src={
                this.state.filterDoc
                  ? require('@assets/images/hos/common_filter_up_select.png')
                  : require('@assets/images/hos/common_filter_down_icon.png')
              }
            />
          </View>
        </View>

        { (this.state.allDept || this.state.filterDoc) &&
        <View className='listFilterPop' onClick={() =>{
        }}
        >
          {this.state.allDept && <FilterContent4 />}
          {this.state.filterDoc && <FilterContent3
            filterShowData={this.props.filter3Data}
            onContent3ItemClick={(item) => {
              this.props.onContent3ItemClick && this.props.onContent3ItemClick(item)
            }
            }
          />}
        </View>
        }

      </View>
    )
  }
}

export default Doctorlistfilter
