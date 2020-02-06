import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import Searchview from '@components/searchView/searchView'
import Weathertip from '@components/weatherTip/weatherTip'
import Homeitem from '@components/homeItem/homeItem'
import HomeSwiper from '@components/homeSwiper/homeSwiper'
import Itemnavheader from '@components/itemNavHeader/itemNavHeader'
import Deptscrollcontainer from '@components/deptscrollcontainer/deptscrollcontainer'
import Commonhositem from '@components/commonhositem/commonhositem'
import Commonhosbtngroup from '@components/commonHosBtnGroup/commonHosBtnGroup'
import Chinesebtngroup from '@components/chineseBtnGroup/chineseBtnGroup'
import Healthlistitem from '@components/healthlistitem/healthlistitem'
import { navigateTo } from '@utils/navUtils'

import { add, minus, asyncAdd } from '../../actions/counter'
import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

    config = {
      navigationBarTitleText: '首页'
    }

    componentWillReceiveProps (nextProps) {
      console.log(this.props, nextProps)
    }

    constructor (props) {
      super(props)
      this.state = {
        hospitalList: [
          {name: '医院',
            imageSource: require('@assets/images/home/home_hospital.png'),
            onItemClick: this.threeHosClick.bind(this)
          },
          {name: '中医',
            imageSource: require('@assets/images/home/home_chinese_medial.png'),
            onItemClick: () => {
              console.log('中医')
              navigateTo('/pages/chMediListPage/chMediListPage')
            }
          },
          {name: '药店',
            imageSource: require('@assets/images/home/home_mediacal_store.png'),
            onItemClick: () => {
              console.log('药店')
              navigateTo('/pages/pharmacylists/pharmacylists')
            }},
          {name: '养老',
            imageSource: require('@assets/images/home/home_socal_big_perosn.png'),
            onItemClick: () => {
              console.log('养老')
            }},
          {name: '体检',
            imageSource: require('@assets/images/home/home_health_check.png'),
            onItemClick: () => {
              console.log('体检')
            }},
        ],
        homeSeviceList: [
          {
            name: '打针',
            imageSource: require('@assets/images/home/home_dz.png'),
            onItemClick: () => {
              console.log('打针')
            }
          },
          {
            name: '包扎',
            imageSource: require('@assets/images/home/home_bz.png'),
            onItemClick: () => {
              console.log('熬药')
            }
          },
          {
            name: '熬药',
            imageSource: require('@assets/images/home/home_ay.png'),
            onItemClick: () => {
              console.log('熬药')
            }
          },
          {
            name: '理疗',
            imageSource: require('@assets/images/home/home_lil.png'),
            onItemClick: () => {
              console.log('理疗')
            }
          },
          {
            name: '护士上门',
            imageSource: require('@assets/images/home/home_hssm.png'),
            onItemClick: () => {
              console.log('护士上门')
            }
          },
          {
            name: '急救',
            imageSource: require('@assets/images/home/home_jij.png'),
            onItemClick: () => {
              console.log('急救')
            }
          },
          {
            name: '骨科',
            imageSource: require('@assets/images/home/home_gk.png'),
            onItemClick: () => {
              console.log('骨科')
            }
          },
          {
            name: '产科',
            imageSource: require('@assets/images/home/home_ck.png'),
            onItemClick: () => {
              console.log('产科')
            }
          },
          {
            name: 'AED',
            imageSource: require('@assets/images/home/home_aed.png'),
            onItemClick: () => {
              console.log('AED')
            }
          },
          {
            name: '全部',
            imageSource: require('@assets/images/home/home_more.png'),
            onItemClick: () => {
              console.log('全部')
              navigateTo('/pages/serviceType/serviceType')
            }
          },
        ]
      }
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    indexSearchClick () {
      console.log('indexSearchClick')
      navigateTo('/pages/searchContentView/searchContentView')
    }

    threeHosClick () {
      console.log('threeHosClick')
      navigateTo('/pages/hostipallist/hostipallist')
    }

    render () {
      return (
        <View className='index'>
          <View className='index_top_view'>
            <View className='index_top_view_first'>
              <Weathertip
                onSelectCityClick={() => {
                  navigateTo('/pages/locationAtIndex/locationAtIndex')
                }}

              />
              <View style={{'flex': '1'}}>
                <Searchview
                  onSearchClick={this.indexSearchClick.bind(this)}
                  searchStyle={{ 'width': '100%'}}
                />
              </View>
            </View>

            <View className='index-top-view-second'>
              {
                this.state.hospitalList.map((item, index) => {
                  return <Homeitem
                    key={index}
                    itemText={item.name}
                    imageSource={item.imageSource}
                    onItemClick={item.onItemClick}
                  />
                })
              }
            </View>


            {/* -----*/}
            <View className='index-top-view-third'>
              {this.state.homeSeviceList.map((item, index) => {
                if ((index + 1) % 5 === 0) {
                  return (
                    <Homeitem
                      key={index}
                      itemText={item.name}
                      imageSource={item.imageSource}
                      onItemClick={item.onItemClick}
                      imageSize='home-item-image-small'
                    />
                  )
                }
                return (
                  <Homeitem
                    key={index}
                    itemText={item.name}
                    imageSource={item.imageSource}
                    onItemClick={item.onItemClick}
                    imageSize='home-item-image-small'
                    itemClass='index-my-home-item'
                    item-class='index-my-home-item'
                  />
                )

              })

              }
            </View>
          </View>


          {/* 轮播图  */}
          <View className='index-home-center-swiper-container'>
            <HomeSwiper
              swiperList={[require('@assets/images/home/home_banner.png')]}
            />
          </View>

          {/* 三甲医院 */}

          <View className='index-home-center-third-best'>
            <Itemnavheader
              headerIcon={require('@assets/images/home/home_threej_hospital.png')}
              headerTitle='三甲医院'
              headerRightTitle='全部'
              onHederNavClick={this.threeHosClick.bind(this)}
            />

            {/* 标签 */}
            <Deptscrollcontainer />

            {/* 医院list */}
            <View>
              <Commonhositem
                renderGroup={<Commonhosbtngroup />}
              />
              <Commonhositem
                renderGroup={<Commonhosbtngroup />}
              />
            </View>

          </View>

          {/* 中医堂 */}

          <View className='index-home-center-third-best'>
            <Itemnavheader
              headerIcon={require('@assets/images/home/home_chinese_tan.png')}
              headerTitle='中医堂'
              headerRightTitle='全部'
              onHederNavClick={this.threeHosClick.bind(this)}
            />

            {/* 标签 */}
            <Deptscrollcontainer />

            {/* 医院list */}
            <View>
              <Commonhositem
                renderGroup={<Chinesebtngroup />}
                deptLabelList={['骨科', '儿科']}
              />
              <Commonhositem
                renderGroup={<Chinesebtngroup />}
                deptLabelList={['内科', '儿科']}
              />
            </View>

          </View>


          {/* 健康大讲堂 */}

          <View className='index-home-center-third-best'>
            <Itemnavheader
              headerIcon={require('@assets/images/home/home_chinese_tan.png')}
              headerTitle='健康大讲堂'
              headerRightTitle='全部'
              onHederNavClick={this.threeHosClick.bind(this)}
            />

            {/* 标签 */}
            <Deptscrollcontainer />

            {/* 医院list */}
            <View>
              <Healthlistitem />
            </View>

          </View>


        </View>
      )
    }
}

export default Index
