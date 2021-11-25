import Message from './Message'

let Vue = null
let BuildMsg = null
// 包装一层处理参数
class BuildMsgWrap {
  constructor(option) {
    this.option = option
    this.title = option.title
    this.init()
  }
  // init() {
  //   if (!BuildMsg) {
  //     BuildMsg = Vue.extend(Message)
  //   }

  //   const msg = new BuildMsg({
  //     // props传值
  //     propsData: this.option,
  //     // data赋值
  //     data: { bgColor: 'pink', onFunc() { console.log('我是方法') } }
  //   })

  //   // 插槽赋值
  //   msg.$slots.default = '我是默认插槽-'
  //   msg.$mount()
  //   document.body.appendChild(msg.$el)
  // }

  // init() {
  //   if (!BuildMsg) {
  //     BuildMsg = Vue.extend(Message)
  //   }
  //   const msg = new BuildMsg({
  //     render(createElement) {
  //       return createElement(Message, {
  //         props: {
  //           title: '看看洗111'
  //         }
  //       })
  //     }
  //   })
  //   msg.$mount()
  //   document.body.appendChild(msg.$el)
  // }
  print() {
    this.title = '我改变了标题'
  }

  close() {
    console.log('close', '@@')
    this.msg.$destroy()
    this.msg.$el.remove()
  }

  init() {
    if (!BuildMsg) {
      BuildMsg = Vue.extend(Message)
    }

    const msg = new BuildMsg({
      render: (h) => {
        // props传参 默认插槽 作用域插槽
        return (
          <Message
            props={{ ...this.option }}
            func={this.print}
            scopedSlots={{
              default: () => <div>我是默认插槽-123123<button onClick={this.close.bind(this)}>关闭按钮</button></div>,
              footer: (data) => <div>{data.myData}我是footer</div>
            }}
          ></Message>
        )
      }
    })
    this.msg = msg
    msg.$mount()
    document.body.appendChild(msg.$el)
  }
}

function getMsg(option) {
  return new BuildMsgWrap(option)
}

export default function(_Vue) {
  Vue = _Vue
  Vue.prototype.$Message = getMsg
}
