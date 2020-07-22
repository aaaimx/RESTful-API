const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'RESTful API',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/RESTful-API/',

  /**
   * AntDocs theme for AntDesign for vue
   * Ref: https://antdocs.seeyoz.cn/guide/getting-started.html#引用主题
   */
  theme: 'antdocs',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#f1502f' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'meta',
      {
        name: 'og:image',
        content: 'https://www.aaaimx.org/software/logo.png'
      }
    ],
    [
      'link',
      {
        href: 'https://www.aaaimx.org/software/logo.png',
        rel: 'shortcut icon'
      }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/disoftw',
    editLinks: false,
    logo: 'https://www.aaaimx.org/software/logo.png',
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Intro',
        link: '/intro/'
      },
      {
        text: 'REST',
        link: '/rest/'
      },
      {
        text: 'Métodos',
        link: '/methods/'
      },
      {
        text: 'Avanzado',
        link: '/advanced/'
      },
      {
        text: 'Glosario',
        link: '/glossary/'
      }
    ],
    sidebar: {
      '/intro/': [
        {
          title: 'Intro',
          collapsable: false,
          children: ['', '2-http', '3-json', '4-http-headers']
        }
      ],
      '/rest/': [
        {
          title: 'REST',
          collapsable: false,
          children: [
            '',
            '2-resource-structure',
            '3-resource-naming',
            '4-name_consistency'
          ]
        }
      ],
      '/methods/': [
        {
          title: 'Métodos',
          collapsable: false,
          children: [
            '',
            '3-create_operation_POST',
            '4-update_operation_PUT',
            '5-delete_operation_DELETE',
          ]
        }
      ],
      '/advanced/': [
        {
          title: 'Conceptos Avanzados',
          collapsable: false,
          children: [
            '',
            '1-pagination',
            '2-url-design'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']
}
