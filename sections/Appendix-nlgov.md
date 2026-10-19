# Use of JSON, HTTP, Webhook and subscription API

The NLgov profile for CloudEvents message format can be used when using different formats and protocols. CloudEvents has a [layered architecture](https://github.com/cloudevents/spec/blob/main/cloudevents/primer.md) for this. In order to be able to use the NLgov profile for CloudEvents properly in practice, agreements must also be made when a certain format and/or protocol is used.

In addition to the CloudEvent specification the [Serverless Working Group](https://github.com/cncf/wg-serverless) has described for [several commonly used formats](https://github.com/cloudevents/spec#cloudevents-documents) and protocols how they can be used in a standardized way in combination with the CloudEvents message format.

This appendix describes how the NLgov profile for CloudEvents can be applied using the following optional specifications:

- The [JSON Event Format for CloudEvents](https://github.com/cloudevents/spec/blob/main/cloudevents/formats/json-format.md) specification.
- The [HTTP Protocol Binding for CloudEvents](https://github.com/cloudevents/spec/blob/main/cloudevents/bindings/http-protocol-binding.md) specification.
- The [HTTP 1.1 Web Hooks for Event Delivery](https://github.com/cloudevents/spec/blob/main/cloudevents/http-webhook.md) specification.
- The [CloudEvents Subscriptions API](https://github.com/cloudevents/spec/blob/main/subscriptions/spec.md) specification.
