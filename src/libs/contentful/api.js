const IMAGE_OR_VIDEO_FIELDS = `
  title
  description
  fileName
  url
`;

const MEDIACENTER_FIELDS = `
 title
 desc
 btn
 bannervideo {
    ${IMAGE_OR_VIDEO_FIELDS}
  }
      allnewsCollection(limit: 22) {
    items {
      ... on News {
        newsimg {
    ${IMAGE_OR_VIDEO_FIELDS}    
        }
    newsdate
    newstype
    newstitle
    newsbtn
    newslink    
      }
    }
  }
 testfield {
 json
 }   
`;

const HEADER_FIELDS = `
  whitelogo {
    ${IMAGE_OR_VIDEO_FIELDS}
  }
  abouttext
  socialsCollection {
    items {
      ... on Linkrepeater {
        title 
        link
      }
    }
  }
  newslettertitle
  newslettertext
  crtext
  mail
  contact
  location
  maplink
  privacytext
  quicklinks
  termstext
  bluelogo {
  ${IMAGE_OR_VIDEO_FIELDS}
  }
  hometext
  storytext
  property
  propertyone
  media
  connecttext
  whatsapp
  callaction
  inboxaction
`;

const HOME_FIELDS = `
  banner {
    ${IMAGE_OR_VIDEO_FIELDS}
  }
  abouttop
  aboutpara
  welcomestart
  welcomemid
  welcomeend
  aboutbtn
  yeartext
  yearvalue
  yeardetail
  unitstext
  unitsvalue
  unitsdetail
  areatext
  areavalue
  areadetail
  logo {
  ${IMAGE_OR_VIDEO_FIELDS}
  }
  aboutvid {
  ${IMAGE_OR_VIDEO_FIELDS}
  }
  projectimg {
  ${IMAGE_OR_VIDEO_FIELDS}
  }
  projectlogo {
  ${IMAGE_OR_VIDEO_FIELDS}
  }
  projectdesc
  projecttype
  typevalue
  prjctunit
  unitvalue
  projectlocation
  locationvalue
  projecttime
  timevalue
  prjctfeatone
  prjctfeatonedesc
  prjctfeattwo
  prjctfeattwodesc
  prjctfeatthree
  prjctfeatthreedesc
  prjctfeatfour
  prjctfeatfourdesc
  registertext
  regsiterdesc
  bottombanner {
  ${IMAGE_OR_VIDEO_FIELDS}
  }
`;

const CONNECT_FIELDS = `
 contactbg {
  ${IMAGE_OR_VIDEO_FIELDS}
 }
 connecttitle
 enquirytitle
 querydesc
 saletitle
 salesmail
 slaescontact
 salesaddress
 othertitle
 othermail
 othercontact
 addressbreadcrumbs
 adressdesc
 mapurl
`;

const OUR_STORY_FIELDS = `
  pagename
  bannermedia {
    ${IMAGE_OR_VIDEO_FIELDS}
  }
  storybreadcrumbs
  storytitle
  storyspan
  storydesone
  storydestwo
  storybg {
    ${IMAGE_OR_VIDEO_FIELDS}
  }
  storymedia {
    ${IMAGE_OR_VIDEO_FIELDS}
  }
  visionbanner {
    ${IMAGE_OR_VIDEO_FIELDS}
  }
  visionmedia {
    ${IMAGE_OR_VIDEO_FIELDS}
  }
  visionfeaturesCollection {
    items {
      ... on Linkrepeater {
        title 
        link
      }
    }
  } 
  chairmanbreadcrumbs
  commas {
    ${IMAGE_OR_VIDEO_FIELDS}
  }
  cmdescone
  cmdesctwo
  cmname
  cmrank
  cmimg {
    ${IMAGE_OR_VIDEO_FIELDS}
  }
  approachbreadcrumbs
  approachdesc
  approachbanner {
  ${IMAGE_OR_VIDEO_FIELDS}
  }
  approachoneimg {
    ${IMAGE_OR_VIDEO_FIELDS}
  }
  approachonetitle
  approachonedesc 
`;

