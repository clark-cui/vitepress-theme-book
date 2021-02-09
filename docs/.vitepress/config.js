module.exports = {
  title: "Hello VitePress",
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
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  themeConfig: {
    nav: [{
        text: "Home",
        link: "/"
      },
      {
        text: "TimeLine",
        link: "/timeline/"
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
    sidebar: {
      "/backEnd/": ["backEndT"],
      "/frontEnd/": [{
        title: "frontEndT",
      }, ],
    },
  },
};