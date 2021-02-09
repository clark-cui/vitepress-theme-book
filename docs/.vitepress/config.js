module.exports = {
  title: "clark-cui",
  description: "Just playing around.",
  markdown: {
    lineNumbers: true,
  },
  head: [
    ["link", {
      rel: "icon",
      href: "/favicon.ico"
    }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      },
    ],
  ],
  themeConfig: {
    nav: [{
        text: "Home",
        link: "/"
      },

      {
        text: "frontEnd",
        link: "/frontEnd/"
      },
      {
        text: "backEnd",
        link: "/backEnd/"
      },
    ],

    blogConfig: {
     
      socialLinks: [
        { link: 'https://github.com/clark-cui' },
      ]
    },
    author: 'clark-cui',
    // 备案号
    record: 'ICP备案号',
    recordLink: 'http://www.baidu.com',
    cyberSecurityRecord: '公安备案号',
    cyberSecurityLink: 'http://www.baidu.com',
    // 项目开始时间
    startYear: '2018',

  },
};