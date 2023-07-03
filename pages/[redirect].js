import { useEffect } from "react";

const RedirectLinks = {
  "/wg": "https://near.social/#/neardigitalcollective.near/widget/NDCDocs_OneArticle?articleId=workgroups&blockHeight=94330352&lastEditor=blaze.near",
  "/docs": "https://near.social/#/neardigitalcollective.near/widget/NDCDocs",
  "/office-hours": "https://near.social/#/neardigitalcollective.near/widget/OfficeHours",
  "/funding": "https://near.social/#/frichard5.near/widget/NDC-alldaos_overview",
  "/poll": " https://near.social/#/neardigitalcollective.near/widget/EasyPoll.Main",
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
  "/nominate": "",
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
