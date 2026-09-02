const KEEP = new Set(["HVAC", "&"]);

/** Sentence-case a service name for headlines; nav/footer keep the Title Case source. */
export function asServiceHeading(title: string): string {
  return title
    .split(" ")
    .map((word, index) => {
      if (KEEP.has(word)) return word;
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    })
    .join(" ");
}
