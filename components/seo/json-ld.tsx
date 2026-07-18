/**
 * Renders one or more JSON-LD objects as <script type="application/ld+json">.
 * Server component — the data comes from our own schema builders (no user input),
 * so serialization is safe. Accepts a single object or an array.
 */
import React from "react";

type JsonLdObject = Record<string, unknown>;

const JsonLd = ({ data }: { data: JsonLdObject | JsonLdObject[] }) => {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify escapes </script> content safely for our own data.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
};

export default JsonLd;
