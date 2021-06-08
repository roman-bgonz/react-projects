import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks-personalizados/useFetch";

export default function HooksPersonalizados() {
  let url = "http://jsonplaceholder.typicode.com/users";

  let { data, isPending, error } = useFetch(url);
  return (
    <>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          <code>{JSON.stringify(data)}</code>
        </pre>
      </h3>
    </>
  );
}
