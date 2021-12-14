
# Guideline for the use of the Webhook pattern for CloudEvents

## Introduction 

The CloudEvent-NL message format can be used when using different formats and protocols. In order to be able to use the GOV-NL profile properly in practice, agreements must also be made when a certain format and/or protocol is used. 

The Serverless Working Group has described how the JavaScript Object Notation (JSON) Data Interchange Format can be used in a standardized way in combination with the CloudEvents message format: [JSON Event Format for CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/json-format.md).

Similar to what happened in the NL GOV profile for the CloudEvents specification, this guideline make recommendations
about the use of the JSON specification within the context of the Dutch government. These are intended to make use of the specifications more unambiguous and to work towards standardisation in the long term.

The JSON Format for CloudEvents specification defines how events are expressed in JSON. The JSON syntax is not a specification of a complete data interchange. Meaningful data interchange requires agreement between a producer and consumer on the semantics attached to a particular use of the JSON syntax. What JSON does provide is the syntactic framework to which such semantics can be attached.

## Points for attention

At the moment there are *no additional agreements* about the use of the specification within the Dutch government.

## Examples



## Normative References

- [HTTP 1.1 Web Hooks for Event Delivery - Version 1.0.1](https://github.com/cloudevents/spec/blob/v1.0.1/http-webhook.md)

