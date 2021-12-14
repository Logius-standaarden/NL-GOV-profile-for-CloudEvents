# Guideline for use of JSON, HTTP and Webhook

## Introduction

The CloudEvent-NL message format can be used when using different formats and protocols. CloudEvents has a [layered architecture](https://github.com/cloudevents/spec/blob/v1.0.1/primer.md#architecture) for this. In order to be able to use the GOV-NL profile properly in practice, agreements must also be made when a certain format and/or protocol is used.

In addition to the CloudEvent specification the [Serverless Working Group](https://github.com/cncf/wg-serverless) has described for [several commonly used formats](https://github.com/cloudevents/spec#cloudevents-documents) and protocols how they can be used in a standardized way in combination with the CloudEvents message format. 

Within the Dutch government, frequent use is made of the JSON format, the HTTP protocol and the Webhook pattern for data exchange. For example, a common way to send events to consumers is to use the webhook pattern where a message in JSON format is sent via the HTTP protocol. Further standardization than just event description via the NL GOV profile therefore benefits most from agreements around these 3 areas. In addition to standardization through the use of the NL GOV profile, we therefore work towards standardization on exchanging event information when using JSON, HTTP and Webhook.

The NL GOV profile is intended to be used as a government-wide standard. This does not yet apply to the additional specification for the use of JSON, HTTP and Webhook. The specifications for them have the character of 'guidelines' ("a statement by which to determine a course of action", [Wikipedia](https://en.wikipedia.org/wiki/Guideline)).

## General guideline

Similar to what happened in the NL GOV profile for the CloudEvents specification, the guidelines make recommendations
about the use of the specifications within the context of the Dutch government. These are intended to make use of the specifications more unambiguous and to work towards standardisation in the long term.

One SHOULD use the [JSON Event Format for CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/json-format.md) and pay attention to the remarks in the guideline [GOV NL Guideline for JSON](Use-of-JSON.md).

One SHOULD use the [HTTP Protocol Binding for CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/http-protocol-binding.md) specification and pay attention to the remarks in the guideline [GOV NL Guideline for HTTP](Use-of-HTTP.md).

One SHOULD use the [HTTP 1.1 Web Hooks for Event Delivery](https://github.com/cloudevents/spec/blob/v1.0.1/http-webhook.md) specification and pay attention to the remarks in the guideline [GOV NL Guideline for Webhook](Use-of-Webhook.md).


## Normative References

- [CloudEvents Specification](https://github.com/cloudevents/spec/blob/v1.0.1/json-format.md)
- [JSON Event Format for CloudEvents - Version 1.0.1](https://github.com/cloudevents/spec/blob/v1.0.1/json-format.md)
- [HTTP Protocol Binding for CloudEvents - Version 1.0.1](https://github.com/cloudevents/spec/blob/v1.0.1/http-protocol-binding.md)
- [HTTP 1.1 Web Hooks for Event Delivery - Version 1.0.1](https://github.com/cloudevents/spec/blob/v1.0.1/http-webhook.md)
