# Appendix 1: JSON, HTTP and Webhooks

This appendix describes how the CloudEvent-NL message standard can be applied when using the JSON format, the HTTP protocol and Webhooks.

The CloudEvent-NL message format can be used when using different formats and protocols. 
CloudEvents has a [layered architecture](https://github.com/cloudevents/spec/blob/v1.0.1/primer.md#architecture) for this. 

It is described for different formats and protocols how they can be used in a standardized way in combination with the CloudEvents message format.
A description of common formats and protocols can be found at: https://github.com/cloudevents/spec#cloudevents-documents.

Within the Dutch government, frequent use is made of the JSON format and the HTTP protocol for data exchange. 
Where this is the case for inter-application notifications, we recommend using standardized usage as described in:
- [JSON Event Format for CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/json-format.md)
- [HTTP Protocol Binding for CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/http-protocol-binding.md).

["Webhooks"](https://en.wikipedia.org/wiki/Webhook) are a popular pattern to deliver notifications between applications and via HTTP endpoints. 
In spite of pattern usage being widespread, there is no formal definition for Webhooks.
CloudEvents, therefore, has also described how to work with Webhooks in a standardized way when using HTTP:
- [HTTP 1.1 Web Hooks for Event Delivery](https://github.com/cloudevents/spec/blob/v1.0.1/http-webhook.md).

Again, we recommend using this to achieve maximum standardization.

Of course it also applies to other formats and protocols that it may be wise to use agreements such as those made by the CloudEvents working group, 
but given the intensive use of JSON, HTTP and Webhooks within the Dutch government, we have highlighted them here.