Note: the format used is the format used by the Logius Centrum voor standaarden (e.g. [NL GOV Assurance profile for OAuth 2.0](https://publicatie.centrumvoorstandaarden.nl/api/oauth/)). This makes it easier for reviewers to assess things. The format may also be used to publish the profile in the future.

## Dutch government profile for CloudEvents 
This profile is based upon the CloudEvents 1.0.1 specification [[CloudEvents]] as published by the [Serverless Working Group](https://github.com/cncf/wg-serverless) of the
 [Cloud Native Computing Foundation](https://www.cncf.io/).
It should be considered a fork of this profile as the CloudEvents specification is geared more towards generic use and in the Netherlands we want to add a number of requirements for the Dutch situation with the goal to agree on how to use the CloudEvents specification.

The goal of the CloudEvents specification is to define interoperability of event systems that allow services to produce or consume events, where the producer and consumer can be developed and deployed independently. The ability to keep services loosely coupled within a distributed system such as the Dutch government makes it possible to work more often and in a better event-driven way. Using the CE standard supports this and makes maximum use of existing worldwide standards.

The CloudEvents standard is based on the principle of not imposing more requirements on the parties involved than necessary. This means, among other things, that there are no requirements for how consumers should interpret and process received notifications. Constraints pertaining to consumers are therefore more often formulated with 'MAY' than with 'SHOULD' or 'MUST' (e.g. "Consumers MAY assume that Events with identical `source` and `id` are duplicates")) The GOV NL profile endorses this principle. In practice, the parties involved are of course allowed to apply stricter constraints.

We have added a number of [Use Cases](#usecases) to illustrate the specific usage the CloudEvents-NL profile is aimed at. Starting with chapter [Introduction](#introduction) we follow the structure of the CloudEvents profile. Where we do not use content from CloudEvents we use ~~strikethrough~~ to indicate it is not part of CloudEvents-NL. Where we have added more specific requirements for the Dutch situation this is indicated with the **CloudEvents-NL** tag.

### Usecases
 <figure id='authorization_code'>
	<img alt="Pubsub image" src='media/use-case-pubsub1.png' width="600" />
	<figcaption>Publish-subscribe pattern</figcaption>
 </figure>

### Introduction
The basic pattern for use cases describes a (public/governmental) application in the role of '[producer](#producer)' publishes '[events](#event)': data records expressing an occurrence and its context. Published events can be consumed by applications in the role of '[consumer](#consumer)'. Consumers are subscribed to receiving certain types of events. There may or may not be one or more applications in the rol of '[intermediary](#intermediary)' that take care of routing events to consumers based on contextual information. The basic pattern used here is the [publish-subscribe pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern).

Within this context, it concerns standardization of the automated exchange of event information via applications. In practice, agreements at business level are often also required between the parties involved. 

A number of [use cases](use-cases) have been described that clarify the use of the GOV NL profile.


