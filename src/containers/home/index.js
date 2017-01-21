import React, { PropTypes } from 'react'
import { Link } from 'react-router'

// import styles from './styles.scss'

// import ReactDOM from 'react-dom'
// import ReactSwipe from 'react-swipe'

// import 'swiper/dist/css/swiper.min.css'
// 需要在改造该文件，让其在服务端不被运行
// import 'swiper/dist/js/swiper.js'

// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'

// 外壳
import Shell from '../../shell'

// 依赖组件
import Nav from '../../components/nav'
import Meta from '../../components/meta'
import QuestionList from '../../components/question-list'

// actions
import { loadQuestionList } from '../../actions/question'

// 纯组件
class Home extends React.Component {

  // 服务器预加载内容
  static loadData(option, callback) {
    option.store.dispatch(loadQuestionList({ name:'home', callback:()=>{
      callback()
    }}))
  }

  constructor(props) {
    super(props)
    /*
    this.state = {
      swiper: null,
      currentTab: 0,
      scrollPostion:{}
    }
    */
  }

  /*
  componentDidMount() {

    const self = this

    this.state.swiper = new Swiper('#lists',{
      eventTarget : 'container',
      autoHeight: true,
      onTouchStart: function(swiper){
        self.state.scrollPostion[swiper.activeIndex] = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        // self.state.scrollPostion[swiper.activeIndex] = $(document).scrollTop()
      },
      onSlideChangeEnd: function(swiper){
        // $(document).scrollTop(self.state.scrollPostion[swiper.activeIndex] || 0)
        window.scrollTo(0, self.state.scrollPostion[swiper.activeIndex] || 0)
      }
    })

  }
  */

  render() {

    return(<div>
      <Meta />
      <Nav />

      <div className="container">
        <div className="container-head">最新动态</div>
        <QuestionList name={'home'} displayDate={false} />
      </div>

    </div>)
  }

}


export default Shell(Home)
