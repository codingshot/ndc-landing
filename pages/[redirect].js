import { useEffect } from "react";

const RedirectLinks = {
  "/wg": "https://near.social/#/neardigitalcollective.near/widget/NDCDocs_OneArticle?articleId=workgroups&blockHeight=94330352&lastEditor=blaze.near",
  "/docs": "https://near.social/#/neardigitalcollective.near/widget/NDCDocs",
  "/office-hours": "https://near.social/#/neardigitalcollective.near/widget/OfficeHours",
  "/funding": "https://near.social/#/frichard5.near/widget/NDC-alldaos_overview",
  "/poll": "https://near.social/#/easypoll.near/widget/EasyPoll",
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
