*Let op: het formaat dat gebruikt wordt is het formaat dat Logius Centrum voor standaarden gebruikt (zie bijv. [NL GOV Assurance profile for OAuth 2.0](https://publicatie.centrumvoorstandaarden.nl/api/oauth/)). Het wordt hierdoor makkelijker voor reviewers om een en ander te beoordelen en mogelijk wordt het formaat in de toekomst gebruikt om de de berichtstandaard te publiceren.* 

## Dutch government profile for CloudEvents 2.0  
This profile is based upon the CloudEvents 1.0 specification [[CloudEvents]] as published by the @@@. 
It should be considered a fork of this profile as the CloudEvents specification is geared more towards generic use and in the Netherlands we want to add a number of requirements for the Dutch situation with the goal to agree on how to use the CloudEvents specification. 

We have added the chapter [Usecases](#usecases) to illustrate the specific usecase the CloudEvents-NL profile is aimed at. Starting with chapter [Introduction](#introduction) we follow the structure of the CloudEvents profile. Where we do not use content from CloudEvents we use ~~strikethrough~~ to indicate it is not part of CloudEvents-NL. Where we have added more specific requirements for the Dutch situation this is indicated with **CloudEvents-NL** tags.

### Usecases
 <figure id='authorization_code'>
	<img src='media/use-case-pubsub1.png' width="600" />
	<figcaption>Publish-subscribe pattern</figcaption>
 </figure>

### Introduction
In this use case a (public/governmental) application in the role of '[producer](#producer)' publishes '[events](#event)': data records expressing an occurrence and its context. 
Published events can be consumed by applications in the role of '[consumer](#consumer)'. Consumers are subscribed to receiving certain types of events.
There may or may not be one of more seperate applications in the rol of '[intermediary](intermediary)' that take care of routing events to consumers based on contextual information.

