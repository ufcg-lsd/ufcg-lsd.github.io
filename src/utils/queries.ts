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
