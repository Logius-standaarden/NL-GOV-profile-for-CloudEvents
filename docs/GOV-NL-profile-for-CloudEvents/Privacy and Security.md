## Advanced CloudEvents Security Options

Interoperability is the primary driver behind this specification, enabling such
behavior requires some information to be made available _in the clear_ resulting
in the potential for information leakage.

Consider the following to prevent inadvertent leakage especially when leveraging
3rd party platforms and communication networks:

- Context Attributes

  Sensitive information SHOULD NOT be carried or represented in context
  attributes.

  CloudEvent producers, consumers, and intermediaries MAY introspect and log
  context attributes.

- Data

  Domain specific [event data](#event-data) SHOULD be encrypted to restrict
  visibility to trusted parties. The mechanism employed for such encryption is
  an agreement between producers and consumers and thus outside the scope of
  this specification.

- Protocol Bindings

  Protocol level security SHOULD be employed to ensure the trusted and secure
  exchange of CloudEvents.
