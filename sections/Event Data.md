# Event Data

As defined by the term [Data](#data), CloudEvents MAY include domain-specific
information about the occurrence. When present, this information will be
encapsulated within `data`.

- Description: The event payload. This specification does not place any
  restriction on the type of this information. It is encoded into a media format
  which is specified by the `datacontenttype` attribute (e.g. application/json),
  and adheres to the `dataschema` format when those respective attributes are
  present.

- Constraints:
  - OPTIONAL
