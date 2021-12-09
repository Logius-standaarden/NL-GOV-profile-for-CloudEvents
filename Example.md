## Example

The following example shows a CloudEvent serialized as JSON:

```JSON
{
    "specversion" : "1.0",
    "type" : "com.github.pull_request.opened",
    "source" : "https://github.com/cloudevents/spec/pull",
    "subject" : "123",
    "id" : "A234-1234-1234",
    "time" : "2018-04-05T17:31:00Z",
    "comexampleextension1" : "value",
    "comexampleothervalue" : 5,
    "datacontenttype" : "text/xml",
    "data" : "<much wow=\"xml\"/>"
}
```

**CloudEvents-NL**

In the example below, a number of agreements are visible as they apply within the CloudEvents-NL profile.
In order to show as much things as possible, this is done in the form of a very extensive message. 
In minimal form, a message contains only four mandatory attributes: `id`, `source`, `specversion` and `type`.
For more information about a particular attribute, see the detailed attribute description.

```JSON
{
  "specversion": "1.0",
  "type": "nl.overheid.zaken.zaakstatus-gewijzigd",
  "source": "urn:nld:oin:00000001823288444000:systeem:BRP-component",
  "subject": "123456789",
  "id": "f3dce042-cd6e-4977-844d-05be8dce7cea",
  "time": "2021-12-10T17:31:00Z",
  "nl-brp-geslacht": "V",
  "nl-brp-nationaliteit": "0083",
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

| Attribute | Explanation |
| :------------- | :---------- | 
|   &nbsp; specversion | Always '1.0' |
|   &nbsp; type | Reverse DNS notation |
|   &nbsp; source | Urn notation with 'nld' namespace identifier |
|   &nbsp; subject | BSN as example; yet to be seen if and how attribute 'subject' will be used |
|   &nbsp; id | Uuid (unique)|
|   &nbsp; time | Time when event was recorded |
|   &nbsp; nl-brp-geslacht | Extension attribute with a BRP-domain specific meaning |
|   &nbsp; nl-brp-nationaliteit | Extension attribute with a BRP-domain specific meaning |
|   &nbsp; dataref  | Extension attribute with a reference to where to get additional information |
|   &nbsp; sequence | Extension attribute with an event tracking number |
|   &nbsp; sequencetype | Extension attribut with indication of the type of sequence used |
|   &nbsp; datacontenttype  | Indication of content type in attribute 'data' |
|   &nbsp; data | Content information for consumer ('payload') |