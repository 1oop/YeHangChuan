module.exports = {
    title: "夜航船",
    description: "世间学问，惟夜航船最难对付。",
    host: 'localhost',
    port: 8080,
    dest: '.vuepress/dist',
    plugins: [
        ['vuepress-plugin-container',
            {
                type: 'right',
                defaultTitle: ''
            }
        ],
        ['vuepress-plugin-container',
            {
                type: 'center',
                defaultTitle: ''
            }
        ],
        ['vuepress-plugin-container',
            {
                type: 'quote',
                before: info => `<div class="quote"><p class="title">${info}</p>`,
                after: '</div>'
            },
        ],
        ['vuepress-plugin-container',
            {
                type: 'not-print',
                defaultTitle: ''
            },
        ],
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-162170924-1'
            }
        ],
        [
            'vuepress-plugin-comment',
            {
                choosen: 'gitalk',
                options: {
                    clientID: 'acf59fc06b2cf691903d',
                    // 如果你对"clientSecret"有疑问,可以参考 http://icyfenix.cn/architect-perspective/general-architecture/system-security/authorization.html#oauth2
                    clientSecret: '4cbf25bbf327f1164627d2ab43263b07b14c54fe',
                    repo: 'awesome-fenix',
                    owner: 'fenixsoft',
                    admin: ['fenixsoft'],
                    labels: ["Gitalk", "Comment"],
                    id: '<%- ("icyfenix.cn" + (frontmatter.to.path || window.location.pathname)).slice(-50) %>',
                    title: '「Comment」<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>',
                    body: '<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>',
                    distractionFreeMode: false,
                    pagerDirection: 'last',
                    // proxy: 'https://netnr-proxy.cloudno.de/https://github.com/login/oauth/access_token'
                    proxy: 'https://fenixsoft-cors.herokuapp.com/https://github.com/login/oauth/access_token'
                }
            }
        ],
        ['@vuepress/back-to-top'],
        require('./plugins/read-time'),
        require('./plugins/export')
    ],
    markdown: {
        anchor: {
            permalink: false
        },
        toc: {
            includeLevel: [2, 3]
        },
        extendMarkdown: md => {
            md.use(require('markdown-it-mermaid').default);
            md.use(require('markdown-it-sub'));
            md.use(require('markdown-it-sup'));
            md.use(require('markdown-it-abbr'));
            md.use(require('markdown-it-ins'));
            md.use(require('markdown-it-figure'));
            md.use(require('markdown-it-smartarrows'));
            md.use(require('markdown-it-fontawesome'));
        }
    },
    themeConfig: {
        smoothScroll: true,
        nav: [
            {
                text:'首页',
                link:'/'
            },
        ],
        sidebar: [
            {
                title: '目录',
                collapsable: false,
                path: '/SUMMARY.md'
            }
        ]
    }
}