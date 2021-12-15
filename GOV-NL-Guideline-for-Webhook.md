# Guideline for the use of the Webhook pattern for CloudEvents

The CloudEvent-NL message format can be used when using different formats and protocols and patterns. In order to be able to use the GOV-NL profile properly in practice, agreements must also be made when and in what way a certain format, protocol or pattern is used. 

The Serverless Working Group has described how the Webhook pattern can be used in a standardized way in combination with the CloudEvents message format: [HTTP 1.1 Web Hooks for Event Delivery](https://github.com/cloudevents/spec/blob/v1.0.1/http-webhook.md).

"Webhooks" are a popular pattern to deliver notifications between applications and via HTTP endpoints. Applications that make notifications available, allow for other applications to register an HTTP endpoint to which notifications are delivered. In spite of pattern usage being widespread, there is no formal definition for Web Hooks. The CloudEvents specification now provides such a definition for use with CNCF CloudEvents (but is considered generally usable beyond the scope of CloudEvents).

Similar to what happened in the 'NL GOV profile for the CloudEvents' specification, this guideline makes recommendations about the use of the drafted CloudEvents specification within the context of the Dutch government. These are intended to make use of the specification more unambiguous and to work towards standardisation in the long term.

## Summary with points for attention 

The 'HTTP 1.1 Web Hooks for Event Delivery' specification prescribes rules constraining the use and handling of specific HTTP methods and headers and defines:
1. a HTTP method by how notifications are delivered by the sender
2. an authorization model for event delivery to protect the delivery target
3. a registration handshake that protects the sender from being abused for flooding arbitrary HTTP sites with requests.
For each of the mechanisms it is described which agreements apply to both sender and receiver.
The specification 

### Delivering notifications

- A delivery request MUST use a HTTP POST request via HTTPS.
- A delivery response MUST have the appropriate status code:
    - 200 OK of 200 Created if delivery had been accepted and processed and response carries a payload
    - 201 Created of 204 No Content when accepted and processed but carries no payload 
    - 202 Accepted if accepted but not yet processed or processing status is unknown
    - 410 Gone if delivery target has been retired
    - 429 Too Many Requests when exceeding a request rate limit and MUST include the Retry-After header.
    - 415 Unsupported Media Type wehen notification format is not understood.
    - other error status codes apply as specified in [RFC7231](https://tools.ietf.org/html/rfc7231).

### Authorization

The delivery request MUST use one of the following two methods (both of which lean on the OAuth 2.0 Bearer Token [RFC6750](https://tools.ietf.org/html/rfc6750) model):
-  The access token is sent in the Authorization request header field; for [OAuth 2.0 Bearer](https://tools.ietf.org/html/rfc6750#section-2.1) tokens, the "Bearer" scheme MUST be used.
-  The access token is added to the HTTP Request URI Query component as described in [URI Query Parameter](https://github.com/cloudevents/spec/blob/v1.0.1/http-webhook.md#32-uri-query-parameter). 

### Abuse protection 

It must be prevented that notifications are sent to recipients who have not requested this themselves. A legitimate delivery target needs to indicate that it agrees with notifications being delivered to it. Reaching the delivery agreement is realized using a validation handshake:
- A handshake can either be executed immediately at registration time or as a "pre-flight" request immediately preceding a delivery.
- Delivery targets SHOULD support the abuse protection feature. If a target does not support the feature, the sender MAY choose not to send to the target, at all, or send only at a very low request rate.

- The _validation request_ uses the HTTP [OPTIONS](https://tools.ietf.org/html/rfc7231#section-4.3.7) method with header fields:
    - WebHook-Request-Origin (required):  a DNS expression that identifies the sending system
    - WebHook-Request-Callback (optional): a callback URL that allows the delivery target to grant send permission asynchronously, via a simple HTTPS callback.
    -  WebHook-Request-Rate (optional): a positive integer number that expresses the request rate in "requests per minute"
- The _validation respons_ MUST be sent if the delivery target does allow delivery of events with header fields:
    - WebHook-Allowed-Origin (required): MUST either be the origin name supplied in the WebHook-Request-Origin header, or a singular asterisk character ('*'), indicating that the delivery target supports notifications from all origins.
    - WebHook-Allowed-Rate (depends): MUST be returned if the request contained the WebHook-Request-Rate, otherwise it SHOULD be returned; an integer number expresses the permitted request rate in "requests per minute" or asterisk when there is no rate limitation.

## Recommendations
- One SHOULD use the  [HTTP 1.1 Web Hooks for Event Delivery](https://github.com/cloudevents/spec/blob/v1.0.1/http-webhook.md). 
- There are no agreements to deviate from the standard in any part.
- As described in the specification usage of an access token added to the HTTP Request URI Query component has a number of security weaknesses and therefore SHOULD NOT be used unless it is impossible to sent an access token in the Authorization request header field.
-  The CloudEvents specification focuses on automated validation of intended notification applications. Within the context of the Dutch government, there can (also) be non-automated validation (e.g. by specifying endpoints in agreements between the organizations involved). In those cases it is not always necessary to perform an automated handshake before notifications may be sent.
- An automated handshake as described can take place at different moments. If automated subscription to event notification is used:
    - one SHOULD perform a handshake as described in the specification immediately at registration time
    - one MAY perform a handshake as a "pre-flight" request immediately preceding a delivery.

## Examples

Validation request:
```
OPTIONS /endpoint HTTP/1.1
Host: webhook.example.com
WebHook-Request-Origin: eventemitter.example.com
WebHook-Request-Callback: https://example.com/confirm?id=12345&key=...base64..
WebHook-Request-Rate: 120
```

Validation response:
```
HTTP/1.1 200 OK
Allow: GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS
Access-Control-Allow-Origin: https://eventemitter.example.com
Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS
Access-Control-Allow-Headers: Content-Type 
WebHook-Allowed-Origin: eventemitter.example.com
WebHook-Allowed-Rate: 120
```

Delivery request: 
- [HTTP structured content mode](https://github.com/cloudevents/spec/blob/v1.0.1/http-protocol-binding.md#32-structured-content-mode) with a
- [JSON event format](https://github.com/cloudevents/spec/blob/v1.0.1/json-format.md) encoded event with a
-  [OAuth 2.0 Bearer](https://tools.ietf.org/html/rfc6750#section-2.1) token
```
POST /myresource HTTP/1.1
Host: server.example.com
Authorization: Bearer mF_9.B5f-4.1JqM
WebHook-Request-Origin: eventemitter.example.com
Content-Type: application/cloudevents+json; charset=utf-8
Content-Length: nnnn

{
  "specversion": "1.0",
  "type": "nl.overheid.zaken.zaakstatus-gewijzigd",
  "source": "urn:nld:oin:00000001823288444000:systeem:BRP-component",
  "id": "f3dce042-cd6e-4977-844d-05be8dce7cea",
   ... further attributes omitted ...
}
```

Delivery response:
``` 
HTTP/1.1 204 No Content
```

## Normative References

- [HTTP 1.1 Web Hooks for Event Delivery - Version 1.0.1](https://github.com/cloudevents/spec/blob/v1.0.1/http-webhook.md)

