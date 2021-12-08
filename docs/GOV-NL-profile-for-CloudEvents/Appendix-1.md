# Appendix 1: JSON, HTTP and Webhooks

This appendix describes how the CloudEvent-NL profile can be applied when using the JSON format, the HTTP protocol and the Webhook pattern.

In addition to the CloudEvent specification the [Serverless Working Group](https://github.com/cncf/wg-serverless) has described for different formats and protocols how they can be used in a standardized way in combination with the CloudEvents message format. A description of common formats and protocols can be found at: https://github.com/cloudevents/spec#cloudevents-documents.

Within the Dutch government, frequent use is made of the JSON format, the HTTP protocol and the Webhook pattern for data exchange. For example, a common way to send events to consumers is to use a webhook where a message in JSON format is sent via the HTTP protocol. In addition to standardization through the use of the NL GOV profile, we therefore work towards standardization when JSON, HTTP and Webhook are used.

The NL GOV profile is intended as a formal government-wide standard to be used. This does not yet apply to the additional specification for the use of JSON, HTTP and Webhook. The specifications for them therefore have the character of a 'guideline' ("a statement by which to determine a course of action", [Wikipedia](https://en.wikipedia.org/wiki/Guideline)).

When using the NL GOV profile in combination with JSON, HTTP or Webhook, the following specifications SHOULD be used:
- [JSON Event Format for CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/json-format.md): The JSON Format for CloudEvents defines how events are expressed in JavaScript Object Notation (JSON) Data Interchange Format [RFC8259](https://tools.ietf.org/html/rfc8259).
- [HTTP Protocol Binding for CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/http-protocol-binding.md): The HTTP Protocol Binding for CloudEvents defines how events are mapped to HTTP 1.1 request and response messages.
- [HTTP 1.1 Web Hooks for Event Delivery](https://github.com/cloudevents/spec/blob/v1.0.1/http-webhook.md): The specification aims to provide a definition for use with CNCF CloudEvents, but is considered generally usable beyond the scope of CloudEvents.

In addition to the three specifications mentioned, a number of recommendations are made in [Guideline for JSON, HTTP en Webhook](Use-of-json-http-webhook.md) with regard to use. These are intended both to make use within the government more unambiguous and to work towards standardization in the long term.

