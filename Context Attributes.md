# Context Attributes
<!-- ## [3.](#rfc.section.3) [Authorization Server Profile](#ServerProfile) -->

Every CloudEvent conforming to this specification MUST include context
attributes designated as REQUIRED, MAY include one or more OPTIONAL context
attributes and MAY include one or more extension attributes.

These attributes, while descriptive of the event, are designed such that they
can be serialized independent of the event data. This allows for them to be
inspected at the destination without having to deserialize the event data.

## Attribute Naming Convention

The CloudEvents specifications define mappings to various protocols and
encodings, and the accompanying CloudEvents SDK targets various runtimes and
languages. Some of these treat metadata elements as case-sensitive while others
do not, and a single CloudEvent might be routed via multiple hops that involve a
mix of protocols, encodings, and runtimes. Therefore, this specification limits
the available character set of all attributes such that case-sensitivity issues
or clashes with the permissible character set for identifiers in common
languages are prevented.

CloudEvents attribute names MUST consist of lower-case letters ('a' to 'z') or
digits ('0' to '9') from the ASCII character set. Attribute names SHOULD be
descriptive and terse and SHOULD NOT exceed 20 characters in length.

## Type System

The following abstract data types are available for use in attributes. Each of
these types MAY be represented differently by different event formats and in
protocol metadata fields. This specification defines a canonical
string-encoding for each type that MUST be supported by all implementations.

- `Boolean` - a boolean value of "true" or "false".
  - String encoding: a case-sensitive value of `true` or `false`.
