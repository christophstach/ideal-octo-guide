
const initialState = [
  {
    category: 'Languages',
    items: [
      {
        name: 'German',
        level: 'native speaker'
      },
      {
        name: 'English',
        level: 'fluent'
      },
      {
        name: 'Spanish',
        level: 'basic knowlodge'
      }
    ]
  },
  {
    category: 'Software engineering',
    subCategories: [
      {
        category: 'Frontend',
        items: [
          'Angularjs', 'Angular', 'ReactJS + Redux',
          'Vue.js + Vuex', 'Bootstrap 3 & 4', 'Sencha ExtJS',
          'HTML5, JavaScript, CSS3', 'jQuery', 'Less', 'Sass'
        ]
      },
      {
        category: 'Backend',
        items: [
          'PHP', 'Symfony', 'Doctrine', 'Zend Framework 2',
          'C#', 'ASP.NET MVC', 'ASP.NET Web API', 'RESTful Web Services',
          'Entity Framework', 'MVC'
        ]
      },
      {
        category: 'Server',
        items: [
          'Linux', 'Windows', 'MySQL',
          'MS SQL Server', 'Apache 2', 'nginx'
        ]
      },
      {
        category: 'Other',
        items: [
          'GIT', 'SVN', 'node.js', 'npm',
          'Bower', 'Grunt', 'Gulp', 'XML', 'Yaml',
          'JSON', 'TYPO3 CMS', 'Wordpress', 'Jira'
        ]
      }
    ]
  }
];

const additionalSkills = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_ADDITIONAL_SKILL': {
      return [
        ...state,
        {
          ...action.payload
        }
      ];
    }
    default: {
      return state;
    }
  }
};

export {
  initialState
};

export default additionalSkills;
