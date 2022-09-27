# IV
<my-button></my-button>
## 前言
测试 demo
## css相关

### 1. 万能居中
1.margin: 0 auto;水平
2.text-align: center;水平
3.行高，垂直
4.表格，center,middle；水平垂直
5.display:table-cell；模拟表格，all
6.绝对定位，50%减自身宽高
7.绝对定位，上下左右全0，margin:auto
8.绝对定位加相对定位。不需要知道宽高
9.IE6，IE7：给父元素设一个font-size:高度/1.14,vertical-align:middle

### 2. [BFC优化](https://www.jianshu.com/p/0d713b32cd0d)
块格式化上下文, 特性:
- 使 BFC 内部浮动元素不会到处乱跑（清除浮动）；
- 和浮动元素产生边界（在非浮动元素加margin）。

### 3. 盒模型哪两种模式？什么区别？如何设置
- 标准模式: box-sizing: content-box(默认); 宽高不包括内边距和边框
- 怪异模式: box-sizing: border-box

### 4. [常用清除浮动的方法，如不清除浮动会怎样？](https://blog.csdn.net/h_qingyi/article/details/81269667)
当父元素不给高度的时候，内部元素不浮动时会撑开, 而浮动的时候，父元素变成一条线, 造成塌陷.
- 额外标签法（在最后一个浮动标签后，新加一个标签，给其设置clear：both；）（不推荐）
- 父元素添加overflow:hidden; (触发BFC)
- 使用after伪元素清除浮动（推荐使用）
- 使用before和after双伪元素清除浮动

### 5. 删格化的原理
比如antd的row和col, 将一行等分为24份, col是几就占几份, 底层按百分比实现; 结合媒体查询, 可以实现响应式

### 6. 纯css实现三角形
```
// 通过设置border
.box
        {
            width:0px;
            height:0px;

            border-top:50px solid rgba(0,0,0,0);
            border-right:50px solid  rgba(0,0,0,0);
            border-bottom:50px solid green;
            border-left:50px solid  rgba(0,0,0,0);
            }
```

### 7. 高度不定，宽100%，内一div高不确定，如何实现垂直居中？
- verticle-align: middle;
- 绝对定位50%加translateY(-50%)
- 绝对定位，上下左右全0，margin:auto

### 8. 至少两种方式实现自适应布局
- rem, em
- vh, vw
- 百分比
- 媒体查询
- bs, antd等的栅格布局

### 9. 设置一段文字的大小为6px
- 谷歌最小12px, 其他浏览器可以更小
- 通过transform: scale实现