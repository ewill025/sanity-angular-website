export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'ewill025/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6280571fd59750531664f5d5',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-1xcoacqc',
                  apiId: 'c7961b62-870a-4332-931a-cf27f8e65c4a'
                },
                {
                  buildHookId: '62805720e7896456fee17c20',
                  title: 'Website',
                  name: 'sanity-angular-website-web-jgmzsbq7',
                  apiId: '6f833898-6549-437c-a134-c3f97bfbde16'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ewill025/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-jgmzsbq7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
