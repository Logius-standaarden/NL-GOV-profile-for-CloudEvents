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
In order to show several things, this is done in the form of a very extensive message. 
In minimal form, a message contains only four (mandatory) attributes: 'id', 'source', 'specversion' and 'type'.
For more information about a particular attribute, see the detailed attribute description.

| Attributen | Toelichting |
| :------------- | :----------: | 
| { | |
|   &nbsp; "specversion": "1.0", | |
|   &nbsp; "type": "'nl.brp.verhuizing.binnengemeentelijk", | Reverse DNS notation |
|   &nbsp; "source": "urn:nld:gemeente-amersfoort:burgerzaken", | Urn notation with 'nld' namespace identifier |
|   &nbsp; "subject": "670863932", | To be seen if and how attribute 'subject' will be used |
|   &nbsp; "id": "631d6a3a-1f62-483f-b55e-bf164e487b19", | Uuid (unique)|
|   &nbsp; "time": "2021-10-05T17:31:00Z", | Time when event was recorded |
|   &nbsp; "nl-brp-geslachtsaanduiding-persoon": "V", | An extension attribute specified within the domain (e.g. to be used for filtering) |
|   &nbsp; "nl-brp-nationaliteit-persoon": "0083", | An extension attribute specified within the domain (e.g. to be used for filtering) |
|   &nbsp; "dataref": "https://example.com/dummyresource/12345", | Reference to where to get additional information |
|   &nbsp; "sequence": "2314", | Event tracking number |
|   &nbsp; "sequencetype": "integer", | Indication of the type of sequence used |
|   &nbsp; "datacontenttype": "application/json", | Indication of content type in attribute 'data' |
|   &nbsp; "data": { | Content information for consumer ('payload') |
|     &nbsp; &nbsp; "bsn": "670863932", | |
|     &nbsp; &nbsp; "naam": "Jan Jansen", | |
|     &nbsp; &nbsp; "gecontroleerd": true | |
|   &nbsp; } | |
| } | |
