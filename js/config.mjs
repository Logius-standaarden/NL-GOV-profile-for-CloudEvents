import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [{ 
        "company" : "VNG Realisatie",
        "companyURL" : "https://www.vngrealisatie.nl/",
        "name" : "Ad Gerrits"
      },
      { 
        "company" : "VNG Realisatie",
        "companyURL" : "https://www.vngrealisatie.nl/",
        "name" : "Gershon Jansen"
      },
      { 
        "company" : "VNG Realisatie",
        "companyURL" : "https://www.vngrealisatie.nl/",
        "name" : "Jeanot Bijpost"
      }
           ],
  editors: [ 
      { 
        "company" : "Logius",
        "name" : "Alexander Green",
        "url" : "https://logius.nl/standaarden"
      },
      { 
        "company" : "Logius",
        "name" : "Stas Mironov",
        "url" : "https://logius.nl/standaarden"
      }
  ],
  github: "https://github.com/Logius-standaarden/NL-GOV-profile-for-CloudEvents",
  previousMaturity: "WV",
  pubDomain: "notificatieservices",
  previousPublishDate: "2025-06-27",
  previousPublishVersion: "0.3",
  publishDate: "2025-10-10",
  publishVersion: "1.1",
  shortName: "CloudEvents-NL",
  specStatus: "CV",
  specType: "ST",
  subtitle: "Notificatieservices"
});
