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
  specStatus: "GN-BASIS",
  specType: "ST",
  // format: "markdown",
  pubDomain: "api",
  shortName: "CloudEvents",

  publishDate: "2021-10-07",
  //previousPublishDate: "2019-02-13",

  publishVersion: "v0.1",
  //previousPublishDate: "0.9",

  //previousMaturity: "GN-CV",
  editors:
    [
      {
        name: "Ad Gerrits",
        company: "VNG Realisatie",
        companyURL: "http://www.VNGRealisatie.nl/",
      },
      {
        name: "Jeanot Bijpost",
        company: "VNG Realisatie",
        companyURL: "http://www.VNGRealisatie.nl/",
      }
    ],
  authors:
    [
      {
        name: "Gershon Jansen",
        company: "VNG Realisatie",
        companyURL: "http://www.vngrealisatie.nl/",
      },
    ],
  github: "https://github.com/VNG-Realisatie/notifcatieservices/",
  issueBase: "https://github.com/VNG-Realisatie/notifcatieservices/issues",
  licence: "cc-by-nd",

  nl_github: {
    issueBase: "https://github.com/VNG-Realisatie/notifcatieservices/issues",
    revision: "https://github.com/VNG-Realisatie/notifcatieservices/commits",
    pullsBase: "https://github.com/VNG-Realisatie/notifcatieservices/pulls",
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
      href: "https://tools.ietf.org/html/rfc6749",
      title:
        "The CloudEvents 2.0 Authorization Framework",
      authors: ["D. Hardt"],
      date: "October 2012",
      publisher: "The Internet Engineering Task Force",
    },
    "Expert": {
      href: "",
      title:
        "Expertadvies CloudEvents 2.0",
      authors: ['todo'],
      date: "@@@",
      publisher: "Forum STandaardisatie",
    },
    "OpenID.Discovery": {
      href: "https://openid.net/specs/openid-connect-discovery-1_0.html",
      title:
        "OpenID Connect Discovery 1.0",
      authors: ["N. Sakimura, J. Bradley, M. Jones, E. Jay"],
      date: "November 8 2014",
      publisher: "OpenID foundation",
    },
    "I-D.ietf-CloudEvents-pop-architecture": {
      href: "https://tools.ietf.org/html/draft-ietf-CloudEvents-pop-architecture-08",
      title:
        "CloudEvents 2.0 Proof-of-Possession (PoP) Security Architecture",
      authors: ["P. Hunt, J. Richer, W. Mills, P. Mishra, H. Tschofenig"],
      date: "July 8, 2016",
      publisher: "IETF",
    },
    "HEART.CloudEvents2": {
      href: "https://openid.net/specs/openid-heart-CloudEvents2-1_0.html",
      title:
        "Health Relationship Trust Profile for CloudEvents 2.0",
      authors: ["J. Richer"],
      date: "April 25, 2017",
      publisher: "OpenID foundation",
    },
    "JWS.JWE.Algs": {
      href: "https://www.iana.org/assignments/jose/jose.xhtml#web-signature-encryption-algorithms",
      title:
        "IANA JSON Web Signatures and Encryption Algorithms registry",
      authors: ["Jim Schaad, Jeff Hodges, Joe Hildebrand, Sean Turner"],
      date: "",
      publisher: "IANA",
    },
    "BCP195": {
      href: "https://tools.ietf.org/html/bcp195",
      title: "Recommendations for Secure Use of Transport Layer Security (TLS) and Datagram Transport Layer Security (DTLS)",
      authors: ["Y. Sheffer, R. Holz, P. Saint-Andre"],
      date: "May 2015",
      publisher: "IETF",
    },
  },
};
