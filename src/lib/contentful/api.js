const IMAGE_OR_VIDEO_FIELDS = `
  title
  description
  fileName
  url
`;

const POST_FIELDS = `
  ... on Post {
    posttitle
    postslug
    postimg {
      ${IMAGE_OR_VIDEO_FIELDS}
    }
  }
`;

const HEADER_FIELDS = `
  title
  description
  allnewsCollection(limit: 5) { 
    items {
      ... on Post {
        posttitle
        postslug
        postimg {
          ${IMAGE_OR_VIDEO_FIELDS}
        }
      }
    }
  }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

export const getHeader = async (isDraftMode) => {
  const headerQuery = await fetchGraphQL(
    `query {
      headerCollection(preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${HEADER_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  console.log(headerQuery, "Header Query Result");
  return extractOurHeader(headerQuery);
};

const extractOurHeader = (fetchResponse) => {
  return fetchResponse?.data?.headerCollection?.items || [];
};


export const getPostBySlug = async (slug) => {
  const postQuery = await fetchGraphQL(
    `query {
      postCollection(where: { postslug: "${slug}" }, limit: 1) {
        items {
          posttitle
          postslug
          postimg {
            url
            title
          }
        }
      }
    }`
  );
  return postQuery?.data?.postCollection?.items[0] || null;
};