# CloudEvents Extension Attributes

Alongside the core specification, the CloudEvents project keeps a catalogue of documented extension attributes [CloudEvents-Extensions](https://github.com/cloudevents/spec/blob/main/cloudevents/extensions/README.md) . These cover concerns that the core attributes leave out on purpose. Examples are distributed tracing, partitioning, event ordering, expiry, data classification and references to externally stored data.

CNCF states that documented extensions have no official standing and can be changed or removed at any time. That makes them unsuitable as a normative basis for a government-wide profile. Support for any documented extension is therefore optional for producers, consumers and intermediaries. Before defining a new extension attribute, a producer should check the catalogue.

This profile refers to two documented extensions:

- `dataref`, in [source](#source-0): a reference to an external data location
  belongs in `dataref`, not in `source`.
- `sequence`, in the [example](#example): its value must be a lexicographically
  orderable string, so numeric counters need zero-padding (for example
  `"0000001234"`).
