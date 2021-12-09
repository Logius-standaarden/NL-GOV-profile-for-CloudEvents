## Overview
<!-- ### [1.](#rfc.section.1) [Introduction](#Introduction) -->

Events are everywhere. However, event producers tend to describe events
differently.

The lack of a common way of describing events means developers are constantly
re-learning how to consume events. This also limits the potential for libraries,
tooling and infrastructure to aid the delivery of event data across
environments, like SDKs, event routers or tracing systems. The portability and
productivity that can be achieved from event data is hindered overall.

CloudEvents is a specification for describing event data in common formats to
provide interoperability across services, platforms and systems.

Event Formats specify how to serialize a CloudEvent with certain encoding
formats. Compliant CloudEvents implementations that support those encodings MUST
adhere to the encoding rules specified in the respective event format. All
implementations MUST support the [JSON format](json-format.md).

For more information on the history, development and design rationale behind the
specification, see the [CloudEvents Primer](primer.md) document.


