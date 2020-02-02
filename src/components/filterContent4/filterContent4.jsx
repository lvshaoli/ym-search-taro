/**
 * @Author: lvshaoli
 * @DATE: 2020-02-02
 * @TIME: 17:52
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import PropTypes from 'prop-types'
import './filterContent4.scss'

class Filtercontent4 extends Component {
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
      allDepts: [
        {
          deptName: '全部科室',
          id: 1,
          childDepts: [
            { id: 2,
              deptName: '全部科室' },
            { id: 3,
              deptName: '其他科室' },
          ],
        },
        {
          deptName: '儿科',
          id: 4,
          childDepts: [
            { id: 5,
              deptName: '儿科1' },
            { id: 6,
              deptName: '儿科2' },
          ],
        },
        {
          deptName: '精神心理科',
          id: 7,
          childDepts: [
            { id: 8,
              deptName: '精神心理科1' },
            { id: 9,
              deptName: '精神心理科2' },
          ],
        },
      ],

      selectDept1: 1,
      selectDept2: 2,
      childDepts: [
        { id: 2,
          deptName: '全部科室' },
        { id: 3,
          deptName: '其他科室' },
      ]
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onDept1Click = (item) => {
    const childDepts = item.childDepts || []
    this.setState({
      childDepts: childDepts,
      selectDept1: item.id,
      selectDept2: childDepts && childDepts[0] && childDepts[0].id
    })
  }

  childDeptClick = (item) => {
    console.log('---', item)
    this.setState({
      selectDept2: item.id
    })
  }

  render () {
    return (
      <View className='filterContent4'>
        <View className='filter-content4-left-container'>
          {
            this.state.allDepts.map((deptItem, index) => {
              return (
                <View
                  className={
                    this.state.selectDept1 === deptItem.id
                      ? 'content4-left-item content4-left-item-selected'
                      : 'content4-left-item content4-left-item-unselected'
                  }
                  key={index}
                  onClick={() => {
                    this.onDept1Click(deptItem)
                  }}
                >
                  {deptItem.deptName || '-'}
                </View>
              )
            })
          }

        </View>
        <View className='filter-content4-right-container'>
          {
            this.state.childDepts.map((childDept, index) => {
              return (
                <View
                  className={
                    this.state.selectDept2 === childDept.id
                      ? 'content4-right-item right-item-text-select'
                      : 'content4-right-item right-item-text-unselect'
                  }
                  key={index}
                  onClick={() => {
                    this.childDeptClick(childDept)
                  }}
                >
                  { childDept.deptName }
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default Filtercontent4
