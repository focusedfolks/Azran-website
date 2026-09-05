const KEEP = new Set(["HVAC", "&"]);

const SMALL = new Set(["a", "an", "the", "and", "or", "of", "for", "to", "in", "on"]);

/** Title Case a service name for headlines; nav/footer keep the source Title Case. */
export function asServiceHeading(title: string): string {
  return title
    .split(" ")
    .map((word, index) => {
      if (KEEP.has(word)) return word;
      const lower = word.toLowerCase();
      if (index > 0 && SMALL.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}