const STORY_BELOW_FIELDS = `
    approachtwotitle
    approachtwodesc 
    approachtwoimg {
    ${IMAGE_OR_VIDEO_FIELDS}
    }
    approachthreeimg {
    ${IMAGE_OR_VIDEO_FIELDS}
    }
    approachthreetitle
    approachthreedesc
    approachfourimg {
    ${IMAGE_OR_VIDEO_FIELDS}
    }
    approachfourtitle
    approachfourdesc
    teambreadcrumbs
    teamtitle
    teamdescone
    teamdesctwo
    teamdescthree
    memoneimg {
    ${IMAGE_OR_VIDEO_FIELDS}
    }
    memonename
    memonerank
    memonebio
    memtwoimg {
    ${IMAGE_OR_VIDEO_FIELDS}
    }
    memtwoname
    memtworank
    memtwobio
    memthreeimg {
    ${IMAGE_OR_VIDEO_FIELDS}
    }
    memthreename
    memthreerank
`;

const ABOUT_BELOW_FIELDS = `
  memthreebio
  memfourimg {
    ${IMAGE_OR_VIDEO_FIELDS}
  }
  memfourname
  memfourrank
  memfourbio
  culturebreadcrumbs
  culturetitle
  culturedesc
  cultureimg {
    ${IMAGE_OR_VIDEO_FIELDS}
  }
  faqonetitle
  faqonedesc
  faqtwotitle
  faqtwodesc
  faqthreetitle
  faqthreedesc
  faqfourtitle
  faqfourdesc
`;

const PRISTINE_FIELDS = `
banner {
  ${IMAGE_OR_VIDEO_FIELDS}
}
aboutbreadcrumbs
abouttitile
aboutdescone
aboutdesctwo
aboutbg {
  ${IMAGE_OR_VIDEO_FIELDS}
}
btnonetext
btnonedesc
btntwotext
btntwodesc
aboutmedia {
  ${IMAGE_OR_VIDEO_FIELDS}
}
carouselbreadcrumbs
carouseloneimg {
  ${IMAGE_OR_VIDEO_FIELDS}
}
carouselonetitle
carouselonepagination
carouseltwoimg {
  ${IMAGE_OR_VIDEO_FIELDS}
}
carouseltwotitle
carouseltwopagination
carouselthreeimg {
  ${IMAGE_OR_VIDEO_FIELDS}
}  
carouselthreetitle
carouselthreepagination
carouselfourimg {
  ${IMAGE_OR_VIDEO_FIELDS}
}
carouselfourtitle
carouselfourpagination
neighbourbreadcrumbs
neighbourtitle
neighbourdesc
pristinemap
  naerlocationCollection {
    items {
      ... on Linkrepeater {
        title 
        link
      }
    }
  }
amenitiesbreadcrumbs
amenitiestitle
amenitiesdesc
amenityone
amenitytwo
amenitythree
amenityfour
amenityfive
amenitysix
amenityseven
amenityeigth
amenitynine
amenityten
amenityeleven
amenitytwelve
amenitythirteen
amenityfourteen
`;

