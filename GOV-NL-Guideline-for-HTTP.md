# Guideline for the use of the HTTP Protocol Binding for CloudEvents

The CloudEvent-NL message format can be used when using different formats and protocols and patterns. In order to be able to use the GOV-NL profile properly in practice, agreements must also be made when and in what way a certain format, protocol or pattern is used. 


The Serverless Working Group has described how the HTTP protocol can be used in a standardized way in combination with the CloudEvents message format: [HTTP Protocol Binding for CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/http-protocol-binding.md). The specification defines how the elements defined in the CloudEvents specification are to be used in HTTP 1.1 requests and response messages.

Similar to what happened in the NL GOV profile for the CloudEvents specification, this guideline makes recommendations about the use of the HTTP specification within the context of the Dutch government. These are intended to make use of the specification more unambiguous and to work towards standardisation in the long term.

## Summary with points for attention 

- Events can be transferred with all standard or application-defined HTTP request methods that support payload body transfers. Events can be also be transferred in HTTP responses and with all HTTP status codes that permit payload body transfers.
- This specification defines three content modes for transferring events: 
    - structured (required): HTTP message body contains both event data and metadata attributes; an appropriate event format is used ((non-batching) JSON is the only event format that MUST be supported); 
    - batched (optional): HTTP message body contains event data and metadata attributes from multiple events; an appropriate event format is used.
    - binary (required): HTTP message body contains event data as-is; event attributes mapped to HTTP-headers; HTTP `Content-Type` header declares the media type.
 - Received `Content-Type` header value is:
    - `application/cloudevents(+xxxx)`: structured mode (`xxx` denotes the used event format)
    - `application/cloudevents-batch`: batched mode
    - Otherwise: binary mode (`Content-Type` header declares the media type.)
- Structured content mode:
    - The HTTP message body MUST contain both event data and metadata attributes.
    - The HTTP Content-Type header MUST be set to the media type of an event format (E.g. `application/cloudevents+json; charset=UTF-8`)
    - The chosen event format defines how all attributes, and data, are represented in the HTTP message body.
    - Implementations MAY include the same HTTP headers as defined for the binary mode (E.g. `ce-id`). 
- Batched content mode:
    - The HTTP message body MUST contain both event data and metadata attributes.
    - The HTTP Content-Type header MUST be set to the media type of an event format (E.g. `application/cloudevents-batch+json; charset=UTF-8`)
    - The chosen event format defines how a batch of events and all event attributes, and data, are represented.
    - All batched CloudEvents MUST have the same specversion attribute. Other attributes MAY differ, including the datacontenttype attribute. The batch MAY be empty.
- Binary content mode:
    - All CloudEvents context attributes, including extensions, MUST be mapped to HTTP headers with the same name as the attribute name but prefixed with `ce-`.
    - The value for each HTTP header is constructed as described in the [specification](
        https://github.com/cloudevents/spec/blob/v1.0.1/http-protocol-binding.md#3132-http-header-values)

At the moment there are *no additional agreements* about the use of the specification within the Dutch government.

## Recommendations

- One SHOULD use the [HTTP Protocol Binding for CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/http-protocol-binding.md). 
- There are no agreements to deviate from the standard in any part.
- Given the fact that many organizations still have little experience with standardized exchange of events, we recommend a useful relatively simple mechanism that consumers are already familiar with:
    - One SHOULD use structured content mode.
    - One SHOULD use the JSON (non batched) event format
    - When using structured mode one SHOULD NOT depend on the usage of HTTP-headers that replicate context-attributes in the event.    
- If the above advice is followed, when notifying via webhooks 1 message will contain JSON-structured data about 1 event that has occurred.

## Examples

Structured content mode: HTTP POST request with a JSON event format encoded event:
```
POST /myresource HTTP/1.1
Host: webhook.example.com
Content-Type: application/cloudevents+json; charset=utf-8
Content-Length: nnnn

{
  "specversion": "1.0",
  "type": "nl.overheid.zaken.zaakstatus-gewijzigd",
  "source": "urn:nld:oin:00000001823288444000:systeem:BRP-component",
  "id": "f3dce042-cd6e-4977-844d-05be8dce7cea",
   ... further attributes omitted ...
  "data": {
        ... application data ...
  }
}
```

Batched content mode: HTTP POST request with two JSON event format encoded events:
```
[
    {
        "specversion": "1.0",
        "type": "nl.overheid.zaken.zaakstatus-gewijzigd",
        "source": "urn:nld:oin:00000001823288444000:systeem:BRP-component",
        "id": "f3dce042-cd6e-4977-844d-05be8dce7cea",
        ... further attributes omitted ...
        "data": {
                ... application data ...
        }
    },
    {
        "specversion": "1.0",
        "type": "nl.overheid.zaken.zaakstatus-gewijzigd",
        "source": "urn:nld:oin:00000001823288444000:systeem:BRP-component",
        "id": "1ca55552-bc4a-4f5d-8cc8-8106e3e883c1",
        ... further attributes omitted ...
        "data": {
                ... application data ...
        }
    }
]
```

Binary content mode: HTTP POST request with context attributes mapped to HTTP-headers:
```
POST /myresource HTTP/1.1
Host: webhook.example.com
ce-specversion: 1.0
ce-type: nl.overheid.zaken.zaakstatus-gewijzigd
ce-id: f3dce042-cd6e-4977-844d-05be8dce7cea
ce-source: urn:nld:oin:00000001823288444000:systeem:BRP-component
... further attributes omitted ...
Content-Type: application/cloudevents+json; charset=utf-8
Content-Length: nnnn

{
    ... application data ...
}
```




## Normative References

- [HTTP Protocol Binding for CloudEvents - Version 1.0.1](https://github.com/cloudevents/spec/blob/v1.0.1/http-protocol-binding.md)

