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

export const PROFESSOR_QUERY = `
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