export default function offsetLimitPagination() {
  return {
    keyArgs: false,
    merge(existing, incoming, { args: { offset = 0 } }) {
      console.log(existing, incoming);
      const existingResults = existing?.results || [];
      const incomingResults = incoming.results;
      const merged = existingResults ? existingResults.slice(0) : [];
      for (let i = 0; i < incomingResults.length; ++i) {
        merged[offset + i] = incomingResults[i];
      }
      return {
        ...incoming,
        results: merged,
      };
    },
  };
}