const PRISTINE_BELOW_FIELDS = `
amenityfifteen
amenitysixteen
amenityseventeen
amenityeigtheen
amenitynineteen
amenitytwenty
amenitytwentyone
amenitytwentytwo
amenitytwentythree
amenitytwentyfour
amenitytwentyfive
amenitytwentysix
bottomimg {
  ${IMAGE_OR_VIDEO_FIELDS}
}
bottomimgmbl {
  ${IMAGE_OR_VIDEO_FIELDS}
}
pristinelogo {
  ${IMAGE_OR_VIDEO_FIELDS}
}
pristineabout
registerbtn
registerbtndesc
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

// Header
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
  // console.log(headerQuery, "Header Query Result");
  return extractOurHeader(headerQuery);
};

const extractOurHeader = (fetchResponse) => {
  return fetchResponse?.data?.headerCollection?.items?.[0] || {};
};

// Home Page
export const getHome = async (isDraftMode) => {
  const homeQuery = await fetchGraphQL(
    `query {
      homeCollection(preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${HOME_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  // console.log(homeQuery, "Home Query Result");
  return extractOurHome(homeQuery);
};

const extractOurHome = (fetchResponse) => {
  return fetchResponse?.data?.homeCollection?.items?.[0] || {};
};

// Connect Page
export const getConnect = async (isDraftMode) => {
  const connectQuery = await fetchGraphQL(
    `query {
      connectCollection(preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${CONNECT_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  // console.log(connectQuery, "Connect Query Result");
  return extractOurContact(connectQuery);
};

const extractOurContact = (fetchResponse) => {
  return fetchResponse?.data?.connectCollection?.items?.[0] || {};
};

// Our Story Page
export const getOurstory = async (isDraftMode) => {
  const ourstoryQuery = await fetchGraphQL(
    `query {
      aboutCollection(preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${OUR_STORY_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  // console.log(ourstoryQuery, "Our Story Query Result");
  return extractOurStory(ourstoryQuery);
};

const extractOurStory = (fetchResponse) => {
  return fetchResponse?.data?.aboutCollection?.items?.[0] || {};
};

// Story Below Page
export const getStorybelow = async (isDraftMode) => {
  const storyBelowQuery = await fetchGraphQL(
    `query {
      aboutCollection(preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${STORY_BELOW_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  // console.log(storyBelowQuery, "Story Below Query Result");
  return extractStoryBelow(storyBelowQuery);
};

const extractStoryBelow = (fetchResponse) => {
  return fetchResponse?.data?.aboutCollection?.items?.[0] || {};
};

// MediaCenter Page
export const getMediaCenter = async (isDraftMode) => {
  const mediacenterQuery = await fetchGraphQL(
    `query {
      mediacenterCollection(preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${MEDIACENTER_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  // console.log(mediacenterQuery, "mediacenter Query");
  return extractMediaCenter(mediacenterQuery);
};

const extractMediaCenter = (fetchResponse) => {
  return fetchResponse?.data?.mediacenterCollection?.items?.[0] || {};
};


// About Below Page
export const getAboutsecond = async (isDraftMode) => {
  const AboutsecondQuery = await fetchGraphQL(
    `query {
      aboutbelowCollection(preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${ABOUT_BELOW_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  // console.log(AboutsecondQuery, "AboutsecondQuery");
  return extractAboutSecond(AboutsecondQuery);
};

const extractAboutSecond = (fetchResponse) => {
  return fetchResponse?.data?.aboutbelowCollection?.items?.[0] || {};
};

// Pristine Page
export const getPristine = async (isDraftMode) => {
  const PristineQuery = await fetchGraphQL(
    `query {
      pristineCollection(preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${PRISTINE_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  // console.log(PristineQuery, "PristineQuery");
  return extractPristine(PristineQuery);
};

const extractPristine = (fetchResponse) => {
  return fetchResponse?.data?.pristineCollection?.items?.[0] || {};
};

// Pristine Below Page
export const getPristineBelow = async (isDraftMode) => {
  const PristinebelowQuery = await fetchGraphQL(
    `query {
      pristinebelowCollection(preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${PRISTINE_BELOW_FIELDS}
        }
      }
    }`,
    isDraftMode
  );
  // console.log(PristinebelowQuery, "PristinebelowQuery");
  return extractPristinebelow(PristinebelowQuery);
};

const extractPristinebelow = (fetchResponse) => {
  return fetchResponse?.data?.pristinebelowCollection?.items?.[0] || {};
};