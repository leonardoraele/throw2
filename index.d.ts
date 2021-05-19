declare function Throw(error: Error): never;
declare function Throw<T extends Error>(errorConstructor: { new(): T }, ...args: any[]): never;
declare function Throw(...args: any[]): never;
export default Throw;
