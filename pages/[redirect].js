import { useEffect } from "react";

const RedirectLinks = {
  "/wg": "https://near.social/#/neardigitalcollective.near/widget/NDCDocs_OneArticle?articleId=workgroups&blockHeight=94330352&lastEditor=blaze.near",
  "/docs": "https://near.social/#/neardigitalcollective.near/widget/NDCDocs",
  "/office-hours": "https://near.social/#/neardigitalcollective.near/widget/OfficeHours",
  "/funding": "https://near.social/#/frichard5.near/widget/NDC-alldaos_overview",
  "/poll": "https://near.org/easypoll-v0.ndc-widgets.near/widget/EasyPoll",
  "/twitter": "https://twitter.com/neardc",
  "/home": "https://near.social/#/mattb.near/widget/NDC.Views.Home",
  "/devhub": "https://near.social/#/devgovgigs.near/widget/gigs-board.pages.community.activity?handle=ndc",
  "/og-application": "https://docs.google.com/forms/d/e/1FAIpQLSfQ80mza1ssDRuEkjTl61ty0ORxm23whmwBDlaxWHjodTiz-w/viewform",
  "/updates": "https://near.social/#/sayalot.near/widget/SayALot",
  "/brand": "https://drive.google.com/drive/folders/1AIg5DimA_Tlj0cGXAuZyJmGlBbc5UpvY?usp=sharing",
  "/gov-ops": "https://docs.google.com/document/d/14ppp0QoMUM5WklO5HJsn7cRltw7kDdsP1iAcEMJTRxE/edit?usp=sharing",
  "/gigs": "https://near.social/#/neardigitalcollective.near/widget/Gigs",
  "/gigs-kyc": "https://airtable.com/shrWyGUWWQFcNMrId",
  "/election-contract": "",
  "/voting-contract": "",
  "/vote": "",
  "/nominate": "https://near.org/nomination.ndctools.near/widget/NDC.Nomination.Page",
  "/verified-humans": "",
  "/trust": "",
  "/github": "https://github.com/near-ndc",
  "/tech": "https://t.me/+zm-lGZhkVcNjMjEx",
  "/refi": "https://NEAReFI.org/telegram",
  "/framework": "https://t.me/+U0ywDvAAgTljMTQx",
  "/ai": "https://t.me/+rO5rtl5zAnI1NTY5",
  "/kyc": "https://t.me/+EjANBtB0TYlmMzQx",
  "/rc": "https://t.me/+bSbtaui5HlUwYzUx",
  "/startup": "https://t.me/+YKOQc1O4XJxlYWM5",
  "/mods": "https://t.me/+RjIksh_d7OcwMmI1",
  "/transparency": "https://t.me/+f9k6zkvC8cVlNGNh",
  "/merit": "https://t.me/+fkHgIrbY_TtmMDZh",
  "/community-events": "https://t.me/+REBhhF3Voes5NDhh",
  "/events": "https://t.me/+REBhhF3Voes5NDhh",
  "/gaming": "https://t.me/+QM6OtCRhcUdiYjhh",
  "/nft": "https://t.me/+i3GC2WYx5b5hMThh",
  "/defi": "https://t.me/+50ySHiGjLn04M2Rh",
  "/degen": "https://t.me/+KCCfcYe-IKI2ZjEx",
  "/freelancer": "https://t.me/+wqRNryKvg3AwMDdk",
  "/telegram": "https://t.me/+fcNhYGxK891lMjMx",
  "/discord": "https://discord.gg/4EZ6tW5Ctx",
  "/og-apply": "https://docs.google.com/forms/d/e/1FAIpQLSfQ80mza1ssDRuEkjTl61ty0ORxm23whmwBDlaxWHjodTiz-w/viewform",
  "/jobs": "https://careers.near.org/companies/near-digital-collective-ndc?q=ndc#content",
  "/leaderboard": "https://i-am-human.app/community-scoreboard",
  "/e2e-nominate": "https://docs.google.com/spreadsheets/d/1euTAtVGLB-3fnqp-VE5yI70l3Yb4ebqycqn_qV9qmSY/edit#gid=1640210743",
  "/wg-combinator": "https://docs.google.com/document/d/1dLZiEUwFUSgYprJeJ-UzHCtp00ml-Sz9bLCDWWVhhi0/edit?usp=sharing",
  "/sbt-viewer-figma": "https://www.figma.com/file/DYD5EQyzJD2Aj1NMN2g47E/NDC-SBT-Inspiration?type=design&node-id=0%3A1&mode=design&t=NxtqzXHmW5lpTi5D-1",
  "/wg-directory-figma": "https://www.figma.com/file/LxPBkTAfRF8qXC0gnQwLfA/NDC-WG-Directory-Inspiration?type=design&node-id=0%3A1&mode=design&t=5wrOxGvuQciPqZQg-1",
  "/sbt-minter-figma": "https://www.figma.com/file/A7RpkKAKFY7CQMbE7qcxFE/NDC-SBT-Minter-Inspiration?type=design&node-id=0%3A1&mode=design&t=H3p2Q7r8088wrudh-1",
  "/e2e-nominate-instructions": "https://docs.google.com/document/d/1nRi0B9vPvOgS4STxhStMF3mOT2CkDwoO-aGoGYa_mF0/edit?usp=sharing",
  "/declaration-of-transparency": "https://bafkreiarbw2noibmrvb2zexgsgbff23lhe5dzwjdepglsad3rp6fhvbhua.ipfs.nftstorage.link/",
  "/testing-apply": "https://airtable.com/shrg5UxcE8VXLon4n",
  "/human": "https://i-am-human.app/",
  "/blog": "https://medium.com/@neardigitalcollective",
  "/medium": "https://medium.com/@neardigitalcollective",
  "/gigs-process": " https://miro.com/app/board/uXjVMMaCkmk=/",
"/product-feedback": "https://near-digital-collective.canny.io/bugs-and-feature-requests",
"/bounty-request": "https://airtable.com/shrQKlzVFjxEAqtSK",
"/gig-rebrand" : "",
"/gig-sbt-viewer" : "",
"/gig-fund-design": "https://near.social/#/neardigitalcollective.near/widget/Gigs_OneArticle?articleId=community-fund&blockHeight=97329080&lastEditor=ndcplug.near",
"/gig-office-hours" : "",
"/gig-user-activity" : "",
"/gig-contributors" : "",
"/gig-fast-sbt": "https://near.social/#/neardigitalcollective.near/widget/Gigs_OneArticle?articleId=fast-sbt&blockHeight=96841379&lastEditor=ndcplug.near",
"/gig-wg-directory" : "https://near.social/#/neardigitalcollective.near/widget/Gigs_OneArticle?articleId=wg-directory&blockHeight=96785133&lastEditor=ndcplug.near",
"/gig-vote-bot" : "https://near.social/#/neardigitalcollective.near/widget/Gigs_OneArticle?articleId=gotv-bot&blockHeight=96301933&lastEditor=ndcplug.near",
"/gig-wg-page": "",
"/election": "https://near.org/election.ndctools.near/widget/NDC.Elections.Main",
"/OGs": "https://near.social/#/zavodil.near/widget/ndc-og-holders",
"/sbt-holders": "https://near.org/ndcplug.near/widget/NDC.SBT.main",
"/gig-rebrand-docs": "https://near.social/#/neardigitalcollective.near/widget/Gigs_OneArticle?articleId=docs-rebrand&blockHeight=96782592&lastEditor=ndcplug.near",
"/gig-rebrand-sayalot": "https://near.social/#/neardigitalcollective.near/widget/Gigs_OneArticle?articleId=say-a-lot-rebrand&blockHeight=96782610&lastEditor=ndcplug.near",
"/og-social": "https://www.near.org/near/widget/ProfilePage?accountId=og-sbt.sputnik-dao.near",
"/og-dao": "https://near.org/sking.near/widget/DAO.Page?daoId=og-sbt.sputnik-dao.near&tab=proposal",
"/nominate-template": "https://docs.google.com/document/d/1K79ee3PxA-MnXgRBc8RDkyPxwPu4nif2gj4D--f31Zg/edit",

  
};

const Redirect = () => {
  useEffect(() => {
    const url = RedirectLinks[window.location.pathname.toLowerCase()];
    if (url) {
      window.location.href = url;
    } else {
      window.location.href = "/";
    }
  }, []);

  return <></>;
};
export default Redirect;
