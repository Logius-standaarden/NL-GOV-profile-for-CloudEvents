var respecConfig = {
  // this template doesn''t use all possible config parameters
  // see https://respec.org/docs/ for alle

  // ED 	Editor's Draft. Use this for documents that are maintained in the group's own repository.
  // WD 	Working Draft.
  specStatus: "WD",
  // SpecType currently supported
  // NO: "Norm"
  // ST: "Standaard"
  // IM: "Informatiemodel"
  // PR: "Praktijkrichtlijn"
  // HR: "Handreiking"
  // WA: "Werkafspraak"
  // AL: "Algemeen"
  // BD: "Beheerdocumentatie"
  // BP: "Best Practice"
  specType: "HR",
  pubDomain: "notificaties",
  shortname: "NL-CloudEvents",
  // A YYYY-MM-DD date. The publication date of the present document.
  // Als er geen publishDate is opgegeven, genereert ReSpec de dataum o.b.v. de laatste wijzigingen
  // Belangrijk: als publishDate niet opgegeven is, wordt bij de link "Laatst gepubliceerde versie" "geen" gezet. Anders wordt een link opgebouwd voor de laatste versie, met het formaat:
  publishDate: "2022-07-05",
  publishVersion: "1.0",
  previousPublishVersion: "0.3",
  // license can be one of the following: cc0, cc-by or cc-by-nd((default)) (see https://github.com/Geonovum/respec/wiki/license )
  license: 'cc-by-nd',

  editors: [
    {
      name: "Ad Gerrits",
      company: "VNG Realisatie",
      companyURL: "https://www.vngrealisatie.nl/",
    },{
      name: "Edwin Wisse",
      url: "https://logius.nl/standaarden",
      company: "Logius",
    },],

  authors: [{
    name: "VNG",
    url: "https://vng.nl/",
    mailto: "api@logius.nl",
  }
  ],
  subtitle: "Project Notificatieservices",
  github: "https://github.com/Logius-standaarden/NL-GOV-profile-for-CloudEvents",
  issueBase: "https://github.com/Logius-standaarden/NL-GOV-profile-for-CloudEvents/issues/",

  // Controls if linked "§" section markers are added to a document
  addSectionLinks: true,
  // Lints for accessibility issues using axe-core
  a11y: false,
  // A number indicating the maximum depth of the table of contents. Defaults to 0 which includes all levels.
  maxTocLevel: 3,

  // Shows links to alternate formats (such as PDF, ePub) in the document header.
  alternateFormats: [
    {
      label: "pdf",
      uri: "NL-CloudEvents.pdf",
    },
    ],

  // nl_organisationName is used for some company specific values in the header (and Sotd)
  // currently supported: Logius and Geonovum (default)
  nl_organisationName: "Logius",
  // prefix for the names of company specific css, svg and ico prefixes
  // defaults to "GN-"
  nl_organisationPrefix: "LS-",
  // class style can be automatically inserted in generated markdown tables
  // currently defaults to simple, but this may change
  // options simple, data, <your css>
  nl_markdownTableClass: "dkkvs",
  nl_markdownCodeClass: "code",
  // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
  // so that figures can be linked are be a part of table of figures
  nl_markdownEmbedImageInFigure: true,
  // this url points to the folder where organsation specific css files are stored
  // defaults to https://tools.geostandaarden.nl/respec/style/ if not set
  nl_organisationStylesURL: "https://publicatie.centrumvoorstandaarden.nl/respec/style/",
  // nl_organisationStylesURL: "http://localhost:8081/respec/style/",
  // nl_organisationPublishURL points to organisation specifica publication page, used in header
  // defaults to  https://docs.geostandaarden.nl/"
  nl_organisationPublishURL: "https://publicatie.centrumvoorstandaarden.nl/",

  // nl_logo refers to company logo
  // defaults to https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg
  nl_logo: {
    src: "https://publicatie.centrumvoorstandaarden.nl/respec/style/logos/figure-logius.svg",
    alt: "Logius",
    id: "Logius",
    height: 77,
    width: 44,
    url: "https://www.logius.nl/standaarden",
  },

  localBiblio: {
    "CloudEvents": {
      href: "https://github.com/cloudevents/spec/blob/v1.0.1/spec.md",
      title:
        "CloudEvents - Version 1.0.1",
      authors: ["@@@"],
      date: "May 2011",
      publisher: "@@@",
    },
	"Expert": {
      href: "https://www.forumstandaardisatie.nl/sites/bfs/files/@@@.pdf",
      title:
        "Expertadvies CloudEvents 1.0",
      authors: ["@@@"],
      date: "@@@",
      publisher: "Forum Standaardisatie",
    },
    "UUID": {
      href:  'https://tools.ietf.org/html/rfc4122',
      title: 'A Universally Unique IDentifier (UUID) URN Namespace',
      authors: ['P. Leach', 'M. Mealling', 'R. Salz'],
      date: 'July 2005',
      publisher: 'The Internet Engineering Task Force'
    }
  },
};