- `Integer` - A whole number in the range -2,147,483,648 to +2,147,483,647
  inclusive. This is the range of a signed, 32-bit, twos-complement encoding.
  Event formats do not have to use this encoding, but they MUST only use
  `Integer` values in this range.
  - String encoding: Integer portion of the JSON Number per
    [RFC 7159, Section 6](https://tools.ietf.org/html/rfc7159#section-6)
- `String` - Sequence of allowable Unicode characters. The following characters
  are disallowed:
  - the "control characters" in the ranges U+0000-U+001F and U+007F-U+009F (both
    ranges inclusive), since most have no agreed-on meaning, and some, such as
    U+000A (newline), are not usable in contexts such as HTTP headers.
  - code points
    [identified as noncharacters by Unicode](http://www.unicode.org/faq/private_use.html#noncharacters).
  - code points identifying Surrogates, U+D800-U+DBFF and U+DC00-U+DFFF, both
    ranges inclusive, unless used properly in pairs. Thus (in JSON notation)
    "\uDEAD" is invalid because it is an unpaired surrogate, while
    "\uD800\uDEAD" would be legal.
- `Binary` - Sequence of bytes.
  - String encoding: Base64 encoding per
    [RFC4648](https://tools.ietf.org/html/rfc4648).
- `URI` - Absolute uniform resource identifier.
  - String encoding: `Absolute URI` as defined in
    [RFC 3986 Section 4.3](https://tools.ietf.org/html/rfc3986#section-4.3).
- `URI-reference` - Uniform resource identifier reference.
  - String encoding: `URI-reference` as defined in
    [RFC 3986 Section 4.1](https://tools.ietf.org/html/rfc3986#section-4.1).
- `Timestamp` - Date and time expression using the Gregorian Calendar.
  - String encoding: [RFC 3339](https://tools.ietf.org/html/rfc3339).

All context attribute values MUST be of one of the types listed above.
Attribute values MAY be presented as native types or canonical strings.

A strongly-typed programming model that represents a CloudEvent or any extension
MUST be able to convert from and to the canonical string-encoding to the
runtime/language native type that best corresponds to the abstract type.

For example, the `time` attribute might be represented by the language's native
_datetime_ type in a given implementation, but it MUST be settable providing an
RFC3339 string, and it MUST be convertible to an RFC3339 string when mapped to a
header of an HTTP message.

A CloudEvents protocol binding or event format implementation MUST likewise be
able to convert from and to the canonical string-encoding to the corresponding
data type in the encoding or in protocol metadata fields.

An attribute value of type `Timestamp` might indeed be routed as a string
through multiple hops and only materialize as a native runtime/language type at
the producer and ultimate consumer. The `Timestamp` might also be routed as a
native protocol type and might be mapped to/from the respective
language/runtime types at the producer and consumer ends, and never materialize
as a string.

The choice of serialization mechanism will determine how the context attributes
and the event data will be serialized. For example, in the case of a JSON
serialization, the context attributes and the event data might both appear
within the same JSON object.

## REQUIRED Attributes

The following attributes are REQUIRED to be present in all CloudEvents:

### id

- Type: `String`
- Description: Identifies the event. Producers MUST ensure that `source` + `id`
  is unique for each distinct event. ~~If a duplicate event is re-sent (e.g. due
  to a network error) it MAY have the same `id`.~~ Consumers MAY assume that
  Events with identical `source` and `id` are duplicates.
- Constraints:
  - REQUIRED
  - MUST be a non-empty string
  - MUST be unique within the scope of the producer
- Examples:
  - An ID  counter maintained by the producer
  - A UUID

<aside class=" addition">
<b>CloudEvents-NL: Additional content</b></br>  

- Constraints:
  - If an ID is available that can persistently identify the event, producers MUST 
    use that ID. For example so that consumers may use `id` to request information
    about the event from the source.
  - If no ID is available that can persistently identify the event producers SHOULD use a random ID:
    - SHOULD use a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).
    - MUST describe the limitations (e.g., that it's just a random ID and has no relation to the occurrence event) in the [[[#dataschema]]] attribute.
- Examples:
  - 'doc2021033441' (ID of the document created as a result of an event that occurred).
  - 'f3dce042-cd6e-4977-844d-05be8dce7cea' (UUID generated with the sole function of 
    being able to uniquely identify the event.
</aside>
 
### source

- Type: `URI-reference`
- Description: Identifies the context in which an event happened. Often this
  will include information such as the type of the event source, the
  organization publishing the event or the process that produced the event. The
  exact syntax and semantics behind the data encoded in the URI is defined by
  the event producer.

  Producers MUST ensure that `source` + `id` is unique for each distinct event.

  An application MAY assign a unique `source` to each distinct producer, which
  makes it easy to produce unique IDs since no other producer will have the same
  source. The application MAY use UUIDs, URNs, DNS authorities or an
  application-specific scheme to create unique `source` identifiers.

  A source MAY include more than one producer. In that case the producers MUST
  collaborate to ensure that `source` + `id` is unique for each distinct event.

- Constraints:
  - REQUIRED
  - MUST be a non-empty URI-reference
  - An absolute URI is RECOMMENDED
- Examples
  - Internet-wide unique URI with a DNS authority.
    - https://github.com/cloudevents
    - mailto:cncf-wg-serverless@lists.cncf.io
  - Universally-unique URN with a UUID:
    - urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66
  - Application-specific identifiers
    - /cloudevents/spec/pull/123
    - /sensors/tn-1234567/alerts
    - 1-555-123-4567

<aside class=" addition">
<b>CloudEvents-NL: Additional content</b></br> 

- Constraints:
  - SHOULD be a [URN notation](https://en.wikipedia.org/wiki/Uniform_Resource_Name) with 'nld' as namespace identifier.
  - SHOULD contain consecutive a unique identifier of:
    - the organization that publishes the event
    - the source system that publishes the event.
  - involved organizations SHOULD agree on how organizations and systems are uniquely identified (e.g. via the use of OIN, KVK-nummer or for organization identification);
    - In line with [[[ADR]]]:
      - SHOULD use the "[organisatie-identificatienummer](https://www.logius.nl/domeinen/toegang/organisatie-identificatienummer)" (OIN) for identifying Dutch government organizations
      - SHOULD use the [KvK-nummer](https://www.kvk.nl/starten/kvk-nummer-alles-wat-je-moet-weten/) for identifying Dutch non-government organizations (companies, associations, foundations etc...)
      - SHOULD use the [eIDAS legal identifier](https://afsprakenstelsel.etoegang.nl/) in the EU context.
  national, European or worldwide)
    - SHOULD choose an abstraction level for the source that can be used sustainably; even if the initial scope expands (e.g., scope creep from domain specific to more general categorization).
  - MUST NOT be used to reference an external data location (see [[[#dataref]]]).
- Examples:
  - urn:nld:oin:00000001823288444000:systeem:BRP-component
  - urn:nld:kvknr:09220932.burgerzakensysteem
  - urn:nld:gemeente-nijmegen.burgerzakensysteem
  - urn:nld:gemeente-Bergen%20%28L%29.burgerzakensysteem
    **_Comment_**: The use of (unique) descriptions increases recognisability, but also has disadvantages such as occurred changes or required encoding (like in the above example where "Bergen (L)" requires encoding).
</aside>

### specversion

- Type: `String`
- Description: The version of the CloudEvents specification which the event
  uses. This enables the interpretation of the context. Compliant event
  producers MUST use a value of `1.0` when referring to this version of the
  specification.

  Currently, this attribute will only have the 'major' and 'minor' version
  numbers included in it. This allows for 'patch' changes to the specification
  to be made without changing this property's value in the serialization.
  Note: for 'release candidate' releases a suffix might be used for testing
  purposes.

- Constraints:
  - REQUIRED
  - MUST be a non-empty string

### type

- Type: `String`
- Description: This attribute contains a value describing the type of event
  related to the originating occurrence. Often this attribute is used for
  routing, observability, policy enforcement, etc. The format of this is
  producer defined and might include information such as the version of the
  `type` - see
  [Versioning of CloudEvents in the Primer](https://github.com/cloudevents/spec/blob/v1.0.1/primer.md#versioning-of-cloudevents)
  for more information.
- Constraints:
  - REQUIRED
  - MUST be a non-empty string
  - SHOULD be prefixed with a reverse-DNS name. The prefixed domain dictates the
    organization which defines the semantics of this event type.
- Examples
  - com.github.pull_request.opened
  - com.example.object.deleted.v2

<aside class=" addition">
<b>CloudEvents-NL: Additional content</b></br> 

Constraints:
- MUST be [Reverse domain name notation](https://en.wikipedia.org/wiki/Reverse_domain_name_notation)
- MAY be further specified by adding a suffix (for example: nl.brp.verhuizing.binnengemeentelijk)
- Producers MUST facilitate consumers to request additional information on the type and adequatly explain the exact meaning.
- SHOULD stay the same when a CloudEvent's data changes in a backwardly-compatible way.
- SHOULD change when a CloudEvent's data changes in a backwardly-incompatible way.
- The producer SHOULD produce both the old event and the new event for some time (potentially forever) in order to
 avoid disrupting consumers.
- The producer decides if versioning is used.
- If versioning is used, the type attribute MUST only include a single version number, prefixed by the letter `v`
- In descending order of preference one SHOULD use the name of a:
  - data source (for example: 'nl.brp.persoon-verhuisd)
  - domain (for example: nl.natuurlijke-personen.persoon-verhuisd); for domain designation plural MUST be used.
  - law or rule (for example: nl.amsterdam.erfpacht.overdracht)
- Names of organizations SHOULD NOT be used (because they are not time invariant).

</aside>


## OPTIONAL Attributes

The following attributes are OPTIONAL to appear in CloudEvents. See the
[Notational Conventions](#notational-conventions) section for more information
on the definition of OPTIONAL.

### datacontenttype

- Type: `String` per [RFC 2046](https://tools.ietf.org/html/rfc2046)
- Description: Content type of `data` value. This attribute enables `data` to
  carry any type of content, whereby format and encoding might differ from that
  of the chosen event format. For example, an event rendered using the
  [JSON envelope](https://github.com/cloudevents/spec/blob/v1.0.1/json-format.md#3-envelope) format might carry an XML payload
  in `data`, and the consumer is informed by this attribute being set to
  "application/xml". The rules for how `data` content is rendered for different
  `datacontenttype` values are defined in the event format specifications; for
  example, the JSON event format defines the relationship in
  [section 3.1](https://github.com/cloudevents/spec/blob/v1.0.1/json-format.md#31-handling-of-data).

  For some binary mode protocol bindings, this field is directly mapped to the
  respective protocol's content-type metadata property. Normative rules for the
  binary mode and the content-type metadata mapping can be found in the
  respective protocol

  In some event formats the `datacontenttype` attribute MAY be omitted. For
  example, if a JSON format event has no `datacontenttype` attribute, then it is
  implied that the `data` is a JSON value conforming to the "application/json"
  media type. In other words: a JSON-format event with no `datacontenttype` is
  exactly equivalent to one with `datacontenttype="application/json"`.

  When translating an event message with no `datacontenttype` attribute to a
  different format or protocol binding, the target `datacontenttype` SHOULD be
  set explicitly to the implied `datacontenttype` of the source.

- Constraints:
  - OPTIONAL
  - If present, MUST adhere to the format specified in
    [RFC 2046](https://tools.ietf.org/html/rfc2046)
- For Media Type examples see
  [IANA Media Types](http://www.iana.org/assignments/media-types/media-types.xhtml)

#### CloudEvents-NL

Constraints:
- JSON-format SHOULD be used (see [[[ADR]]]). Part of this is the intention to
name JSON as the primary representation format for APIs. Because APIs play an 
important role in communicating events (e.g., when using the webhook pattern) the JSON format is 
preferred to use for payload data).

### dataschema

- Type: `URI`
- Description: Identifies the schema that `data` adheres to. Incompatible
  changes to the schema SHOULD be reflected by a different URI. See
  [Versioning of CloudEvents in the Primer](https://github.com/cloudevents/spec/blob/v1.0.1/primer.md#versioning-of-cloudevents)
  for more information.
- Constraints:
  - OPTIONAL
  - If present, MUST be a non-empty URI

#### CloudEvents-NL

Constraints:
- It SHOULD be prevented that different schedules arise for the same data.
- The dataschema attribute is expected to be informational, largely to be used 
  during development and by tooling that is able to provide diagnostic information 
  over arbitrary CloudEvents with a data content type understood by that tooling 
  (see: [The role of the dataschema attribute within versioning](https://github.com/cloudevents/spec/blob/v1.0.1/primer.md#the-role-of-the-dataschema-attribute-within-versioning)

### subject

- Type: `String`
- Description: This describes the subject of the event in the context of the
  event producer (identified by `source`). In publish-subscribe scenarios, a
  subscriber will typically subscribe to events emitted by a `source`, but the
  `source` identifier alone might not be sufficient as a qualifier for any
  specific event if the `source` context has internal sub-structure.

  Identifying the subject of the event in context metadata (opposed to only in
  the `data` payload) is particularly helpful in generic subscription filtering
  scenarios where middleware is unable to interpret the `data` content. In the
  above example, the subscriber might only be interested in blobs with names
  ending with '.jpg' or '.jpeg' and the `subject` attribute allows for
  constructing a simple and efficient string-suffix filter for that subset of
  events.

- Constraints:
  - OPTIONAL
  - If present, MUST be a non-empty string
- Example:
  - A subscriber might register interest for when new blobs are created inside a
    blob-storage container. In this case, the event `source` identifies the
    subscription scope (storage container), the `type` identifies the "blob
    created" event, and the `id` uniquely identifies the event instance to
    distinguish separate occurrences of a same-named blob having been created;
    the name of the newly created blob is carried in `subject`:
    - `source: https://example.com/storage/tenant/container`
    - `subject: mynewfile.jpg`

#### CloudEvents-NL

Constraints:
- Decision on whether or not to use the attribute and/or the exact interpretation is postponed. 
To be determined partly on the basis of future agreements about subscription and filtering.

Example:
  - `source: urn:nld:oin:00000001823288444000:systeem:BRP-component`
  - `type: nl.brp.persoon-gehuwd`
  - `subject: 999990342` (citizen service number)

### time

- Type: `Timestamp`
- Description: Timestamp of when the occurrence happened. If the time of the
  occurrence cannot be determined then this attribute MAY be set to some other
  time (such as the current time) by the CloudEvents producer, however all
  producers for the same `source` MUST be consistent in this respect. In other
  words, either they all use the actual time of the occurrence or they all use
  the same algorithm to determine the value used.
- Constraints:
  - OPTIONAL
  - If present, MUST adhere to the format specified in
    [RFC 3339](https://tools.ietf.org/html/rfc3339)

#### CloudEvents-NL
- The time the event was logged SHOULD be used (in many cases this is the only 
  time that can be determined unambiguously).
- The exact meaning of `time` MUST be clearly documented.
- The time when an event occurred in reality SHOULD NOT be used (if there is a need for this 
  among consumers, this can be included in payload data).
- If the time when an event occurred in reality is needed for things like 
  routing or filtering, it can be included as a context attribute by the producer.

### Extension Context Attributes

A CloudEvent MAY include any number of additional context attributes with
distinct names, known as "extension attributes". Extension attributes MUST
follow the same [naming convention](#attribute-naming-convention) and use the
same [type system](#type-system) as standard attributes. Extension attributes
have no defined meaning in this specification, they allow external systems to
attach metadata to an event, much like HTTP custom headers.

Extension attributes are always serialized according to binding rules like
standard attributes. However this specification does not prevent an extension
from copying event attribute values to other parts of a message, in order to
interact with non-CloudEvents systems that also process the message. Extension
specifications that do this SHOULD specify how receivers are to interpret
messages if the copied values differ from the cloud-event serialized values.

### Defining Extensions

See [CloudEvent Attributes Extensions](https://github.com/cloudevents/spec/blob/v1.0.1/primer.md#cloudevent-attribute-extensions)
for additional information concerning the use and definition of extensions.

The definition of an extension SHOULD fully define all aspects of the
attribute - e.g. its name, type, semantic meaning and possible values. New
extension definitions SHOULD use a name that is descriptive enough to reduce the
chances of name collisions with other extensions. In particular, extension
authors SHOULD check the [documented extensions](https://github.com/cloudevents/spec/blob/v1.0.1/documented-extensions.md)
document for the set of known extensions - not just for possible name conflicts
but for extensions that might be of interest.

Many protocols support the ability for senders to include additional metadata,
for example as HTTP headers. While a CloudEvents receiver is not mandated to
process and pass them along, it is RECOMMENDED that they do so via some
mechanism that makes it clear they are non-CloudEvents metadata.

Here is an example that illustrates the need for additional attributes. In many
IoT and enterprise use cases, an event could be used in a serverless application
that performs actions across multiple types of events. To support such use
cases, the event producer will need to add additional identity attributes to the
"context attributes" which the event consumers can use to correlate this event
with the other events. If such identity attributes happen to be part of the
event "data", the event producer would also add the identity attributes to the
"context attributes" so that event consumers can easily access this information
without needing to decode and examine the event data. Such identity attributes
can also be used to help intermediate gateways determine how to route the
events.

#### CloudEvents-NL

- Two of the extension attributes included by CloudEvents ('dataref' and 
  'sequence') are included as optional attributes in the CloudEvents-NL profile 
  because it is foreseen that there is often a need to use these attributes.
- Extension attributes should be kept minimal to ensure the CloudEvent can be 
  properly serialized and transported (e.g. when using HTTP-headers most HTTP 
  servers will reject requests with excessive HTTP header data).
  
### dataref

- Type: `URI-reference`
- Description: A reference to a location where the event payload is stored. The
  location MAY not be accessible without further information (e.g. a pre-shared
  secret).

  Known as the "Claim Check Pattern", this attribute MAY be used for a variety
  of purposes, including:

  - If the [Data](#data) is too large to be included in the message,
    the `data` is not present, and the consumer can retrieve it using
    this attribute.
  - If the consumer wants to verify that the [Data](#data) has not
    been tampered with, it can retrieve it from a trusted source using this
    attribute.
  - If the [Data](#data) MUST only be viewed by trusted consumers
    (e.g. personally identifiable information), only a trusted consumer can
    retrieve it using this attribute and a pre-shared secret.

  If this attribute is used, the information SHOULD be accessible long enough
  for all consumers to retrieve it, but MAY not be stored for an extended period
  of time.

- Constraints:
  - OPTIONAL

#### Example

The following example shows a CloudEvent in which the event producer has included
both `data` and `dataref` (serialized as JSON):

```JSON
{
    "specversion" : "1.0",
    "type" : "com.github.pull_request.opened",
    "source" : "https://github.com/cloudevents/spec/pull/123",
    "id" : "A234-1234-1234",
    "datacontenttype" : "text/xml",
    "data" : "<much wow=\"xml\"/>",
    "dataref" : "https://github.com/cloudevents/spec/pull/123/events/A234-1234-1234.xml"
}
```

#### CloudEvents-NL

- MAY be used to reference an external data location (for example: a link back to 
  the producer of the event that can be queried for more information about the event).
- MAY be used to implenment 'informatiearm notificeren' where the consumer of the 
  event receives some minimal information on the nature of the event, but then has 
  to issue a request back to the producer to obtain additional information (the time 
  aspect may deserve attention because changes may occur in the period that consumers
  are notified and the time of requesting additional information).

## Sequence

This extension defines two attributes that can be included within a CloudEvent to describe the position of an event in the ordered sequence of events produced by a unique event source.
The `sequence` attribute represents the value of this event's order in the stream of events. The exact value and meaning of this attribute is defined by the `sequencetype` attribute. If the `sequencetype` is missing, or not defined in this specification, event consumers will need to have some out-of-band communication with the event producer to understand how to interpret the value
of the attribute.

### Attributes

#### sequence

- Type: `String`
- Description: Value expressing the relative order of the event. This enables
  interpretation of data supercedence.
- Constraints
  - REQUIRED
  - MUST be a non-empty lexicographically-orderable string
  - RECOMMENDED as monotonically increasing and contiguous

#### sequencetype

- Type: `String`
- Description: Specifies the semantics of the sequence attribute. See the
  [SequenceType Values](#sequencetype-values) section for more information.
- Constraints:
  - OPTIONAL
  - If present, MUST be a non-empty string

##### SequenceType Values

This specification defines the following values for `sequencetype`. Additional
values MAY be defined by other specifications.

##### Integer

If the `sequencetype` is set to `Integer`, the `sequence` attribute has the
following semantics:

- The values of `sequence` are string-encoded signed 32-bit Integers.
- The sequence MUST start with a value of `1` and increase by `1` for each
  subsequent value (i.e. be contiguous and monotonically increasing).
- The sequence wraps around from 2,147,483,647 (2^31 -1) to -2,147,483,648
  (-2^31).

#### CloudEvents-NL

- Attribute 'sequence' can be helpful in situations where:
-  a form of 'pull mechanism' is used ((e.g. periodically fetching events by consumers 
  via HTTP request)) or
- where there is a need for (re)synchronization (e.g. 
  after errors have occurred).
