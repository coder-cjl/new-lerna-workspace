import {View, Text, Button} from '@tarojs/components'
import './index.scss'
import {Component} from "react";
import {test_log, lucaComponents} from 'luca_components'

export default class Index extends Component {
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
        <Button onClick={this.onTest}>Doctor Button</Button>
      </View>
    )
  }

  onTest = () => {
    console.log('Doctor test')
    test_log()
  }

  // useLoad(() => {
  //   console.log('Page loaded.')
  // })
  //
  // return (
  //   <View className='index'>
  //     <Text>Hello world!</Text>
  //   </View>
  // )
}
