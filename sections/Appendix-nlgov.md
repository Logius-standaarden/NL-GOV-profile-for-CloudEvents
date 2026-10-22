# CloudEvents Extension Attributes

Alongside the core specification, the CloudEvents project keeps a catalogue of documented extension attributes [CloudEvents-Extensions](https://github.com/cloudevents/spec/blob/main/cloudevents/extensions/README.md) . These cover concerns that the core attributes leave out on purpose. Examples are distributed tracing, partitioning, event ordering, expiry, data classification and references to externally stored data.

CNCF states that documented extensions have no official standing and can be changed or removed at any time. That makes them unsuitable as a normative basis for a government-wide profile. Support for any documented extension is therefore optional for producers, consumers and intermediaries. Before defining a new extension attribute, a producer should check the catalogue.

This profile refers to two documented extensions:

- `dataref`, in [source](#source-0): a reference to an external data location
  belongs in `dataref`, not in `source`.
- `sequence`, in the [example](#example): its value must be a lexicographically
  orderable string, so numeric counters need zero-padding (for example
  `"0000001234"`).

# Use of JSON, HTTP, Webhook and subscription API

The NLgov profile for CloudEvents message format can be used when using different formats and protocols. CloudEvents has a [layered architecture](https://github.com/cloudevents/spec/blob/main/cloudevents/primer.md) for this. In order to be able to use the NLgov profile for CloudEvents properly in practice, agreements must also be made when a certain format and/or protocol is used.

In addition to the CloudEvent specification the [Serverless Working Group](https://github.com/cncf/wg-serverless) has described for [several commonly used formats](https://github.com/cloudevents/spec#cloudevents-documents) and protocols how they can be used in a standardized way in combination with the CloudEvents message format.

This appendix highlights the following optional specifications for use with the NLgov Profile for CloudEvents:

- The [JSON Event Format for CloudEvents](https://github.com/cloudevents/spec/blob/main/cloudevents/formats/json-format.md) specification.
- The [HTTP Protocol Binding for CloudEvents](https://github.com/cloudevents/spec/blob/main/cloudevents/bindings/http-protocol-binding.md) specification.
- The [HTTP 1.1 Web Hooks for Event Delivery](https://github.com/cloudevents/spec/blob/main/cloudevents/http-webhook.md) specification.
- The [CloudEvents Subscriptions API](https://github.com/cloudevents/spec/blob/main/subscriptions/spec.md) specification.
