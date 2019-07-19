# zms-cj

npm install zms-cj

## **引用**

 **自动按需引入组件** 

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```
# 安装插件
npm i babel-plugin-import -D
// 在.babelrc 中添加配置
{
  "plugins": [
    ["import", {
      "libraryName": "zms-cj",
      "libraryDirectory": "lib"
    }]
  ]
}
```

## **zms-loading**

loading遮罩层

**API**

|    参数    |   说明   |  类型  |
| :--------: | :------: | :----: |
| loadingImg | 加载图片 | string |

## **zms-alert**

筑民生基本弹窗

**API**

|    参数    |     说明     |  类型  |
| :--------: | :----------: | :----: |
|   title    |     标题     | string |
|  textOne   |  提示内容1   | string |
|  textTwo   |  提示内容2   | string |
| cancelText | 取消按钮文字 | string |
|  sureText  | 确定按钮文字 | string |

**Event**

|   事件名    |   说明   | 备注 |
| :---------: | :------: | :--: |
| cancelClick | 取消事件 |  -   |
|  sureClick  | 确定事件 |  -   |

## zms-loading-middle 

中间小部分遮罩层

API

|    参数    |    说明     |  类型  |
| :--------: | :---------: | :----: |
| loadingImg | loading图片 | string |
|    text    |  提示文字   | string |

## Toast

轻提示（只支持一行文）

|   参数   |        说明        | 类型 |
| :------: | :----------------: | :--: |
|   txt    |      txt: '',      | obj  |
| duration | 显示时间，默认3000 | nub  |
|          |                    |      |



