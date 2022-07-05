//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec  
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de 
//--              betreffende standaard. 
//-- Door. . . :  Frank Terpstra/Jan van Gelder
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20180615 - FT  - Initiele versie
//-- . . . . . :  20181106 - JvG - verplaatst naar root KP-APIs
//-------------------------------------------------------------------------------------

var respecConfig =
{
  specStatus: "GN-WV",
  specType: "ST",
  // format: "markdown",
  pubDomain: "notificatieservices",           //toegevoegd aan github pad
  shortName: "notificaties",

  //publishDate: "2021-12-07",
  //geeft probleem in header als gevuld previousPublishDate: "2021-12-07",

  //publishVersion niet zichtbaar nu
  //publishVersion: "v0.3",
  //previousPublishVersion: "0.2.1",

  //previousMaturity: "GN-CV",
  editors:
    [
      {
        name: "Ad Gerrits",
        company: "VNG Realisatie",
        companyURL: "http://www.vngrealisatie.nl/",
      }
    ],
  authors:
    [
      {
        name: "Werkgroep Berichtenstandaard",
        company: "Project Notificatieservices",
      }
    ],
  github: "https://github.com/VNG-Realisatie/NL-GOV-profile-for-CloudEvents/",
  issueBase: "https://github.com/VNG-Realisatie/NL-GOV-profile-for-CloudEvents/issues",
  licence: "cc-by-nd",

  nl_github: {
    issueBase: "https://github.com/VNG-Realisatie/NL-GOV-profile-for-CloudEvents/issues",
    revision: "https://github.com/VNG-Realisatie/NL-GOV-profile-for-CloudEvents/commits",
    pullsBase: "https://github.com/VNG-Realisatie/NL-GOV-profile-for-CloudEvents/pulls",
  },

  // Controls if linked "§" section markers are added to a document
  addSectionLinks: true,

  // this parameter will add the tag_name of the latest release to the document Title
  // only set this parameter when a release has been set
  nl_addReleaseTagTitle: true,

  // nl_organisationName is used for some company specific values in the header (and Sotd)
  // currently supported: Logius and Geonovum (default)  
  // ### was Logius
  nl_organisationName: "VNG Realisatie",

  // prefix for the names of company specific css, svg and ico prefixes
  // defaults to "GN-"  
  nl_organisationPrefix: "LS-",

  // class style can be automatically insertd in generated markdown tables
  // currently defaults to simple, but this may change    
  //  nl_markdownTableClass: "ebms",

  // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
  // so that figures can be linked are be a part of table of figures
  nl_markdownEmbedImageInFigure: true,

  // this url points to the folder where organsation specific css files are stored
  // defaults to https://tools.geostandaarden.nl/respec/style/ if not set
  nl_organisationStylesURL: "https://publicatie.centrumvoorstandaarden.nl/respec/style/",

  // nl_organisationPublishURL points to organisation specifica publication page, used in header
  // defaults to  https://docs.geostandaarden.nl/"
  nl_organisationPublishURL: "https://github.com/VNG-Realisatie",

  // nl_logo refers to company logo
  // defaults to https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg
  nl_logo: {
    src: "https://www.vngrealisatie.nl/themes/custom/tagordo/dist/images/Logo.svg",
    alt: "VNG Realisatie",
    id: "VNG Realisatie",
    height: 77,
    width: 44,
    url: "https://www.vngrealisatie.nl",
  },
  localBiblio: {
    "CloudEvents": {
      href: "https://github.com/cloudevents/spec/blob/v1.0.1/spec.md",
      title:
        "CloudEvents specification 1.0.1",
      authors: ["CNCF's Serverless Working Group"],
      date: "October 2019",
      publisher: "Cloud Native Computing Foundation",
    },
    "Expert": {
      href: "",
      title:
        "Expertadvies CloudEvents 2.0",
      authors: ['todo'],
      date: "@@@",
      publisher: "Forum Standaardisatie",
    },
  },
};
