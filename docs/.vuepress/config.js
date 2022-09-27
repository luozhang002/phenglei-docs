module.exports = {
    plugins: [['@vuepress/back-to-top', true]],
    title: '风雷云平台',
    description: '风雷文档',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
      ['link', { rel: 'manifest', href: '/logo.png' }],
      ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    ],
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        lastUpdated: '上次更新',
      theme: '@vuepress/vue',
      repo: 'luozhang002/phenglei-docs',
      editLinks: true,
        editLinkText: "github上编辑此页",
      docsDir: 'docs/',
      logo: '/logo.png',  // 左上角logo
      nav:[ // 导航栏配置
        {text: '首页', link: '/' },
        {text: '技术文档', link: '/tech/interview/' },
        {text: '测试1', link: '/test1/test1-01' },
          {text: '测试2', link: '/test2/test2-01' },
      ],
      sidebarDepth: 3, // 侧边栏显示2级
        sidebar: [
            {
                title: "函数curry化",
                collapsable: false,
                children:[
                    ["tech/curry/", "http is what"],
                ]
            },
            {
                title: "fe test",
                collapsable: true,
                children:[
                    ["tech/interview/", "fe iv"],
                ]
            },
            {
                title: "罗章测试001",
                collapsable: true,
                children:[
                    ["test1/", "说说对React的理解？有哪些特性？"],
                    ["test1/test1-01", "test1-01"],
                    ["test1/test1-02", "test1-02"],
                ]
            },
            {
                title: "罗章测试002",
                collapsable: false,
                children:[
                    ["test2/", "测试首页"],
                    ["test2/test2-01", "test2/test2-01"],
                    ["test2/get_start", "测试起点"],
                ]
            },
            {
                title: "罗章测试003",
                collapsable: false,
                children:[
                    ["test3/", "测试3首页"],
                    {
                        title: "罗章003",
                        collapsable: false,
                        children:[
                            ["test3/test31/", "测试3首页"]
                        ]
                    },
                ]
            },
        ]
    },
    serviceWorker: true,
  };