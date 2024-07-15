## Notations and Terminology

### Notational Conventions

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be
interpreted as described in [RFC 2119](https://tools.ietf.org/html/rfc2119).

For clarity, when a feature is marked as "OPTIONAL" this means that it is
OPTIONAL for both the [Producer](#producer) and [Consumer](#consumer) of a
message to support that feature. In other words, a producer can choose to
include that feature in a message if it wants, and a consumer can choose to
support that feature if it wants. A consumer that does not support that feature
will then silently ignore that part of the message. The producer needs to be
prepared for the situation where a consumer ignores that feature. An
[Intermediary](#intermediary) SHOULD forward OPTIONAL attributes.

### Terminology

This specification defines the following terms:

#### Occurrence

An "occurrence" is the capture of a statement of fact during the operation of a
software system. This might occur because of a signal raised by the system or a
signal being observed by the system, because of a state change, because of a
timer elapsing, or any other noteworthy activity. For example, a device might go
into an alert state because the battery is low, or a virtual machine is about to
perform a scheduled reboot.

#### Event

An "event" is a data record expressing an occurrence and its context. Events are
routed from an event producer (the source) to interested event consumers. The
routing can be performed based on information contained in the event, but an
event will not identify a specific routing destination. Events will contain two
types of information: the [Event Data](#event-data) representing the Occurrence
and [Context](#context) metadata providing contextual information about the
Occurrence. A single occurrence MAY result in more than one event.

#### Producer

The "producer" is a specific instance, process or device that creates the data
structure describing the CloudEvent.

#### Source

The "source" is the context in which the occurrence happened. In a distributed
system it might consist of multiple [Producers](#producer). If a source is not
aware of CloudEvents, an external producer creates the CloudEvent on behalf of
the source.

#### Consumer

A "consumer" receives the event and acts upon it. It uses the context and data
to execute some logic, which might lead to the occurrence of new events.

#### Intermediary

An "intermediary" receives a message containing an event for the purpose of
forwarding it to the next receiver, which might be another intermediary or a
[Consumer](#consumer). A typical task for an intermediary is to route the event
to receivers based on the information in the [Context](#context).

#### Context

Context metadata will be encapsulated in the
[Context Attributes](#context-attributes). Tools and application code can use
this information to identify the relationship of Events to aspects of the system
or to other Events.

#### Data

Domain-specific information about the occurrence (i.e. the payload). This might
include information about the occurrence, details about the data that was
changed, or more. See the [Event Data](#event-data) section for more
information.

#### Event Format

An Event Format specifies how to serialize a CloudEvent as a sequence of bytes.
Stand-alone event formats, such as the [JSON format](https://github.com/cloudevents/spec/blob/v1.0.2/json-format.md), specify
serialization independent of any protocol or storage medium. Protocol Bindings
MAY define formats that are dependent on the protocol.

#### Message

Events are transported from a source to a destination via messages.

A "structured-mode message" is one where the event is fully encoded using
a stand-alone event format and stored in the message body.

A "binary-mode message" is one where the event data is stored in the message
body, and event attributes are stored as part of message meta-data.

#### Protocol

Messages can be delivered through various industry standard protocol (e.g. HTTP,
AMQP, MQTT, SMTP), open-source protocols (e.g. Kafka, NATS), or platform/vendor
specific protocols (AWS Kinesis, Azure Event Grid).

#### Protocol Binding

A protocol binding describes how events are sent and received over a given
protocol.

Protocol bindings MAY choose to use an [Event Format](#event-format) to map an
event directly to the transport envelope body, or MAY provide additional
formatting and structure to the envelope. For example, a wrapper around a
structured-mode message might be used, or several messages could be batched
together into a transport envelope body.