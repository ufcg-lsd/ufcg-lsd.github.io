
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