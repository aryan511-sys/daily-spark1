import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "Asian News International",
      title:
        "Sachin Tendulkar's Glorious Post For Rohit Sharma, Virat Kohli On T20I Retirement - NDTV Sports",
      description:
        "Legendary Indian cricketer Sachin Tendulkar on Sunday extended his congratulations to star batters Rohit Sharma and Virat Kohli, who concluded their T20I career on a high.",
      url: "https://sports.ndtv.com/t20-world-cup-2024/sachin-tendulkars-glorious-post-for-rohit-sharma-virat-kohli-on-t20i-retirement-6002810",
      urlToImage:
        "https://c.ndtvimg.com/2024-06/hol6p6o_virat-kohli-rohit-sharma-afp_625x300_30_June_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
      publishedAt: "2024-07-01T04:58:27Z",
      content:
        "Legendary Indian cricketer Sachin Tendulkar on Sunday extended his congratulations to star batters Rohit Sharma and Virat Kohli, who concluded their T20I career on a high with a T20 World Cup title w… [+3332 chars]",
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "BJP Alleges Rahul Gandhi Insulted Hindus, He Responds With RSS Jab - NDTV",
      "description": "The BJP - led by PM Modi, Home Minister Amit Shah, and Defence Minister Rajnath Singh - hit back strongly to Rahul Gandhi's speech in Parliament on Monday afternoon, accusing the Congress MP of insulting all Hindus.",
      "url": "https://www.ndtv.com/india-news/pm-narendra-modi-rahul-gandhi-lok-sabha-bjp-rss-not-entire-hindu-community-rahul-gandhi-vs-pm-in-lok-sabha-6008976",
      "urlToImage": "https://c.ndtvimg.com/2024-07/1lg2cvqg_pm-modi-rahul-gandhi-650-_650x400_01_July_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240615.100",
      "publishedAt": "2024-07-01T10:19:27Z",
      "content": "New Delhi: The Bharatiya Janata Party - led by Prime Minister Narendra Modi, Home Minister Amit Shah, and Defence Minister Rajnath Singh - hit back strongly to Rahul Gandhi's speech in Parliament on … [+4224 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TOI Business Desk",
      "title": "Stock market today: BSE Sensex closes 443 points up near 79,500 level; Nifty50 ends above 24,100 - The Times of India",
      "description": "India Business News: Stock market today: BSE Sensex and Nifty50, the Indian equity benchmark indices, soared in trade on Monday to resume their bull run. While BSE Sensex",
      "url": "https://timesofindia.indiatimes.com/business/india-business/stock-market-today-bse-sensex-nifty50-july-1-2024-dalal-street-indian-equities-global-markets/articleshow/111392229.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-111392587,width-1070,height-580,imgsize-83112,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2024-07-01T10:13:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Gadgets360.com"
      },
      "author": "Akash Dutta, Siddharth Suvarna",
      "title": "Apple Could Soon Launch AirPods With Cameras: Ming-Chi Kuo - Gadgets 360",
      "description": "Apple is reportedly working on new AirPods that will come equipped with cameras. These new AirPods will feature infrared radiation (IR) cameras, similar to the ones integrated with the iPhone Face ID receiver. It is said that the new true wireless stereo (TWS…",
      "url": "https://www.gadgets360.com/audio/news/apple-airpods-camera-spatial-audio-launch-ming-chi-kuo-report-6008972",
      "urlToImage": "https://i.gadgets360cdn.com/large/airpods_unsplash_1719824984554.jpg",
      "publishedAt": "2024-07-01T09:39:57Z",
      "content": "Apple is reportedly working on new AirPods that will come equipped with cameras. These new AirPods will feature infrared radiation (IR) cameras, similar to the ones integrated with the iPhone Face ID… [+2041 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "Trinamool's Saket Gokhale Told To Pay Rs 50 Lakh Damages In Defamation Case - NDTV",
      "description": "The Delhi High Court today directed Trinamool Congress leader and Rajya Sabha MP, Saket Gokhale, to pay Rs 50 lakh in damages in a defamation case filed by former diplomat Lakshmi Puri.",
      "url": "https://www.ndtv.com/india-news/trinamools-saket-gokhale-ordered-by-delhi-high-court-to-pay-rs-50-lakh-damages-in-defamation-case-6009145",
      "urlToImage": "https://c.ndtvimg.com/2022-12/dho8qut_saket-gokhale-trinamool_625x300_06_December_22.jpg",
      "publishedAt": "2024-07-01T09:32:08Z",
      "content": "The legal battle stems from tweets made Mr Gokhale on June 13 and June 26 in 2021.\r\nNew Delhi: The Delhi High Court today directed Trinamool Congress leader and Rajya Sabha MP, Saket Gokhale, to pay … [+1863 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Livemint",
      "title": "NASA shares 10 majestic images of star factories and other wonders in space | See photos | Mint - Mint",
      "description": "NASA images: The US space agency keeps sharing images captured from high-resolution telescopes like Hubble and James Webb to give people a glimpse of space. Here are 10 majestic images, mostly of star-forming regions and supernova remnants.",
      "url": "https://www.livemint.com/science/news/nasa-shares-10-majestic-images-of-star-factories-and-other-wonders-in-space-see-photos-11719821867027.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2024/07/01/1600x900/GiganticJets_Xuanhua_2048_1719384143734_1719822697479.jpg",
      "publishedAt": "2024-07-01T09:23:17Z",
      "content": "The mysterious world of space has intrigued humans for ages. As scientists continue to make discoveries in space, the quest to find answers to unexplained mysteries continues. To introduce common peo… [+4212 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investing.com"
      },
      "author": "Investing.com India",
      "title": "Zika virus majorly asymptomatic, identical to dengue fever: Experts By IANS - Investing.com India",
      "description": null,
      "url": "https://in.investing.com/news/general-news/zika-virus-majorly-asymptomatic-identical-to-dengue-fever-experts-4283872",
      "urlToImage": null,
      "publishedAt": "2024-07-01T08:50:26Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "India Today"
      },
      "author": "India Today Health Desk",
      "title": "Rise in dengue fever after monsoon rains: What precautions to take - India Today",
      "description": "Dengue cases surge in India as rains and humidity create ideal conditions for mosquito breeding",
      "url": "https://www.indiatoday.in/health/story/rise-in-dengue-fever-after-monsoon-rains-what-precautions-to-take-2560628-2024-07-01",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/mosquito-bites-on-the-hand-013229630-16x9_0.jpg?VersionId=_Dgs2wGNsH3FfLZybr6I5Yd7.xiLJJEg",
      "publishedAt": "2024-07-01T08:29:00Z",
      "content": "The rains in several parts of India have given rise to dengue cases. The mosquito-borne disease witnesses a seasonal uptick as soon as humidity levels surge. \r\nDengue, typically lasting for 8 to 10 d… [+2235 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Moneycontrol"
      },
      "author": "Moneycontrol News",
      "title": "NTR Bharosa: Andhra Pradesh CM Chandrababu Naidu launches distribution of hiked pensions - Moneycontrol",
      "description": "Andhra Pradesh Chief Minister N Chandrababu Naidu launched the distribution of the 'NTR Bharosa' pension scheme on Monday.Under the revised scheme, pension for the senior citizens has been increased from Rs 3,000 to Rs 4,000 under the government’s NTR Bharosa…",
      "url": "https://www.moneycontrol.com/news/india/andhra-pradesh-ntr-bharosa-scheme-cm-chandrababu-naidu-launches-distribution-of-hiked-pensions-12759612.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/07/20240701081701_naidu.jpg",
      "publishedAt": "2024-07-01T08:17:40Z",
      "content": "Andhra Pradesh Chief Minister N Chandrababu Naidu launched the distribution of the 'NTR Bharosa' pension scheme on Monday.\r\nNaidu launched the distribution among the beneficiaries at Penumaka village… [+1377 chars]"
    },
    {
      "source": {
        "id": "google-news",
        "name": "Google News"
      },
      "author": "The Times of India",
      "title": "Focus on 'nyay' instead of 'dand': Amit Shah details 3 new criminal laws - The Times of India",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMihwFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9pbmRpYS9mb2N1cy1vbi1ueWF5LWluc3RlYWQtb2YtZGFuZC1hbWl0LXNoYWgtZGV0YWlscy0zLW5ldy1jcmltaW5hbC1sYXdzL2FydGljbGVzaG93LzExMTM5OTM3MS5jbXPSAYsBaHR0cHM6Ly90aW1lc29maW5kaWEuaW5kaWF0aW1lcy5jb20vaW5kaWEvZm9jdXMtb24tbnlheS1pbnN0ZWFkLW9mLWRhbmQtYW1pdC1zaGFoLWRldGFpbHMtMy1uZXctY3JpbWluYWwtbGF3cy9hbXBfYXJ0aWNsZXNob3cvMTExMzk5MzcxLmNtcw?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-07-01T07:58:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "\"Matter Of Dignity\": Lok Sabha Speaker On Opposition's 'Mic Muted' Charge - NDTV",
      "description": "Lok Sabha Speaker Om Birla on Monday said the presiding officers do not have any switch or remote control to turn off the microphones of members raising issues in the House.",
      "url": "https://www.ndtv.com/india-news/lok-sabha-speaker-om-birla-says-chair-has-no-switch-to-turn-off-mics-6008262",
      "urlToImage": "https://c.ndtvimg.com/2024-07/v84r6fj_om-birla-pti-_625x300_01_July_24.jpeg?ver-20240615.100",
      "publishedAt": "2024-07-01T07:40:39Z",
      "content": "Om Birla said presiding officers don't have any switch to turn off microphones of members.\r\nNew Delhi: Lok Sabha Speaker Om Birla on Monday said the presiding officers do not have any switch or remot… [+1551 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT News Desk",
      "title": "NIA allows Engineer Rashid take oath as MP, Delhi court to give order tomorrow - Hindustan Times",
      "description": "Engineer Rashid could not take oath as a member of the 18th Lok Sabha on June 24 despite his name being called as he has been lodged in jail since 2019. | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/nia-allows-engineer-rashid-take-oath-as-mp-delhi-court-to-give-order-tomorrow-101719814375001.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/07/01/1600x900/-p-As-new-MPs-take-oath--Kashmir-leaders-call-for-_1719818696666_1719818707297.jpg",
      "publishedAt": "2024-07-01T07:28:17Z",
      "content": "The National Investigation Agency or NIA gave consent for jailed Kashmiri leader Sheikh Abdul Rashid, known as Engineer Rashid, to take oath as a Lok Sabha member on July 25, ahead of the Delhi court… [+1895 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Moneycontrol"
      },
      "author": "Moneycontrol News",
      "title": "Who is Marine Le Pen, far-right French presidential candidate who dealt a blow to Macron - Moneycontrol",
      "description": "Marine Le Pen's party National Rally has registered a resounding victory in the first round of th country’s snap parliamentary elections, dealing a big blow to French President Emmanuel Macron.Le Pen's far-right party is likely to win about 34% of the votes w…",
      "url": "https://www.moneycontrol.com/news/world/who-is-marine-le-pen-far-right-french-presidential-candidate-who-dealt-a-blow-to-macron-12759508.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/07/20240701071930_le-pen.jpg",
      "publishedAt": "2024-07-01T07:26:10Z",
      "content": "French presidential candidate Marine Le Pen's party National Rally has registered a resounding victory in the first round of th countrys snap parliamentary elections, dealing a big blow to French Pre… [+2361 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TOI Entertainment Desk",
      "title": "Arjun Kapoor shares a cryptic post on 'Pain' amid break-up rumors with Malaika Arora - TOI Etimes",
      "description": "Arjun Kapoor has shared a cryptic post amid rumors that he and his longtime girlfriend, Malaika Arora, ended their relationship.",
      "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/arjun-kapoor-shares-a-cryptic-post-on-pain-amid-break-up-rumors-with-malaika-arora/articleshow/111398037.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-111398037,width-1070,height-580,imgsize-84802,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2024-07-01T07:17:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "India Today"
      },
      "author": "India Today Entertainment Desk",
      "title": "'Kalki' Hindi box office collection: Prabhas's 4th winner in Rs 100 crore club - India Today",
      "description": "039Kalki 2898 AD039 has collected Rs 100 crore with its Hindi version alone The overall India business of the Prabhas-starrer after its opening weekend stands at Rs 309 crore",
      "url": "https://www.indiatoday.in/movies/regional-cinema/story/kalki-2898-ad-hindi-box-office-collection-updare-prabhas-4th-winner-in-rs-100-crore-club-2560609-2024-07-01",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/kalki-2898-ad-hindi-version-crosses-rs-100-crore-01074249-16x9_0.jpg?VersionId=VHatzINbExjBVr05Bh7DGrjlKwpHUrHZ",
      "publishedAt": "2024-07-01T07:14:44Z",
      "content": "'Kalki 2898 AD' has crossed the benchmark of Rs 300 crore in its first weekend in India. The film has enroled itself into the coveted Rs 500-crore club worldwide, and has collected Rs 100 crore nett … [+2052 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Greatandhra.com"
      },
      "author": "IANS",
      "title": "Telangana HC dismisses KCR's petition against Judicial Commission - Greatandhra",
      "description": "In a setback to former Chief Minister K. Chandrasekhar Rao, the Telangana High Court on Monday dismissed his writ petition seeking direction to stay proceedings of Justice L. Narasimha Reddy Commission constituted by the Congress to probe into Power Purchase …",
      "url": "https://www.greatandhra.com/politics/telangana-news/setback-to-kcr-as-hc-upholds-judicial-probe-138890",
      "urlToImage": "https://www.greatandhra.com/newphotos10/kcr_131719816609.jpg",
      "publishedAt": "2024-07-01T07:12:03Z",
      "content": "In a setback to former Chief Minister K. Chandrasekhar Rao, the Telangana High Court on Monday dismissed his writ petition seeking direction to stay proceedings of Justice L. Narasimha Reddy Commissi… [+2434 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "Deeksha Somani",
      "title": "Garena Free Fire MAX redeem codes for July 1: Win diamonds, weapons, skins, and more rewards - The Times of India",
      "description": "GAMING News: Garena Free Fire Max, the popular battle royale game in India, offers exclusive redemption codes for daily rewards. With impressive graphics and immer",
      "url": "https://timesofindia.indiatimes.com/technology/gaming/garena-free-fire-max-redeem-codes-for-july-1-win-diamonds-weapons-skins-and-more-rewards/articleshow/111396109.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-111396075,width-1070,height-580,imgsize-73618,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2024-07-01T06:14:00Z",
      "content": "Garena Free Fire Max, the popular battle royale game in India, offers exclusive redemption codes for daily rewards. With impressive graphics and immersive gameplay, players can unlock sought-after we… [+1554 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT News Desk",
      "title": "Arvind Kejriwal moves Delhi high court against arrest by CBI - Hindustan Times",
      "description": "He approached the court over the case registered by the Central Bureau of Investigation. | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/arvind-kejriwal-moves-delhi-high-court-against-arrest-by-cbi-101719812929418.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/07/01/1600x900/ANI-20240629168-0_1719813023681_1719813033599.jpg",
      "publishedAt": "2024-07-01T05:49:16Z",
      "content": "Delhi chief minister Arvind Kejriwal moved the Delhi high court on Monday, challenging his arrest by the Central Bureau of Investigation (CBI) in the excise policy case.\r\nDelhi chief minister Arvind … [+2319 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "The Indian Express",
      "title": "Hurricane Beryl delays Team India’s departure from Barbados - The Indian Express",
      "description": null,
      "url": "https://indianexpress.com/article/sports/cricket/hurricane-beryl-delays-team-indias-departure-from-barbados-9425654/",
      "urlToImage": null,
      "publishedAt": "2024-07-01T05:46:34Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "CNBCTV18"
      },
      "author": "https://www.cnbctv18.com",
      "title": "June Auto Sales LIVE Updates — M&M PV sales jump 23%, tractor sales cross 47,000 units - CNBCTV18",
      "description": "June Auto Sales: On a month-on-month basis, the commercial vehicle segment is likely to grow in single-digits, while the tractor business may see some recovery compared to the month of May.",
      "url": "https://www.cnbctv18.com/market/june-auto-sales-live-updates-pv-cv-suv-maruti-mahindra-tamo-tvs-share-price-19436084.htm",
      "urlToImage": "https://images.cnbctv18.com/uploads/2023/09/cars.jpg?im=FitAndFill,width=500,height=300",
      "publishedAt": "2024-07-01T05:37:48Z",
      "content": "Auto companies will begin announcing their sales updates for the month of June starting today.As the monsoon season rolls in, June auto sales numbers are expected to be subdued. Historically, car sal… [+4045 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "India Today"
      },
      "author": "India Today Sports Desk",
      "title": "Hardik Pandya to replace Rohit Sharma as T20I captain? BCCI secretary Jay Shah opens up - India Today",
      "description": "After Rohit Sharma retired from T20Is following the T20 World Cup India are in with a task of selecting the national skipper Hardik Pandya is one of the contenders to take over from Rohit",
      "url": "https://www.indiatoday.in/sports/cricket/story/hardik-pandya-rohit-sharma-t20i-captain-bcci-secretary-jay-shah-2560554-2024-07-01",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/indias-hardik-pandya-012144306-16x9_0.jpg?VersionId=S6ERBfVNPGTaccvrK9vgqxT5RQid1H1g",
      "publishedAt": "2024-07-01T05:25:08Z",
      "content": "BCCI secretary Jay Shah opened up on the chances of Hardik Pandya replacing Rohit Sharma as the full-time skipper of the Indian team. On Saturday, Rohit decided to retire from T20Is after India won t… [+1548 chars]"
    }
    
    
  ];

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=2b6a1cf8ee114bce916ad187e77bddd3";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles});
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Today's Head Lines</h1>
        <div className="row">
          {this.state.articles.map(
            (element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title? element.title.slice(0,55) : ""} description={element.description ? element.description.slice(0 ,88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
