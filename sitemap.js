const xml2js = require('xml2js');
const builder = new xml2js.Builder();
const fs = require('fs');

const urls = ["https://fjs-fire.com/"];
const date = new Date().toISOString();


const sitemap = {
  urlset:{
    $:{
      "xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9"
    },
    url:[]
  }
};

urls.forEach(
  (v)=>{
    sitemap.urlset.url.push({
      loc:v,
      priority:'1.0',
      lastmod:date,
      changefreq:'daily'
    })
  }
);


var xml = builder.buildObject(sitemap);
fs.writeFileSync('./public/sitemap.xml',xml,(err)=>{
    if(err) console.log(err);
  });



// <?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

// <!--  created with free sitemap generation system www.sitemapxml.jp  --> 
// <url>
//   <loc>https://www.fjs-fire.com/</loc>
//   <priority>1.0</priority>
//   <lastmod>2022-11-14T10:37:53+09:00</lastmod>
//   <changefreq>daily</changefreq>
// </url>

// </urlset>