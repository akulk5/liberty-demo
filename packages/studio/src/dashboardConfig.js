export default {
  widgets: [
    { name: 'structure-menu' },
    { name: 'deploy-github', layout: { height: 'auto' , width: 'medium'} },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Recent Articles',
        order: '_createdAt desc',
        types: ['howToArticle', 'featureArticle', 'galleryArticle']
      },
      layout: { width: 'medium' }
    },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/akulk5/liberty-demo.git',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'http://hardcore-spence-470e20.netlify.app',
            category: 'apps'
          }
        ]
      }
    }
  ]
}
