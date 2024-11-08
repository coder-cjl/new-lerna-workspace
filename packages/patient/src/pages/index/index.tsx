// @ts-ignore
import {View, Text, Button} from '@tarojs/components'
import './index.scss'
// eslint-disable-next-line import/first
import {Component} from "react";

// eslint-disable-next-line import/first
import {test_log, lucaComponents} from 'luca_components'

export default class Index extends Component {

  // eslint-disable-next-line react/sort-comp
  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button onClick={this.actionLog}>Button</Button>
      </View>
    )
  }

  actionLog = () => {
    test_log()
    const b = lucaComponents()
    console.log(b)
  }
}
  // useLoad(() => {
  //   console.log('Page loaded.')
  // })

// export default function Index () {
//   useLoad(() => {
//     console.log('Page loaded.')
//   })
//
//
//   function actionButton() {
//     // lucaComponents()
//     console.log('Button clicked.')
//   }
//

// }
