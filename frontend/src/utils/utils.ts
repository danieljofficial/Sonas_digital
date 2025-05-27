type NonEmptyObject<T> = {
  [K in keyof T as T[K] extends string
    ? T[K] extends ""
      ? never
      : K
    : T[K] extends Array<any>
    ? T[K] extends []
      ? never
      : K
    : T[K] extends null
    ? never
    : K]: T[K];
};

export function stripEmptyProperties<T extends object>(
  obj: T
): NonEmptyObject<T> {
  const result: Partial<T> = {};

  for (const key in obj) {
    const value = obj[key];

    // Skip if value is null
    if (value === null) continue;

    // Skip if value is an empty string
    if (typeof value === "string" && value === "") continue;

    // Skip if value is an empty array
    if (Array.isArray(value) && value.length === 0) continue;

    // Skip if value is File but null (though File can't be null here since we checked null earlier)

    // Otherwise keep the property
    result[key] = value;
  }

  return result as unknown as NonEmptyObject<T>;
}
