export function RequireSingleDataItem(_: any, __: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (this: { data: any[] }, ...args: any[]) {
    if (!Array.isArray(this.data)) {
      throw new Error(`Expected "data" to be an array.`);
    }

    if (this.data.length !== 1) {
      throw new Error("Data must contain exactly one item.");
    }

    return originalMethod.apply(this, args);
  };

  return descriptor;
}
