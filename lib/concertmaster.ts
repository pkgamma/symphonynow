async function concertmasterApi(endpoint: string) {
  const response = await fetch(`https://api.concertmaster.app/${endpoint}`);
  const data = await response.json();
  return data;
}

// <If "%{HTTP_HOST} == 'api.concertmaster.local'">
// Header set Access-Control-Allow-Origin "*"
// </If>
// AddType 'application/json' .json
// FileETag None
// Header unset ETag
// #Header set Cache-Control "max-age=0, no-cache, no-store, must-revalidate"
// Header set Cache-Control "max-age=3600, public"
// Header set Pragma "no-cache"
// Header set Expires "Wed, 11 Jan 1984 05:00:00 GMT"

// <IfModule mod_rewrite.c>
// RewriteEngine on

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule recording/list/work/(.*)/(.*)/(.*).json dyn/recording/list.phtml?id=$1&offset=$3&extra=$2 [B,L]

export async function getRecordingByWorkID(id: number) {
  const endpoint = `/recording/list/work/${id}/0.json`;
  return await concertmasterApi(endpoint);
}

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule recording/list/work/(.*)/(.*).json dyn/recording/list.phtml?id=$1&offset=$2 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule recording/(.*)/list/work/(.*)/(.*)/(.*).json dyn/recording/list.phtml?id=$2&offset=$4&market=$1&extra=$3 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule recording/(.*)/list/work/(.*)/(.*).json dyn/recording/list.phtml?id=$2&offset=$3&market=$1 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule recording/list/abridged/work/(.*)/(.*).json dyn/recording/list.phtml?id=$1&offset=$2&limitpage=1 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule recording/detail/work/(.*)/album/(.*)/(.*).json dyn/recording/detail.phtml?wid=$1&aid=$2&set=$3 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule recording/(.*)/detail/work/(.*)/album/(.*)/(.*).json dyn/recording/detail.phtml?wid=$2&aid=$3&set=$4&market=$1 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule recording/shorturl/work/(.*)/album/(.*)/(.*).json dyn/recording/shorten.phtml?wid=$1&aid=$2&set=$3 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule recording/unshorten/(.*).json dyn/recording/unshorten.phtml?rid=$1 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule recording/list/playlist/(.*).json dyn/recording/playlist.phtml?id=$1 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule recording/(.*)/list/playlist/(.*).json dyn/recording/playlist.phtml?market=$1&id=$2 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule recording/random/playlist/(.*).json dyn/recording/random.phtml?id=$1 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule recording/(.*)/random/playlist/(.*).json dyn/recording/random.phtml?market=$1&id=$2 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule user/(.*)/recording/fav.json dyn/user/recording/fav.phtml?id=$1 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule user/(.*)/recording/recent.json dyn/user/recording/recent.phtml?id=$1 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule user/(.*)/lists.json dyn/user/lists.phtml?id=$1 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule user/(.*)/composer/fav.json dyn/user/composer/fav.phtml?id=$1 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule user/(.*)/composer/(.*)/work/fav.json dyn/user/work/fav.phtml?uid=$1&cid=$2 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule user/(.*)/composer/(.*)/work/fav/search/(.*).json dyn/user/work/fav.phtml?uid=$1&cid=$2&search=$3 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule album/(.*)/detail/(.*).json dyn/album/detail.phtml?aid=$2&market=$1 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule omnisearch/(.*)/(.*)/(.*).json dyn/omnisearch/list.phtml?market=$1&search=$2&offset=$3 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule omnisearch/(.*)/(.*).json dyn/omnisearch/list.phtml?search=$1&offset=$2 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule freesearch/(.*)/(.*)/(.*).json dyn/freesearch/list.phtml?market=$1&search=$2&offset=$3 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule freesearch/(.*)/(.*).json dyn/freesearch/list.phtml?search=$1&offset=$2 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule search/(.*)/(.*)/(.*).json dyn/search/list.phtml?market=$1&search=$2&offset=$3 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule search/(.*)/(.*).json dyn/search/list.phtml?search=$1&offset=$2 [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule recording/list/recent.json recording/list/playlist/141.json [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule playlist/public/list.json dyn/playlist/list.phtml [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule newreleases/list.json dyn/newreleases/list.phtml [B,L]

// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule recording/list/trending.json dyn/recording/trending.phtml [B,L]
// </IfModule>
