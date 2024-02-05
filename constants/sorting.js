module.exports = {
  BATCH_SORTED_FIELD: ['title', 'createdAt'],
  SEARCH_PHRASES_SORTED_FIELD: ['query', 'count', 'updatedAt'],
  SITE_CONTENT_SORTED_FIELDS: ['createdAt', 'title'],
  CATEGORIES_SORTED_FIELDS: ['createdAt', 'name'],
  ALL_USERS_SORTED_FIELDS: ['userName', 'role', 'email', 'createdAt', 'fullName', 'updatedAt'],
  PROMO_CODES_SORTED_FIELDS: [
    'promoCode',
    'type',
    'used',
    'months',
    'wasUsed',
    'createdAt',
    'updatedAt',
    'usedByUser.name',
    'tokenPrice',
  ],
  PROMO_CODES_DETAILS_USER_SORTED_FIELDS: ['fullName', 'userName', 'email', 'dateUsed'],
  PROMO_CODES_DASHBOARD_SORTED_FIELDS: ['user.userName', 'user.email', 'createdAt'],
  NEWS_LETTERS_SORTED_FIELDS: ['createdAt', 'updatedAt', 'name', 'type'],
  CATEGORY_GENRE_SORTED_FIELDS: ['value', 'createdAt', 'updatedAt'],
  MERCH_SORTED_FIELDS: ['name', 'type', 'default', 'artistsName', 'createdAt', 'updatedAt'],
  STUDIO_SORTED_FIELDS: [
    'name',
    'totalViews',
    'price',
    'private',
    'title',
    'coins',
    'endAt',
    'sourceType',
    'views',
    'onlineTV',
    'createdAt',
    'updatedAt',
  ],
  CLOTHES_SORTED_FIELDS: ['title', 'typeAccess', 'enable', 'color', 'createdAt', 'updatedAt'],
  RIDES_SORTED_FIELDS: ['title', 'typeAccess', 'enable', 'color', 'createdAt', 'updatedAt'],
  FEED_SORTED_FIELDS: ['admin.fullName', 'event', 'entity', 'title', 'entityId', 'time'],
  FEED_PAGES_SORTED_FIELDS: ['admin.fullName', 'page', 'time'],
  ANIMATIONS_SORTED_FIELDS: ['title', 'typeAccess', 'enable', 'createdAt', 'updatedAt'],
  CLOTHES_ABILITY_SORTED_FIELDS: [
    'title',
    'internalName',
    'online',
    'isPrivate',
    'createdAt',
    'updatedAt',
  ],
  ROOMS_SORTED_FIELDS: [
    'title',
    'typeAccess',
    'externalId',
    'contentCount',
    'initialRoom',
    'createdAt',
    'updatedAt',
    'enable',
    'airdrops.online',
    'isMultiplayer',
  ],
  ROOMS_AIRDROP_USER: [
    'userName',
    'fullName',
    'email',
    'BSCWalletAddress',
    'collected',
    'transferred',
  ],
  REDIRECTS_SORTED_FIELDS: ['source', 'destination', 'createdAt', 'updatedAt'],
  BLOG_SORTED_FIELDS: ['title', 'status', 'featured', 'views', 'createdAt', 'updatedAt'],
  EMAILS_SORTED_FIELDS: ['id', 'email', 'userName', 'ip_address', 'createdAt', 'updatedAt'],
  CHANNELS_SORTED_FIELDS: [
    'title',
    'type',
    'allVideosOnlineCount',
    'allVideosCount',
    'online',
    'coins',
    'likesCount',
    'createdAt',
    'updatedAt',
    'likes',
    'views',
    'popularity',
  ],
  LIVE_TV_SORTED_FIELDS: [
    'title',
    'updatedAt',
    'onlineTV',
    'private',
    'coins',
    'sourceType',
    'startAt',
    'endAt',
    'createdAt',
    'views',
  ],
  SUBSCRIBER_SORTED_FIELD: [
    'firstName',
    'lastName',
    'email',
    'createdAt',
    'source',
    'ip_address', // cringe, but ok
  ],
  PACKAGE_SORTED_FIELD: ['name', 'createdAt', 'updatedAt', 'price'],
  ARTIST_SORTED_FIELD: [
    'name',
    'fbTotal',
    'insTotal',
    'twiTotal',
    'netTotal',
    'featured',
    'likesCount',
    'totalVideoTVLikes',
    'totalVideoTVWatched',
    'totalVideoTVPopularity',
    'updatedAt',
  ],
  PERMISSIONS_SORTED_FIELDS: ['name', 'createdAt', 'updatedAt'],
  PURCHASE_PACKAGE_SORTED_FIELD: [
    'createdAt',
    'userName',
    'fullName',
    'purchasePackageName',
    'amount',
  ],
  EVENT_SORTED_FIELDS: [
    'title',
    'sourceType',
    'coins',
    'watchedCount',
    'allWatchedCount',
    'timeStart',
    'singlePurchasesCount',
    'subscriptionsCount',
    'revenue',
  ],
  EVENT_USERS_SORTED_FIELDS: ['BSCWalletAddress', 'userName', 'email', 'coins', 'watchedDate'],
  FILES_SORTED_FIELDS: [
    'creator.fullName',
    'creator.email',
    'filterParams.start',
    'filterParams.end',
    'filterParams.search',
    'processTime',
    'createdAt',
    'status',
  ],
  DASHBOARD_ALL_CONTENT: [
    /* Complex aggregation used, most of schema field names are re-mapped in aggregation */
    'popularity',
    'actor.name',
    'urlId',
    'contentType',
    'title',
    'creator.fullName',
    'likesCount',
    'weeklyLikes',
    'views',
    'weeklyViews',
    'onlineTV',
  ],
  WALLETS_INFO_SORTED_FIELDS: ['userName', 'balanceBNB', 'BSCTokens', 'createdAt'],
  DASHBOARD_PURCHASES: [
    'email',
    'userName',
    'type',
    'createdAt',
    'title',
    'coins',
    'amount',
    'store',
    'status',
    'tokenPrice',
  ],
  DASHBOARD_USER_PURCHASES: [
    'transactionId',
    'createdAt',
    'dateStart',
    'dateEnd',
    'type',
    'amount',
    'tokenPrice',
    'active',
    'status',
  ],
  DASHBOARD_USER_SUBSCRIPTIONS: ['transactionId', 'type', 'dateEnd', 'active', 'updatedAt'],
  DASHBOARD_TRENDING: [
    'title',
    'private',
    'contentType',
    'weeklyViews',
    'weeklyLikes',
    'weeklyPopularity',
  ],
  CLOTHES_SETTING_SORTED_FIELDS: ['label', 'createdAt', 'updatedAt'],
  VENUE_WEBLINKS_SORTED_FIELDS: ['url', 'createdAt', 'updatedAt'],
};
