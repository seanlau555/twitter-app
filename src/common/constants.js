export const CONSUMER_API_KEY = 'M9sH0OSwidJ3tK2c2Y5gpQa8U'
export const CONSUMER_API_SECRET_KEY =
  'HCYTKAUGYiaEVMOG2jj0LLP9RuvOdCUCue98l9N8mkgbdlo3m1'

export const accessToken =
  'AAAAAAAAAAAAAAAAAAAAAOSHCQEAAAAAUP3XsKmgTDWgvWtsOqSwc6xiaiQ%3DR3fRJ2u85kioERBwDaELYVdSYBHwJjHrXpokNWqqExDOyenygN'

export function timeDifference(previous) {
  const currentDate = new Date()
  const previousDate = new Date(previous)
  const msPerMinute = 60 * 1000
  const msPerHour = msPerMinute * 60
  const msPerDay = msPerHour * 24
  const msPerMonth = msPerDay * 30
  const msPerYear = msPerDay * 365

  const elapsed = currentDate - previousDate

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + 'seconds ago'
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + 'mins ago'
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + 'hrs ago'
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + 'days ago'
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + 'months ago'
  } else {
    return Math.round(elapsed / msPerYear) + 'years ago'
  }
}

export const dataList = [
  {
    created_at: 'Tue Nov 05 13:59:51 +0000 2019',
    id: 1191716761504231424,
    id_str: '1191716761504231424',
    text:
      'RT @thetimeusedtobe: Indonesian journalist, Ms Indah, who got shot in her eye by rubber bullet, was still in hospital. With her eyesight lo…',
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [
        {
          screen_name: 'thetimeusedtobe',
          name: '👁 W🎄TCHING Y😷U',
          id: 1162029930294607873,
          id_str: '1162029930294607873',
          indices: [3, 19]
        }
      ],
      urls: []
    },
    source:
      '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 2810392484,
      id_str: '2810392484',
      name: '漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥',
      screen_name: 'rockwithhon',
      location: 'Wan Chai District, Hong Kong',
      description: '',
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 25,
      friends_count: 470,
      listed_count: 0,
      created_at: 'Mon Sep 15 01:00:02 +0000 2014',
      favourites_count: 225,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 103,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: '000000',
      profile_background_image_url:
        'http://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_image_url_https:
        'https://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_tile: false,
      profile_image_url:
        'http://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_image_url_https:
        'https://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_link_color: '007DFF',
      profile_sidebar_border_color: '000000',
      profile_sidebar_fill_color: '000000',
      profile_text_color: '000000',
      profile_use_background_image: false,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      following: null,
      follow_request_sent: null,
      notifications: null,
      translator_type: 'none'
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    retweeted_status: {
      created_at: 'Tue Nov 05 11:48:05 +0000 2019',
      id: 1191683600795627520,
      id_str: '1191683600795627520',
      text:
        'Indonesian journalist, Ms Indah, who got shot in her eye by rubber bullet, was still in hospital. With her eyesight… https://t.co/4Jbn1BSHZK',
      truncated: true,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: [
          {
            url: 'https://t.co/4Jbn1BSHZK',
            expanded_url:
              'https://twitter.com/i/web/status/1191683600795627520',
            display_url: 'twitter.com/i/web/status/1…',
            indices: [117, 140]
          }
        ]
      },
      source:
        '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 1162029930294607873,
        id_str: '1162029930294607873',
        name: '👁 W🎄TCHING Y😷U',
        screen_name: 'thetimeusedtobe',
        location: 'Dystopia',
        description:
          'Remember the time used to be in #HongKong / 🇭🇰 / Engineering👷🏻‍♀️ / Tweet 80% on #HongKongProtests / Abusive language gets you blocked',
        url: 'https://t.co/dAHvbwHz1L',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/dAHvbwHz1L',
                expanded_url: 'https://hkrev.info/',
                display_url: 'hkrev.info',
                indices: [0, 23]
              }
            ]
          },
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 8104,
        friends_count: 960,
        listed_count: 31,
        created_at: 'Thu Aug 15 15:54:59 +0000 2019',
        favourites_count: 5028,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: false,
        statuses_count: 2406,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'F5F8FA',
        profile_background_image_url: null,
        profile_background_image_url_https: null,
        profile_background_tile: false,
        profile_image_url:
          'http://pbs.twimg.com/profile_images/1209022979750813696/apcEjLqw_normal.jpg',
        profile_image_url_https:
          'https://pbs.twimg.com/profile_images/1209022979750813696/apcEjLqw_normal.jpg',
        profile_banner_url:
          'https://pbs.twimg.com/profile_banners/1162029930294607873/1573321964',
        profile_link_color: '1DA1F2',
        profile_sidebar_border_color: 'C0DEED',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        has_extended_profile: false,
        default_profile: true,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none'
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 2477,
      favorite_count: 2278,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'en'
    },
    is_quote_status: false,
    retweet_count: 2477,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    lang: 'en'
  },
  {
    created_at: 'Sun Oct 27 10:10:53 +0000 2019',
    id: 1188397650611032065,
    id_str: '1188397650611032065',
    text:
      "RT @nbashaw: SwiftUI is going to kill React Native.\n\nOn Monday, I knew nothing about native iOS development. \n\nToday, I wrote this. (It's o…",
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [
        {
          screen_name: 'nbashaw',
          name: 'Nathan Baschez',
          id: 17424947,
          id_str: '17424947',
          indices: [3, 11]
        }
      ],
      urls: []
    },
    source:
      '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 2810392484,
      id_str: '2810392484',
      name: '漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥',
      screen_name: 'rockwithhon',
      location: 'Wan Chai District, Hong Kong',
      description: '',
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 25,
      friends_count: 470,
      listed_count: 0,
      created_at: 'Mon Sep 15 01:00:02 +0000 2014',
      favourites_count: 225,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 103,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: '000000',
      profile_background_image_url:
        'http://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_image_url_https:
        'https://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_tile: false,
      profile_image_url:
        'http://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_image_url_https:
        'https://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_link_color: '007DFF',
      profile_sidebar_border_color: '000000',
      profile_sidebar_fill_color: '000000',
      profile_text_color: '000000',
      profile_use_background_image: false,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      following: null,
      follow_request_sent: null,
      notifications: null,
      translator_type: 'none'
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    retweeted_status: {
      created_at: 'Fri Oct 25 06:01:50 +0000 2019',
      id: 1187610197532930049,
      id_str: '1187610197532930049',
      text:
        'SwiftUI is going to kill React Native.\n\nOn Monday, I knew nothing about native iOS development. \n\nToday, I wrote th… https://t.co/fn97sZ6F3e',
      truncated: true,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: [
          {
            url: 'https://t.co/fn97sZ6F3e',
            expanded_url:
              'https://twitter.com/i/web/status/1187610197532930049',
            display_url: 'twitter.com/i/web/status/1…',
            indices: [117, 140]
          }
        ]
      },
      source:
        '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 17424947,
        id_str: '17424947',
        name: 'Nathan Baschez',
        screen_name: 'nbashaw',
        location: 'San Francisco, CA',
        description:
          'Studying strategy at https://t.co/IiMQifuD4H. Previously: @SubstackInc @GimletMedia @Hardbound @ProductHunt. Always: @SoniaBaschez',
        url: 'https://t.co/IJHJLSECkj',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/IJHJLSECkj',
                expanded_url: 'https://divinations.substack.com',
                display_url: 'divinations.substack.com',
                indices: [0, 23]
              }
            ]
          },
          description: {
            urls: [
              {
                url: 'https://t.co/IiMQifuD4H',
                expanded_url: 'http://divinations.substack.com',
                display_url: 'divinations.substack.com',
                indices: [21, 44]
              }
            ]
          }
        },
        protected: false,
        followers_count: 14393,
        friends_count: 4256,
        listed_count: 557,
        created_at: 'Sun Nov 16 17:24:49 +0000 2008',
        favourites_count: 37391,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: true,
        statuses_count: 32129,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'E6E6E6',
        profile_background_image_url:
          'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https:
          'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: true,
        profile_image_url:
          'http://pbs.twimg.com/profile_images/997593325917036549/vSnFLKhA_normal.jpg',
        profile_image_url_https:
          'https://pbs.twimg.com/profile_images/997593325917036549/vSnFLKhA_normal.jpg',
        profile_banner_url:
          'https://pbs.twimg.com/profile_banners/17424947/1405106207',
        profile_link_color: 'D64545',
        profile_sidebar_border_color: '000000',
        profile_sidebar_fill_color: 'EFEFEF',
        profile_text_color: '333333',
        profile_use_background_image: false,
        has_extended_profile: true,
        default_profile: false,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'regular'
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 386,
      favorite_count: 3984,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'en'
    },
    is_quote_status: false,
    retweet_count: 386,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    lang: 'en'
  },
  {
    created_at: 'Tue May 07 08:58:38 +0000 2019',
    id: 1125686365641822208,
    id_str: '1125686365641822208',
    text:
      'RT @imcatnoone: I created a list of books I highly recommend reading if you’re a designer (or individual building product), regardless of e…',
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [
        {
          screen_name: 'imcatnoone',
          name: 'Cat Noone',
          id: 26387006,
          id_str: '26387006',
          indices: [3, 14]
        }
      ],
      urls: []
    },
    source:
      '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 2810392484,
      id_str: '2810392484',
      name: '漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥',
      screen_name: 'rockwithhon',
      location: 'Wan Chai District, Hong Kong',
      description: '',
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 25,
      friends_count: 470,
      listed_count: 0,
      created_at: 'Mon Sep 15 01:00:02 +0000 2014',
      favourites_count: 225,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 103,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: '000000',
      profile_background_image_url:
        'http://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_image_url_https:
        'https://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_tile: false,
      profile_image_url:
        'http://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_image_url_https:
        'https://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_link_color: '007DFF',
      profile_sidebar_border_color: '000000',
      profile_sidebar_fill_color: '000000',
      profile_text_color: '000000',
      profile_use_background_image: false,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      following: null,
      follow_request_sent: null,
      notifications: null,
      translator_type: 'none'
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    retweeted_status: {
      created_at: 'Mon May 06 14:40:30 +0000 2019',
      id: 1125410012795371526,
      id_str: '1125410012795371526',
      text:
        'I created a list of books I highly recommend reading if you’re a designer (or individual building product), regardl… https://t.co/Yrc4y6hbPd',
      truncated: true,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: [
          {
            url: 'https://t.co/Yrc4y6hbPd',
            expanded_url:
              'https://twitter.com/i/web/status/1125410012795371526',
            display_url: 'twitter.com/i/web/status/1…',
            indices: [117, 140]
          }
        ]
      },
      source:
        '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 26387006,
        id_str: '26387006',
        name: 'Cat Noone',
        screen_name: 'imcatnoone',
        location: 'New Jersey',
        description:
          'CEO @getstarkco. Designer. Proud Mama. Traveler. Bookworm. Athlete. Brooklyn Native. Dark humor & colorful language.',
        url: 'https://t.co/nkmVHEvKf6',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/nkmVHEvKf6',
                expanded_url: 'http://heyimcat.com',
                display_url: 'heyimcat.com',
                indices: [0, 23]
              }
            ]
          },
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 13282,
        friends_count: 1515,
        listed_count: 609,
        created_at: 'Wed Mar 25 01:11:57 +0000 2009',
        favourites_count: 108199,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: false,
        statuses_count: 70572,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: 'E0E0E0',
        profile_background_image_url:
          'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https:
          'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: true,
        profile_image_url:
          'http://pbs.twimg.com/profile_images/1045401126059704320/z4v0aofT_normal.jpg',
        profile_image_url_https:
          'https://pbs.twimg.com/profile_images/1045401126059704320/z4v0aofT_normal.jpg',
        profile_banner_url:
          'https://pbs.twimg.com/profile_banners/26387006/1432210507',
        profile_link_color: '8487B8',
        profile_sidebar_border_color: 'FFFFFF',
        profile_sidebar_fill_color: '45453D',
        profile_text_color: 'A8D7F0',
        profile_use_background_image: false,
        has_extended_profile: true,
        default_profile: false,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none'
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 299,
      favorite_count: 1823,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'en'
    },
    is_quote_status: false,
    retweet_count: 299,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    lang: 'en'
  },
  {
    created_at: 'Wed Apr 24 01:21:47 +0000 2019',
    id: 1120860355456983040,
    id_str: '1120860355456983040',
    text:
      'RT @Tesla: This 3D reconstruction shows the immense amount of depth information a Tesla can collect from just a few seconds of video from t…',
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [
        {
          screen_name: 'Tesla',
          name: 'Tesla',
          id: 13298072,
          id_str: '13298072',
          indices: [3, 9]
        }
      ],
      urls: []
    },
    source:
      '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 2810392484,
      id_str: '2810392484',
      name: '漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥',
      screen_name: 'rockwithhon',
      location: 'Wan Chai District, Hong Kong',
      description: '',
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 25,
      friends_count: 470,
      listed_count: 0,
      created_at: 'Mon Sep 15 01:00:02 +0000 2014',
      favourites_count: 225,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 103,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: '000000',
      profile_background_image_url:
        'http://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_image_url_https:
        'https://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_tile: false,
      profile_image_url:
        'http://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_image_url_https:
        'https://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_link_color: '007DFF',
      profile_sidebar_border_color: '000000',
      profile_sidebar_fill_color: '000000',
      profile_text_color: '000000',
      profile_use_background_image: false,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      following: null,
      follow_request_sent: null,
      notifications: null,
      translator_type: 'none'
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    retweeted_status: {
      created_at: 'Tue Apr 23 22:24:30 +0000 2019',
      id: 1120815737654767616,
      id_str: '1120815737654767616',
      text:
        'This 3D reconstruction shows the immense amount of depth information a Tesla can collect from just a few seconds of… https://t.co/xRWwHw1orG',
      truncated: true,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: [
          {
            url: 'https://t.co/xRWwHw1orG',
            expanded_url:
              'https://twitter.com/i/web/status/1120815737654767616',
            display_url: 'twitter.com/i/web/status/1…',
            indices: [117, 140]
          }
        ]
      },
      source:
        '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 13298072,
        id_str: '13298072',
        name: 'Tesla',
        screen_name: 'Tesla',
        location: '',
        description: 'Electric cars, giant batteries and solar',
        url: 'https://t.co/MxFwoUXrrG',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/MxFwoUXrrG',
                expanded_url: 'http://ts.la/w0i',
                display_url: 'ts.la/w0i',
                indices: [0, 23]
              }
            ]
          },
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 4954781,
        friends_count: 74,
        listed_count: 14539,
        created_at: 'Sun Feb 10 01:12:32 +0000 2008',
        favourites_count: 3231,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: true,
        statuses_count: 7598,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: '666666',
        profile_background_image_url:
          'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https:
          'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: false,
        profile_image_url:
          'http://pbs.twimg.com/profile_images/489192650474414080/4RxZxsud_normal.png',
        profile_image_url_https:
          'https://pbs.twimg.com/profile_images/489192650474414080/4RxZxsud_normal.png',
        profile_banner_url:
          'https://pbs.twimg.com/profile_banners/13298072/1554236549',
        profile_link_color: 'C90000',
        profile_sidebar_border_color: 'FFFFFF',
        profile_sidebar_fill_color: 'F5EDF5',
        profile_text_color: '555555',
        profile_use_background_image: true,
        has_extended_profile: false,
        default_profile: false,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none'
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 4075,
      favorite_count: 27992,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'en'
    },
    is_quote_status: false,
    retweet_count: 4075,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    lang: 'en'
  },
  {
    created_at: 'Tue Apr 09 06:20:56 +0000 2019',
    id: 1115499820750217216,
    id_str: '1115499820750217216',
    text:
      'RT @newmike: A PLUS companies: \nAirbnb\nPinterest\nLyft\nUber\nStripe, Slack, and Square\nhttps://t.co/4UnuFbsCRD',
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [
        {
          screen_name: 'newmike',
          name: 'Mike Ghaffary',
          id: 7286402,
          id_str: '7286402',
          indices: [3, 11]
        }
      ],
      urls: [
        {
          url: 'https://t.co/4UnuFbsCRD',
          expanded_url:
            'https://www.forbes.com/sites/mikeghaffary/2019/04/08/the-a-plus-companies-the-advantages-this-years-consumer-tech-ipos-could-have-over-fang/#630f62e4539b',
          display_url: 'forbes.com/sites/mikeghaf…',
          indices: [85, 108]
        }
      ]
    },
    source:
      '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 2810392484,
      id_str: '2810392484',
      name: '漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥',
      screen_name: 'rockwithhon',
      location: 'Wan Chai District, Hong Kong',
      description: '',
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 25,
      friends_count: 470,
      listed_count: 0,
      created_at: 'Mon Sep 15 01:00:02 +0000 2014',
      favourites_count: 225,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 103,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: '000000',
      profile_background_image_url:
        'http://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_image_url_https:
        'https://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_tile: false,
      profile_image_url:
        'http://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_image_url_https:
        'https://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_link_color: '007DFF',
      profile_sidebar_border_color: '000000',
      profile_sidebar_fill_color: '000000',
      profile_text_color: '000000',
      profile_use_background_image: false,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      following: null,
      follow_request_sent: null,
      notifications: null,
      translator_type: 'none'
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    retweeted_status: {
      created_at: 'Mon Apr 08 14:03:04 +0000 2019',
      id: 1115253730595803138,
      id_str: '1115253730595803138',
      text:
        'A PLUS companies: \nAirbnb\nPinterest\nLyft\nUber\nStripe, Slack, and Square\nhttps://t.co/4UnuFbsCRD',
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: [
          {
            url: 'https://t.co/4UnuFbsCRD',
            expanded_url:
              'https://www.forbes.com/sites/mikeghaffary/2019/04/08/the-a-plus-companies-the-advantages-this-years-consumer-tech-ipos-could-have-over-fang/#630f62e4539b',
            display_url: 'forbes.com/sites/mikeghaf…',
            indices: [72, 95]
          }
        ]
      },
      source:
        '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 7286402,
        id_str: '7286402',
        name: 'Mike Ghaffary',
        screen_name: 'newmike',
        location: 'San Francisco',
        description:
          'Investor @CanvasVC. Alum @Yelp @Eat24 @Stitcher @SocialCapital @SummitPartners @BCG. Love helping founders build marketplaces, consumer and software companies.',
        url: 'https://t.co/Vx49yJaZgv',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/Vx49yJaZgv',
                expanded_url: 'http://canvas.vc',
                display_url: 'canvas.vc',
                indices: [0, 23]
              }
            ]
          },
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 3959,
        friends_count: 857,
        listed_count: 121,
        created_at: 'Fri Jul 06 08:26:35 +0000 2007',
        favourites_count: 1413,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: false,
        statuses_count: 1242,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: '9AE4E8',
        profile_background_image_url:
          'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https:
          'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: false,
        profile_image_url:
          'http://pbs.twimg.com/profile_images/1070357973623463936/jw4TwkeC_normal.jpg',
        profile_image_url_https:
          'https://pbs.twimg.com/profile_images/1070357973623463936/jw4TwkeC_normal.jpg',
        profile_banner_url:
          'https://pbs.twimg.com/profile_banners/7286402/1395030659',
        profile_link_color: '0000FF',
        profile_sidebar_border_color: '87BC44',
        profile_sidebar_fill_color: 'E0FF92',
        profile_text_color: '000000',
        profile_use_background_image: true,
        has_extended_profile: false,
        default_profile: false,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none'
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 1,
      favorite_count: 16,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'en'
    },
    is_quote_status: false,
    retweet_count: 1,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    lang: 'en'
  },
  {
    created_at: 'Tue Mar 26 11:33:19 +0000 2019',
    id: 1110505003607715841,
    id_str: '1110505003607715841',
    text: '@Decadenettow 你講咩9',
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [
        {
          screen_name: 'Decadenettow',
          name: 'Netto',
          id: 805911891067465729,
          id_str: '805911891067465729',
          indices: [0, 13]
        }
      ],
      urls: []
    },
    source:
      '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
    in_reply_to_status_id: 1110191590948196352,
    in_reply_to_status_id_str: '1110191590948196352',
    in_reply_to_user_id: 805911891067465729,
    in_reply_to_user_id_str: '805911891067465729',
    in_reply_to_screen_name: 'Decadenettow',
    user: {
      id: 2810392484,
      id_str: '2810392484',
      name: '漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥',
      screen_name: 'rockwithhon',
      location: 'Wan Chai District, Hong Kong',
      description: '',
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 25,
      friends_count: 470,
      listed_count: 0,
      created_at: 'Mon Sep 15 01:00:02 +0000 2014',
      favourites_count: 225,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 103,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: '000000',
      profile_background_image_url:
        'http://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_image_url_https:
        'https://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_tile: false,
      profile_image_url:
        'http://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_image_url_https:
        'https://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_link_color: '007DFF',
      profile_sidebar_border_color: '000000',
      profile_sidebar_fill_color: '000000',
      profile_text_color: '000000',
      profile_use_background_image: false,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      following: null,
      follow_request_sent: null,
      notifications: null,
      translator_type: 'none'
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    lang: 'zh'
  },
  {
    created_at: 'Fri Feb 22 15:35:41 +0000 2019',
    id: 1098969583031971840,
    id_str: '1098969583031971840',
    text: 'RT @ndimichino: This is wild https://t.co/HKZkPTaSsb',
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [
        {
          screen_name: 'ndimichino',
          name: 'Nick D 🍝',
          id: 17871814,
          id_str: '17871814',
          indices: [3, 14]
        }
      ],
      urls: [],
      media: [
        {
          id: 1098580722338672645,
          id_str: '1098580722338672645',
          indices: [29, 52],
          media_url:
            'http://pbs.twimg.com/ext_tw_video_thumb/1098580722338672645/pu/img/rpvGNGfXPh0a9JuR.jpg',
          media_url_https:
            'https://pbs.twimg.com/ext_tw_video_thumb/1098580722338672645/pu/img/rpvGNGfXPh0a9JuR.jpg',
          url: 'https://t.co/HKZkPTaSsb',
          display_url: 'pic.twitter.com/HKZkPTaSsb',
          expanded_url:
            'https://twitter.com/MattNavarra/status/1098580810062618627/video/1',
          type: 'photo',
          sizes: {
            thumb: {
              w: 150,
              h: 150,
              resize: 'crop'
            },
            medium: {
              w: 1200,
              h: 675,
              resize: 'fit'
            },
            small: {
              w: 680,
              h: 383,
              resize: 'fit'
            },
            large: {
              w: 1280,
              h: 720,
              resize: 'fit'
            }
          },
          source_status_id: 1098580810062618627,
          source_status_id_str: '1098580810062618627',
          source_user_id: 16211566,
          source_user_id_str: '16211566'
        }
      ]
    },
    extended_entities: {
      media: [
        {
          id: 1098580722338672645,
          id_str: '1098580722338672645',
          indices: [29, 52],
          media_url:
            'http://pbs.twimg.com/ext_tw_video_thumb/1098580722338672645/pu/img/rpvGNGfXPh0a9JuR.jpg',
          media_url_https:
            'https://pbs.twimg.com/ext_tw_video_thumb/1098580722338672645/pu/img/rpvGNGfXPh0a9JuR.jpg',
          url: 'https://t.co/HKZkPTaSsb',
          display_url: 'pic.twitter.com/HKZkPTaSsb',
          expanded_url:
            'https://twitter.com/MattNavarra/status/1098580810062618627/video/1',
          type: 'video',
          sizes: {
            thumb: {
              w: 150,
              h: 150,
              resize: 'crop'
            },
            medium: {
              w: 1200,
              h: 675,
              resize: 'fit'
            },
            small: {
              w: 680,
              h: 383,
              resize: 'fit'
            },
            large: {
              w: 1280,
              h: 720,
              resize: 'fit'
            }
          },
          source_status_id: 1098580810062618627,
          source_status_id_str: '1098580810062618627',
          source_user_id: 16211566,
          source_user_id_str: '16211566',
          video_info: {
            aspect_ratio: [16, 9],
            duration_millis: 68533,
            variants: [
              {
                bitrate: 832000,
                content_type: 'video/mp4',
                url:
                  'https://video.twimg.com/ext_tw_video/1098580722338672645/pu/vid/640x360/VvwgsyNG16QVBSp7.mp4?tag=6'
              },
              {
                content_type: 'application/x-mpegURL',
                url:
                  'https://video.twimg.com/ext_tw_video/1098580722338672645/pu/pl/b9Z4qcfhYzFnz5Vn.m3u8?tag=6'
              },
              {
                bitrate: 2176000,
                content_type: 'video/mp4',
                url:
                  'https://video.twimg.com/ext_tw_video/1098580722338672645/pu/vid/1280x720/WNvLrfUcPQQXuPzD.mp4?tag=6'
              },
              {
                bitrate: 256000,
                content_type: 'video/mp4',
                url:
                  'https://video.twimg.com/ext_tw_video/1098580722338672645/pu/vid/320x180/2LQBtpWaFGp-PnRy.mp4?tag=6'
              }
            ]
          },
          additional_media_info: {
            monetizable: false,
            source_user: {
              id: 16211566,
              id_str: '16211566',
              name: 'Matt Navarra',
              screen_name: 'MattNavarra',
              location: 'Cardiff, Wales',
              description:
                '🎙Social media industry commentator + consultant 💼 Prev. @thenextweb + @govuk 🤓 Self-confessed geek 🔊 My NEW podcast 👉  https://t.co/mTc5JlCMFK',
              url: 'https://t.co/QD0FtH0TTi',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/QD0FtH0TTi',
                      expanded_url:
                        'http://www.facebook.com/groups/socialgeekout',
                      display_url: 'facebook.com/groups/socialg…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: {
                  urls: [
                    {
                      url: 'https://t.co/mTc5JlCMFK',
                      expanded_url: 'https://anchor.fm/geekoutmattnavarra',
                      display_url: 'anchor.fm/geekoutmattnav…',
                      indices: [119, 142]
                    }
                  ]
                }
              },
              protected: false,
              followers_count: 58860,
              friends_count: 4673,
              listed_count: 2429,
              created_at: 'Tue Sep 09 21:25:05 +0000 2008',
              favourites_count: 95514,
              utc_offset: null,
              time_zone: null,
              geo_enabled: true,
              verified: true,
              statuses_count: 106448,
              lang: null,
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'FFFFFF',
              profile_background_image_url:
                'http://abs.twimg.com/images/themes/theme7/bg.gif',
              profile_background_image_url_https:
                'https://abs.twimg.com/images/themes/theme7/bg.gif',
              profile_background_tile: true,
              profile_image_url:
                'http://pbs.twimg.com/profile_images/1231258935174320134/edMAVbdt_normal.jpg',
              profile_image_url_https:
                'https://pbs.twimg.com/profile_images/1231258935174320134/edMAVbdt_normal.jpg',
              profile_banner_url:
                'https://pbs.twimg.com/profile_banners/16211566/1580394781',
              profile_link_color: '3C5A99',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: '171106',
              profile_text_color: '473623',
              profile_use_background_image: false,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: null,
              follow_request_sent: null,
              notifications: null,
              translator_type: 'regular'
            }
          }
        }
      ]
    },
    source:
      '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 2810392484,
      id_str: '2810392484',
      name: '漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥',
      screen_name: 'rockwithhon',
      location: 'Wan Chai District, Hong Kong',
      description: '',
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 25,
      friends_count: 470,
      listed_count: 0,
      created_at: 'Mon Sep 15 01:00:02 +0000 2014',
      favourites_count: 225,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 103,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: '000000',
      profile_background_image_url:
        'http://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_image_url_https:
        'https://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_tile: false,
      profile_image_url:
        'http://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_image_url_https:
        'https://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_link_color: '007DFF',
      profile_sidebar_border_color: '000000',
      profile_sidebar_fill_color: '000000',
      profile_text_color: '000000',
      profile_use_background_image: false,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      following: null,
      follow_request_sent: null,
      notifications: null,
      translator_type: 'none'
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    retweeted_status: {
      created_at: 'Thu Feb 21 16:30:35 +0000 2019',
      id: 1098621012990664705,
      id_str: '1098621012990664705',
      text: 'This is wild https://t.co/HKZkPTaSsb',
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: [],
        media: [
          {
            id: 1098580722338672645,
            id_str: '1098580722338672645',
            indices: [13, 36],
            media_url:
              'http://pbs.twimg.com/ext_tw_video_thumb/1098580722338672645/pu/img/rpvGNGfXPh0a9JuR.jpg',
            media_url_https:
              'https://pbs.twimg.com/ext_tw_video_thumb/1098580722338672645/pu/img/rpvGNGfXPh0a9JuR.jpg',
            url: 'https://t.co/HKZkPTaSsb',
            display_url: 'pic.twitter.com/HKZkPTaSsb',
            expanded_url:
              'https://twitter.com/MattNavarra/status/1098580810062618627/video/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              },
              medium: {
                w: 1200,
                h: 675,
                resize: 'fit'
              },
              small: {
                w: 680,
                h: 383,
                resize: 'fit'
              },
              large: {
                w: 1280,
                h: 720,
                resize: 'fit'
              }
            },
            source_status_id: 1098580810062618627,
            source_status_id_str: '1098580810062618627',
            source_user_id: 16211566,
            source_user_id_str: '16211566'
          }
        ]
      },
      extended_entities: {
        media: [
          {
            id: 1098580722338672645,
            id_str: '1098580722338672645',
            indices: [13, 36],
            media_url:
              'http://pbs.twimg.com/ext_tw_video_thumb/1098580722338672645/pu/img/rpvGNGfXPh0a9JuR.jpg',
            media_url_https:
              'https://pbs.twimg.com/ext_tw_video_thumb/1098580722338672645/pu/img/rpvGNGfXPh0a9JuR.jpg',
            url: 'https://t.co/HKZkPTaSsb',
            display_url: 'pic.twitter.com/HKZkPTaSsb',
            expanded_url:
              'https://twitter.com/MattNavarra/status/1098580810062618627/video/1',
            type: 'video',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              },
              medium: {
                w: 1200,
                h: 675,
                resize: 'fit'
              },
              small: {
                w: 680,
                h: 383,
                resize: 'fit'
              },
              large: {
                w: 1280,
                h: 720,
                resize: 'fit'
              }
            },
            source_status_id: 1098580810062618627,
            source_status_id_str: '1098580810062618627',
            source_user_id: 16211566,
            source_user_id_str: '16211566',
            video_info: {
              aspect_ratio: [16, 9],
              duration_millis: 68533,
              variants: [
                {
                  bitrate: 832000,
                  content_type: 'video/mp4',
                  url:
                    'https://video.twimg.com/ext_tw_video/1098580722338672645/pu/vid/640x360/VvwgsyNG16QVBSp7.mp4?tag=6'
                },
                {
                  content_type: 'application/x-mpegURL',
                  url:
                    'https://video.twimg.com/ext_tw_video/1098580722338672645/pu/pl/b9Z4qcfhYzFnz5Vn.m3u8?tag=6'
                },
                {
                  bitrate: 2176000,
                  content_type: 'video/mp4',
                  url:
                    'https://video.twimg.com/ext_tw_video/1098580722338672645/pu/vid/1280x720/WNvLrfUcPQQXuPzD.mp4?tag=6'
                },
                {
                  bitrate: 256000,
                  content_type: 'video/mp4',
                  url:
                    'https://video.twimg.com/ext_tw_video/1098580722338672645/pu/vid/320x180/2LQBtpWaFGp-PnRy.mp4?tag=6'
                }
              ]
            },
            additional_media_info: {
              monetizable: false,
              source_user: {
                id: 16211566,
                id_str: '16211566',
                name: 'Matt Navarra',
                screen_name: 'MattNavarra',
                location: 'Cardiff, Wales',
                description:
                  '🎙Social media industry commentator + consultant 💼 Prev. @thenextweb + @govuk 🤓 Self-confessed geek 🔊 My NEW podcast 👉  https://t.co/mTc5JlCMFK',
                url: 'https://t.co/QD0FtH0TTi',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/QD0FtH0TTi',
                        expanded_url:
                          'http://www.facebook.com/groups/socialgeekout',
                        display_url: 'facebook.com/groups/socialg…',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: {
                    urls: [
                      {
                        url: 'https://t.co/mTc5JlCMFK',
                        expanded_url: 'https://anchor.fm/geekoutmattnavarra',
                        display_url: 'anchor.fm/geekoutmattnav…',
                        indices: [119, 142]
                      }
                    ]
                  }
                },
                protected: false,
                followers_count: 58860,
                friends_count: 4673,
                listed_count: 2429,
                created_at: 'Tue Sep 09 21:25:05 +0000 2008',
                favourites_count: 95514,
                utc_offset: null,
                time_zone: null,
                geo_enabled: true,
                verified: true,
                statuses_count: 106448,
                lang: null,
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'FFFFFF',
                profile_background_image_url:
                  'http://abs.twimg.com/images/themes/theme7/bg.gif',
                profile_background_image_url_https:
                  'https://abs.twimg.com/images/themes/theme7/bg.gif',
                profile_background_tile: true,
                profile_image_url:
                  'http://pbs.twimg.com/profile_images/1231258935174320134/edMAVbdt_normal.jpg',
                profile_image_url_https:
                  'https://pbs.twimg.com/profile_images/1231258935174320134/edMAVbdt_normal.jpg',
                profile_banner_url:
                  'https://pbs.twimg.com/profile_banners/16211566/1580394781',
                profile_link_color: '3C5A99',
                profile_sidebar_border_color: 'FFFFFF',
                profile_sidebar_fill_color: '171106',
                profile_text_color: '473623',
                profile_use_background_image: false,
                has_extended_profile: true,
                default_profile: false,
                default_profile_image: false,
                following: null,
                follow_request_sent: null,
                notifications: null,
                translator_type: 'regular'
              }
            }
          }
        ]
      },
      source:
        '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 17871814,
        id_str: '17871814',
        name: 'Nick D 🍝',
        screen_name: 'ndimichino',
        location: 'new jersey',
        description:
          'Mostly carbs. Trying to be a father and also a dad. Telling stories at @square.',
        url: 'https://t.co/RVGSsNO2lX',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/RVGSsNO2lX',
                expanded_url: 'http://squ.re/flint',
                display_url: 'squ.re/flint',
                indices: [0, 23]
              }
            ]
          },
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 4256,
        friends_count: 700,
        listed_count: 117,
        created_at: 'Thu Dec 04 16:52:08 +0000 2008',
        favourites_count: 60966,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: false,
        statuses_count: 46155,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: '000000',
        profile_background_image_url:
          'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https:
          'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: false,
        profile_image_url:
          'http://pbs.twimg.com/profile_images/1188636648491360261/8bOedMCL_normal.jpg',
        profile_image_url_https:
          'https://pbs.twimg.com/profile_images/1188636648491360261/8bOedMCL_normal.jpg',
        profile_banner_url:
          'https://pbs.twimg.com/profile_banners/17871814/1571490896',
        profile_link_color: 'B6B6B9',
        profile_sidebar_border_color: '000000',
        profile_sidebar_fill_color: '616161',
        profile_text_color: '000000',
        profile_use_background_image: true,
        has_extended_profile: false,
        default_profile: false,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'none'
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 110433,
      favorite_count: 266242,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'en'
    },
    is_quote_status: false,
    retweet_count: 110433,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    lang: 'en'
  },
  {
    created_at: 'Mon Feb 18 09:57:17 +0000 2019',
    id: 1097434870546976768,
    id_str: '1097434870546976768',
    text:
      'RT @farbodsaraf: This footage of a drone following a race looks like its from a video game https://t.co/hPwkPsxjcB',
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [
        {
          screen_name: 'farbodsaraf',
          name: 'Farbod Saraf',
          id: 256900512,
          id_str: '256900512',
          indices: [3, 15]
        }
      ],
      urls: [],
      media: [
        {
          id: 1096857748283760642,
          id_str: '1096857748283760642',
          indices: [91, 114],
          media_url:
            'http://pbs.twimg.com/ext_tw_video_thumb/1096857748283760642/pu/img/7bOsvmV2zFpKDWdL.jpg',
          media_url_https:
            'https://pbs.twimg.com/ext_tw_video_thumb/1096857748283760642/pu/img/7bOsvmV2zFpKDWdL.jpg',
          url: 'https://t.co/hPwkPsxjcB',
          display_url: 'pic.twitter.com/hPwkPsxjcB',
          expanded_url:
            'https://twitter.com/farbodsaraf/status/1096857778151395328/video/1',
          type: 'photo',
          sizes: {
            thumb: {
              w: 150,
              h: 150,
              resize: 'crop'
            },
            medium: {
              w: 712,
              h: 400,
              resize: 'fit'
            },
            large: {
              w: 712,
              h: 400,
              resize: 'fit'
            },
            small: {
              w: 680,
              h: 382,
              resize: 'fit'
            }
          },
          source_status_id: 1096857778151395328,
          source_status_id_str: '1096857778151395328',
          source_user_id: 256900512,
          source_user_id_str: '256900512'
        }
      ]
    },
    extended_entities: {
      media: [
        {
          id: 1096857748283760642,
          id_str: '1096857748283760642',
          indices: [91, 114],
          media_url:
            'http://pbs.twimg.com/ext_tw_video_thumb/1096857748283760642/pu/img/7bOsvmV2zFpKDWdL.jpg',
          media_url_https:
            'https://pbs.twimg.com/ext_tw_video_thumb/1096857748283760642/pu/img/7bOsvmV2zFpKDWdL.jpg',
          url: 'https://t.co/hPwkPsxjcB',
          display_url: 'pic.twitter.com/hPwkPsxjcB',
          expanded_url:
            'https://twitter.com/farbodsaraf/status/1096857778151395328/video/1',
          type: 'video',
          sizes: {
            thumb: {
              w: 150,
              h: 150,
              resize: 'crop'
            },
            medium: {
              w: 712,
              h: 400,
              resize: 'fit'
            },
            large: {
              w: 712,
              h: 400,
              resize: 'fit'
            },
            small: {
              w: 680,
              h: 382,
              resize: 'fit'
            }
          },
          source_status_id: 1096857778151395328,
          source_status_id_str: '1096857778151395328',
          source_user_id: 256900512,
          source_user_id_str: '256900512',
          video_info: {
            aspect_ratio: [89, 50],
            duration_millis: 13000,
            variants: [
              {
                bitrate: 256000,
                content_type: 'video/mp4',
                url:
                  'https://video.twimg.com/ext_tw_video/1096857748283760642/pu/vid/320x180/0obVbjSICdiW4tB6.mp4?tag=6'
              },
              {
                content_type: 'application/x-mpegURL',
                url:
                  'https://video.twimg.com/ext_tw_video/1096857748283760642/pu/pl/rWvrPpjrrig1eG5V.m3u8?tag=6'
              },
              {
                bitrate: 832000,
                content_type: 'video/mp4',
                url:
                  'https://video.twimg.com/ext_tw_video/1096857748283760642/pu/vid/712x400/rnbgbXJYg8p4WaYJ.mp4?tag=6'
              }
            ]
          },
          additional_media_info: {
            monetizable: false,
            source_user: {
              id: 256900512,
              id_str: '256900512',
              name: 'Farbod Saraf',
              screen_name: 'farbodsaraf',
              location: 'San Francisco - Amsterdam',
              description:
                "Open Source enthusiast, Previously co-founder @geteverboard YCombinator SUS17, @CanvasKeyboard Apple's 20 Under 20, Product at @Mobiquityinc",
              url: 'https://t.co/rglgYXJadd',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/rglgYXJadd',
                      expanded_url: 'https://farbodsaraf.com/links',
                      display_url: 'farbodsaraf.com/links',
                      indices: [0, 23]
                    }
                  ]
                },
                description: {
                  urls: []
                }
              },
              protected: false,
              followers_count: 34650,
              friends_count: 19327,
              listed_count: 1358,
              created_at: 'Thu Feb 24 09:04:34 +0000 2011',
              favourites_count: 127416,
              utc_offset: null,
              time_zone: null,
              geo_enabled: true,
              verified: false,
              statuses_count: 46123,
              lang: null,
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url:
                'http://abs.twimg.com/images/themes/theme9/bg.gif',
              profile_background_image_url_https:
                'https://abs.twimg.com/images/themes/theme9/bg.gif',
              profile_background_tile: false,
              profile_image_url:
                'http://pbs.twimg.com/profile_images/854703172841025537/0HaCebN__normal.jpg',
              profile_image_url_https:
                'https://pbs.twimg.com/profile_images/854703172841025537/0HaCebN__normal.jpg',
              profile_banner_url:
                'https://pbs.twimg.com/profile_banners/256900512/1501193552',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: null,
              follow_request_sent: null,
              notifications: null,
              translator_type: 'regular'
            }
          }
        }
      ]
    },
    source:
      '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 2810392484,
      id_str: '2810392484',
      name: '漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥',
      screen_name: 'rockwithhon',
      location: 'Wan Chai District, Hong Kong',
      description: '',
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 25,
      friends_count: 470,
      listed_count: 0,
      created_at: 'Mon Sep 15 01:00:02 +0000 2014',
      favourites_count: 225,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 103,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: '000000',
      profile_background_image_url:
        'http://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_image_url_https:
        'https://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_tile: false,
      profile_image_url:
        'http://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_image_url_https:
        'https://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_link_color: '007DFF',
      profile_sidebar_border_color: '000000',
      profile_sidebar_fill_color: '000000',
      profile_text_color: '000000',
      profile_use_background_image: false,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      following: null,
      follow_request_sent: null,
      notifications: null,
      translator_type: 'none'
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    retweeted_status: {
      created_at: 'Sat Feb 16 19:44:07 +0000 2019',
      id: 1096857778151395328,
      id_str: '1096857778151395328',
      text:
        'This footage of a drone following a race looks like its from a video game https://t.co/hPwkPsxjcB',
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: [],
        media: [
          {
            id: 1096857748283760642,
            id_str: '1096857748283760642',
            indices: [74, 97],
            media_url:
              'http://pbs.twimg.com/ext_tw_video_thumb/1096857748283760642/pu/img/7bOsvmV2zFpKDWdL.jpg',
            media_url_https:
              'https://pbs.twimg.com/ext_tw_video_thumb/1096857748283760642/pu/img/7bOsvmV2zFpKDWdL.jpg',
            url: 'https://t.co/hPwkPsxjcB',
            display_url: 'pic.twitter.com/hPwkPsxjcB',
            expanded_url:
              'https://twitter.com/farbodsaraf/status/1096857778151395328/video/1',
            type: 'photo',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              },
              medium: {
                w: 712,
                h: 400,
                resize: 'fit'
              },
              large: {
                w: 712,
                h: 400,
                resize: 'fit'
              },
              small: {
                w: 680,
                h: 382,
                resize: 'fit'
              }
            }
          }
        ]
      },
      extended_entities: {
        media: [
          {
            id: 1096857748283760642,
            id_str: '1096857748283760642',
            indices: [74, 97],
            media_url:
              'http://pbs.twimg.com/ext_tw_video_thumb/1096857748283760642/pu/img/7bOsvmV2zFpKDWdL.jpg',
            media_url_https:
              'https://pbs.twimg.com/ext_tw_video_thumb/1096857748283760642/pu/img/7bOsvmV2zFpKDWdL.jpg',
            url: 'https://t.co/hPwkPsxjcB',
            display_url: 'pic.twitter.com/hPwkPsxjcB',
            expanded_url:
              'https://twitter.com/farbodsaraf/status/1096857778151395328/video/1',
            type: 'video',
            sizes: {
              thumb: {
                w: 150,
                h: 150,
                resize: 'crop'
              },
              medium: {
                w: 712,
                h: 400,
                resize: 'fit'
              },
              large: {
                w: 712,
                h: 400,
                resize: 'fit'
              },
              small: {
                w: 680,
                h: 382,
                resize: 'fit'
              }
            },
            video_info: {
              aspect_ratio: [89, 50],
              duration_millis: 13000,
              variants: [
                {
                  bitrate: 256000,
                  content_type: 'video/mp4',
                  url:
                    'https://video.twimg.com/ext_tw_video/1096857748283760642/pu/vid/320x180/0obVbjSICdiW4tB6.mp4?tag=6'
                },
                {
                  content_type: 'application/x-mpegURL',
                  url:
                    'https://video.twimg.com/ext_tw_video/1096857748283760642/pu/pl/rWvrPpjrrig1eG5V.m3u8?tag=6'
                },
                {
                  bitrate: 832000,
                  content_type: 'video/mp4',
                  url:
                    'https://video.twimg.com/ext_tw_video/1096857748283760642/pu/vid/712x400/rnbgbXJYg8p4WaYJ.mp4?tag=6'
                }
              ]
            },
            additional_media_info: {
              monetizable: false
            }
          }
        ]
      },
      source: '<a href="https://buffer.com" rel="nofollow">Buffer</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 256900512,
        id_str: '256900512',
        name: 'Farbod Saraf',
        screen_name: 'farbodsaraf',
        location: 'San Francisco - Amsterdam',
        description:
          "Open Source enthusiast, Previously co-founder @geteverboard YCombinator SUS17, @CanvasKeyboard Apple's 20 Under 20, Product at @Mobiquityinc",
        url: 'https://t.co/rglgYXJadd',
        entities: {
          url: {
            urls: [
              {
                url: 'https://t.co/rglgYXJadd',
                expanded_url: 'https://farbodsaraf.com/links',
                display_url: 'farbodsaraf.com/links',
                indices: [0, 23]
              }
            ]
          },
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 34650,
        friends_count: 19327,
        listed_count: 1358,
        created_at: 'Thu Feb 24 09:04:34 +0000 2011',
        favourites_count: 127416,
        utc_offset: null,
        time_zone: null,
        geo_enabled: true,
        verified: false,
        statuses_count: 46123,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: '000000',
        profile_background_image_url:
          'http://abs.twimg.com/images/themes/theme9/bg.gif',
        profile_background_image_url_https:
          'https://abs.twimg.com/images/themes/theme9/bg.gif',
        profile_background_tile: false,
        profile_image_url:
          'http://pbs.twimg.com/profile_images/854703172841025537/0HaCebN__normal.jpg',
        profile_image_url_https:
          'https://pbs.twimg.com/profile_images/854703172841025537/0HaCebN__normal.jpg',
        profile_banner_url:
          'https://pbs.twimg.com/profile_banners/256900512/1501193552',
        profile_link_color: '0084B4',
        profile_sidebar_border_color: '000000',
        profile_sidebar_fill_color: '000000',
        profile_text_color: '000000',
        profile_use_background_image: false,
        has_extended_profile: true,
        default_profile: false,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null,
        translator_type: 'regular'
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 14667,
      favorite_count: 51710,
      favorited: false,
      retweeted: false,
      possibly_sensitive: false,
      lang: 'en'
    },
    is_quote_status: false,
    retweet_count: 14667,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    lang: 'en'
  },
  {
    created_at: 'Thu Feb 14 14:11:19 +0000 2019',
    id: 1096049249404444672,
    id_str: '1096049249404444672',
    text: 'Available now~ https://t.co/038hI0hNge',
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [],
      urls: [],
      media: [
        {
          id: 1096049235823185920,
          id_str: '1096049235823185920',
          indices: [15, 38],
          media_url: 'http://pbs.twimg.com/media/DzXy-Q2UUAARr_f.jpg',
          media_url_https: 'https://pbs.twimg.com/media/DzXy-Q2UUAARr_f.jpg',
          url: 'https://t.co/038hI0hNge',
          display_url: 'pic.twitter.com/038hI0hNge',
          expanded_url:
            'https://twitter.com/honlau555/status/1096049249404444672/photo/1',
          type: 'photo',
          sizes: {
            thumb: {
              w: 150,
              h: 150,
              resize: 'crop'
            },
            medium: {
              w: 1080,
              h: 1184,
              resize: 'fit'
            },
            small: {
              w: 620,
              h: 680,
              resize: 'fit'
            },
            large: {
              w: 1080,
              h: 1184,
              resize: 'fit'
            }
          }
        }
      ]
    },
    extended_entities: {
      media: [
        {
          id: 1096049235823185920,
          id_str: '1096049235823185920',
          indices: [15, 38],
          media_url: 'http://pbs.twimg.com/media/DzXy-Q2UUAARr_f.jpg',
          media_url_https: 'https://pbs.twimg.com/media/DzXy-Q2UUAARr_f.jpg',
          url: 'https://t.co/038hI0hNge',
          display_url: 'pic.twitter.com/038hI0hNge',
          expanded_url:
            'https://twitter.com/honlau555/status/1096049249404444672/photo/1',
          type: 'photo',
          sizes: {
            thumb: {
              w: 150,
              h: 150,
              resize: 'crop'
            },
            medium: {
              w: 1080,
              h: 1184,
              resize: 'fit'
            },
            small: {
              w: 620,
              h: 680,
              resize: 'fit'
            },
            large: {
              w: 1080,
              h: 1184,
              resize: 'fit'
            }
          }
        }
      ]
    },
    source:
      '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 2810392484,
      id_str: '2810392484',
      name: '漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥',
      screen_name: 'rockwithhon',
      location: 'Wan Chai District, Hong Kong',
      description: '',
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 25,
      friends_count: 470,
      listed_count: 0,
      created_at: 'Mon Sep 15 01:00:02 +0000 2014',
      favourites_count: 225,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 103,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: '000000',
      profile_background_image_url:
        'http://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_image_url_https:
        'https://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_tile: false,
      profile_image_url:
        'http://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_image_url_https:
        'https://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_link_color: '007DFF',
      profile_sidebar_border_color: '000000',
      profile_sidebar_fill_color: '000000',
      profile_text_color: '000000',
      profile_use_background_image: false,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      following: null,
      follow_request_sent: null,
      notifications: null,
      translator_type: 'none'
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    lang: 'en'
  },
  {
    created_at: 'Thu Feb 14 05:10:13 +0000 2019',
    id: 1095913076631597057,
    id_str: '1095913076631597057',
    text: 'Work so hard to get this far. Cant stop! GO for it~',
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [],
      urls: []
    },
    source:
      '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 2810392484,
      id_str: '2810392484',
      name: '漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥漢哥',
      screen_name: 'rockwithhon',
      location: 'Wan Chai District, Hong Kong',
      description: '',
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 25,
      friends_count: 470,
      listed_count: 0,
      created_at: 'Mon Sep 15 01:00:02 +0000 2014',
      favourites_count: 225,
      utc_offset: null,
      time_zone: null,
      geo_enabled: true,
      verified: false,
      statuses_count: 103,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: '000000',
      profile_background_image_url:
        'http://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_image_url_https:
        'https://abs.twimg.com/images/themes/theme1/bg.png',
      profile_background_tile: false,
      profile_image_url:
        'http://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_image_url_https:
        'https://pbs.twimg.com/profile_images/867234625017565184/kqSZ5s7i_normal.jpg',
      profile_link_color: '007DFF',
      profile_sidebar_border_color: '000000',
      profile_sidebar_fill_color: '000000',
      profile_text_color: '000000',
      profile_use_background_image: false,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      following: null,
      follow_request_sent: null,
      notifications: null,
      translator_type: 'none'
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 0,
    favorite_count: 0,
    favorited: false,
    retweeted: false,
    lang: 'en'
  }
]
