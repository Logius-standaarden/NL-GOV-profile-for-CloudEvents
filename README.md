# NL GOV profile for CloudEvents

Het NL GOV profile for CloudEvents is een specificatie voor het gestandaardiseerd
beschrijven en uitwisselen van plaatsgevonden gebeurtenissen tussen applicaties.
Het profiel is gebaseerd op de [CloudEvents specificatie](https://cloudevents.io/) die is ontwikkeld door de [Serverless Working Group](https://github.com/cncf/wg-serverless) van de [Cloud Native Computing Foundation](https://www.cncf.io/). CloudEvents is een internationale
specificatie om gebeurtenisgegevens gestandaardiseerd te beschrijven en uit te wisselen via gangbare formaten en protocollen. 
Daarbij kan gebruik worden gemaakt van verschillende services, platforms en systemen.

Een van de uitgangspunten van het project Noficatieservices was om maximaal aan te sluiten bij wat wereldwijd gebruikelijk is. Bijv. om voor notificeren gebruik te maken van het [publish-subscribe patroon](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) en om voort te bouwen op bestaande berichtstandaarden (bijv. [CloudEvents](https://cloudevents.io/). In plaats van al uitgevonden wielen opnieuw (en waarschijnlijk slechter) te gaan uitvinden wordt aangesloten bij wat wereldwijd gebeurt op het gebied van gebeurtenisgedreven werken en notificeren. Daarop voortbouwend zijn aanvullende afspraken gemaakt die nuttig zijn binnen de context van de Nederlandse overheid. Daarmee worden onnodige verschillen voorkomen en wordt interoperabiliteit bevordert.

In 2021 samen met een community van overheidsorganiaties en leveranciers de eerste versie van het [NL GOV profile for CloudEvents](https://vng-realisatie.github.io/NL-GOV-profile-for-CloudEvents/) ontwikkeld. Dat profiel is nog in ontwikkeling. Als u een bijdrage wilt leveren aan verdere ontwikkeling wordt dit zeer gewaardeerd. Informatie over hoe u kunt bijdragen vindt u op een [aparte pagina](CONTRIBUTING.md).

**Bekijk hier [de laatste versie](https://vng-realisatie.github.io/NL-GOV-profile-for-CloudEvents/) van
het NL GOV for CloudEvents profile.**

Naast het profiel zijn ook een drietal handreikingen gemaakt die toelichten hoe het NL GOV profiel is toe te passen bij  gebruik van het:

- [JSON-formaat](https://github.com/VNG-Realisatie/NL-GOV-profile-for-CloudEvents/blob/main/NL-GOV-Guideline-for-CloudEvents-JSON.md)
- [HTTP-protocol](https://github.com/VNG-Realisatie/NL-GOV-profile-for-CloudEvents/blob/main/NL-GOV-Guideline-for-CloudEvents-HTTP.md)
- [Webhook-patroon](https://github.com/VNG-Realisatie/NL-GOV-profile-for-CloudEvents/blob/main/NL-GOV-Guideline-for-CloudEvents-Webhook.md)

Deze handreikingen verwijzen naar door de Serverless Working Group ontwikkelde specificaties en lichten toe hoe die binnen de context van de Nederlandse overheid effectief zijn te gebruiken. Doel daarvan is om verdergaande standaardisatie te bewerkstelligen en interoperabiliteit te vergroten. Uw feedback op deze handreikingen is uiteraard ook zeer welkom.

Beheerder van deze repository is Ad Gerrits (VNG): ad.gerrits@vng.nl

Voor projectgerelateerde vragen kunt u contact opnemen met Stijn Schrijvers (VNG): stijn.schrijvers@vng.nl
