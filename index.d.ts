function Throw(error: Error): never;
function Throw(...args: any[]): never;
function Throw<T extends Error>(errorConstructor: { new(): T }, ...args: any[]): never;
export default Throw;
