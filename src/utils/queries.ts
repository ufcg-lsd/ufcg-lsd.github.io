export const HEAD_QUERY = `
  query {
    navItemsCollection {
      items {
        id
        text
        link
        color
        order
      }
    }
    contactCollection {
      items {
        text
        id
        link
      }
    }
  }

`;

export const HOME_QUERY = `
  query {
    homePostCollection {
      items {
        id
        post {
          url
          width
          height
        }
        link
      }    
    }
    mainBannerCollection {
      items {
        image {
          url
        }
      }
    }
    pageHeaderCollection {
      items {
        id
        title
        text {
          json
        }
      }
    }
  }
`;

export const PROFESSORS_QUERY = `
  query {
    docentesCollection {
      items {
        name
        role
        email
        linkedin
        github
        lattes
        workingFieldsCollection {
          items {
            name
          }
        }
        photo {
          url
          width
          height
        }
      }    
    }
    pageHeaderCollection(where: { id: "professores" }) {
      items {
        title
        text {
          json
        }
      }
    }

    navItemsCollection(where: { id: "professores" }) {
      items {
        color
      }
    }

    workingFieldsCollection {
      items {
        name
      }
    }
  }
`;

export const PROJECTS_QUERY = `
  query {
    projectCollection {
      items {
        name
        link
        leader {
          name
        }
        description {
          json
        }
        actionFieldsCollection {
          items {
            name
          }
        }
        graduates
        underGraduates
        initDate
        endDate
      }
    }
    pageHeaderCollection(where: { id: "projetos" }) {
      items {
        title
        text {
          json
        }
      }
    }
    navItemsCollection(where: { id: "projetos" }) {
      items {
        color
      }
    }
    workingFieldsCollection {
      items {
        name
      }
    }
  }
`;

export const QUEM_SOMOS_QUERY = `
  query {
    pageHeaderCollection(where: { id: "quem-somos" }) {
      items {
        title
        text {
          json
        }
      }
    }
    valuesCollection {
      items {
        mission {
          json
        }
        vision {
          json
        }
        values
      }
    }
    pageNavItem: navItemsCollection(where: { id: "quem-somos" }) {
      items {
        color
      }
    }
    photosGalleryCollection {
      items {
        title
        description
        image {
          url
          width
          height
        }
      }
    }
    navItemsCollection {
      items {
        color
      }
    }
  }
`;

export const FACA_PARTE_QUERY = `
  query {
    pageHeaderCollection(where: { id: "faca-parte" }) {
      items {
        title
        text {
          json
        }
      }
    }
    navItemsCollection(where: { id: "faca-parte" }) {
      items {
        color
      }
    }
    facaParteCollection {
      items {
        text {
          json
        }
        thumb {
          url
          width
          height
        }
      }
    }
  }
`;

export const PROFESSORS_FILTERED_QUERY = `
  query GetProfessors($workingField: [String]) {
    docentesCollection(where: {
      workingFields: { name_in: $workingField }
    }) {
      items {
        name
        role
        email
        linkedin
        github
        lattes
        workingFieldsCollection {
          items {
            name
          }
        }
        photo {
          url
          width
          height
        }
      }
    }
  }
`;

export const PROJECTS_FILTERED_QUERY = `
  query GetProjects($actionField: [String]) {
    projectCollection(where: {
      actionFields: { name_in: $actionField }
    }) {
      items {
        name
        link
        leader {
          name
        }
        description {
          json
        }
        actionFieldsCollection {
          items {
            name
          }
        }
        graduates
        underGraduates
        initDate
        endDate
      }
    }
  }
`;