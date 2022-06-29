/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
const getThumbnail = (id) => `https://img.youtube.com/vi/${id}/sddefault.jpg`;
const getViews = () => Math.floor(Math.random() * 10000000 + 10000);
const getURL = (id) => `https://www.youtube.com/watch?v=${id}`;
const getRandomDate = () => {
  const startDate = new Date(2019, 1, 5);
  const endDate = new Date();
  return new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
};

export const videos = [
  {
    _id: "lCrMAtbBUJA",
    title: "15 Books To Read In 2022",
    description:
      "In this video, I talk through 15 of my favourite books that I read in 2021. If you're looking for some recommendations for the New Year, I'd 100% recommend everything on this list. Enjoy!",
    category: "Your Next Read",
    creator: "Ali Abdaal",
    creatorAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLSWd0-HAZHehT9aad84m27uDgIAi86IS6sGsmTH=s176-c-k-c0x00ffffff-no-rj",
    thumbnail: getThumbnail("lCrMAtbBUJA"),
    views: getViews(),
    createdOn: getRandomDate(),
    url: getURL("lCrMAtbBUJA"),
  },
  {
    _id: "6Gw5dK48MtI",
    title: "Why books are here to stay",
    description:
      " Despite the rise of e-books, physical books aren’t going anywhere. Graphic designer Chip Kidd shares why their design is so lasting. Small Thing Big Idea, a TED original series, celebrates the lasting genius of everyday objects so perfectly designed that they changed the world around them.",
    category: "Talks",
    creator: "TED",
    creatorAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLSAltH3yarKh0eytWLSLtB9-kPpMLM5EejH-GAZIg=s176-c-k-c0x00ffffff-no-rj",
    thumbnail: getThumbnail("6Gw5dK48MtI"),
    views: getViews(),
    createdOn: getRandomDate(),
    url: getURL("6Gw5dK48MtI"),
  },
  {
    _id: "pZVZdgY25uY",
    title: "Every Book Lover Ever",
    description:
      "Are you the kind of person who's always glued to books? Do you also say just one more page and end up reading till the break of dawn? Love books more than people? Then you'll surely relate to this!",
    category: "Sketch",
    creator: "FilterCopy",
    creatorAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLTwQUwbdqTyU1FbjltMB_4gYp1kDnAKmGGNazseBA=s176-c-k-c0x00ffffff-no-rj",
    thumbnail: getThumbnail("pZVZdgY25uY"),
    views: getViews(),
    createdOn: getRandomDate(),
    url: getURL("pZVZdgY25uY"),
  },
  {
    _id: "6ibCtsHgz3Y",
    title: "How books can open your mind",
    description:
      "What happens when a dream you've held since childhood ... doesn't come true? As Lisa Bu adjusted to a new life in the United States, she turned to books to expand her mind and create a new path for herself.",
    category: "Talks",
    creator: "TED",
    creatorAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLSAltH3yarKh0eytWLSLtB9-kPpMLM5EejH-GAZIg=s176-c-k-c0x00ffffff-no-rj",
    thumbnail: getThumbnail("6ibCtsHgz3Y"),
    views: getViews(),
    createdOn: getRandomDate(),
    url: getURL("6ibCtsHgz3Y"),
  },
  {
    _id: "K4p1o1jNAiw",
    title: "Subtle Moments Only Book Lovers Will Enjoy",
    description:
      "Are you a bibliophile? Check out more awesome videos at BuzzFeedVideo!",
    category: "Sketch",
    creator: "BuzzFeedVideo",
    creatorAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLTf5wkQnZ2YAsnb5DUsgQLm65Pxavs6eOkrp_yWFg=s176-c-k-c0x00ffffff-no-rj",
    thumbnail: getThumbnail("K4p1o1jNAiw"),
    views: getViews(),
    createdOn: getRandomDate(),
    url: getURL("K4p1o1jNAiw"),
  },
  {
    _id: "M0qL4zzIuC8",
    title: "12 great books that will get you out of a reading slump ",
    description:
      "Here are 12 great book recommendations that will get you out of a reading slump",
    category: "Your Next Read",
    creator: " A Clockwork Reader",
    creatorAvatar:
      "https://yt3.ggpht.com/AQAm4UynD1hE2IdADQm7-K5QJ9z2aVCoEG1NdvgRAO0HhCEDNkfk1f82JFAZMPS_-OCBMGGuo54=s176-c-k-c0x00ffffff-no-rj",
    thumbnail: getThumbnail("M0qL4zzIuC8"),
    views: getViews(),
    createdOn: getRandomDate(),
    url: getURL("M0qL4zzIuC8"),
  },
  {
    _id: "dIrrROL2pRE",
    title: "5 Books You Must Read! Gaur Gopal Das",
    description: "5 Books You Must Read! Gaur Gopal Das",
    category: "Your Next Read",
    creator: "Gaur Gopal Das",
    creatorAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLSMbXBHcmhwIQeNIquqA3TGl2g7LFsOuYmeIam2Iw=s176-c-k-c0x00ffffff-no-rj",
    thumbnail: getThumbnail("dIrrROL2pRE"),
    views: getViews(),
    createdOn: getRandomDate(),
    url: getURL("dIrrROL2pRE"),
  },
  {
    _id: "305nY-iQWck",
    title: "Arthala by Vivek Kumar | Hindi Book Review",
    description:
      "Hey guys, here is a Hindi Book review for a book that I read recently.",
    category: "Reviews",
    creator: "Helly",
    creatorAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLQDPaBmodxnFmWV-PydOseZ24S_XkDEzYYsQPounw=s176-c-k-c0x00ffffff-no-rj",
    thumbnail: getThumbnail("305nY-iQWck"),
    views: getViews(),
    createdOn: getRandomDate(),
    url: getURL("305nY-iQWck"),
  },
  {
    _id: "49eU_xrOS7A",
    title: "Stephen King talks about his new thriller, 'Billy Summers'",
    description: "Stephen King talks about his new thriller, 'Billy Summers'",
    category: "Talks",
    creator: "Good Morning America",
    creatorAvatar:
      "https://yt3.ggpht.com/nvTtRxqUEr5biFiY1cfv5YUXtgOYBIuwRxQzLZBVkwhRSHfbADxJpB6gMsGszFcAjxJWIBqLFA=s176-c-k-c0x00ffffff-no-rj",
    thumbnail: getThumbnail("49eU_xrOS7A"),
    views: getViews(),
    createdOn: getRandomDate(),
    url: getURL("49eU_xrOS7A"),
  },
  {
    _id: "DpyMvwF4OSE",
    title: "Psychology of Money Book Review",
    description:
      "One of my favourite books on money is “Psychology of Money”, because it teaches us so many important life lessons on life, and on money. Here are my top 9 lessons from the book, for you to think deeply about, as you have your relationship with money.",
    category: "Reviews",
    creator: "warikoo",
    creatorAvatar:
      "https://yt3.ggpht.com/X9eoDIB9cgb1s-kvATRs1lQDcU4Fjc15NDV9s9FF8ck7IsA8u7OdijaernoDV9LLdePgjlt_=s176-c-k-c0x00ffffff-no-rj",
    thumbnail: getThumbnail("DpyMvwF4OSE"),
    views: getViews(),
    createdOn: getRandomDate(),
    url: getURL("DpyMvwF4OSE"),
  },
  {
    _id: "MA3uwVMuqAc",
    title: "5 Am Club by Robin Sharma",
    description:
      "5 Am Club by Robin Sharma || Review, Takeaways and Discussion",
    category: "Reviews",
    creator: "Helly",
    creatorAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLQDPaBmodxnFmWV-PydOseZ24S_XkDEzYYsQPounw=s176-c-k-c0x00ffffff-no-rj",
    thumbnail: getThumbnail("MA3uwVMuqAc"),
    views: getViews(),
    createdOn: getRandomDate(),
    url: getURL("MA3uwVMuqAc"),
  },
];
