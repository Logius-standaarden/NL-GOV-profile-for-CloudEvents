# Guideline for the use of the JSON Event Format for CloudEvents

The CloudEvent-NL message format can be used when using different formats and protocols and patterns. In order to be able to use the GOV-NL profile properly in practice, agreements must also be made when and in what way a certain format, protocol or pattern is used. 

The Serverless Working Group has described how the JavaScript Object Notation (JSON) Data Interchange Format can be used in a standardized way in combination with the CloudEvents message format: [JSON Event Format for CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/json-format.md).

Similar to what happened in the NL GOV profile for the CloudEvents specification, this guideline makes recommendations about the use of the JSON specification within the context of the Dutch government. These are intended to make use of the specification more unambiguous and to work towards standardisation in the long term.

The JSON Format for CloudEvents specification defines how events are expressed in JSON. The JSON syntax is not a specification of a complete data interchange. Meaningful data interchange requires agreement between a producer and consumer on the semantics attached to a particular use of the JSON syntax. What JSON does provide is the syntactic framework to which such semantics can be attached.

## Summary with points for attention 

- Each CloudEvents event can be wholly represented as a JSON object and MUST use the media type `application/cloudevents+json`.
- The [CloudEvents JSONSchema](https://github.com/cloudevents/spec/blob/v1.0.1/spec.json) for the spec can be used to validate events in JSON.
- Unset attributes MAY be encoded to the JSON value of null. When decoding attributes and a null value is encountered, it MUST be treated as the equivalent of unset or omitted. OPTIONAL not omitted attributes MAY be represented as a null JSON value.
- The runtime data type of the `data' content inside the JSON object can be either:
    - a textual [JSON value](https://tools.ietf.org/html/rfc7159#section-3) with member name `data`
    - a binary JSON string expression containing the [Base64](https://tools.ietf.org/html/rfc4648#section-4) encoded binary value with member name `data_base64` 
- So if a `data_base64` member is present it indicates that its value is Base64 encoded binary data.
- JSON Batch Format can be used to batch several CloudEvents into a single JSON document.
    - The document contains a JSON array filled with CloudEvents in the JSON Event format.
    - Media type `application/cloudevents-batch+json` MUST be used.
    - The JSON Batch Format MUST NOT be used when only support for the JSON Format is indicated.

## Recommendations

- One SHOULD use the [JSON Event Format for CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.1/json-format.md). 
- There are no agreements to deviate from the standard in any part.
- If applicable then one SHOULD use JSON as primary event format:
  - JSON is the only event format that [MUST be supported](https://github.com/cloudevents/spec/blob/v1.0.1/http-protocol-binding.md#14-event-formats) when HTTP structured content mode is used.
  - JSON will be the primary format for APIs as formulated within the [API strategie voor de Nederlandse overheid - Extensies](https://docs.geostandaarden.nl/api/vv-hr-API-Strategie-ext-20190715/#json).

## Examples

Event with an attribute 'geheimnummer' having a null value and a 'data' attribute with a JSON value:
```
{
  "specversion": "1.0",
  "type": "nl.overheid.zaken.zaakstatus-gewijzigd",
  "source": "urn:nld:oin:00000001823288444000:systeem:BRP-component",
  "subject": "123456789",
  "id": "f3dce042-cd6e-4977-844d-05be8dce7cea",
  "time": "2021-12-10T17:31:00Z",
  "nlbrpnationaliteit": "0083",
  "geheimnummer": null,
  "dataref": "https://gemeenteX/api/persoon/123456789",
  "sequence": "1234",
  "sequencetype": "integer",
  "datacontenttype": "application/json",
  "data": {
    "bsn": "1234567789",
    "naam": "Jan Jansen",
    "gecontroleerd": "ja"
  }
}
```

Event with both the attribute 'datacontenttype' and 'data_base64' and a JSON string expression with Base64 encoded binary data as value of the 'data_base64' attribute:
```
{
  "specversion": "1.0",
  "type": "nl.overheid.zaken.zaakstatus-gewijzigd",
  "source": "urn:nld:oin:00000001823288444000:systeem:BRP-component",
  "id": "f3dce042-cd6e-4977-844d-05be8dce7cea",
  "datacontenttype": "application/vnd.apache.thrift.binary",
  "data_base64": "YWFwIG5vb3QgbWllcw=="
}
```

Event with only the attribute 'data_base64' and a JSON string expression with Base64 encoded binary data as value of the 'data_base64' attribute:
```
{
  "specversion": "1.0",
  "type": "nl.overheid.zaken.zaakstatus-gewijzigd",
  "source": "urn:nld:oin:00000001823288444000:systeem:BRP-component",
  "id": "f3dce042-cd6e-4977-844d-05be8dce7cea",
  "data_base64" : "YWFwIG5vb3QgbWllcw=="
}
```

## Normative References

- [JSON Event Format for CloudEvents - Version 1.0.1](https://github.com/cloudevents/spec/blob/v1.0.1/json-format.md)
