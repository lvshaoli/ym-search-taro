/* eslint-disable */

/**
 * @Author: lvshaoli
 * @DATE: 2020-01-09
 * @TIME: 10:59
 * @DESC: pages模版快速生成脚本,执行命令 npm run tpl `文件名` `文件路径`  不写路径默认创建在src/pages下
 * @EX  npm run tpl MyTestPage ./src/pages
 * */

const fs = require('fs')
const os = require('os')
const moment = require('moment')
const userInfo = os.userInfo()
let filePath = './src/pages'

const dirName = process.argv[2]
const pathName = process.argv[3]
if (pathName) {
  filePath = pathName
}

if (!dirName) {
  console.log('文件夹名称不能为空！')
  console.log('示例：npm run tpl test')
  process.exit(0)
}

// 页面模版
const indexTep = `/**
 * @Author: ${userInfo.username}
 * @DATE: ${moment(new Date()).format('YYYY-MM-DD')}
 * @TIME: ${moment(new Date()).format('HH:mm')}
 * @DESC: '请描述本页面功能'
 **/
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import PropTypes from 'prop-types'
// import { connect } from '@tarojs/redux'
import './${dirName}.scss'

// @connect(({  }) => ({
 // }), (dispatch) => ({  
// }))
class ${titleCase(dirName)} extends Component {
  // static propTypes = {
  //   children: PropTypes.any,
  //   data: PropTypes.array
  // }
  //
  // static defaultProps = {
  //   data: []
  // }
  
    // config = {
     // navigationBarTitleText: '首页'
    // }
    
     constructor() {
        super(...arguments)
      }

    componentWillReceiveProps (nextProps) {
      console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
      return (
        <View className='${dirName}'>
          <Text>${dirName}</Text>
        </View>
      )
    }
}

export default ${titleCase(dirName)}
  `,

  // scss文件模版
  scssTep = `@import '@styles/theme.scss';
.${dirName} {
}
`

try {
  fs.mkdirSync(`${filePath}/${dirName}`) // mkdir $1
} catch (e) {
  console.log(`${dirName}目录已存在，生成失败`)
  process.exit(0)
}

fs.writeFileSync(`${filePath}/${dirName}/${dirName}.jsx`, indexTep)
fs.writeFileSync(`${filePath}/${dirName}/${dirName}.scss`, scssTep)

function titleCase (str) {
  const array = str.toLowerCase().split(' ')
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length)
  }
  const string = array.join(' ')
  return string
}


console.log(`模版${dirName}已创建 在${filePath}`)


process.exit(0)
