
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
        text
        background
        thumb {
          url
        }
        link
        layout
        hero
        priority
      }    
    }
  }
`