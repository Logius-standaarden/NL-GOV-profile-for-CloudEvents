# NL GOV profile for CloudEvents
De gepubliceerde (kandidaat vastgestelde) versie staat online:
- [Gepubliceerde versie](https://gitdocumentatie.logius.nl/publicatie/notificatieservices/CloudEvents-NL)

De ontwikkelversies van dit document staan online:
- [Dynamische pagina (actueel)](https://Logius-standaarden.github.io/CloudEvents-NL/index.html)
- [Statische pagina (laatste build)](https://Logius-standaarden.github.io/CloudEvents-NL/snapshot.html)
- [PDF versie](https://logius-standaarden.github.io/BOMOS-Fundament/CloudEvents-NL.pdf)

Het NL GOV profile for CloudEvents is een specificatie voor het gestandaardiseerd
beschrijven en uitwisselen van plaatsgevonden gebeurtenissen tussen applicaties.
Het profiel is gebaseerd op de [CloudEvents specificatie](https://cloudevents.io/) die is ontwikkeld door de [Serverless Working Group](https://github.com/cncf/wg-serverless) van de [Cloud Native Computing Foundation](https://www.cncf.io/). CloudEvents is een internationale specificatie om gebeurtenisgegevens gestandaardiseerd te beschrijven en uit te kunnen wisselen met gebruik van verschillende gegevensformaten, transportprotocollen en voorzieningen.

Een van de uitgangspunten van het project Noficatieservices was om maximaal aan te sluiten bij wat wereldwijd gebruikelijk is. Bijv. om voor notificeren gebruik te maken van het [publish-subscribe patroon](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) en om voort te bouwen op bestaande berichtstandaarden (bijv. [CloudEvents](https://cloudevents.io/). In plaats van al uitgevonden wielen opnieuw (en waarschijnlijk slechter) te gaan uitvinden is aangesloten bij internationele ontwikkelingen op het gebied van gebeurtenisgedreven werken en notificeren. Daarop voortbouwend zijn aanvullende afspraken gemaakt voor gebruik binnen de context van de Nederlandse overheid. Zodat onnodige verschillen worden voorkomen en  interoperabiliteit wordt bevorderd.

In 2021 is samen met een community van overheidsorganiaties en leveranciers de eerste versie van het [NL GOV profile for CloudEvents](https://Logius-standaarden.github.io/NL-GOV-profile-for-CloudEvents/) ontwikkeld. Als u een bijdrage wilt leveren aan verdere ontwikkeling van het profiel wordt dit zeer gewaardeerd. Informatie over hoe u kunt bijdragen vindt u op een [aparte pagina](CONTRIBUTING.md).

Naast het profiel zijn ook een drietal handreikingen gemaakt die toelichten hoe het NL GOV profiel is toe te passen bij gebruik van het:

- [JSON gegevensformaat](https://github.com/Logius-standaarden/CloudEvents-NL-Guidelines/blob/develop//NL-GOV-Guideline-for-CloudEvents-JSON.md)
- [HTTP transportprotocol](https://github.com/Logius-standaarden/CloudEvents-NL-Guidelines/blob/develop/NL-GOV-Guideline-for-CloudEvents-HTTP.md)
- [Webhook interactiepatroon](https://github.com/Logius-standaarden/CloudEvents-NL-Guidelines/blob/develop//NL-GOV-Guideline-for-CloudEvents-Webhook.md).

Deze handreikingen verwijzen naar door de Serverless Working Group ontwikkelde specificaties. Doel daarvan is om verdergaande standaardisatie te bewerkstelligen en interoperabiliteit te vergroten. Uw feedback op deze handreikingen is uiteraard ook welkom.

Tijdens uitvoering van het project Notificatieservices was de beheerder van deze repository Ad Gerrits (VNG): ad.gerrits@vng.nl 
