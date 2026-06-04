
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Restaurant
 * 
 */
export type Restaurant = $Result.DefaultSelection<Prisma.$RestaurantPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model Theme
 * 
 */
export type Theme = $Result.DefaultSelection<Prisma.$ThemePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model MenuItem
 * 
 */
export type MenuItem = $Result.DefaultSelection<Prisma.$MenuItemPayload>
/**
 * Model Table
 * 
 */
export type Table = $Result.DefaultSelection<Prisma.$TablePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model OrderHistory
 * 
 */
export type OrderHistory = $Result.DefaultSelection<Prisma.$OrderHistoryPayload>
/**
 * Model HistoryItem
 * 
 */
export type HistoryItem = $Result.DefaultSelection<Prisma.$HistoryItemPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model PaymentHistory
 * 
 */
export type PaymentHistory = $Result.DefaultSelection<Prisma.$PaymentHistoryPayload>
/**
 * Model WaiterRequest
 * 
 */
export type WaiterRequest = $Result.DefaultSelection<Prisma.$WaiterRequestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrderStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.RestaurantDelegate<ExtArgs>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs>;

  /**
   * `prisma.theme`: Exposes CRUD operations for the **Theme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Themes
    * const themes = await prisma.theme.findMany()
    * ```
    */
  get theme(): Prisma.ThemeDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.menuItem`: Exposes CRUD operations for the **MenuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItem.findMany()
    * ```
    */
  get menuItem(): Prisma.MenuItemDelegate<ExtArgs>;

  /**
   * `prisma.table`: Exposes CRUD operations for the **Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.TableDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs>;

  /**
   * `prisma.orderHistory`: Exposes CRUD operations for the **OrderHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderHistories
    * const orderHistories = await prisma.orderHistory.findMany()
    * ```
    */
  get orderHistory(): Prisma.OrderHistoryDelegate<ExtArgs>;

  /**
   * `prisma.historyItem`: Exposes CRUD operations for the **HistoryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoryItems
    * const historyItems = await prisma.historyItem.findMany()
    * ```
    */
  get historyItem(): Prisma.HistoryItemDelegate<ExtArgs>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs>;

  /**
   * `prisma.paymentHistory`: Exposes CRUD operations for the **PaymentHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentHistories
    * const paymentHistories = await prisma.paymentHistory.findMany()
    * ```
    */
  get paymentHistory(): Prisma.PaymentHistoryDelegate<ExtArgs>;

  /**
   * `prisma.waiterRequest`: Exposes CRUD operations for the **WaiterRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaiterRequests
    * const waiterRequests = await prisma.waiterRequest.findMany()
    * ```
    */
  get waiterRequest(): Prisma.WaiterRequestDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    Restaurant: 'Restaurant',
    Staff: 'Staff',
    Theme: 'Theme',
    Category: 'Category',
    MenuItem: 'MenuItem',
    Table: 'Table',
    Order: 'Order',
    OrderItem: 'OrderItem',
    OrderHistory: 'OrderHistory',
    HistoryItem: 'HistoryItem',
    Feedback: 'Feedback',
    PaymentHistory: 'PaymentHistory',
    WaiterRequest: 'WaiterRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "admin" | "restaurant" | "staff" | "theme" | "category" | "menuItem" | "table" | "order" | "orderItem" | "orderHistory" | "historyItem" | "feedback" | "paymentHistory" | "waiterRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Restaurant: {
        payload: Prisma.$RestaurantPayload<ExtArgs>
        fields: Prisma.RestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findFirst: {
            args: Prisma.RestaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findMany: {
            args: Prisma.RestaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          create: {
            args: Prisma.RestaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          createMany: {
            args: Prisma.RestaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestaurantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          delete: {
            args: Prisma.RestaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          update: {
            args: Prisma.RestaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RestaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.RestaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      Theme: {
        payload: Prisma.$ThemePayload<ExtArgs>
        fields: Prisma.ThemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findFirst: {
            args: Prisma.ThemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findMany: {
            args: Prisma.ThemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          create: {
            args: Prisma.ThemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          createMany: {
            args: Prisma.ThemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThemeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          delete: {
            args: Prisma.ThemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          update: {
            args: Prisma.ThemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          deleteMany: {
            args: Prisma.ThemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ThemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          aggregate: {
            args: Prisma.ThemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTheme>
          }
          groupBy: {
            args: Prisma.ThemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThemeCountArgs<ExtArgs>
            result: $Utils.Optional<ThemeCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      MenuItem: {
        payload: Prisma.$MenuItemPayload<ExtArgs>
        fields: Prisma.MenuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findFirst: {
            args: Prisma.MenuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findMany: {
            args: Prisma.MenuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          create: {
            args: Prisma.MenuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          createMany: {
            args: Prisma.MenuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          delete: {
            args: Prisma.MenuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          update: {
            args: Prisma.MenuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          aggregate: {
            args: Prisma.MenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItem>
          }
          groupBy: {
            args: Prisma.MenuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCountAggregateOutputType> | number
          }
        }
      }
      Table: {
        payload: Prisma.$TablePayload<ExtArgs>
        fields: Prisma.TableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findFirst: {
            args: Prisma.TableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findMany: {
            args: Prisma.TableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          create: {
            args: Prisma.TableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          createMany: {
            args: Prisma.TableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          delete: {
            args: Prisma.TableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          update: {
            args: Prisma.TableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          deleteMany: {
            args: Prisma.TableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          aggregate: {
            args: Prisma.TableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable>
          }
          groupBy: {
            args: Prisma.TableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableCountArgs<ExtArgs>
            result: $Utils.Optional<TableCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      OrderHistory: {
        payload: Prisma.$OrderHistoryPayload<ExtArgs>
        fields: Prisma.OrderHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          findFirst: {
            args: Prisma.OrderHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          findMany: {
            args: Prisma.OrderHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>[]
          }
          create: {
            args: Prisma.OrderHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          createMany: {
            args: Prisma.OrderHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>[]
          }
          delete: {
            args: Prisma.OrderHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          update: {
            args: Prisma.OrderHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          deleteMany: {
            args: Prisma.OrderHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          aggregate: {
            args: Prisma.OrderHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderHistory>
          }
          groupBy: {
            args: Prisma.OrderHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<OrderHistoryCountAggregateOutputType> | number
          }
        }
      }
      HistoryItem: {
        payload: Prisma.$HistoryItemPayload<ExtArgs>
        fields: Prisma.HistoryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryItemPayload>
          }
          findFirst: {
            args: Prisma.HistoryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryItemPayload>
          }
          findMany: {
            args: Prisma.HistoryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryItemPayload>[]
          }
          create: {
            args: Prisma.HistoryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryItemPayload>
          }
          createMany: {
            args: Prisma.HistoryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryItemPayload>[]
          }
          delete: {
            args: Prisma.HistoryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryItemPayload>
          }
          update: {
            args: Prisma.HistoryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryItemPayload>
          }
          deleteMany: {
            args: Prisma.HistoryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryItemPayload>
          }
          aggregate: {
            args: Prisma.HistoryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoryItem>
          }
          groupBy: {
            args: Prisma.HistoryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryItemCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryItemCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      PaymentHistory: {
        payload: Prisma.$PaymentHistoryPayload<ExtArgs>
        fields: Prisma.PaymentHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          findFirst: {
            args: Prisma.PaymentHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          findMany: {
            args: Prisma.PaymentHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>[]
          }
          create: {
            args: Prisma.PaymentHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          createMany: {
            args: Prisma.PaymentHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>[]
          }
          delete: {
            args: Prisma.PaymentHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          update: {
            args: Prisma.PaymentHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PaymentHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          aggregate: {
            args: Prisma.PaymentHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentHistory>
          }
          groupBy: {
            args: Prisma.PaymentHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentHistoryCountAggregateOutputType> | number
          }
        }
      }
      WaiterRequest: {
        payload: Prisma.$WaiterRequestPayload<ExtArgs>
        fields: Prisma.WaiterRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaiterRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaiterRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterRequestPayload>
          }
          findFirst: {
            args: Prisma.WaiterRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaiterRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterRequestPayload>
          }
          findMany: {
            args: Prisma.WaiterRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterRequestPayload>[]
          }
          create: {
            args: Prisma.WaiterRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterRequestPayload>
          }
          createMany: {
            args: Prisma.WaiterRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaiterRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterRequestPayload>[]
          }
          delete: {
            args: Prisma.WaiterRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterRequestPayload>
          }
          update: {
            args: Prisma.WaiterRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterRequestPayload>
          }
          deleteMany: {
            args: Prisma.WaiterRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaiterRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WaiterRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaiterRequestPayload>
          }
          aggregate: {
            args: Prisma.WaiterRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaiterRequest>
          }
          groupBy: {
            args: Prisma.WaiterRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaiterRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaiterRequestCountArgs<ExtArgs>
            result: $Utils.Optional<WaiterRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    categories: number
    menuItems: number
    tables: number
    orders: number
    orderHistory: number
    feedback: number
    paymentHistory: number
    waiterRequests: number
    staff: number
  }

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | RestaurantCountOutputTypeCountCategoriesArgs
    menuItems?: boolean | RestaurantCountOutputTypeCountMenuItemsArgs
    tables?: boolean | RestaurantCountOutputTypeCountTablesArgs
    orders?: boolean | RestaurantCountOutputTypeCountOrdersArgs
    orderHistory?: boolean | RestaurantCountOutputTypeCountOrderHistoryArgs
    feedback?: boolean | RestaurantCountOutputTypeCountFeedbackArgs
    paymentHistory?: boolean | RestaurantCountOutputTypeCountPaymentHistoryArgs
    waiterRequests?: boolean | RestaurantCountOutputTypeCountWaiterRequestsArgs
    staff?: boolean | RestaurantCountOutputTypeCountStaffArgs
  }

  // Custom InputTypes
  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountMenuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountOrderHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderHistoryWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountPaymentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentHistoryWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountWaiterRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaiterRequestWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
  }


  /**
   * Count Type ThemeCountOutputType
   */

  export type ThemeCountOutputType = {
    restaurants: number
  }

  export type ThemeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurants?: boolean | ThemeCountOutputTypeCountRestaurantsArgs
  }

  // Custom InputTypes
  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemeCountOutputType
     */
    select?: ThemeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeCountRestaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    menuItems: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItems?: boolean | CategoryCountOutputTypeCountMenuItemsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountMenuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
  }


  /**
   * Count Type MenuItemCountOutputType
   */

  export type MenuItemCountOutputType = {
    orderItems: number
  }

  export type MenuItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | MenuItemCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCountOutputType
     */
    select?: MenuItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type TableCountOutputType
   */

  export type TableCountOutputType = {
    orders: number
    waiterRequests: number
  }

  export type TableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | TableCountOutputTypeCountOrdersArgs
    waiterRequests?: boolean | TableCountOutputTypeCountWaiterRequestsArgs
  }

  // Custom InputTypes
  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableCountOutputType
     */
    select?: TableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountWaiterRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaiterRequestWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type OrderHistoryCountOutputType
   */

  export type OrderHistoryCountOutputType = {
    items: number
  }

  export type OrderHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderHistoryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderHistoryCountOutputType without action
   */
  export type OrderHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistoryCountOutputType
     */
    select?: OrderHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderHistoryCountOutputType without action
   */
  export type OrderHistoryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    fullname: number
    username: number
    email: number
    password: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    password?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    password?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    password?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    fullname: string
    username: string
    email: string
    password: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      username: string
      email: string
      password: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly fullname: FieldRef<"Admin", 'String'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
  }


  /**
   * Model Restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantAvgAggregateOutputType = {
    id: number | null
    themecode: number | null
    status: number | null
    subtype: number | null
    subplan: number | null
    price: number | null
    discount: number | null
    servicecharge: number | null
    maxStaff: number | null
  }

  export type RestaurantSumAggregateOutputType = {
    id: number | null
    themecode: number | null
    status: number | null
    subtype: number | null
    subplan: number | null
    price: number | null
    discount: number | null
    servicecharge: number | null
    maxStaff: number | null
  }

  export type RestaurantMinAggregateOutputType = {
    id: number | null
    restroname: string | null
    mobileno: string | null
    email: string | null
    address: string | null
    password: string | null
    gstno: string | null
    logo: string | null
    themecode: number | null
    status: number | null
    latitude: string | null
    longitude: string | null
    distance: string | null
    joindate: Date | null
    paymentdate: Date | null
    subtype: number | null
    subplan: number | null
    expdate: Date | null
    price: number | null
    pdf: string | null
    slug: string | null
    restrootp: string | null
    discount: number | null
    servicecharge: number | null
    maxStaff: number | null
  }

  export type RestaurantMaxAggregateOutputType = {
    id: number | null
    restroname: string | null
    mobileno: string | null
    email: string | null
    address: string | null
    password: string | null
    gstno: string | null
    logo: string | null
    themecode: number | null
    status: number | null
    latitude: string | null
    longitude: string | null
    distance: string | null
    joindate: Date | null
    paymentdate: Date | null
    subtype: number | null
    subplan: number | null
    expdate: Date | null
    price: number | null
    pdf: string | null
    slug: string | null
    restrootp: string | null
    discount: number | null
    servicecharge: number | null
    maxStaff: number | null
  }

  export type RestaurantCountAggregateOutputType = {
    id: number
    restroname: number
    mobileno: number
    email: number
    address: number
    password: number
    gstno: number
    logo: number
    themecode: number
    status: number
    latitude: number
    longitude: number
    distance: number
    joindate: number
    paymentdate: number
    subtype: number
    subplan: number
    expdate: number
    price: number
    pdf: number
    slug: number
    restrootp: number
    discount: number
    servicecharge: number
    maxStaff: number
    _all: number
  }


  export type RestaurantAvgAggregateInputType = {
    id?: true
    themecode?: true
    status?: true
    subtype?: true
    subplan?: true
    price?: true
    discount?: true
    servicecharge?: true
    maxStaff?: true
  }

  export type RestaurantSumAggregateInputType = {
    id?: true
    themecode?: true
    status?: true
    subtype?: true
    subplan?: true
    price?: true
    discount?: true
    servicecharge?: true
    maxStaff?: true
  }

  export type RestaurantMinAggregateInputType = {
    id?: true
    restroname?: true
    mobileno?: true
    email?: true
    address?: true
    password?: true
    gstno?: true
    logo?: true
    themecode?: true
    status?: true
    latitude?: true
    longitude?: true
    distance?: true
    joindate?: true
    paymentdate?: true
    subtype?: true
    subplan?: true
    expdate?: true
    price?: true
    pdf?: true
    slug?: true
    restrootp?: true
    discount?: true
    servicecharge?: true
    maxStaff?: true
  }

  export type RestaurantMaxAggregateInputType = {
    id?: true
    restroname?: true
    mobileno?: true
    email?: true
    address?: true
    password?: true
    gstno?: true
    logo?: true
    themecode?: true
    status?: true
    latitude?: true
    longitude?: true
    distance?: true
    joindate?: true
    paymentdate?: true
    subtype?: true
    subplan?: true
    expdate?: true
    price?: true
    pdf?: true
    slug?: true
    restrootp?: true
    discount?: true
    servicecharge?: true
    maxStaff?: true
  }

  export type RestaurantCountAggregateInputType = {
    id?: true
    restroname?: true
    mobileno?: true
    email?: true
    address?: true
    password?: true
    gstno?: true
    logo?: true
    themecode?: true
    status?: true
    latitude?: true
    longitude?: true
    distance?: true
    joindate?: true
    paymentdate?: true
    subtype?: true
    subplan?: true
    expdate?: true
    price?: true
    pdf?: true
    slug?: true
    restrootp?: true
    discount?: true
    servicecharge?: true
    maxStaff?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurant to aggregate.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type RestaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithAggregationInput | RestaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _avg?: RestaurantAvgAggregateInputType
    _sum?: RestaurantSumAggregateInputType
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    id: number
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno: string | null
    logo: string | null
    themecode: number | null
    status: number
    latitude: string | null
    longitude: string | null
    distance: string | null
    joindate: Date
    paymentdate: Date
    subtype: number
    subplan: number
    expdate: Date
    price: number
    pdf: string | null
    slug: string
    restrootp: string
    discount: number
    servicecharge: number
    maxStaff: number
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroname?: boolean
    mobileno?: boolean
    email?: boolean
    address?: boolean
    password?: boolean
    gstno?: boolean
    logo?: boolean
    themecode?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    distance?: boolean
    joindate?: boolean
    paymentdate?: boolean
    subtype?: boolean
    subplan?: boolean
    expdate?: boolean
    price?: boolean
    pdf?: boolean
    slug?: boolean
    restrootp?: boolean
    discount?: boolean
    servicecharge?: boolean
    maxStaff?: boolean
    theme?: boolean | Restaurant$themeArgs<ExtArgs>
    categories?: boolean | Restaurant$categoriesArgs<ExtArgs>
    menuItems?: boolean | Restaurant$menuItemsArgs<ExtArgs>
    tables?: boolean | Restaurant$tablesArgs<ExtArgs>
    orders?: boolean | Restaurant$ordersArgs<ExtArgs>
    orderHistory?: boolean | Restaurant$orderHistoryArgs<ExtArgs>
    feedback?: boolean | Restaurant$feedbackArgs<ExtArgs>
    paymentHistory?: boolean | Restaurant$paymentHistoryArgs<ExtArgs>
    waiterRequests?: boolean | Restaurant$waiterRequestsArgs<ExtArgs>
    staff?: boolean | Restaurant$staffArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroname?: boolean
    mobileno?: boolean
    email?: boolean
    address?: boolean
    password?: boolean
    gstno?: boolean
    logo?: boolean
    themecode?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    distance?: boolean
    joindate?: boolean
    paymentdate?: boolean
    subtype?: boolean
    subplan?: boolean
    expdate?: boolean
    price?: boolean
    pdf?: boolean
    slug?: boolean
    restrootp?: boolean
    discount?: boolean
    servicecharge?: boolean
    maxStaff?: boolean
    theme?: boolean | Restaurant$themeArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectScalar = {
    id?: boolean
    restroname?: boolean
    mobileno?: boolean
    email?: boolean
    address?: boolean
    password?: boolean
    gstno?: boolean
    logo?: boolean
    themecode?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    distance?: boolean
    joindate?: boolean
    paymentdate?: boolean
    subtype?: boolean
    subplan?: boolean
    expdate?: boolean
    price?: boolean
    pdf?: boolean
    slug?: boolean
    restrootp?: boolean
    discount?: boolean
    servicecharge?: boolean
    maxStaff?: boolean
  }

  export type RestaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | Restaurant$themeArgs<ExtArgs>
    categories?: boolean | Restaurant$categoriesArgs<ExtArgs>
    menuItems?: boolean | Restaurant$menuItemsArgs<ExtArgs>
    tables?: boolean | Restaurant$tablesArgs<ExtArgs>
    orders?: boolean | Restaurant$ordersArgs<ExtArgs>
    orderHistory?: boolean | Restaurant$orderHistoryArgs<ExtArgs>
    feedback?: boolean | Restaurant$feedbackArgs<ExtArgs>
    paymentHistory?: boolean | Restaurant$paymentHistoryArgs<ExtArgs>
    waiterRequests?: boolean | Restaurant$waiterRequestsArgs<ExtArgs>
    staff?: boolean | Restaurant$staffArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestaurantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | Restaurant$themeArgs<ExtArgs>
  }

  export type $RestaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurant"
    objects: {
      theme: Prisma.$ThemePayload<ExtArgs> | null
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      menuItems: Prisma.$MenuItemPayload<ExtArgs>[]
      tables: Prisma.$TablePayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      orderHistory: Prisma.$OrderHistoryPayload<ExtArgs>[]
      feedback: Prisma.$FeedbackPayload<ExtArgs>[]
      paymentHistory: Prisma.$PaymentHistoryPayload<ExtArgs>[]
      waiterRequests: Prisma.$WaiterRequestPayload<ExtArgs>[]
      staff: Prisma.$StaffPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      restroname: string
      mobileno: string
      email: string
      address: string
      password: string
      gstno: string | null
      logo: string | null
      themecode: number | null
      status: number
      latitude: string | null
      longitude: string | null
      distance: string | null
      joindate: Date
      paymentdate: Date
      subtype: number
      subplan: number
      expdate: Date
      price: number
      pdf: string | null
      slug: string
      restrootp: string
      discount: number
      servicecharge: number
      maxStaff: number
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }

  type RestaurantGetPayload<S extends boolean | null | undefined | RestaurantDefaultArgs> = $Result.GetResult<Prisma.$RestaurantPayload, S>

  type RestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RestaurantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface RestaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurant'], meta: { name: 'Restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantFindUniqueArgs>(args: SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantFindFirstArgs>(args?: SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantFindManyArgs>(args?: SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
     */
    create<T extends RestaurantCreateArgs>(args: SelectSubset<T, RestaurantCreateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Restaurants.
     * @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantCreateManyArgs>(args?: SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restaurants and returns the data saved in the database.
     * @param {RestaurantCreateManyAndReturnArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restaurants and only return the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestaurantCreateManyAndReturnArgs>(args?: SelectSubset<T, RestaurantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
     */
    delete<T extends RestaurantDeleteArgs>(args: SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantUpdateArgs>(args: SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantDeleteManyArgs>(args?: SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantUpdateManyArgs>(args: SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantUpsertArgs>(args: SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurant model
   */
  readonly fields: RestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    theme<T extends Restaurant$themeArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$themeArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    categories<T extends Restaurant$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany"> | Null>
    menuItems<T extends Restaurant$menuItemsArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$menuItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany"> | Null>
    tables<T extends Restaurant$tablesArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends Restaurant$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    orderHistory<T extends Restaurant$orderHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$orderHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    feedback<T extends Restaurant$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany"> | Null>
    paymentHistory<T extends Restaurant$paymentHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$paymentHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    waiterRequests<T extends Restaurant$waiterRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$waiterRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterRequestPayload<ExtArgs>, T, "findMany"> | Null>
    staff<T extends Restaurant$staffArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Restaurant model
   */ 
  interface RestaurantFieldRefs {
    readonly id: FieldRef<"Restaurant", 'Int'>
    readonly restroname: FieldRef<"Restaurant", 'String'>
    readonly mobileno: FieldRef<"Restaurant", 'String'>
    readonly email: FieldRef<"Restaurant", 'String'>
    readonly address: FieldRef<"Restaurant", 'String'>
    readonly password: FieldRef<"Restaurant", 'String'>
    readonly gstno: FieldRef<"Restaurant", 'String'>
    readonly logo: FieldRef<"Restaurant", 'String'>
    readonly themecode: FieldRef<"Restaurant", 'Int'>
    readonly status: FieldRef<"Restaurant", 'Int'>
    readonly latitude: FieldRef<"Restaurant", 'String'>
    readonly longitude: FieldRef<"Restaurant", 'String'>
    readonly distance: FieldRef<"Restaurant", 'String'>
    readonly joindate: FieldRef<"Restaurant", 'DateTime'>
    readonly paymentdate: FieldRef<"Restaurant", 'DateTime'>
    readonly subtype: FieldRef<"Restaurant", 'Int'>
    readonly subplan: FieldRef<"Restaurant", 'Int'>
    readonly expdate: FieldRef<"Restaurant", 'DateTime'>
    readonly price: FieldRef<"Restaurant", 'Int'>
    readonly pdf: FieldRef<"Restaurant", 'String'>
    readonly slug: FieldRef<"Restaurant", 'String'>
    readonly restrootp: FieldRef<"Restaurant", 'String'>
    readonly discount: FieldRef<"Restaurant", 'Float'>
    readonly servicecharge: FieldRef<"Restaurant", 'Float'>
    readonly maxStaff: FieldRef<"Restaurant", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Restaurant findUnique
   */
  export type RestaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findUniqueOrThrow
   */
  export type RestaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findFirst
   */
  export type RestaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findFirstOrThrow
   */
  export type RestaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurant.
     */
    data: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
  }

  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurant createManyAndReturn
   */
  export type RestaurantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurant.
     */
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Restaurant to update.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
  }

  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurant to update in case it exists.
     */
    where: RestaurantWhereUniqueInput
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     */
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
  }

  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter which Restaurant to delete.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantWhereInput
  }

  /**
   * Restaurant.theme
   */
  export type Restaurant$themeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    where?: ThemeWhereInput
  }

  /**
   * Restaurant.categories
   */
  export type Restaurant$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Restaurant.menuItems
   */
  export type Restaurant$menuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    cursor?: MenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * Restaurant.tables
   */
  export type Restaurant$tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    cursor?: TableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Restaurant.orders
   */
  export type Restaurant$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Restaurant.orderHistory
   */
  export type Restaurant$orderHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    where?: OrderHistoryWhereInput
    orderBy?: OrderHistoryOrderByWithRelationInput | OrderHistoryOrderByWithRelationInput[]
    cursor?: OrderHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderHistoryScalarFieldEnum | OrderHistoryScalarFieldEnum[]
  }

  /**
   * Restaurant.feedback
   */
  export type Restaurant$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Restaurant.paymentHistory
   */
  export type Restaurant$paymentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    where?: PaymentHistoryWhereInput
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    cursor?: PaymentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * Restaurant.waiterRequests
   */
  export type Restaurant$waiterRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterRequest
     */
    select?: WaiterRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterRequestInclude<ExtArgs> | null
    where?: WaiterRequestWhereInput
    orderBy?: WaiterRequestOrderByWithRelationInput | WaiterRequestOrderByWithRelationInput[]
    cursor?: WaiterRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaiterRequestScalarFieldEnum | WaiterRequestScalarFieldEnum[]
  }

  /**
   * Restaurant.staff
   */
  export type Restaurant$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    cursor?: StaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Restaurant without action
   */
  export type RestaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    id: number | null
    restroid: number | null
    status: number | null
  }

  export type StaffSumAggregateOutputType = {
    id: number | null
    restroid: number | null
    status: number | null
  }

  export type StaffMinAggregateOutputType = {
    id: number | null
    restroid: number | null
    fullname: string | null
    username: string | null
    password: string | null
    role: string | null
    status: number | null
    createdAt: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    id: number | null
    restroid: number | null
    fullname: string | null
    username: string | null
    password: string | null
    role: string | null
    status: number | null
    createdAt: Date | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    restroid: number
    fullname: number
    username: number
    password: number
    role: number
    status: number
    createdAt: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    id?: true
    restroid?: true
    status?: true
  }

  export type StaffSumAggregateInputType = {
    id?: true
    restroid?: true
    status?: true
  }

  export type StaffMinAggregateInputType = {
    id?: true
    restroid?: true
    fullname?: true
    username?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    restroid?: true
    fullname?: true
    username?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    restroid?: true
    fullname?: true
    username?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: number
    restroid: number
    fullname: string
    username: string
    password: string
    role: string
    status: number
    createdAt: Date
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    fullname?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    fullname?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    id?: boolean
    restroid?: boolean
    fullname?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      restroid: number
      fullname: string
      username: string
      password: string
      role: string
      status: number
      createdAt: Date
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Staff model
   */ 
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'Int'>
    readonly restroid: FieldRef<"Staff", 'Int'>
    readonly fullname: FieldRef<"Staff", 'String'>
    readonly username: FieldRef<"Staff", 'String'>
    readonly password: FieldRef<"Staff", 'String'>
    readonly role: FieldRef<"Staff", 'String'>
    readonly status: FieldRef<"Staff", 'Int'>
    readonly createdAt: FieldRef<"Staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model Theme
   */

  export type AggregateTheme = {
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  export type ThemeAvgAggregateOutputType = {
    id: number | null
  }

  export type ThemeSumAggregateOutputType = {
    id: number | null
  }

  export type ThemeMinAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    primaryColor: string | null
    secondaryColor: string | null
    accentColor: string | null
    bgColor: string | null
    cardColor: string | null
    textColor: string | null
    navBg: string | null
    buttonTextColor: string | null
    fontFamily: string | null
    borderRadius: string | null
    darkMode: boolean | null
  }

  export type ThemeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    primaryColor: string | null
    secondaryColor: string | null
    accentColor: string | null
    bgColor: string | null
    cardColor: string | null
    textColor: string | null
    navBg: string | null
    buttonTextColor: string | null
    fontFamily: string | null
    borderRadius: string | null
    darkMode: boolean | null
  }

  export type ThemeCountAggregateOutputType = {
    id: number
    title: number
    image: number
    primaryColor: number
    secondaryColor: number
    accentColor: number
    bgColor: number
    cardColor: number
    textColor: number
    navBg: number
    buttonTextColor: number
    fontFamily: number
    borderRadius: number
    darkMode: number
    _all: number
  }


  export type ThemeAvgAggregateInputType = {
    id?: true
  }

  export type ThemeSumAggregateInputType = {
    id?: true
  }

  export type ThemeMinAggregateInputType = {
    id?: true
    title?: true
    image?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    bgColor?: true
    cardColor?: true
    textColor?: true
    navBg?: true
    buttonTextColor?: true
    fontFamily?: true
    borderRadius?: true
    darkMode?: true
  }

  export type ThemeMaxAggregateInputType = {
    id?: true
    title?: true
    image?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    bgColor?: true
    cardColor?: true
    textColor?: true
    navBg?: true
    buttonTextColor?: true
    fontFamily?: true
    borderRadius?: true
    darkMode?: true
  }

  export type ThemeCountAggregateInputType = {
    id?: true
    title?: true
    image?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    bgColor?: true
    cardColor?: true
    textColor?: true
    navBg?: true
    buttonTextColor?: true
    fontFamily?: true
    borderRadius?: true
    darkMode?: true
    _all?: true
  }

  export type ThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theme to aggregate.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Themes
    **/
    _count?: true | ThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThemeMaxAggregateInputType
  }

  export type GetThemeAggregateType<T extends ThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheme[P]>
      : GetScalarType<T[P], AggregateTheme[P]>
  }




  export type ThemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThemeWhereInput
    orderBy?: ThemeOrderByWithAggregationInput | ThemeOrderByWithAggregationInput[]
    by: ThemeScalarFieldEnum[] | ThemeScalarFieldEnum
    having?: ThemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThemeCountAggregateInputType | true
    _avg?: ThemeAvgAggregateInputType
    _sum?: ThemeSumAggregateInputType
    _min?: ThemeMinAggregateInputType
    _max?: ThemeMaxAggregateInputType
  }

  export type ThemeGroupByOutputType = {
    id: number
    title: string
    image: string | null
    primaryColor: string
    secondaryColor: string
    accentColor: string
    bgColor: string
    cardColor: string
    textColor: string
    navBg: string
    buttonTextColor: string
    fontFamily: string
    borderRadius: string
    darkMode: boolean
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  type GetThemeGroupByPayload<T extends ThemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThemeGroupByOutputType[P]>
            : GetScalarType<T[P], ThemeGroupByOutputType[P]>
        }
      >
    >


  export type ThemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    bgColor?: boolean
    cardColor?: boolean
    textColor?: boolean
    navBg?: boolean
    buttonTextColor?: boolean
    fontFamily?: boolean
    borderRadius?: boolean
    darkMode?: boolean
    restaurants?: boolean | Theme$restaurantsArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    bgColor?: boolean
    cardColor?: boolean
    textColor?: boolean
    navBg?: boolean
    buttonTextColor?: boolean
    fontFamily?: boolean
    borderRadius?: boolean
    darkMode?: boolean
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectScalar = {
    id?: boolean
    title?: boolean
    image?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    bgColor?: boolean
    cardColor?: boolean
    textColor?: boolean
    navBg?: boolean
    buttonTextColor?: boolean
    fontFamily?: boolean
    borderRadius?: boolean
    darkMode?: boolean
  }

  export type ThemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurants?: boolean | Theme$restaurantsArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ThemeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ThemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Theme"
    objects: {
      restaurants: Prisma.$RestaurantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      image: string | null
      primaryColor: string
      secondaryColor: string
      accentColor: string
      bgColor: string
      cardColor: string
      textColor: string
      navBg: string
      buttonTextColor: string
      fontFamily: string
      borderRadius: string
      darkMode: boolean
    }, ExtArgs["result"]["theme"]>
    composites: {}
  }

  type ThemeGetPayload<S extends boolean | null | undefined | ThemeDefaultArgs> = $Result.GetResult<Prisma.$ThemePayload, S>

  type ThemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ThemeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ThemeCountAggregateInputType | true
    }

  export interface ThemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Theme'], meta: { name: 'Theme' } }
    /**
     * Find zero or one Theme that matches the filter.
     * @param {ThemeFindUniqueArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThemeFindUniqueArgs>(args: SelectSubset<T, ThemeFindUniqueArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Theme that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ThemeFindUniqueOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThemeFindUniqueOrThrowArgs>(args: SelectSubset<T, ThemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Theme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThemeFindFirstArgs>(args?: SelectSubset<T, ThemeFindFirstArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Theme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThemeFindFirstOrThrowArgs>(args?: SelectSubset<T, ThemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Themes
     * const themes = await prisma.theme.findMany()
     * 
     * // Get first 10 Themes
     * const themes = await prisma.theme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const themeWithIdOnly = await prisma.theme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThemeFindManyArgs>(args?: SelectSubset<T, ThemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Theme.
     * @param {ThemeCreateArgs} args - Arguments to create a Theme.
     * @example
     * // Create one Theme
     * const Theme = await prisma.theme.create({
     *   data: {
     *     // ... data to create a Theme
     *   }
     * })
     * 
     */
    create<T extends ThemeCreateArgs>(args: SelectSubset<T, ThemeCreateArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Themes.
     * @param {ThemeCreateManyArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThemeCreateManyArgs>(args?: SelectSubset<T, ThemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Themes and returns the data saved in the database.
     * @param {ThemeCreateManyAndReturnArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Themes and only return the `id`
     * const themeWithIdOnly = await prisma.theme.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThemeCreateManyAndReturnArgs>(args?: SelectSubset<T, ThemeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Theme.
     * @param {ThemeDeleteArgs} args - Arguments to delete one Theme.
     * @example
     * // Delete one Theme
     * const Theme = await prisma.theme.delete({
     *   where: {
     *     // ... filter to delete one Theme
     *   }
     * })
     * 
     */
    delete<T extends ThemeDeleteArgs>(args: SelectSubset<T, ThemeDeleteArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Theme.
     * @param {ThemeUpdateArgs} args - Arguments to update one Theme.
     * @example
     * // Update one Theme
     * const theme = await prisma.theme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThemeUpdateArgs>(args: SelectSubset<T, ThemeUpdateArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Themes.
     * @param {ThemeDeleteManyArgs} args - Arguments to filter Themes to delete.
     * @example
     * // Delete a few Themes
     * const { count } = await prisma.theme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThemeDeleteManyArgs>(args?: SelectSubset<T, ThemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThemeUpdateManyArgs>(args: SelectSubset<T, ThemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Theme.
     * @param {ThemeUpsertArgs} args - Arguments to update or create a Theme.
     * @example
     * // Update or create a Theme
     * const theme = await prisma.theme.upsert({
     *   create: {
     *     // ... data to create a Theme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theme we want to update
     *   }
     * })
     */
    upsert<T extends ThemeUpsertArgs>(args: SelectSubset<T, ThemeUpsertArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeCountArgs} args - Arguments to filter Themes to count.
     * @example
     * // Count the number of Themes
     * const count = await prisma.theme.count({
     *   where: {
     *     // ... the filter for the Themes we want to count
     *   }
     * })
    **/
    count<T extends ThemeCountArgs>(
      args?: Subset<T, ThemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThemeAggregateArgs>(args: Subset<T, ThemeAggregateArgs>): Prisma.PrismaPromise<GetThemeAggregateType<T>>

    /**
     * Group by Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThemeGroupByArgs['orderBy'] }
        : { orderBy?: ThemeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Theme model
   */
  readonly fields: ThemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Theme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurants<T extends Theme$restaurantsArgs<ExtArgs> = {}>(args?: Subset<T, Theme$restaurantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Theme model
   */ 
  interface ThemeFieldRefs {
    readonly id: FieldRef<"Theme", 'Int'>
    readonly title: FieldRef<"Theme", 'String'>
    readonly image: FieldRef<"Theme", 'String'>
    readonly primaryColor: FieldRef<"Theme", 'String'>
    readonly secondaryColor: FieldRef<"Theme", 'String'>
    readonly accentColor: FieldRef<"Theme", 'String'>
    readonly bgColor: FieldRef<"Theme", 'String'>
    readonly cardColor: FieldRef<"Theme", 'String'>
    readonly textColor: FieldRef<"Theme", 'String'>
    readonly navBg: FieldRef<"Theme", 'String'>
    readonly buttonTextColor: FieldRef<"Theme", 'String'>
    readonly fontFamily: FieldRef<"Theme", 'String'>
    readonly borderRadius: FieldRef<"Theme", 'String'>
    readonly darkMode: FieldRef<"Theme", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Theme findUnique
   */
  export type ThemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findUniqueOrThrow
   */
  export type ThemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findFirst
   */
  export type ThemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findFirstOrThrow
   */
  export type ThemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findMany
   */
  export type ThemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Themes to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme create
   */
  export type ThemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to create a Theme.
     */
    data: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
  }

  /**
   * Theme createMany
   */
  export type ThemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Themes.
     */
    data: ThemeCreateManyInput | ThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Theme createManyAndReturn
   */
  export type ThemeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Themes.
     */
    data: ThemeCreateManyInput | ThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Theme update
   */
  export type ThemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to update a Theme.
     */
    data: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
    /**
     * Choose, which Theme to update.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme updateMany
   */
  export type ThemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Themes.
     */
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyInput>
    /**
     * Filter which Themes to update
     */
    where?: ThemeWhereInput
  }

  /**
   * Theme upsert
   */
  export type ThemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The filter to search for the Theme to update in case it exists.
     */
    where: ThemeWhereUniqueInput
    /**
     * In case the Theme found by the `where` argument doesn't exist, create a new Theme with this data.
     */
    create: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
    /**
     * In case the Theme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
  }

  /**
   * Theme delete
   */
  export type ThemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter which Theme to delete.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme deleteMany
   */
  export type ThemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Themes to delete
     */
    where?: ThemeWhereInput
  }

  /**
   * Theme.restaurants
   */
  export type Theme$restaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    cursor?: RestaurantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Theme without action
   */
  export type ThemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    restroid: number | null
    sortorder: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    restroid: number | null
    sortorder: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    restroid: number | null
    name_eng: string | null
    name_guj: string | null
    name_hindi: string | null
    categorydesc: string | null
    sortorder: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    restroid: number | null
    name_eng: string | null
    name_guj: string | null
    name_hindi: string | null
    categorydesc: string | null
    sortorder: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    restroid: number
    name_eng: number
    name_guj: number
    name_hindi: number
    categorydesc: number
    sortorder: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    restroid?: true
    sortorder?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    restroid?: true
    sortorder?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    restroid?: true
    name_eng?: true
    name_guj?: true
    name_hindi?: true
    categorydesc?: true
    sortorder?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    restroid?: true
    name_eng?: true
    name_guj?: true
    name_hindi?: true
    categorydesc?: true
    sortorder?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    restroid?: true
    name_eng?: true
    name_guj?: true
    name_hindi?: true
    categorydesc?: true
    sortorder?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    restroid: number
    name_eng: string
    name_guj: string | null
    name_hindi: string | null
    categorydesc: string | null
    sortorder: number
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    name_eng?: boolean
    name_guj?: boolean
    name_hindi?: boolean
    categorydesc?: boolean
    sortorder?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    menuItems?: boolean | Category$menuItemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    name_eng?: boolean
    name_guj?: boolean
    name_hindi?: boolean
    categorydesc?: boolean
    sortorder?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    restroid?: boolean
    name_eng?: boolean
    name_guj?: boolean
    name_hindi?: boolean
    categorydesc?: boolean
    sortorder?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    menuItems?: boolean | Category$menuItemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      menuItems: Prisma.$MenuItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      restroid: number
      name_eng: string
      name_guj: string | null
      name_hindi: string | null
      categorydesc: string | null
      sortorder: number
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    menuItems<T extends Category$menuItemsArgs<ExtArgs> = {}>(args?: Subset<T, Category$menuItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly restroid: FieldRef<"Category", 'Int'>
    readonly name_eng: FieldRef<"Category", 'String'>
    readonly name_guj: FieldRef<"Category", 'String'>
    readonly name_hindi: FieldRef<"Category", 'String'>
    readonly categorydesc: FieldRef<"Category", 'String'>
    readonly sortorder: FieldRef<"Category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.menuItems
   */
  export type Category$menuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    cursor?: MenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model MenuItem
   */

  export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  export type MenuItemAvgAggregateOutputType = {
    id: number | null
    restroid: number | null
    categoryid: number | null
    price: number | null
  }

  export type MenuItemSumAggregateOutputType = {
    id: number | null
    restroid: number | null
    categoryid: number | null
    price: number | null
  }

  export type MenuItemMinAggregateOutputType = {
    id: number | null
    restroid: number | null
    categoryid: number | null
    image: string | null
    name_eng: string | null
    name_guj: string | null
    name_hindi: string | null
    veg: boolean | null
    available: boolean | null
    price: number | null
  }

  export type MenuItemMaxAggregateOutputType = {
    id: number | null
    restroid: number | null
    categoryid: number | null
    image: string | null
    name_eng: string | null
    name_guj: string | null
    name_hindi: string | null
    veg: boolean | null
    available: boolean | null
    price: number | null
  }

  export type MenuItemCountAggregateOutputType = {
    id: number
    restroid: number
    categoryid: number
    image: number
    name_eng: number
    name_guj: number
    name_hindi: number
    veg: number
    available: number
    price: number
    _all: number
  }


  export type MenuItemAvgAggregateInputType = {
    id?: true
    restroid?: true
    categoryid?: true
    price?: true
  }

  export type MenuItemSumAggregateInputType = {
    id?: true
    restroid?: true
    categoryid?: true
    price?: true
  }

  export type MenuItemMinAggregateInputType = {
    id?: true
    restroid?: true
    categoryid?: true
    image?: true
    name_eng?: true
    name_guj?: true
    name_hindi?: true
    veg?: true
    available?: true
    price?: true
  }

  export type MenuItemMaxAggregateInputType = {
    id?: true
    restroid?: true
    categoryid?: true
    image?: true
    name_eng?: true
    name_guj?: true
    name_hindi?: true
    veg?: true
    available?: true
    price?: true
  }

  export type MenuItemCountAggregateInputType = {
    id?: true
    restroid?: true
    categoryid?: true
    image?: true
    name_eng?: true
    name_guj?: true
    name_hindi?: true
    veg?: true
    available?: true
    price?: true
    _all?: true
  }

  export type MenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItem to aggregate.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItems
    **/
    _count?: true | MenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemMaxAggregateInputType
  }

  export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItem[P]>
      : GetScalarType<T[P], AggregateMenuItem[P]>
  }




  export type MenuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithAggregationInput | MenuItemOrderByWithAggregationInput[]
    by: MenuItemScalarFieldEnum[] | MenuItemScalarFieldEnum
    having?: MenuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemCountAggregateInputType | true
    _avg?: MenuItemAvgAggregateInputType
    _sum?: MenuItemSumAggregateInputType
    _min?: MenuItemMinAggregateInputType
    _max?: MenuItemMaxAggregateInputType
  }

  export type MenuItemGroupByOutputType = {
    id: number
    restroid: number
    categoryid: number
    image: string | null
    name_eng: string
    name_guj: string | null
    name_hindi: string | null
    veg: boolean
    available: boolean
    price: number
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  type GetMenuItemGroupByPayload<T extends MenuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    categoryid?: boolean
    image?: boolean
    name_eng?: boolean
    name_guj?: boolean
    name_hindi?: boolean
    veg?: boolean
    available?: boolean
    price?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    orderItems?: boolean | MenuItem$orderItemsArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    categoryid?: boolean
    image?: boolean
    name_eng?: boolean
    name_guj?: boolean
    name_hindi?: boolean
    veg?: boolean
    available?: boolean
    price?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectScalar = {
    id?: boolean
    restroid?: boolean
    categoryid?: boolean
    image?: boolean
    name_eng?: boolean
    name_guj?: boolean
    name_hindi?: boolean
    veg?: boolean
    available?: boolean
    price?: boolean
  }

  export type MenuItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    orderItems?: boolean | MenuItem$orderItemsArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $MenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItem"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      restroid: number
      categoryid: number
      image: string | null
      name_eng: string
      name_guj: string | null
      name_hindi: string | null
      veg: boolean
      available: boolean
      price: number
    }, ExtArgs["result"]["menuItem"]>
    composites: {}
  }

  type MenuItemGetPayload<S extends boolean | null | undefined | MenuItemDefaultArgs> = $Result.GetResult<Prisma.$MenuItemPayload, S>

  type MenuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MenuItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MenuItemCountAggregateInputType | true
    }

  export interface MenuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItem'], meta: { name: 'MenuItem' } }
    /**
     * Find zero or one MenuItem that matches the filter.
     * @param {MenuItemFindUniqueArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemFindUniqueArgs>(args: SelectSubset<T, MenuItemFindUniqueArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MenuItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MenuItemFindUniqueOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemFindFirstArgs>(args?: SelectSubset<T, MenuItemFindFirstArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItem.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemFindManyArgs>(args?: SelectSubset<T, MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MenuItem.
     * @param {MenuItemCreateArgs} args - Arguments to create a MenuItem.
     * @example
     * // Create one MenuItem
     * const MenuItem = await prisma.menuItem.create({
     *   data: {
     *     // ... data to create a MenuItem
     *   }
     * })
     * 
     */
    create<T extends MenuItemCreateArgs>(args: SelectSubset<T, MenuItemCreateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MenuItems.
     * @param {MenuItemCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemCreateManyArgs>(args?: SelectSubset<T, MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItems and returns the data saved in the database.
     * @param {MenuItemCreateManyAndReturnArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MenuItem.
     * @param {MenuItemDeleteArgs} args - Arguments to delete one MenuItem.
     * @example
     * // Delete one MenuItem
     * const MenuItem = await prisma.menuItem.delete({
     *   where: {
     *     // ... filter to delete one MenuItem
     *   }
     * })
     * 
     */
    delete<T extends MenuItemDeleteArgs>(args: SelectSubset<T, MenuItemDeleteArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MenuItem.
     * @param {MenuItemUpdateArgs} args - Arguments to update one MenuItem.
     * @example
     * // Update one MenuItem
     * const menuItem = await prisma.menuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemUpdateArgs>(args: SelectSubset<T, MenuItemUpdateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MenuItems.
     * @param {MenuItemDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemDeleteManyArgs>(args?: SelectSubset<T, MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemUpdateManyArgs>(args: SelectSubset<T, MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MenuItem.
     * @param {MenuItemUpsertArgs} args - Arguments to update or create a MenuItem.
     * @example
     * // Update or create a MenuItem
     * const menuItem = await prisma.menuItem.upsert({
     *   create: {
     *     // ... data to create a MenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItem we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemUpsertArgs>(args: SelectSubset<T, MenuItemUpsertArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItem.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends MenuItemCountArgs>(
      args?: Subset<T, MenuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuItemAggregateArgs>(args: Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>

    /**
     * Group by MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItem model
   */
  readonly fields: MenuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    orderItems<T extends MenuItem$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenuItem model
   */ 
  interface MenuItemFieldRefs {
    readonly id: FieldRef<"MenuItem", 'Int'>
    readonly restroid: FieldRef<"MenuItem", 'Int'>
    readonly categoryid: FieldRef<"MenuItem", 'Int'>
    readonly image: FieldRef<"MenuItem", 'String'>
    readonly name_eng: FieldRef<"MenuItem", 'String'>
    readonly name_guj: FieldRef<"MenuItem", 'String'>
    readonly name_hindi: FieldRef<"MenuItem", 'String'>
    readonly veg: FieldRef<"MenuItem", 'Boolean'>
    readonly available: FieldRef<"MenuItem", 'Boolean'>
    readonly price: FieldRef<"MenuItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MenuItem findUnique
   */
  export type MenuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findUniqueOrThrow
   */
  export type MenuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findFirst
   */
  export type MenuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findFirstOrThrow
   */
  export type MenuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findMany
   */
  export type MenuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem create
   */
  export type MenuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItem.
     */
    data: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
  }

  /**
   * MenuItem createMany
   */
  export type MenuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItem createManyAndReturn
   */
  export type MenuItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem update
   */
  export type MenuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItem.
     */
    data: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
    /**
     * Choose, which MenuItem to update.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem updateMany
   */
  export type MenuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
  }

  /**
   * MenuItem upsert
   */
  export type MenuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItem to update in case it exists.
     */
    where: MenuItemWhereUniqueInput
    /**
     * In case the MenuItem found by the `where` argument doesn't exist, create a new MenuItem with this data.
     */
    create: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
    /**
     * In case the MenuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
  }

  /**
   * MenuItem delete
   */
  export type MenuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter which MenuItem to delete.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem deleteMany
   */
  export type MenuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to delete
     */
    where?: MenuItemWhereInput
  }

  /**
   * MenuItem.orderItems
   */
  export type MenuItem$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * MenuItem without action
   */
  export type MenuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
  }


  /**
   * Model Table
   */

  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  export type TableAvgAggregateOutputType = {
    id: number | null
    restroid: number | null
  }

  export type TableSumAggregateOutputType = {
    id: number | null
    restroid: number | null
  }

  export type TableMinAggregateOutputType = {
    id: number | null
    restroid: number | null
    name: string | null
    qrimage: string | null
  }

  export type TableMaxAggregateOutputType = {
    id: number | null
    restroid: number | null
    name: string | null
    qrimage: string | null
  }

  export type TableCountAggregateOutputType = {
    id: number
    restroid: number
    name: number
    qrimage: number
    _all: number
  }


  export type TableAvgAggregateInputType = {
    id?: true
    restroid?: true
  }

  export type TableSumAggregateInputType = {
    id?: true
    restroid?: true
  }

  export type TableMinAggregateInputType = {
    id?: true
    restroid?: true
    name?: true
    qrimage?: true
  }

  export type TableMaxAggregateInputType = {
    id?: true
    restroid?: true
    name?: true
    qrimage?: true
  }

  export type TableCountAggregateInputType = {
    id?: true
    restroid?: true
    name?: true
    qrimage?: true
    _all?: true
  }

  export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table to aggregate.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tables
    **/
    _count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
        [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }




  export type TableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
    orderBy?: TableOrderByWithAggregationInput | TableOrderByWithAggregationInput[]
    by: TableScalarFieldEnum[] | TableScalarFieldEnum
    having?: TableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableCountAggregateInputType | true
    _avg?: TableAvgAggregateInputType
    _sum?: TableSumAggregateInputType
    _min?: TableMinAggregateInputType
    _max?: TableMaxAggregateInputType
  }

  export type TableGroupByOutputType = {
    id: number
    restroid: number
    name: string
    qrimage: string | null
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  type GetTableGroupByPayload<T extends TableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableGroupByOutputType[P]>
            : GetScalarType<T[P], TableGroupByOutputType[P]>
        }
      >
    >


  export type TableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    name?: boolean
    qrimage?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    orders?: boolean | Table$ordersArgs<ExtArgs>
    waiterRequests?: boolean | Table$waiterRequestsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    name?: boolean
    qrimage?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectScalar = {
    id?: boolean
    restroid?: boolean
    name?: boolean
    qrimage?: boolean
  }

  export type TableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    orders?: boolean | Table$ordersArgs<ExtArgs>
    waiterRequests?: boolean | Table$waiterRequestsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $TablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Table"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
      waiterRequests: Prisma.$WaiterRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      restroid: number
      name: string
      qrimage: string | null
    }, ExtArgs["result"]["table"]>
    composites: {}
  }

  type TableGetPayload<S extends boolean | null | undefined | TableDefaultArgs> = $Result.GetResult<Prisma.$TablePayload, S>

  type TableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TableFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TableCountAggregateInputType | true
    }

  export interface TableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table'], meta: { name: 'Table' } }
    /**
     * Find zero or one Table that matches the filter.
     * @param {TableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableFindUniqueArgs>(args: SelectSubset<T, TableFindUniqueArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Table that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TableFindUniqueOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableFindUniqueOrThrowArgs>(args: SelectSubset<T, TableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableFindFirstArgs>(args?: SelectSubset<T, TableFindFirstArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableFindFirstOrThrowArgs>(args?: SelectSubset<T, TableFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableFindManyArgs>(args?: SelectSubset<T, TableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Table.
     * @param {TableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
     */
    create<T extends TableCreateArgs>(args: SelectSubset<T, TableCreateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tables.
     * @param {TableCreateManyArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableCreateManyArgs>(args?: SelectSubset<T, TableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tables and returns the data saved in the database.
     * @param {TableCreateManyAndReturnArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableCreateManyAndReturnArgs>(args?: SelectSubset<T, TableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Table.
     * @param {TableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
     */
    delete<T extends TableDeleteArgs>(args: SelectSubset<T, TableDeleteArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Table.
     * @param {TableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableUpdateArgs>(args: SelectSubset<T, TableUpdateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tables.
     * @param {TableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableDeleteManyArgs>(args?: SelectSubset<T, TableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableUpdateManyArgs>(args: SelectSubset<T, TableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Table.
     * @param {TableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
     */
    upsert<T extends TableUpsertArgs>(args: SelectSubset<T, TableUpsertArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends TableCountArgs>(
      args?: Subset<T, TableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableGroupByArgs['orderBy'] }
        : { orderBy?: TableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Table model
   */
  readonly fields: TableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    orders<T extends Table$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Table$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    waiterRequests<T extends Table$waiterRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Table$waiterRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterRequestPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Table model
   */ 
  interface TableFieldRefs {
    readonly id: FieldRef<"Table", 'Int'>
    readonly restroid: FieldRef<"Table", 'Int'>
    readonly name: FieldRef<"Table", 'String'>
    readonly qrimage: FieldRef<"Table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Table findUnique
   */
  export type TableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findUniqueOrThrow
   */
  export type TableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findFirst
   */
  export type TableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findFirstOrThrow
   */
  export type TableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findMany
   */
  export type TableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table create
   */
  export type TableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to create a Table.
     */
    data: XOR<TableCreateInput, TableUncheckedCreateInput>
  }

  /**
   * Table createMany
   */
  export type TableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Table createManyAndReturn
   */
  export type TableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table update
   */
  export type TableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to update a Table.
     */
    data: XOR<TableUpdateInput, TableUncheckedUpdateInput>
    /**
     * Choose, which Table to update.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table updateMany
   */
  export type TableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
  }

  /**
   * Table upsert
   */
  export type TableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The filter to search for the Table to update in case it exists.
     */
    where: TableWhereUniqueInput
    /**
     * In case the Table found by the `where` argument doesn't exist, create a new Table with this data.
     */
    create: XOR<TableCreateInput, TableUncheckedCreateInput>
    /**
     * In case the Table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableUpdateInput, TableUncheckedUpdateInput>
  }

  /**
   * Table delete
   */
  export type TableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter which Table to delete.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table deleteMany
   */
  export type TableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tables to delete
     */
    where?: TableWhereInput
  }

  /**
   * Table.orders
   */
  export type Table$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Table.waiterRequests
   */
  export type Table$waiterRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterRequest
     */
    select?: WaiterRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterRequestInclude<ExtArgs> | null
    where?: WaiterRequestWhereInput
    orderBy?: WaiterRequestOrderByWithRelationInput | WaiterRequestOrderByWithRelationInput[]
    cursor?: WaiterRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaiterRequestScalarFieldEnum | WaiterRequestScalarFieldEnum[]
  }

  /**
   * Table without action
   */
  export type TableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    restroid: number | null
    tableid: number | null
    subtotal: number | null
    discount: number | null
    servicecharge: number | null
    grandtotal: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    restroid: number | null
    tableid: number | null
    subtotal: number | null
    discount: number | null
    servicecharge: number | null
    grandtotal: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    restroid: number | null
    tableid: number | null
    ordercode: string | null
    customername: string | null
    customermob: string | null
    status: $Enums.OrderStatus | null
    subtotal: number | null
    discount: number | null
    servicecharge: number | null
    grandtotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    restroid: number | null
    tableid: number | null
    ordercode: string | null
    customername: string | null
    customermob: string | null
    status: $Enums.OrderStatus | null
    subtotal: number | null
    discount: number | null
    servicecharge: number | null
    grandtotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    restroid: number
    tableid: number
    ordercode: number
    customername: number
    customermob: number
    status: number
    subtotal: number
    discount: number
    servicecharge: number
    grandtotal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    restroid?: true
    tableid?: true
    subtotal?: true
    discount?: true
    servicecharge?: true
    grandtotal?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    restroid?: true
    tableid?: true
    subtotal?: true
    discount?: true
    servicecharge?: true
    grandtotal?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    restroid?: true
    tableid?: true
    ordercode?: true
    customername?: true
    customermob?: true
    status?: true
    subtotal?: true
    discount?: true
    servicecharge?: true
    grandtotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    restroid?: true
    tableid?: true
    ordercode?: true
    customername?: true
    customermob?: true
    status?: true
    subtotal?: true
    discount?: true
    servicecharge?: true
    grandtotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    restroid?: true
    tableid?: true
    ordercode?: true
    customername?: true
    customermob?: true
    status?: true
    subtotal?: true
    discount?: true
    servicecharge?: true
    grandtotal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    restroid: number
    tableid: number | null
    ordercode: string
    customername: string | null
    customermob: string | null
    status: $Enums.OrderStatus
    subtotal: number
    discount: number
    servicecharge: number
    grandtotal: number
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    tableid?: boolean
    ordercode?: boolean
    customername?: boolean
    customermob?: boolean
    status?: boolean
    subtotal?: boolean
    discount?: boolean
    servicecharge?: boolean
    grandtotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    table?: boolean | Order$tableArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    tableid?: boolean
    ordercode?: boolean
    customername?: boolean
    customermob?: boolean
    status?: boolean
    subtotal?: boolean
    discount?: boolean
    servicecharge?: boolean
    grandtotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    table?: boolean | Order$tableArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    restroid?: boolean
    tableid?: boolean
    ordercode?: boolean
    customername?: boolean
    customermob?: boolean
    status?: boolean
    subtotal?: boolean
    discount?: boolean
    servicecharge?: boolean
    grandtotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    table?: boolean | Order$tableArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    table?: boolean | Order$tableArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      table: Prisma.$TablePayload<ExtArgs> | null
      items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      restroid: number
      tableid: number | null
      ordercode: string
      customername: string | null
      customermob: string | null
      status: $Enums.OrderStatus
      subtotal: number
      discount: number
      servicecharge: number
      grandtotal: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    table<T extends Order$tableArgs<ExtArgs> = {}>(args?: Subset<T, Order$tableArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly restroid: FieldRef<"Order", 'Int'>
    readonly tableid: FieldRef<"Order", 'Int'>
    readonly ordercode: FieldRef<"Order", 'String'>
    readonly customername: FieldRef<"Order", 'String'>
    readonly customermob: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly subtotal: FieldRef<"Order", 'Float'>
    readonly discount: FieldRef<"Order", 'Float'>
    readonly servicecharge: FieldRef<"Order", 'Float'>
    readonly grandtotal: FieldRef<"Order", 'Float'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.table
   */
  export type Order$tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    id: number | null
    orderid: number | null
    menuitemid: number | null
    price: number | null
    quantity: number | null
    totalprice: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    id: number | null
    orderid: number | null
    menuitemid: number | null
    price: number | null
    quantity: number | null
    totalprice: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: number | null
    orderid: number | null
    menuitemid: number | null
    name_eng: string | null
    name_guj: string | null
    name_hindi: string | null
    price: number | null
    quantity: number | null
    totalprice: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: number | null
    orderid: number | null
    menuitemid: number | null
    name_eng: string | null
    name_guj: string | null
    name_hindi: string | null
    price: number | null
    quantity: number | null
    totalprice: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderid: number
    menuitemid: number
    name_eng: number
    name_guj: number
    name_hindi: number
    price: number
    quantity: number
    totalprice: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    id?: true
    orderid?: true
    menuitemid?: true
    price?: true
    quantity?: true
    totalprice?: true
  }

  export type OrderItemSumAggregateInputType = {
    id?: true
    orderid?: true
    menuitemid?: true
    price?: true
    quantity?: true
    totalprice?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderid?: true
    menuitemid?: true
    name_eng?: true
    name_guj?: true
    name_hindi?: true
    price?: true
    quantity?: true
    totalprice?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderid?: true
    menuitemid?: true
    name_eng?: true
    name_guj?: true
    name_hindi?: true
    price?: true
    quantity?: true
    totalprice?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderid?: true
    menuitemid?: true
    name_eng?: true
    name_guj?: true
    name_hindi?: true
    price?: true
    quantity?: true
    totalprice?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: number
    orderid: number
    menuitemid: number
    name_eng: string
    name_guj: string | null
    name_hindi: string | null
    price: number
    quantity: number
    totalprice: number
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderid?: boolean
    menuitemid?: boolean
    name_eng?: boolean
    name_guj?: boolean
    name_hindi?: boolean
    price?: boolean
    quantity?: boolean
    totalprice?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuitem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderid?: boolean
    menuitemid?: boolean
    name_eng?: boolean
    name_guj?: boolean
    name_hindi?: boolean
    price?: boolean
    quantity?: boolean
    totalprice?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuitem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderid?: boolean
    menuitemid?: boolean
    name_eng?: boolean
    name_guj?: boolean
    name_hindi?: boolean
    price?: boolean
    quantity?: boolean
    totalprice?: boolean
  }

  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuitem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuitem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      menuitem: Prisma.$MenuItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderid: number
      menuitemid: number
      name_eng: string
      name_guj: string | null
      name_hindi: string | null
      price: number
      quantity: number
      totalprice: number
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    menuitem<T extends MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemDefaultArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */ 
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'Int'>
    readonly orderid: FieldRef<"OrderItem", 'Int'>
    readonly menuitemid: FieldRef<"OrderItem", 'Int'>
    readonly name_eng: FieldRef<"OrderItem", 'String'>
    readonly name_guj: FieldRef<"OrderItem", 'String'>
    readonly name_hindi: FieldRef<"OrderItem", 'String'>
    readonly price: FieldRef<"OrderItem", 'Float'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly totalprice: FieldRef<"OrderItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model OrderHistory
   */

  export type AggregateOrderHistory = {
    _count: OrderHistoryCountAggregateOutputType | null
    _avg: OrderHistoryAvgAggregateOutputType | null
    _sum: OrderHistorySumAggregateOutputType | null
    _min: OrderHistoryMinAggregateOutputType | null
    _max: OrderHistoryMaxAggregateOutputType | null
  }

  export type OrderHistoryAvgAggregateOutputType = {
    id: number | null
    restroid: number | null
    subtotal: number | null
    discount: number | null
    servicecharge: number | null
    grandtotal: number | null
  }

  export type OrderHistorySumAggregateOutputType = {
    id: number | null
    restroid: number | null
    subtotal: number | null
    discount: number | null
    servicecharge: number | null
    grandtotal: number | null
  }

  export type OrderHistoryMinAggregateOutputType = {
    id: number | null
    restroid: number | null
    ordercode: string | null
    tablename: string | null
    customername: string | null
    customermob: string | null
    subtotal: number | null
    discount: number | null
    servicecharge: number | null
    grandtotal: number | null
    timestamp: Date | null
  }

  export type OrderHistoryMaxAggregateOutputType = {
    id: number | null
    restroid: number | null
    ordercode: string | null
    tablename: string | null
    customername: string | null
    customermob: string | null
    subtotal: number | null
    discount: number | null
    servicecharge: number | null
    grandtotal: number | null
    timestamp: Date | null
  }

  export type OrderHistoryCountAggregateOutputType = {
    id: number
    restroid: number
    ordercode: number
    tablename: number
    customername: number
    customermob: number
    subtotal: number
    discount: number
    servicecharge: number
    grandtotal: number
    timestamp: number
    _all: number
  }


  export type OrderHistoryAvgAggregateInputType = {
    id?: true
    restroid?: true
    subtotal?: true
    discount?: true
    servicecharge?: true
    grandtotal?: true
  }

  export type OrderHistorySumAggregateInputType = {
    id?: true
    restroid?: true
    subtotal?: true
    discount?: true
    servicecharge?: true
    grandtotal?: true
  }

  export type OrderHistoryMinAggregateInputType = {
    id?: true
    restroid?: true
    ordercode?: true
    tablename?: true
    customername?: true
    customermob?: true
    subtotal?: true
    discount?: true
    servicecharge?: true
    grandtotal?: true
    timestamp?: true
  }

  export type OrderHistoryMaxAggregateInputType = {
    id?: true
    restroid?: true
    ordercode?: true
    tablename?: true
    customername?: true
    customermob?: true
    subtotal?: true
    discount?: true
    servicecharge?: true
    grandtotal?: true
    timestamp?: true
  }

  export type OrderHistoryCountAggregateInputType = {
    id?: true
    restroid?: true
    ordercode?: true
    tablename?: true
    customername?: true
    customermob?: true
    subtotal?: true
    discount?: true
    servicecharge?: true
    grandtotal?: true
    timestamp?: true
    _all?: true
  }

  export type OrderHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderHistory to aggregate.
     */
    where?: OrderHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderHistories to fetch.
     */
    orderBy?: OrderHistoryOrderByWithRelationInput | OrderHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderHistories
    **/
    _count?: true | OrderHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderHistoryMaxAggregateInputType
  }

  export type GetOrderHistoryAggregateType<T extends OrderHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderHistory[P]>
      : GetScalarType<T[P], AggregateOrderHistory[P]>
  }




  export type OrderHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderHistoryWhereInput
    orderBy?: OrderHistoryOrderByWithAggregationInput | OrderHistoryOrderByWithAggregationInput[]
    by: OrderHistoryScalarFieldEnum[] | OrderHistoryScalarFieldEnum
    having?: OrderHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderHistoryCountAggregateInputType | true
    _avg?: OrderHistoryAvgAggregateInputType
    _sum?: OrderHistorySumAggregateInputType
    _min?: OrderHistoryMinAggregateInputType
    _max?: OrderHistoryMaxAggregateInputType
  }

  export type OrderHistoryGroupByOutputType = {
    id: number
    restroid: number
    ordercode: string
    tablename: string | null
    customername: string | null
    customermob: string | null
    subtotal: number
    discount: number
    servicecharge: number
    grandtotal: number
    timestamp: Date
    _count: OrderHistoryCountAggregateOutputType | null
    _avg: OrderHistoryAvgAggregateOutputType | null
    _sum: OrderHistorySumAggregateOutputType | null
    _min: OrderHistoryMinAggregateOutputType | null
    _max: OrderHistoryMaxAggregateOutputType | null
  }

  type GetOrderHistoryGroupByPayload<T extends OrderHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], OrderHistoryGroupByOutputType[P]>
        }
      >
    >


  export type OrderHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    ordercode?: boolean
    tablename?: boolean
    customername?: boolean
    customermob?: boolean
    subtotal?: boolean
    discount?: boolean
    servicecharge?: boolean
    grandtotal?: boolean
    timestamp?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    items?: boolean | OrderHistory$itemsArgs<ExtArgs>
    _count?: boolean | OrderHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderHistory"]>

  export type OrderHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    ordercode?: boolean
    tablename?: boolean
    customername?: boolean
    customermob?: boolean
    subtotal?: boolean
    discount?: boolean
    servicecharge?: boolean
    grandtotal?: boolean
    timestamp?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderHistory"]>

  export type OrderHistorySelectScalar = {
    id?: boolean
    restroid?: boolean
    ordercode?: boolean
    tablename?: boolean
    customername?: boolean
    customermob?: boolean
    subtotal?: boolean
    discount?: boolean
    servicecharge?: boolean
    grandtotal?: boolean
    timestamp?: boolean
  }

  export type OrderHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    items?: boolean | OrderHistory$itemsArgs<ExtArgs>
    _count?: boolean | OrderHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $OrderHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderHistory"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      items: Prisma.$HistoryItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      restroid: number
      ordercode: string
      tablename: string | null
      customername: string | null
      customermob: string | null
      subtotal: number
      discount: number
      servicecharge: number
      grandtotal: number
      timestamp: Date
    }, ExtArgs["result"]["orderHistory"]>
    composites: {}
  }

  type OrderHistoryGetPayload<S extends boolean | null | undefined | OrderHistoryDefaultArgs> = $Result.GetResult<Prisma.$OrderHistoryPayload, S>

  type OrderHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderHistoryCountAggregateInputType | true
    }

  export interface OrderHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderHistory'], meta: { name: 'OrderHistory' } }
    /**
     * Find zero or one OrderHistory that matches the filter.
     * @param {OrderHistoryFindUniqueArgs} args - Arguments to find a OrderHistory
     * @example
     * // Get one OrderHistory
     * const orderHistory = await prisma.orderHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderHistoryFindUniqueArgs>(args: SelectSubset<T, OrderHistoryFindUniqueArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderHistoryFindUniqueOrThrowArgs} args - Arguments to find a OrderHistory
     * @example
     * // Get one OrderHistory
     * const orderHistory = await prisma.orderHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryFindFirstArgs} args - Arguments to find a OrderHistory
     * @example
     * // Get one OrderHistory
     * const orderHistory = await prisma.orderHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderHistoryFindFirstArgs>(args?: SelectSubset<T, OrderHistoryFindFirstArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryFindFirstOrThrowArgs} args - Arguments to find a OrderHistory
     * @example
     * // Get one OrderHistory
     * const orderHistory = await prisma.orderHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderHistories
     * const orderHistories = await prisma.orderHistory.findMany()
     * 
     * // Get first 10 OrderHistories
     * const orderHistories = await prisma.orderHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderHistoryWithIdOnly = await prisma.orderHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderHistoryFindManyArgs>(args?: SelectSubset<T, OrderHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderHistory.
     * @param {OrderHistoryCreateArgs} args - Arguments to create a OrderHistory.
     * @example
     * // Create one OrderHistory
     * const OrderHistory = await prisma.orderHistory.create({
     *   data: {
     *     // ... data to create a OrderHistory
     *   }
     * })
     * 
     */
    create<T extends OrderHistoryCreateArgs>(args: SelectSubset<T, OrderHistoryCreateArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderHistories.
     * @param {OrderHistoryCreateManyArgs} args - Arguments to create many OrderHistories.
     * @example
     * // Create many OrderHistories
     * const orderHistory = await prisma.orderHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderHistoryCreateManyArgs>(args?: SelectSubset<T, OrderHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderHistories and returns the data saved in the database.
     * @param {OrderHistoryCreateManyAndReturnArgs} args - Arguments to create many OrderHistories.
     * @example
     * // Create many OrderHistories
     * const orderHistory = await prisma.orderHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderHistories and only return the `id`
     * const orderHistoryWithIdOnly = await prisma.orderHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrderHistory.
     * @param {OrderHistoryDeleteArgs} args - Arguments to delete one OrderHistory.
     * @example
     * // Delete one OrderHistory
     * const OrderHistory = await prisma.orderHistory.delete({
     *   where: {
     *     // ... filter to delete one OrderHistory
     *   }
     * })
     * 
     */
    delete<T extends OrderHistoryDeleteArgs>(args: SelectSubset<T, OrderHistoryDeleteArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderHistory.
     * @param {OrderHistoryUpdateArgs} args - Arguments to update one OrderHistory.
     * @example
     * // Update one OrderHistory
     * const orderHistory = await prisma.orderHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderHistoryUpdateArgs>(args: SelectSubset<T, OrderHistoryUpdateArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderHistories.
     * @param {OrderHistoryDeleteManyArgs} args - Arguments to filter OrderHistories to delete.
     * @example
     * // Delete a few OrderHistories
     * const { count } = await prisma.orderHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderHistoryDeleteManyArgs>(args?: SelectSubset<T, OrderHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderHistories
     * const orderHistory = await prisma.orderHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderHistoryUpdateManyArgs>(args: SelectSubset<T, OrderHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderHistory.
     * @param {OrderHistoryUpsertArgs} args - Arguments to update or create a OrderHistory.
     * @example
     * // Update or create a OrderHistory
     * const orderHistory = await prisma.orderHistory.upsert({
     *   create: {
     *     // ... data to create a OrderHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderHistory we want to update
     *   }
     * })
     */
    upsert<T extends OrderHistoryUpsertArgs>(args: SelectSubset<T, OrderHistoryUpsertArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryCountArgs} args - Arguments to filter OrderHistories to count.
     * @example
     * // Count the number of OrderHistories
     * const count = await prisma.orderHistory.count({
     *   where: {
     *     // ... the filter for the OrderHistories we want to count
     *   }
     * })
    **/
    count<T extends OrderHistoryCountArgs>(
      args?: Subset<T, OrderHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderHistoryAggregateArgs>(args: Subset<T, OrderHistoryAggregateArgs>): Prisma.PrismaPromise<GetOrderHistoryAggregateType<T>>

    /**
     * Group by OrderHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderHistoryGroupByArgs['orderBy'] }
        : { orderBy?: OrderHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderHistory model
   */
  readonly fields: OrderHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    items<T extends OrderHistory$itemsArgs<ExtArgs> = {}>(args?: Subset<T, OrderHistory$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderHistory model
   */ 
  interface OrderHistoryFieldRefs {
    readonly id: FieldRef<"OrderHistory", 'Int'>
    readonly restroid: FieldRef<"OrderHistory", 'Int'>
    readonly ordercode: FieldRef<"OrderHistory", 'String'>
    readonly tablename: FieldRef<"OrderHistory", 'String'>
    readonly customername: FieldRef<"OrderHistory", 'String'>
    readonly customermob: FieldRef<"OrderHistory", 'String'>
    readonly subtotal: FieldRef<"OrderHistory", 'Float'>
    readonly discount: FieldRef<"OrderHistory", 'Float'>
    readonly servicecharge: FieldRef<"OrderHistory", 'Float'>
    readonly grandtotal: FieldRef<"OrderHistory", 'Float'>
    readonly timestamp: FieldRef<"OrderHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderHistory findUnique
   */
  export type OrderHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderHistory to fetch.
     */
    where: OrderHistoryWhereUniqueInput
  }

  /**
   * OrderHistory findUniqueOrThrow
   */
  export type OrderHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderHistory to fetch.
     */
    where: OrderHistoryWhereUniqueInput
  }

  /**
   * OrderHistory findFirst
   */
  export type OrderHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderHistory to fetch.
     */
    where?: OrderHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderHistories to fetch.
     */
    orderBy?: OrderHistoryOrderByWithRelationInput | OrderHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderHistories.
     */
    cursor?: OrderHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderHistories.
     */
    distinct?: OrderHistoryScalarFieldEnum | OrderHistoryScalarFieldEnum[]
  }

  /**
   * OrderHistory findFirstOrThrow
   */
  export type OrderHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderHistory to fetch.
     */
    where?: OrderHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderHistories to fetch.
     */
    orderBy?: OrderHistoryOrderByWithRelationInput | OrderHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderHistories.
     */
    cursor?: OrderHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderHistories.
     */
    distinct?: OrderHistoryScalarFieldEnum | OrderHistoryScalarFieldEnum[]
  }

  /**
   * OrderHistory findMany
   */
  export type OrderHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderHistories to fetch.
     */
    where?: OrderHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderHistories to fetch.
     */
    orderBy?: OrderHistoryOrderByWithRelationInput | OrderHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderHistories.
     */
    cursor?: OrderHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderHistories.
     */
    skip?: number
    distinct?: OrderHistoryScalarFieldEnum | OrderHistoryScalarFieldEnum[]
  }

  /**
   * OrderHistory create
   */
  export type OrderHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderHistory.
     */
    data: XOR<OrderHistoryCreateInput, OrderHistoryUncheckedCreateInput>
  }

  /**
   * OrderHistory createMany
   */
  export type OrderHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderHistories.
     */
    data: OrderHistoryCreateManyInput | OrderHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderHistory createManyAndReturn
   */
  export type OrderHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrderHistories.
     */
    data: OrderHistoryCreateManyInput | OrderHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderHistory update
   */
  export type OrderHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderHistory.
     */
    data: XOR<OrderHistoryUpdateInput, OrderHistoryUncheckedUpdateInput>
    /**
     * Choose, which OrderHistory to update.
     */
    where: OrderHistoryWhereUniqueInput
  }

  /**
   * OrderHistory updateMany
   */
  export type OrderHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderHistories.
     */
    data: XOR<OrderHistoryUpdateManyMutationInput, OrderHistoryUncheckedUpdateManyInput>
    /**
     * Filter which OrderHistories to update
     */
    where?: OrderHistoryWhereInput
  }

  /**
   * OrderHistory upsert
   */
  export type OrderHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderHistory to update in case it exists.
     */
    where: OrderHistoryWhereUniqueInput
    /**
     * In case the OrderHistory found by the `where` argument doesn't exist, create a new OrderHistory with this data.
     */
    create: XOR<OrderHistoryCreateInput, OrderHistoryUncheckedCreateInput>
    /**
     * In case the OrderHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderHistoryUpdateInput, OrderHistoryUncheckedUpdateInput>
  }

  /**
   * OrderHistory delete
   */
  export type OrderHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter which OrderHistory to delete.
     */
    where: OrderHistoryWhereUniqueInput
  }

  /**
   * OrderHistory deleteMany
   */
  export type OrderHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderHistories to delete
     */
    where?: OrderHistoryWhereInput
  }

  /**
   * OrderHistory.items
   */
  export type OrderHistory$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryItem
     */
    select?: HistoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryItemInclude<ExtArgs> | null
    where?: HistoryItemWhereInput
    orderBy?: HistoryItemOrderByWithRelationInput | HistoryItemOrderByWithRelationInput[]
    cursor?: HistoryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryItemScalarFieldEnum | HistoryItemScalarFieldEnum[]
  }

  /**
   * OrderHistory without action
   */
  export type OrderHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
  }


  /**
   * Model HistoryItem
   */

  export type AggregateHistoryItem = {
    _count: HistoryItemCountAggregateOutputType | null
    _avg: HistoryItemAvgAggregateOutputType | null
    _sum: HistoryItemSumAggregateOutputType | null
    _min: HistoryItemMinAggregateOutputType | null
    _max: HistoryItemMaxAggregateOutputType | null
  }

  export type HistoryItemAvgAggregateOutputType = {
    id: number | null
    orderid: number | null
    price: number | null
    quantity: number | null
    totalprice: number | null
  }

  export type HistoryItemSumAggregateOutputType = {
    id: number | null
    orderid: number | null
    price: number | null
    quantity: number | null
    totalprice: number | null
  }

  export type HistoryItemMinAggregateOutputType = {
    id: number | null
    orderid: number | null
    name_eng: string | null
    name_guj: string | null
    name_hindi: string | null
    price: number | null
    quantity: number | null
    totalprice: number | null
  }

  export type HistoryItemMaxAggregateOutputType = {
    id: number | null
    orderid: number | null
    name_eng: string | null
    name_guj: string | null
    name_hindi: string | null
    price: number | null
    quantity: number | null
    totalprice: number | null
  }

  export type HistoryItemCountAggregateOutputType = {
    id: number
    orderid: number
    name_eng: number
    name_guj: number
    name_hindi: number
    price: number
    quantity: number
    totalprice: number
    _all: number
  }


  export type HistoryItemAvgAggregateInputType = {
    id?: true
    orderid?: true
    price?: true
    quantity?: true
    totalprice?: true
  }

  export type HistoryItemSumAggregateInputType = {
    id?: true
    orderid?: true
    price?: true
    quantity?: true
    totalprice?: true
  }

  export type HistoryItemMinAggregateInputType = {
    id?: true
    orderid?: true
    name_eng?: true
    name_guj?: true
    name_hindi?: true
    price?: true
    quantity?: true
    totalprice?: true
  }

  export type HistoryItemMaxAggregateInputType = {
    id?: true
    orderid?: true
    name_eng?: true
    name_guj?: true
    name_hindi?: true
    price?: true
    quantity?: true
    totalprice?: true
  }

  export type HistoryItemCountAggregateInputType = {
    id?: true
    orderid?: true
    name_eng?: true
    name_guj?: true
    name_hindi?: true
    price?: true
    quantity?: true
    totalprice?: true
    _all?: true
  }

  export type HistoryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryItem to aggregate.
     */
    where?: HistoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryItems to fetch.
     */
    orderBy?: HistoryItemOrderByWithRelationInput | HistoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoryItems
    **/
    _count?: true | HistoryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryItemMaxAggregateInputType
  }

  export type GetHistoryItemAggregateType<T extends HistoryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoryItem[P]>
      : GetScalarType<T[P], AggregateHistoryItem[P]>
  }




  export type HistoryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryItemWhereInput
    orderBy?: HistoryItemOrderByWithAggregationInput | HistoryItemOrderByWithAggregationInput[]
    by: HistoryItemScalarFieldEnum[] | HistoryItemScalarFieldEnum
    having?: HistoryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryItemCountAggregateInputType | true
    _avg?: HistoryItemAvgAggregateInputType
    _sum?: HistoryItemSumAggregateInputType
    _min?: HistoryItemMinAggregateInputType
    _max?: HistoryItemMaxAggregateInputType
  }

  export type HistoryItemGroupByOutputType = {
    id: number
    orderid: number
    name_eng: string
    name_guj: string | null
    name_hindi: string | null
    price: number
    quantity: number
    totalprice: number
    _count: HistoryItemCountAggregateOutputType | null
    _avg: HistoryItemAvgAggregateOutputType | null
    _sum: HistoryItemSumAggregateOutputType | null
    _min: HistoryItemMinAggregateOutputType | null
    _max: HistoryItemMaxAggregateOutputType | null
  }

  type GetHistoryItemGroupByPayload<T extends HistoryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryItemGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryItemGroupByOutputType[P]>
        }
      >
    >


  export type HistoryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderid?: boolean
    name_eng?: boolean
    name_guj?: boolean
    name_hindi?: boolean
    price?: boolean
    quantity?: boolean
    totalprice?: boolean
    order?: boolean | OrderHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyItem"]>

  export type HistoryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderid?: boolean
    name_eng?: boolean
    name_guj?: boolean
    name_hindi?: boolean
    price?: boolean
    quantity?: boolean
    totalprice?: boolean
    order?: boolean | OrderHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyItem"]>

  export type HistoryItemSelectScalar = {
    id?: boolean
    orderid?: boolean
    name_eng?: boolean
    name_guj?: boolean
    name_hindi?: boolean
    price?: boolean
    quantity?: boolean
    totalprice?: boolean
  }

  export type HistoryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderHistoryDefaultArgs<ExtArgs>
  }
  export type HistoryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderHistoryDefaultArgs<ExtArgs>
  }

  export type $HistoryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoryItem"
    objects: {
      order: Prisma.$OrderHistoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderid: number
      name_eng: string
      name_guj: string | null
      name_hindi: string | null
      price: number
      quantity: number
      totalprice: number
    }, ExtArgs["result"]["historyItem"]>
    composites: {}
  }

  type HistoryItemGetPayload<S extends boolean | null | undefined | HistoryItemDefaultArgs> = $Result.GetResult<Prisma.$HistoryItemPayload, S>

  type HistoryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HistoryItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HistoryItemCountAggregateInputType | true
    }

  export interface HistoryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoryItem'], meta: { name: 'HistoryItem' } }
    /**
     * Find zero or one HistoryItem that matches the filter.
     * @param {HistoryItemFindUniqueArgs} args - Arguments to find a HistoryItem
     * @example
     * // Get one HistoryItem
     * const historyItem = await prisma.historyItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryItemFindUniqueArgs>(args: SelectSubset<T, HistoryItemFindUniqueArgs<ExtArgs>>): Prisma__HistoryItemClient<$Result.GetResult<Prisma.$HistoryItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one HistoryItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HistoryItemFindUniqueOrThrowArgs} args - Arguments to find a HistoryItem
     * @example
     * // Get one HistoryItem
     * const historyItem = await prisma.historyItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryItemClient<$Result.GetResult<Prisma.$HistoryItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first HistoryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryItemFindFirstArgs} args - Arguments to find a HistoryItem
     * @example
     * // Get one HistoryItem
     * const historyItem = await prisma.historyItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryItemFindFirstArgs>(args?: SelectSubset<T, HistoryItemFindFirstArgs<ExtArgs>>): Prisma__HistoryItemClient<$Result.GetResult<Prisma.$HistoryItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first HistoryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryItemFindFirstOrThrowArgs} args - Arguments to find a HistoryItem
     * @example
     * // Get one HistoryItem
     * const historyItem = await prisma.historyItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryItemClient<$Result.GetResult<Prisma.$HistoryItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more HistoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoryItems
     * const historyItems = await prisma.historyItem.findMany()
     * 
     * // Get first 10 HistoryItems
     * const historyItems = await prisma.historyItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyItemWithIdOnly = await prisma.historyItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryItemFindManyArgs>(args?: SelectSubset<T, HistoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a HistoryItem.
     * @param {HistoryItemCreateArgs} args - Arguments to create a HistoryItem.
     * @example
     * // Create one HistoryItem
     * const HistoryItem = await prisma.historyItem.create({
     *   data: {
     *     // ... data to create a HistoryItem
     *   }
     * })
     * 
     */
    create<T extends HistoryItemCreateArgs>(args: SelectSubset<T, HistoryItemCreateArgs<ExtArgs>>): Prisma__HistoryItemClient<$Result.GetResult<Prisma.$HistoryItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many HistoryItems.
     * @param {HistoryItemCreateManyArgs} args - Arguments to create many HistoryItems.
     * @example
     * // Create many HistoryItems
     * const historyItem = await prisma.historyItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryItemCreateManyArgs>(args?: SelectSubset<T, HistoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoryItems and returns the data saved in the database.
     * @param {HistoryItemCreateManyAndReturnArgs} args - Arguments to create many HistoryItems.
     * @example
     * // Create many HistoryItems
     * const historyItem = await prisma.historyItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoryItems and only return the `id`
     * const historyItemWithIdOnly = await prisma.historyItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a HistoryItem.
     * @param {HistoryItemDeleteArgs} args - Arguments to delete one HistoryItem.
     * @example
     * // Delete one HistoryItem
     * const HistoryItem = await prisma.historyItem.delete({
     *   where: {
     *     // ... filter to delete one HistoryItem
     *   }
     * })
     * 
     */
    delete<T extends HistoryItemDeleteArgs>(args: SelectSubset<T, HistoryItemDeleteArgs<ExtArgs>>): Prisma__HistoryItemClient<$Result.GetResult<Prisma.$HistoryItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one HistoryItem.
     * @param {HistoryItemUpdateArgs} args - Arguments to update one HistoryItem.
     * @example
     * // Update one HistoryItem
     * const historyItem = await prisma.historyItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryItemUpdateArgs>(args: SelectSubset<T, HistoryItemUpdateArgs<ExtArgs>>): Prisma__HistoryItemClient<$Result.GetResult<Prisma.$HistoryItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more HistoryItems.
     * @param {HistoryItemDeleteManyArgs} args - Arguments to filter HistoryItems to delete.
     * @example
     * // Delete a few HistoryItems
     * const { count } = await prisma.historyItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryItemDeleteManyArgs>(args?: SelectSubset<T, HistoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoryItems
     * const historyItem = await prisma.historyItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryItemUpdateManyArgs>(args: SelectSubset<T, HistoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HistoryItem.
     * @param {HistoryItemUpsertArgs} args - Arguments to update or create a HistoryItem.
     * @example
     * // Update or create a HistoryItem
     * const historyItem = await prisma.historyItem.upsert({
     *   create: {
     *     // ... data to create a HistoryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoryItem we want to update
     *   }
     * })
     */
    upsert<T extends HistoryItemUpsertArgs>(args: SelectSubset<T, HistoryItemUpsertArgs<ExtArgs>>): Prisma__HistoryItemClient<$Result.GetResult<Prisma.$HistoryItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of HistoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryItemCountArgs} args - Arguments to filter HistoryItems to count.
     * @example
     * // Count the number of HistoryItems
     * const count = await prisma.historyItem.count({
     *   where: {
     *     // ... the filter for the HistoryItems we want to count
     *   }
     * })
    **/
    count<T extends HistoryItemCountArgs>(
      args?: Subset<T, HistoryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoryItemAggregateArgs>(args: Subset<T, HistoryItemAggregateArgs>): Prisma.PrismaPromise<GetHistoryItemAggregateType<T>>

    /**
     * Group by HistoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryItemGroupByArgs['orderBy'] }
        : { orderBy?: HistoryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoryItem model
   */
  readonly fields: HistoryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderHistoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderHistoryDefaultArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistoryItem model
   */ 
  interface HistoryItemFieldRefs {
    readonly id: FieldRef<"HistoryItem", 'Int'>
    readonly orderid: FieldRef<"HistoryItem", 'Int'>
    readonly name_eng: FieldRef<"HistoryItem", 'String'>
    readonly name_guj: FieldRef<"HistoryItem", 'String'>
    readonly name_hindi: FieldRef<"HistoryItem", 'String'>
    readonly price: FieldRef<"HistoryItem", 'Float'>
    readonly quantity: FieldRef<"HistoryItem", 'Int'>
    readonly totalprice: FieldRef<"HistoryItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * HistoryItem findUnique
   */
  export type HistoryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryItem
     */
    select?: HistoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryItemInclude<ExtArgs> | null
    /**
     * Filter, which HistoryItem to fetch.
     */
    where: HistoryItemWhereUniqueInput
  }

  /**
   * HistoryItem findUniqueOrThrow
   */
  export type HistoryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryItem
     */
    select?: HistoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryItemInclude<ExtArgs> | null
    /**
     * Filter, which HistoryItem to fetch.
     */
    where: HistoryItemWhereUniqueInput
  }

  /**
   * HistoryItem findFirst
   */
  export type HistoryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryItem
     */
    select?: HistoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryItemInclude<ExtArgs> | null
    /**
     * Filter, which HistoryItem to fetch.
     */
    where?: HistoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryItems to fetch.
     */
    orderBy?: HistoryItemOrderByWithRelationInput | HistoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryItems.
     */
    cursor?: HistoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryItems.
     */
    distinct?: HistoryItemScalarFieldEnum | HistoryItemScalarFieldEnum[]
  }

  /**
   * HistoryItem findFirstOrThrow
   */
  export type HistoryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryItem
     */
    select?: HistoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryItemInclude<ExtArgs> | null
    /**
     * Filter, which HistoryItem to fetch.
     */
    where?: HistoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryItems to fetch.
     */
    orderBy?: HistoryItemOrderByWithRelationInput | HistoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryItems.
     */
    cursor?: HistoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryItems.
     */
    distinct?: HistoryItemScalarFieldEnum | HistoryItemScalarFieldEnum[]
  }

  /**
   * HistoryItem findMany
   */
  export type HistoryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryItem
     */
    select?: HistoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryItemInclude<ExtArgs> | null
    /**
     * Filter, which HistoryItems to fetch.
     */
    where?: HistoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryItems to fetch.
     */
    orderBy?: HistoryItemOrderByWithRelationInput | HistoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoryItems.
     */
    cursor?: HistoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryItems.
     */
    skip?: number
    distinct?: HistoryItemScalarFieldEnum | HistoryItemScalarFieldEnum[]
  }

  /**
   * HistoryItem create
   */
  export type HistoryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryItem
     */
    select?: HistoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoryItem.
     */
    data: XOR<HistoryItemCreateInput, HistoryItemUncheckedCreateInput>
  }

  /**
   * HistoryItem createMany
   */
  export type HistoryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoryItems.
     */
    data: HistoryItemCreateManyInput | HistoryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoryItem createManyAndReturn
   */
  export type HistoryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryItem
     */
    select?: HistoryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many HistoryItems.
     */
    data: HistoryItemCreateManyInput | HistoryItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoryItem update
   */
  export type HistoryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryItem
     */
    select?: HistoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoryItem.
     */
    data: XOR<HistoryItemUpdateInput, HistoryItemUncheckedUpdateInput>
    /**
     * Choose, which HistoryItem to update.
     */
    where: HistoryItemWhereUniqueInput
  }

  /**
   * HistoryItem updateMany
   */
  export type HistoryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoryItems.
     */
    data: XOR<HistoryItemUpdateManyMutationInput, HistoryItemUncheckedUpdateManyInput>
    /**
     * Filter which HistoryItems to update
     */
    where?: HistoryItemWhereInput
  }

  /**
   * HistoryItem upsert
   */
  export type HistoryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryItem
     */
    select?: HistoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoryItem to update in case it exists.
     */
    where: HistoryItemWhereUniqueInput
    /**
     * In case the HistoryItem found by the `where` argument doesn't exist, create a new HistoryItem with this data.
     */
    create: XOR<HistoryItemCreateInput, HistoryItemUncheckedCreateInput>
    /**
     * In case the HistoryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryItemUpdateInput, HistoryItemUncheckedUpdateInput>
  }

  /**
   * HistoryItem delete
   */
  export type HistoryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryItem
     */
    select?: HistoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryItemInclude<ExtArgs> | null
    /**
     * Filter which HistoryItem to delete.
     */
    where: HistoryItemWhereUniqueInput
  }

  /**
   * HistoryItem deleteMany
   */
  export type HistoryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryItems to delete
     */
    where?: HistoryItemWhereInput
  }

  /**
   * HistoryItem without action
   */
  export type HistoryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryItem
     */
    select?: HistoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryItemInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
    restroid: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
    restroid: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    restroid: number | null
    fullname: string | null
    mobile: string | null
    email: string | null
    feedback: string | null
    dob: Date | null
    timestamp: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    restroid: number | null
    fullname: string | null
    mobile: string | null
    email: string | null
    feedback: string | null
    dob: Date | null
    timestamp: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    restroid: number
    fullname: number
    mobile: number
    email: number
    feedback: number
    dob: number
    timestamp: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
    restroid?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
    restroid?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    restroid?: true
    fullname?: true
    mobile?: true
    email?: true
    feedback?: true
    dob?: true
    timestamp?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    restroid?: true
    fullname?: true
    mobile?: true
    email?: true
    feedback?: true
    dob?: true
    timestamp?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    restroid?: true
    fullname?: true
    mobile?: true
    email?: true
    feedback?: true
    dob?: true
    timestamp?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: number
    restroid: number
    fullname: string
    mobile: string | null
    email: string | null
    feedback: string | null
    dob: Date | null
    timestamp: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    fullname?: boolean
    mobile?: boolean
    email?: boolean
    feedback?: boolean
    dob?: boolean
    timestamp?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    fullname?: boolean
    mobile?: boolean
    email?: boolean
    feedback?: boolean
    dob?: boolean
    timestamp?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    restroid?: boolean
    fullname?: boolean
    mobile?: boolean
    email?: boolean
    feedback?: boolean
    dob?: boolean
    timestamp?: boolean
  }

  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      restroid: number
      fullname: string
      mobile: string | null
      email: string | null
      feedback: string | null
      dob: Date | null
      timestamp: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feedback model
   */ 
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'Int'>
    readonly restroid: FieldRef<"Feedback", 'Int'>
    readonly fullname: FieldRef<"Feedback", 'String'>
    readonly mobile: FieldRef<"Feedback", 'String'>
    readonly email: FieldRef<"Feedback", 'String'>
    readonly feedback: FieldRef<"Feedback", 'String'>
    readonly dob: FieldRef<"Feedback", 'DateTime'>
    readonly timestamp: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Model PaymentHistory
   */

  export type AggregatePaymentHistory = {
    _count: PaymentHistoryCountAggregateOutputType | null
    _avg: PaymentHistoryAvgAggregateOutputType | null
    _sum: PaymentHistorySumAggregateOutputType | null
    _min: PaymentHistoryMinAggregateOutputType | null
    _max: PaymentHistoryMaxAggregateOutputType | null
  }

  export type PaymentHistoryAvgAggregateOutputType = {
    id: number | null
    restroid: number | null
    subplan: number | null
    price: number | null
    subtype: number | null
  }

  export type PaymentHistorySumAggregateOutputType = {
    id: number | null
    restroid: number | null
    subplan: number | null
    price: number | null
    subtype: number | null
  }

  export type PaymentHistoryMinAggregateOutputType = {
    id: number | null
    restroid: number | null
    paymentdate: Date | null
    subplan: number | null
    price: number | null
    subtype: number | null
    expdate: Date | null
  }

  export type PaymentHistoryMaxAggregateOutputType = {
    id: number | null
    restroid: number | null
    paymentdate: Date | null
    subplan: number | null
    price: number | null
    subtype: number | null
    expdate: Date | null
  }

  export type PaymentHistoryCountAggregateOutputType = {
    id: number
    restroid: number
    paymentdate: number
    subplan: number
    price: number
    subtype: number
    expdate: number
    _all: number
  }


  export type PaymentHistoryAvgAggregateInputType = {
    id?: true
    restroid?: true
    subplan?: true
    price?: true
    subtype?: true
  }

  export type PaymentHistorySumAggregateInputType = {
    id?: true
    restroid?: true
    subplan?: true
    price?: true
    subtype?: true
  }

  export type PaymentHistoryMinAggregateInputType = {
    id?: true
    restroid?: true
    paymentdate?: true
    subplan?: true
    price?: true
    subtype?: true
    expdate?: true
  }

  export type PaymentHistoryMaxAggregateInputType = {
    id?: true
    restroid?: true
    paymentdate?: true
    subplan?: true
    price?: true
    subtype?: true
    expdate?: true
  }

  export type PaymentHistoryCountAggregateInputType = {
    id?: true
    restroid?: true
    paymentdate?: true
    subplan?: true
    price?: true
    subtype?: true
    expdate?: true
    _all?: true
  }

  export type PaymentHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentHistory to aggregate.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentHistories
    **/
    _count?: true | PaymentHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentHistoryMaxAggregateInputType
  }

  export type GetPaymentHistoryAggregateType<T extends PaymentHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentHistory[P]>
      : GetScalarType<T[P], AggregatePaymentHistory[P]>
  }




  export type PaymentHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentHistoryWhereInput
    orderBy?: PaymentHistoryOrderByWithAggregationInput | PaymentHistoryOrderByWithAggregationInput[]
    by: PaymentHistoryScalarFieldEnum[] | PaymentHistoryScalarFieldEnum
    having?: PaymentHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentHistoryCountAggregateInputType | true
    _avg?: PaymentHistoryAvgAggregateInputType
    _sum?: PaymentHistorySumAggregateInputType
    _min?: PaymentHistoryMinAggregateInputType
    _max?: PaymentHistoryMaxAggregateInputType
  }

  export type PaymentHistoryGroupByOutputType = {
    id: number
    restroid: number
    paymentdate: Date
    subplan: number
    price: number
    subtype: number
    expdate: Date
    _count: PaymentHistoryCountAggregateOutputType | null
    _avg: PaymentHistoryAvgAggregateOutputType | null
    _sum: PaymentHistorySumAggregateOutputType | null
    _min: PaymentHistoryMinAggregateOutputType | null
    _max: PaymentHistoryMaxAggregateOutputType | null
  }

  type GetPaymentHistoryGroupByPayload<T extends PaymentHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PaymentHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    paymentdate?: boolean
    subplan?: boolean
    price?: boolean
    subtype?: boolean
    expdate?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentHistory"]>

  export type PaymentHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    paymentdate?: boolean
    subplan?: boolean
    price?: boolean
    subtype?: boolean
    expdate?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentHistory"]>

  export type PaymentHistorySelectScalar = {
    id?: boolean
    restroid?: boolean
    paymentdate?: boolean
    subplan?: boolean
    price?: boolean
    subtype?: boolean
    expdate?: boolean
  }

  export type PaymentHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type PaymentHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $PaymentHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentHistory"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      restroid: number
      paymentdate: Date
      subplan: number
      price: number
      subtype: number
      expdate: Date
    }, ExtArgs["result"]["paymentHistory"]>
    composites: {}
  }

  type PaymentHistoryGetPayload<S extends boolean | null | undefined | PaymentHistoryDefaultArgs> = $Result.GetResult<Prisma.$PaymentHistoryPayload, S>

  type PaymentHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentHistoryCountAggregateInputType | true
    }

  export interface PaymentHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentHistory'], meta: { name: 'PaymentHistory' } }
    /**
     * Find zero or one PaymentHistory that matches the filter.
     * @param {PaymentHistoryFindUniqueArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentHistoryFindUniqueArgs>(args: SelectSubset<T, PaymentHistoryFindUniqueArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentHistoryFindUniqueOrThrowArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindFirstArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentHistoryFindFirstArgs>(args?: SelectSubset<T, PaymentHistoryFindFirstArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindFirstOrThrowArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentHistories
     * const paymentHistories = await prisma.paymentHistory.findMany()
     * 
     * // Get first 10 PaymentHistories
     * const paymentHistories = await prisma.paymentHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentHistoryWithIdOnly = await prisma.paymentHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentHistoryFindManyArgs>(args?: SelectSubset<T, PaymentHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentHistory.
     * @param {PaymentHistoryCreateArgs} args - Arguments to create a PaymentHistory.
     * @example
     * // Create one PaymentHistory
     * const PaymentHistory = await prisma.paymentHistory.create({
     *   data: {
     *     // ... data to create a PaymentHistory
     *   }
     * })
     * 
     */
    create<T extends PaymentHistoryCreateArgs>(args: SelectSubset<T, PaymentHistoryCreateArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentHistories.
     * @param {PaymentHistoryCreateManyArgs} args - Arguments to create many PaymentHistories.
     * @example
     * // Create many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentHistoryCreateManyArgs>(args?: SelectSubset<T, PaymentHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentHistories and returns the data saved in the database.
     * @param {PaymentHistoryCreateManyAndReturnArgs} args - Arguments to create many PaymentHistories.
     * @example
     * // Create many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentHistories and only return the `id`
     * const paymentHistoryWithIdOnly = await prisma.paymentHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PaymentHistory.
     * @param {PaymentHistoryDeleteArgs} args - Arguments to delete one PaymentHistory.
     * @example
     * // Delete one PaymentHistory
     * const PaymentHistory = await prisma.paymentHistory.delete({
     *   where: {
     *     // ... filter to delete one PaymentHistory
     *   }
     * })
     * 
     */
    delete<T extends PaymentHistoryDeleteArgs>(args: SelectSubset<T, PaymentHistoryDeleteArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentHistory.
     * @param {PaymentHistoryUpdateArgs} args - Arguments to update one PaymentHistory.
     * @example
     * // Update one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentHistoryUpdateArgs>(args: SelectSubset<T, PaymentHistoryUpdateArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentHistories.
     * @param {PaymentHistoryDeleteManyArgs} args - Arguments to filter PaymentHistories to delete.
     * @example
     * // Delete a few PaymentHistories
     * const { count } = await prisma.paymentHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentHistoryDeleteManyArgs>(args?: SelectSubset<T, PaymentHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentHistoryUpdateManyArgs>(args: SelectSubset<T, PaymentHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentHistory.
     * @param {PaymentHistoryUpsertArgs} args - Arguments to update or create a PaymentHistory.
     * @example
     * // Update or create a PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.upsert({
     *   create: {
     *     // ... data to create a PaymentHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentHistory we want to update
     *   }
     * })
     */
    upsert<T extends PaymentHistoryUpsertArgs>(args: SelectSubset<T, PaymentHistoryUpsertArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryCountArgs} args - Arguments to filter PaymentHistories to count.
     * @example
     * // Count the number of PaymentHistories
     * const count = await prisma.paymentHistory.count({
     *   where: {
     *     // ... the filter for the PaymentHistories we want to count
     *   }
     * })
    **/
    count<T extends PaymentHistoryCountArgs>(
      args?: Subset<T, PaymentHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentHistoryAggregateArgs>(args: Subset<T, PaymentHistoryAggregateArgs>): Prisma.PrismaPromise<GetPaymentHistoryAggregateType<T>>

    /**
     * Group by PaymentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PaymentHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentHistory model
   */
  readonly fields: PaymentHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentHistory model
   */ 
  interface PaymentHistoryFieldRefs {
    readonly id: FieldRef<"PaymentHistory", 'Int'>
    readonly restroid: FieldRef<"PaymentHistory", 'Int'>
    readonly paymentdate: FieldRef<"PaymentHistory", 'DateTime'>
    readonly subplan: FieldRef<"PaymentHistory", 'Int'>
    readonly price: FieldRef<"PaymentHistory", 'Int'>
    readonly subtype: FieldRef<"PaymentHistory", 'Int'>
    readonly expdate: FieldRef<"PaymentHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentHistory findUnique
   */
  export type PaymentHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory findUniqueOrThrow
   */
  export type PaymentHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory findFirst
   */
  export type PaymentHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentHistories.
     */
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory findFirstOrThrow
   */
  export type PaymentHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentHistories.
     */
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory findMany
   */
  export type PaymentHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistories to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory create
   */
  export type PaymentHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentHistory.
     */
    data: XOR<PaymentHistoryCreateInput, PaymentHistoryUncheckedCreateInput>
  }

  /**
   * PaymentHistory createMany
   */
  export type PaymentHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentHistories.
     */
    data: PaymentHistoryCreateManyInput | PaymentHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentHistory createManyAndReturn
   */
  export type PaymentHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PaymentHistories.
     */
    data: PaymentHistoryCreateManyInput | PaymentHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentHistory update
   */
  export type PaymentHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentHistory.
     */
    data: XOR<PaymentHistoryUpdateInput, PaymentHistoryUncheckedUpdateInput>
    /**
     * Choose, which PaymentHistory to update.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory updateMany
   */
  export type PaymentHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentHistories.
     */
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PaymentHistories to update
     */
    where?: PaymentHistoryWhereInput
  }

  /**
   * PaymentHistory upsert
   */
  export type PaymentHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentHistory to update in case it exists.
     */
    where: PaymentHistoryWhereUniqueInput
    /**
     * In case the PaymentHistory found by the `where` argument doesn't exist, create a new PaymentHistory with this data.
     */
    create: XOR<PaymentHistoryCreateInput, PaymentHistoryUncheckedCreateInput>
    /**
     * In case the PaymentHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentHistoryUpdateInput, PaymentHistoryUncheckedUpdateInput>
  }

  /**
   * PaymentHistory delete
   */
  export type PaymentHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter which PaymentHistory to delete.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory deleteMany
   */
  export type PaymentHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentHistories to delete
     */
    where?: PaymentHistoryWhereInput
  }

  /**
   * PaymentHistory without action
   */
  export type PaymentHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
  }


  /**
   * Model WaiterRequest
   */

  export type AggregateWaiterRequest = {
    _count: WaiterRequestCountAggregateOutputType | null
    _avg: WaiterRequestAvgAggregateOutputType | null
    _sum: WaiterRequestSumAggregateOutputType | null
    _min: WaiterRequestMinAggregateOutputType | null
    _max: WaiterRequestMaxAggregateOutputType | null
  }

  export type WaiterRequestAvgAggregateOutputType = {
    id: number | null
    restroid: number | null
    tableid: number | null
    status: number | null
  }

  export type WaiterRequestSumAggregateOutputType = {
    id: number | null
    restroid: number | null
    tableid: number | null
    status: number | null
  }

  export type WaiterRequestMinAggregateOutputType = {
    id: number | null
    restroid: number | null
    tableid: number | null
    status: number | null
    createdAt: Date | null
  }

  export type WaiterRequestMaxAggregateOutputType = {
    id: number | null
    restroid: number | null
    tableid: number | null
    status: number | null
    createdAt: Date | null
  }

  export type WaiterRequestCountAggregateOutputType = {
    id: number
    restroid: number
    tableid: number
    status: number
    createdAt: number
    _all: number
  }


  export type WaiterRequestAvgAggregateInputType = {
    id?: true
    restroid?: true
    tableid?: true
    status?: true
  }

  export type WaiterRequestSumAggregateInputType = {
    id?: true
    restroid?: true
    tableid?: true
    status?: true
  }

  export type WaiterRequestMinAggregateInputType = {
    id?: true
    restroid?: true
    tableid?: true
    status?: true
    createdAt?: true
  }

  export type WaiterRequestMaxAggregateInputType = {
    id?: true
    restroid?: true
    tableid?: true
    status?: true
    createdAt?: true
  }

  export type WaiterRequestCountAggregateInputType = {
    id?: true
    restroid?: true
    tableid?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type WaiterRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaiterRequest to aggregate.
     */
    where?: WaiterRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaiterRequests to fetch.
     */
    orderBy?: WaiterRequestOrderByWithRelationInput | WaiterRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaiterRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaiterRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaiterRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaiterRequests
    **/
    _count?: true | WaiterRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaiterRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaiterRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaiterRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaiterRequestMaxAggregateInputType
  }

  export type GetWaiterRequestAggregateType<T extends WaiterRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateWaiterRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaiterRequest[P]>
      : GetScalarType<T[P], AggregateWaiterRequest[P]>
  }




  export type WaiterRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaiterRequestWhereInput
    orderBy?: WaiterRequestOrderByWithAggregationInput | WaiterRequestOrderByWithAggregationInput[]
    by: WaiterRequestScalarFieldEnum[] | WaiterRequestScalarFieldEnum
    having?: WaiterRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaiterRequestCountAggregateInputType | true
    _avg?: WaiterRequestAvgAggregateInputType
    _sum?: WaiterRequestSumAggregateInputType
    _min?: WaiterRequestMinAggregateInputType
    _max?: WaiterRequestMaxAggregateInputType
  }

  export type WaiterRequestGroupByOutputType = {
    id: number
    restroid: number
    tableid: number | null
    status: number
    createdAt: Date
    _count: WaiterRequestCountAggregateOutputType | null
    _avg: WaiterRequestAvgAggregateOutputType | null
    _sum: WaiterRequestSumAggregateOutputType | null
    _min: WaiterRequestMinAggregateOutputType | null
    _max: WaiterRequestMaxAggregateOutputType | null
  }

  type GetWaiterRequestGroupByPayload<T extends WaiterRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaiterRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaiterRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaiterRequestGroupByOutputType[P]>
            : GetScalarType<T[P], WaiterRequestGroupByOutputType[P]>
        }
      >
    >


  export type WaiterRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    tableid?: boolean
    status?: boolean
    createdAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    table?: boolean | WaiterRequest$tableArgs<ExtArgs>
  }, ExtArgs["result"]["waiterRequest"]>

  export type WaiterRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restroid?: boolean
    tableid?: boolean
    status?: boolean
    createdAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    table?: boolean | WaiterRequest$tableArgs<ExtArgs>
  }, ExtArgs["result"]["waiterRequest"]>

  export type WaiterRequestSelectScalar = {
    id?: boolean
    restroid?: boolean
    tableid?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type WaiterRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    table?: boolean | WaiterRequest$tableArgs<ExtArgs>
  }
  export type WaiterRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    table?: boolean | WaiterRequest$tableArgs<ExtArgs>
  }

  export type $WaiterRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaiterRequest"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      table: Prisma.$TablePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      restroid: number
      tableid: number | null
      status: number
      createdAt: Date
    }, ExtArgs["result"]["waiterRequest"]>
    composites: {}
  }

  type WaiterRequestGetPayload<S extends boolean | null | undefined | WaiterRequestDefaultArgs> = $Result.GetResult<Prisma.$WaiterRequestPayload, S>

  type WaiterRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WaiterRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WaiterRequestCountAggregateInputType | true
    }

  export interface WaiterRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaiterRequest'], meta: { name: 'WaiterRequest' } }
    /**
     * Find zero or one WaiterRequest that matches the filter.
     * @param {WaiterRequestFindUniqueArgs} args - Arguments to find a WaiterRequest
     * @example
     * // Get one WaiterRequest
     * const waiterRequest = await prisma.waiterRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaiterRequestFindUniqueArgs>(args: SelectSubset<T, WaiterRequestFindUniqueArgs<ExtArgs>>): Prisma__WaiterRequestClient<$Result.GetResult<Prisma.$WaiterRequestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WaiterRequest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WaiterRequestFindUniqueOrThrowArgs} args - Arguments to find a WaiterRequest
     * @example
     * // Get one WaiterRequest
     * const waiterRequest = await prisma.waiterRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaiterRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, WaiterRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaiterRequestClient<$Result.GetResult<Prisma.$WaiterRequestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WaiterRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterRequestFindFirstArgs} args - Arguments to find a WaiterRequest
     * @example
     * // Get one WaiterRequest
     * const waiterRequest = await prisma.waiterRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaiterRequestFindFirstArgs>(args?: SelectSubset<T, WaiterRequestFindFirstArgs<ExtArgs>>): Prisma__WaiterRequestClient<$Result.GetResult<Prisma.$WaiterRequestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WaiterRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterRequestFindFirstOrThrowArgs} args - Arguments to find a WaiterRequest
     * @example
     * // Get one WaiterRequest
     * const waiterRequest = await prisma.waiterRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaiterRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, WaiterRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaiterRequestClient<$Result.GetResult<Prisma.$WaiterRequestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WaiterRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaiterRequests
     * const waiterRequests = await prisma.waiterRequest.findMany()
     * 
     * // Get first 10 WaiterRequests
     * const waiterRequests = await prisma.waiterRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waiterRequestWithIdOnly = await prisma.waiterRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaiterRequestFindManyArgs>(args?: SelectSubset<T, WaiterRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterRequestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WaiterRequest.
     * @param {WaiterRequestCreateArgs} args - Arguments to create a WaiterRequest.
     * @example
     * // Create one WaiterRequest
     * const WaiterRequest = await prisma.waiterRequest.create({
     *   data: {
     *     // ... data to create a WaiterRequest
     *   }
     * })
     * 
     */
    create<T extends WaiterRequestCreateArgs>(args: SelectSubset<T, WaiterRequestCreateArgs<ExtArgs>>): Prisma__WaiterRequestClient<$Result.GetResult<Prisma.$WaiterRequestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WaiterRequests.
     * @param {WaiterRequestCreateManyArgs} args - Arguments to create many WaiterRequests.
     * @example
     * // Create many WaiterRequests
     * const waiterRequest = await prisma.waiterRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaiterRequestCreateManyArgs>(args?: SelectSubset<T, WaiterRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaiterRequests and returns the data saved in the database.
     * @param {WaiterRequestCreateManyAndReturnArgs} args - Arguments to create many WaiterRequests.
     * @example
     * // Create many WaiterRequests
     * const waiterRequest = await prisma.waiterRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaiterRequests and only return the `id`
     * const waiterRequestWithIdOnly = await prisma.waiterRequest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaiterRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, WaiterRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterRequestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WaiterRequest.
     * @param {WaiterRequestDeleteArgs} args - Arguments to delete one WaiterRequest.
     * @example
     * // Delete one WaiterRequest
     * const WaiterRequest = await prisma.waiterRequest.delete({
     *   where: {
     *     // ... filter to delete one WaiterRequest
     *   }
     * })
     * 
     */
    delete<T extends WaiterRequestDeleteArgs>(args: SelectSubset<T, WaiterRequestDeleteArgs<ExtArgs>>): Prisma__WaiterRequestClient<$Result.GetResult<Prisma.$WaiterRequestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WaiterRequest.
     * @param {WaiterRequestUpdateArgs} args - Arguments to update one WaiterRequest.
     * @example
     * // Update one WaiterRequest
     * const waiterRequest = await prisma.waiterRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaiterRequestUpdateArgs>(args: SelectSubset<T, WaiterRequestUpdateArgs<ExtArgs>>): Prisma__WaiterRequestClient<$Result.GetResult<Prisma.$WaiterRequestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WaiterRequests.
     * @param {WaiterRequestDeleteManyArgs} args - Arguments to filter WaiterRequests to delete.
     * @example
     * // Delete a few WaiterRequests
     * const { count } = await prisma.waiterRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaiterRequestDeleteManyArgs>(args?: SelectSubset<T, WaiterRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaiterRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaiterRequests
     * const waiterRequest = await prisma.waiterRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaiterRequestUpdateManyArgs>(args: SelectSubset<T, WaiterRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WaiterRequest.
     * @param {WaiterRequestUpsertArgs} args - Arguments to update or create a WaiterRequest.
     * @example
     * // Update or create a WaiterRequest
     * const waiterRequest = await prisma.waiterRequest.upsert({
     *   create: {
     *     // ... data to create a WaiterRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaiterRequest we want to update
     *   }
     * })
     */
    upsert<T extends WaiterRequestUpsertArgs>(args: SelectSubset<T, WaiterRequestUpsertArgs<ExtArgs>>): Prisma__WaiterRequestClient<$Result.GetResult<Prisma.$WaiterRequestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WaiterRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterRequestCountArgs} args - Arguments to filter WaiterRequests to count.
     * @example
     * // Count the number of WaiterRequests
     * const count = await prisma.waiterRequest.count({
     *   where: {
     *     // ... the filter for the WaiterRequests we want to count
     *   }
     * })
    **/
    count<T extends WaiterRequestCountArgs>(
      args?: Subset<T, WaiterRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaiterRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaiterRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WaiterRequestAggregateArgs>(args: Subset<T, WaiterRequestAggregateArgs>): Prisma.PrismaPromise<GetWaiterRequestAggregateType<T>>

    /**
     * Group by WaiterRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WaiterRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaiterRequestGroupByArgs['orderBy'] }
        : { orderBy?: WaiterRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WaiterRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaiterRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaiterRequest model
   */
  readonly fields: WaiterRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaiterRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaiterRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    table<T extends WaiterRequest$tableArgs<ExtArgs> = {}>(args?: Subset<T, WaiterRequest$tableArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WaiterRequest model
   */ 
  interface WaiterRequestFieldRefs {
    readonly id: FieldRef<"WaiterRequest", 'Int'>
    readonly restroid: FieldRef<"WaiterRequest", 'Int'>
    readonly tableid: FieldRef<"WaiterRequest", 'Int'>
    readonly status: FieldRef<"WaiterRequest", 'Int'>
    readonly createdAt: FieldRef<"WaiterRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WaiterRequest findUnique
   */
  export type WaiterRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterRequest
     */
    select?: WaiterRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterRequestInclude<ExtArgs> | null
    /**
     * Filter, which WaiterRequest to fetch.
     */
    where: WaiterRequestWhereUniqueInput
  }

  /**
   * WaiterRequest findUniqueOrThrow
   */
  export type WaiterRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterRequest
     */
    select?: WaiterRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterRequestInclude<ExtArgs> | null
    /**
     * Filter, which WaiterRequest to fetch.
     */
    where: WaiterRequestWhereUniqueInput
  }

  /**
   * WaiterRequest findFirst
   */
  export type WaiterRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterRequest
     */
    select?: WaiterRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterRequestInclude<ExtArgs> | null
    /**
     * Filter, which WaiterRequest to fetch.
     */
    where?: WaiterRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaiterRequests to fetch.
     */
    orderBy?: WaiterRequestOrderByWithRelationInput | WaiterRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaiterRequests.
     */
    cursor?: WaiterRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaiterRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaiterRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaiterRequests.
     */
    distinct?: WaiterRequestScalarFieldEnum | WaiterRequestScalarFieldEnum[]
  }

  /**
   * WaiterRequest findFirstOrThrow
   */
  export type WaiterRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterRequest
     */
    select?: WaiterRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterRequestInclude<ExtArgs> | null
    /**
     * Filter, which WaiterRequest to fetch.
     */
    where?: WaiterRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaiterRequests to fetch.
     */
    orderBy?: WaiterRequestOrderByWithRelationInput | WaiterRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaiterRequests.
     */
    cursor?: WaiterRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaiterRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaiterRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaiterRequests.
     */
    distinct?: WaiterRequestScalarFieldEnum | WaiterRequestScalarFieldEnum[]
  }

  /**
   * WaiterRequest findMany
   */
  export type WaiterRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterRequest
     */
    select?: WaiterRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterRequestInclude<ExtArgs> | null
    /**
     * Filter, which WaiterRequests to fetch.
     */
    where?: WaiterRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaiterRequests to fetch.
     */
    orderBy?: WaiterRequestOrderByWithRelationInput | WaiterRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaiterRequests.
     */
    cursor?: WaiterRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaiterRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaiterRequests.
     */
    skip?: number
    distinct?: WaiterRequestScalarFieldEnum | WaiterRequestScalarFieldEnum[]
  }

  /**
   * WaiterRequest create
   */
  export type WaiterRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterRequest
     */
    select?: WaiterRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a WaiterRequest.
     */
    data: XOR<WaiterRequestCreateInput, WaiterRequestUncheckedCreateInput>
  }

  /**
   * WaiterRequest createMany
   */
  export type WaiterRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaiterRequests.
     */
    data: WaiterRequestCreateManyInput | WaiterRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaiterRequest createManyAndReturn
   */
  export type WaiterRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterRequest
     */
    select?: WaiterRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WaiterRequests.
     */
    data: WaiterRequestCreateManyInput | WaiterRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaiterRequest update
   */
  export type WaiterRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterRequest
     */
    select?: WaiterRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a WaiterRequest.
     */
    data: XOR<WaiterRequestUpdateInput, WaiterRequestUncheckedUpdateInput>
    /**
     * Choose, which WaiterRequest to update.
     */
    where: WaiterRequestWhereUniqueInput
  }

  /**
   * WaiterRequest updateMany
   */
  export type WaiterRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaiterRequests.
     */
    data: XOR<WaiterRequestUpdateManyMutationInput, WaiterRequestUncheckedUpdateManyInput>
    /**
     * Filter which WaiterRequests to update
     */
    where?: WaiterRequestWhereInput
  }

  /**
   * WaiterRequest upsert
   */
  export type WaiterRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterRequest
     */
    select?: WaiterRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the WaiterRequest to update in case it exists.
     */
    where: WaiterRequestWhereUniqueInput
    /**
     * In case the WaiterRequest found by the `where` argument doesn't exist, create a new WaiterRequest with this data.
     */
    create: XOR<WaiterRequestCreateInput, WaiterRequestUncheckedCreateInput>
    /**
     * In case the WaiterRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaiterRequestUpdateInput, WaiterRequestUncheckedUpdateInput>
  }

  /**
   * WaiterRequest delete
   */
  export type WaiterRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterRequest
     */
    select?: WaiterRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterRequestInclude<ExtArgs> | null
    /**
     * Filter which WaiterRequest to delete.
     */
    where: WaiterRequestWhereUniqueInput
  }

  /**
   * WaiterRequest deleteMany
   */
  export type WaiterRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaiterRequests to delete
     */
    where?: WaiterRequestWhereInput
  }

  /**
   * WaiterRequest.table
   */
  export type WaiterRequest$tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
  }

  /**
   * WaiterRequest without action
   */
  export type WaiterRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterRequest
     */
    select?: WaiterRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaiterRequestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const RestaurantScalarFieldEnum: {
    id: 'id',
    restroname: 'restroname',
    mobileno: 'mobileno',
    email: 'email',
    address: 'address',
    password: 'password',
    gstno: 'gstno',
    logo: 'logo',
    themecode: 'themecode',
    status: 'status',
    latitude: 'latitude',
    longitude: 'longitude',
    distance: 'distance',
    joindate: 'joindate',
    paymentdate: 'paymentdate',
    subtype: 'subtype',
    subplan: 'subplan',
    expdate: 'expdate',
    price: 'price',
    pdf: 'pdf',
    slug: 'slug',
    restrootp: 'restrootp',
    discount: 'discount',
    servicecharge: 'servicecharge',
    maxStaff: 'maxStaff'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    restroid: 'restroid',
    fullname: 'fullname',
    username: 'username',
    password: 'password',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const ThemeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    image: 'image',
    primaryColor: 'primaryColor',
    secondaryColor: 'secondaryColor',
    accentColor: 'accentColor',
    bgColor: 'bgColor',
    cardColor: 'cardColor',
    textColor: 'textColor',
    navBg: 'navBg',
    buttonTextColor: 'buttonTextColor',
    fontFamily: 'fontFamily',
    borderRadius: 'borderRadius',
    darkMode: 'darkMode'
  };

  export type ThemeScalarFieldEnum = (typeof ThemeScalarFieldEnum)[keyof typeof ThemeScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    restroid: 'restroid',
    name_eng: 'name_eng',
    name_guj: 'name_guj',
    name_hindi: 'name_hindi',
    categorydesc: 'categorydesc',
    sortorder: 'sortorder'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const MenuItemScalarFieldEnum: {
    id: 'id',
    restroid: 'restroid',
    categoryid: 'categoryid',
    image: 'image',
    name_eng: 'name_eng',
    name_guj: 'name_guj',
    name_hindi: 'name_hindi',
    veg: 'veg',
    available: 'available',
    price: 'price'
  };

  export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum]


  export const TableScalarFieldEnum: {
    id: 'id',
    restroid: 'restroid',
    name: 'name',
    qrimage: 'qrimage'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    restroid: 'restroid',
    tableid: 'tableid',
    ordercode: 'ordercode',
    customername: 'customername',
    customermob: 'customermob',
    status: 'status',
    subtotal: 'subtotal',
    discount: 'discount',
    servicecharge: 'servicecharge',
    grandtotal: 'grandtotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderid: 'orderid',
    menuitemid: 'menuitemid',
    name_eng: 'name_eng',
    name_guj: 'name_guj',
    name_hindi: 'name_hindi',
    price: 'price',
    quantity: 'quantity',
    totalprice: 'totalprice'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const OrderHistoryScalarFieldEnum: {
    id: 'id',
    restroid: 'restroid',
    ordercode: 'ordercode',
    tablename: 'tablename',
    customername: 'customername',
    customermob: 'customermob',
    subtotal: 'subtotal',
    discount: 'discount',
    servicecharge: 'servicecharge',
    grandtotal: 'grandtotal',
    timestamp: 'timestamp'
  };

  export type OrderHistoryScalarFieldEnum = (typeof OrderHistoryScalarFieldEnum)[keyof typeof OrderHistoryScalarFieldEnum]


  export const HistoryItemScalarFieldEnum: {
    id: 'id',
    orderid: 'orderid',
    name_eng: 'name_eng',
    name_guj: 'name_guj',
    name_hindi: 'name_hindi',
    price: 'price',
    quantity: 'quantity',
    totalprice: 'totalprice'
  };

  export type HistoryItemScalarFieldEnum = (typeof HistoryItemScalarFieldEnum)[keyof typeof HistoryItemScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    restroid: 'restroid',
    fullname: 'fullname',
    mobile: 'mobile',
    email: 'email',
    feedback: 'feedback',
    dob: 'dob',
    timestamp: 'timestamp'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const PaymentHistoryScalarFieldEnum: {
    id: 'id',
    restroid: 'restroid',
    paymentdate: 'paymentdate',
    subplan: 'subplan',
    price: 'price',
    subtype: 'subtype',
    expdate: 'expdate'
  };

  export type PaymentHistoryScalarFieldEnum = (typeof PaymentHistoryScalarFieldEnum)[keyof typeof PaymentHistoryScalarFieldEnum]


  export const WaiterRequestScalarFieldEnum: {
    id: 'id',
    restroid: 'restroid',
    tableid: 'tableid',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type WaiterRequestScalarFieldEnum = (typeof WaiterRequestScalarFieldEnum)[keyof typeof WaiterRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    fullname?: StringFilter<"Admin"> | string
    username?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    fullname?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
  }, "id" | "username">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    fullname?: StringWithAggregatesFilter<"Admin"> | string
    username?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type RestaurantWhereInput = {
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    id?: IntFilter<"Restaurant"> | number
    restroname?: StringFilter<"Restaurant"> | string
    mobileno?: StringFilter<"Restaurant"> | string
    email?: StringFilter<"Restaurant"> | string
    address?: StringFilter<"Restaurant"> | string
    password?: StringFilter<"Restaurant"> | string
    gstno?: StringNullableFilter<"Restaurant"> | string | null
    logo?: StringNullableFilter<"Restaurant"> | string | null
    themecode?: IntNullableFilter<"Restaurant"> | number | null
    status?: IntFilter<"Restaurant"> | number
    latitude?: StringNullableFilter<"Restaurant"> | string | null
    longitude?: StringNullableFilter<"Restaurant"> | string | null
    distance?: StringNullableFilter<"Restaurant"> | string | null
    joindate?: DateTimeFilter<"Restaurant"> | Date | string
    paymentdate?: DateTimeFilter<"Restaurant"> | Date | string
    subtype?: IntFilter<"Restaurant"> | number
    subplan?: IntFilter<"Restaurant"> | number
    expdate?: DateTimeFilter<"Restaurant"> | Date | string
    price?: IntFilter<"Restaurant"> | number
    pdf?: StringNullableFilter<"Restaurant"> | string | null
    slug?: StringFilter<"Restaurant"> | string
    restrootp?: StringFilter<"Restaurant"> | string
    discount?: FloatFilter<"Restaurant"> | number
    servicecharge?: FloatFilter<"Restaurant"> | number
    maxStaff?: IntFilter<"Restaurant"> | number
    theme?: XOR<ThemeNullableRelationFilter, ThemeWhereInput> | null
    categories?: CategoryListRelationFilter
    menuItems?: MenuItemListRelationFilter
    tables?: TableListRelationFilter
    orders?: OrderListRelationFilter
    orderHistory?: OrderHistoryListRelationFilter
    feedback?: FeedbackListRelationFilter
    paymentHistory?: PaymentHistoryListRelationFilter
    waiterRequests?: WaiterRequestListRelationFilter
    staff?: StaffListRelationFilter
  }

  export type RestaurantOrderByWithRelationInput = {
    id?: SortOrder
    restroname?: SortOrder
    mobileno?: SortOrder
    email?: SortOrder
    address?: SortOrder
    password?: SortOrder
    gstno?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    themecode?: SortOrderInput | SortOrder
    status?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    joindate?: SortOrder
    paymentdate?: SortOrder
    subtype?: SortOrder
    subplan?: SortOrder
    expdate?: SortOrder
    price?: SortOrder
    pdf?: SortOrderInput | SortOrder
    slug?: SortOrder
    restrootp?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    maxStaff?: SortOrder
    theme?: ThemeOrderByWithRelationInput
    categories?: CategoryOrderByRelationAggregateInput
    menuItems?: MenuItemOrderByRelationAggregateInput
    tables?: TableOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    orderHistory?: OrderHistoryOrderByRelationAggregateInput
    feedback?: FeedbackOrderByRelationAggregateInput
    paymentHistory?: PaymentHistoryOrderByRelationAggregateInput
    waiterRequests?: WaiterRequestOrderByRelationAggregateInput
    staff?: StaffOrderByRelationAggregateInput
  }

  export type RestaurantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    restroname?: StringFilter<"Restaurant"> | string
    mobileno?: StringFilter<"Restaurant"> | string
    email?: StringFilter<"Restaurant"> | string
    address?: StringFilter<"Restaurant"> | string
    password?: StringFilter<"Restaurant"> | string
    gstno?: StringNullableFilter<"Restaurant"> | string | null
    logo?: StringNullableFilter<"Restaurant"> | string | null
    themecode?: IntNullableFilter<"Restaurant"> | number | null
    status?: IntFilter<"Restaurant"> | number
    latitude?: StringNullableFilter<"Restaurant"> | string | null
    longitude?: StringNullableFilter<"Restaurant"> | string | null
    distance?: StringNullableFilter<"Restaurant"> | string | null
    joindate?: DateTimeFilter<"Restaurant"> | Date | string
    paymentdate?: DateTimeFilter<"Restaurant"> | Date | string
    subtype?: IntFilter<"Restaurant"> | number
    subplan?: IntFilter<"Restaurant"> | number
    expdate?: DateTimeFilter<"Restaurant"> | Date | string
    price?: IntFilter<"Restaurant"> | number
    pdf?: StringNullableFilter<"Restaurant"> | string | null
    restrootp?: StringFilter<"Restaurant"> | string
    discount?: FloatFilter<"Restaurant"> | number
    servicecharge?: FloatFilter<"Restaurant"> | number
    maxStaff?: IntFilter<"Restaurant"> | number
    theme?: XOR<ThemeNullableRelationFilter, ThemeWhereInput> | null
    categories?: CategoryListRelationFilter
    menuItems?: MenuItemListRelationFilter
    tables?: TableListRelationFilter
    orders?: OrderListRelationFilter
    orderHistory?: OrderHistoryListRelationFilter
    feedback?: FeedbackListRelationFilter
    paymentHistory?: PaymentHistoryListRelationFilter
    waiterRequests?: WaiterRequestListRelationFilter
    staff?: StaffListRelationFilter
  }, "id" | "slug">

  export type RestaurantOrderByWithAggregationInput = {
    id?: SortOrder
    restroname?: SortOrder
    mobileno?: SortOrder
    email?: SortOrder
    address?: SortOrder
    password?: SortOrder
    gstno?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    themecode?: SortOrderInput | SortOrder
    status?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    joindate?: SortOrder
    paymentdate?: SortOrder
    subtype?: SortOrder
    subplan?: SortOrder
    expdate?: SortOrder
    price?: SortOrder
    pdf?: SortOrderInput | SortOrder
    slug?: SortOrder
    restrootp?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    maxStaff?: SortOrder
    _count?: RestaurantCountOrderByAggregateInput
    _avg?: RestaurantAvgOrderByAggregateInput
    _max?: RestaurantMaxOrderByAggregateInput
    _min?: RestaurantMinOrderByAggregateInput
    _sum?: RestaurantSumOrderByAggregateInput
  }

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    OR?: RestaurantScalarWhereWithAggregatesInput[]
    NOT?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Restaurant"> | number
    restroname?: StringWithAggregatesFilter<"Restaurant"> | string
    mobileno?: StringWithAggregatesFilter<"Restaurant"> | string
    email?: StringWithAggregatesFilter<"Restaurant"> | string
    address?: StringWithAggregatesFilter<"Restaurant"> | string
    password?: StringWithAggregatesFilter<"Restaurant"> | string
    gstno?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    themecode?: IntNullableWithAggregatesFilter<"Restaurant"> | number | null
    status?: IntWithAggregatesFilter<"Restaurant"> | number
    latitude?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    longitude?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    distance?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    joindate?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
    paymentdate?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
    subtype?: IntWithAggregatesFilter<"Restaurant"> | number
    subplan?: IntWithAggregatesFilter<"Restaurant"> | number
    expdate?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
    price?: IntWithAggregatesFilter<"Restaurant"> | number
    pdf?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    slug?: StringWithAggregatesFilter<"Restaurant"> | string
    restrootp?: StringWithAggregatesFilter<"Restaurant"> | string
    discount?: FloatWithAggregatesFilter<"Restaurant"> | number
    servicecharge?: FloatWithAggregatesFilter<"Restaurant"> | number
    maxStaff?: IntWithAggregatesFilter<"Restaurant"> | number
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: IntFilter<"Staff"> | number
    restroid?: IntFilter<"Staff"> | number
    fullname?: StringFilter<"Staff"> | string
    username?: StringFilter<"Staff"> | string
    password?: StringFilter<"Staff"> | string
    role?: StringFilter<"Staff"> | string
    status?: IntFilter<"Staff"> | number
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    restroid?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    restroid?: IntFilter<"Staff"> | number
    fullname?: StringFilter<"Staff"> | string
    password?: StringFilter<"Staff"> | string
    role?: StringFilter<"Staff"> | string
    status?: IntFilter<"Staff"> | number
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }, "id" | "username">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    restroid?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _avg?: StaffAvgOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
    _sum?: StaffSumOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Staff"> | number
    restroid?: IntWithAggregatesFilter<"Staff"> | number
    fullname?: StringWithAggregatesFilter<"Staff"> | string
    username?: StringWithAggregatesFilter<"Staff"> | string
    password?: StringWithAggregatesFilter<"Staff"> | string
    role?: StringWithAggregatesFilter<"Staff"> | string
    status?: IntWithAggregatesFilter<"Staff"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
  }

  export type ThemeWhereInput = {
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    id?: IntFilter<"Theme"> | number
    title?: StringFilter<"Theme"> | string
    image?: StringNullableFilter<"Theme"> | string | null
    primaryColor?: StringFilter<"Theme"> | string
    secondaryColor?: StringFilter<"Theme"> | string
    accentColor?: StringFilter<"Theme"> | string
    bgColor?: StringFilter<"Theme"> | string
    cardColor?: StringFilter<"Theme"> | string
    textColor?: StringFilter<"Theme"> | string
    navBg?: StringFilter<"Theme"> | string
    buttonTextColor?: StringFilter<"Theme"> | string
    fontFamily?: StringFilter<"Theme"> | string
    borderRadius?: StringFilter<"Theme"> | string
    darkMode?: BoolFilter<"Theme"> | boolean
    restaurants?: RestaurantListRelationFilter
  }

  export type ThemeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrderInput | SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    bgColor?: SortOrder
    cardColor?: SortOrder
    textColor?: SortOrder
    navBg?: SortOrder
    buttonTextColor?: SortOrder
    fontFamily?: SortOrder
    borderRadius?: SortOrder
    darkMode?: SortOrder
    restaurants?: RestaurantOrderByRelationAggregateInput
  }

  export type ThemeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    title?: StringFilter<"Theme"> | string
    image?: StringNullableFilter<"Theme"> | string | null
    primaryColor?: StringFilter<"Theme"> | string
    secondaryColor?: StringFilter<"Theme"> | string
    accentColor?: StringFilter<"Theme"> | string
    bgColor?: StringFilter<"Theme"> | string
    cardColor?: StringFilter<"Theme"> | string
    textColor?: StringFilter<"Theme"> | string
    navBg?: StringFilter<"Theme"> | string
    buttonTextColor?: StringFilter<"Theme"> | string
    fontFamily?: StringFilter<"Theme"> | string
    borderRadius?: StringFilter<"Theme"> | string
    darkMode?: BoolFilter<"Theme"> | boolean
    restaurants?: RestaurantListRelationFilter
  }, "id">

  export type ThemeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrderInput | SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    bgColor?: SortOrder
    cardColor?: SortOrder
    textColor?: SortOrder
    navBg?: SortOrder
    buttonTextColor?: SortOrder
    fontFamily?: SortOrder
    borderRadius?: SortOrder
    darkMode?: SortOrder
    _count?: ThemeCountOrderByAggregateInput
    _avg?: ThemeAvgOrderByAggregateInput
    _max?: ThemeMaxOrderByAggregateInput
    _min?: ThemeMinOrderByAggregateInput
    _sum?: ThemeSumOrderByAggregateInput
  }

  export type ThemeScalarWhereWithAggregatesInput = {
    AND?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    OR?: ThemeScalarWhereWithAggregatesInput[]
    NOT?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Theme"> | number
    title?: StringWithAggregatesFilter<"Theme"> | string
    image?: StringNullableWithAggregatesFilter<"Theme"> | string | null
    primaryColor?: StringWithAggregatesFilter<"Theme"> | string
    secondaryColor?: StringWithAggregatesFilter<"Theme"> | string
    accentColor?: StringWithAggregatesFilter<"Theme"> | string
    bgColor?: StringWithAggregatesFilter<"Theme"> | string
    cardColor?: StringWithAggregatesFilter<"Theme"> | string
    textColor?: StringWithAggregatesFilter<"Theme"> | string
    navBg?: StringWithAggregatesFilter<"Theme"> | string
    buttonTextColor?: StringWithAggregatesFilter<"Theme"> | string
    fontFamily?: StringWithAggregatesFilter<"Theme"> | string
    borderRadius?: StringWithAggregatesFilter<"Theme"> | string
    darkMode?: BoolWithAggregatesFilter<"Theme"> | boolean
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    restroid?: IntFilter<"Category"> | number
    name_eng?: StringFilter<"Category"> | string
    name_guj?: StringNullableFilter<"Category"> | string | null
    name_hindi?: StringNullableFilter<"Category"> | string | null
    categorydesc?: StringNullableFilter<"Category"> | string | null
    sortorder?: IntFilter<"Category"> | number
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    menuItems?: MenuItemListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    restroid?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrderInput | SortOrder
    name_hindi?: SortOrderInput | SortOrder
    categorydesc?: SortOrderInput | SortOrder
    sortorder?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    menuItems?: MenuItemOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    restroid?: IntFilter<"Category"> | number
    name_eng?: StringFilter<"Category"> | string
    name_guj?: StringNullableFilter<"Category"> | string | null
    name_hindi?: StringNullableFilter<"Category"> | string | null
    categorydesc?: StringNullableFilter<"Category"> | string | null
    sortorder?: IntFilter<"Category"> | number
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    menuItems?: MenuItemListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    restroid?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrderInput | SortOrder
    name_hindi?: SortOrderInput | SortOrder
    categorydesc?: SortOrderInput | SortOrder
    sortorder?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    restroid?: IntWithAggregatesFilter<"Category"> | number
    name_eng?: StringWithAggregatesFilter<"Category"> | string
    name_guj?: StringNullableWithAggregatesFilter<"Category"> | string | null
    name_hindi?: StringNullableWithAggregatesFilter<"Category"> | string | null
    categorydesc?: StringNullableWithAggregatesFilter<"Category"> | string | null
    sortorder?: IntWithAggregatesFilter<"Category"> | number
  }

  export type MenuItemWhereInput = {
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    id?: IntFilter<"MenuItem"> | number
    restroid?: IntFilter<"MenuItem"> | number
    categoryid?: IntFilter<"MenuItem"> | number
    image?: StringNullableFilter<"MenuItem"> | string | null
    name_eng?: StringFilter<"MenuItem"> | string
    name_guj?: StringNullableFilter<"MenuItem"> | string | null
    name_hindi?: StringNullableFilter<"MenuItem"> | string | null
    veg?: BoolFilter<"MenuItem"> | boolean
    available?: BoolFilter<"MenuItem"> | boolean
    price?: FloatFilter<"MenuItem"> | number
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    orderItems?: OrderItemListRelationFilter
  }

  export type MenuItemOrderByWithRelationInput = {
    id?: SortOrder
    restroid?: SortOrder
    categoryid?: SortOrder
    image?: SortOrderInput | SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrderInput | SortOrder
    name_hindi?: SortOrderInput | SortOrder
    veg?: SortOrder
    available?: SortOrder
    price?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    restroid?: IntFilter<"MenuItem"> | number
    categoryid?: IntFilter<"MenuItem"> | number
    image?: StringNullableFilter<"MenuItem"> | string | null
    name_eng?: StringFilter<"MenuItem"> | string
    name_guj?: StringNullableFilter<"MenuItem"> | string | null
    name_hindi?: StringNullableFilter<"MenuItem"> | string | null
    veg?: BoolFilter<"MenuItem"> | boolean
    available?: BoolFilter<"MenuItem"> | boolean
    price?: FloatFilter<"MenuItem"> | number
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    orderItems?: OrderItemListRelationFilter
  }, "id">

  export type MenuItemOrderByWithAggregationInput = {
    id?: SortOrder
    restroid?: SortOrder
    categoryid?: SortOrder
    image?: SortOrderInput | SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrderInput | SortOrder
    name_hindi?: SortOrderInput | SortOrder
    veg?: SortOrder
    available?: SortOrder
    price?: SortOrder
    _count?: MenuItemCountOrderByAggregateInput
    _avg?: MenuItemAvgOrderByAggregateInput
    _max?: MenuItemMaxOrderByAggregateInput
    _min?: MenuItemMinOrderByAggregateInput
    _sum?: MenuItemSumOrderByAggregateInput
  }

  export type MenuItemScalarWhereWithAggregatesInput = {
    AND?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    OR?: MenuItemScalarWhereWithAggregatesInput[]
    NOT?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MenuItem"> | number
    restroid?: IntWithAggregatesFilter<"MenuItem"> | number
    categoryid?: IntWithAggregatesFilter<"MenuItem"> | number
    image?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    name_eng?: StringWithAggregatesFilter<"MenuItem"> | string
    name_guj?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    name_hindi?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    veg?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    available?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    price?: FloatWithAggregatesFilter<"MenuItem"> | number
  }

  export type TableWhereInput = {
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    id?: IntFilter<"Table"> | number
    restroid?: IntFilter<"Table"> | number
    name?: StringFilter<"Table"> | string
    qrimage?: StringNullableFilter<"Table"> | string | null
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    orders?: OrderListRelationFilter
    waiterRequests?: WaiterRequestListRelationFilter
  }

  export type TableOrderByWithRelationInput = {
    id?: SortOrder
    restroid?: SortOrder
    name?: SortOrder
    qrimage?: SortOrderInput | SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
    waiterRequests?: WaiterRequestOrderByRelationAggregateInput
  }

  export type TableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    restroid?: IntFilter<"Table"> | number
    name?: StringFilter<"Table"> | string
    qrimage?: StringNullableFilter<"Table"> | string | null
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    orders?: OrderListRelationFilter
    waiterRequests?: WaiterRequestListRelationFilter
  }, "id">

  export type TableOrderByWithAggregationInput = {
    id?: SortOrder
    restroid?: SortOrder
    name?: SortOrder
    qrimage?: SortOrderInput | SortOrder
    _count?: TableCountOrderByAggregateInput
    _avg?: TableAvgOrderByAggregateInput
    _max?: TableMaxOrderByAggregateInput
    _min?: TableMinOrderByAggregateInput
    _sum?: TableSumOrderByAggregateInput
  }

  export type TableScalarWhereWithAggregatesInput = {
    AND?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    OR?: TableScalarWhereWithAggregatesInput[]
    NOT?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Table"> | number
    restroid?: IntWithAggregatesFilter<"Table"> | number
    name?: StringWithAggregatesFilter<"Table"> | string
    qrimage?: StringNullableWithAggregatesFilter<"Table"> | string | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    restroid?: IntFilter<"Order"> | number
    tableid?: IntNullableFilter<"Order"> | number | null
    ordercode?: StringFilter<"Order"> | string
    customername?: StringNullableFilter<"Order"> | string | null
    customermob?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    subtotal?: FloatFilter<"Order"> | number
    discount?: FloatFilter<"Order"> | number
    servicecharge?: FloatFilter<"Order"> | number
    grandtotal?: FloatFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    table?: XOR<TableNullableRelationFilter, TableWhereInput> | null
    items?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    restroid?: SortOrder
    tableid?: SortOrderInput | SortOrder
    ordercode?: SortOrder
    customername?: SortOrderInput | SortOrder
    customermob?: SortOrderInput | SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    grandtotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    table?: TableOrderByWithRelationInput
    items?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ordercode?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    restroid?: IntFilter<"Order"> | number
    tableid?: IntNullableFilter<"Order"> | number | null
    customername?: StringNullableFilter<"Order"> | string | null
    customermob?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    subtotal?: FloatFilter<"Order"> | number
    discount?: FloatFilter<"Order"> | number
    servicecharge?: FloatFilter<"Order"> | number
    grandtotal?: FloatFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    table?: XOR<TableNullableRelationFilter, TableWhereInput> | null
    items?: OrderItemListRelationFilter
  }, "id" | "ordercode">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    restroid?: SortOrder
    tableid?: SortOrderInput | SortOrder
    ordercode?: SortOrder
    customername?: SortOrderInput | SortOrder
    customermob?: SortOrderInput | SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    grandtotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    restroid?: IntWithAggregatesFilter<"Order"> | number
    tableid?: IntNullableWithAggregatesFilter<"Order"> | number | null
    ordercode?: StringWithAggregatesFilter<"Order"> | string
    customername?: StringNullableWithAggregatesFilter<"Order"> | string | null
    customermob?: StringNullableWithAggregatesFilter<"Order"> | string | null
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    subtotal?: FloatWithAggregatesFilter<"Order"> | number
    discount?: FloatWithAggregatesFilter<"Order"> | number
    servicecharge?: FloatWithAggregatesFilter<"Order"> | number
    grandtotal?: FloatWithAggregatesFilter<"Order"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    orderid?: IntFilter<"OrderItem"> | number
    menuitemid?: IntFilter<"OrderItem"> | number
    name_eng?: StringFilter<"OrderItem"> | string
    name_guj?: StringNullableFilter<"OrderItem"> | string | null
    name_hindi?: StringNullableFilter<"OrderItem"> | string | null
    price?: FloatFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    totalprice?: FloatFilter<"OrderItem"> | number
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    menuitem?: XOR<MenuItemRelationFilter, MenuItemWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderid?: SortOrder
    menuitemid?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrderInput | SortOrder
    name_hindi?: SortOrderInput | SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalprice?: SortOrder
    order?: OrderOrderByWithRelationInput
    menuitem?: MenuItemOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderid?: IntFilter<"OrderItem"> | number
    menuitemid?: IntFilter<"OrderItem"> | number
    name_eng?: StringFilter<"OrderItem"> | string
    name_guj?: StringNullableFilter<"OrderItem"> | string | null
    name_hindi?: StringNullableFilter<"OrderItem"> | string | null
    price?: FloatFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    totalprice?: FloatFilter<"OrderItem"> | number
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    menuitem?: XOR<MenuItemRelationFilter, MenuItemWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderid?: SortOrder
    menuitemid?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrderInput | SortOrder
    name_hindi?: SortOrderInput | SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalprice?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderItem"> | number
    orderid?: IntWithAggregatesFilter<"OrderItem"> | number
    menuitemid?: IntWithAggregatesFilter<"OrderItem"> | number
    name_eng?: StringWithAggregatesFilter<"OrderItem"> | string
    name_guj?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    name_hindi?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    price?: FloatWithAggregatesFilter<"OrderItem"> | number
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    totalprice?: FloatWithAggregatesFilter<"OrderItem"> | number
  }

  export type OrderHistoryWhereInput = {
    AND?: OrderHistoryWhereInput | OrderHistoryWhereInput[]
    OR?: OrderHistoryWhereInput[]
    NOT?: OrderHistoryWhereInput | OrderHistoryWhereInput[]
    id?: IntFilter<"OrderHistory"> | number
    restroid?: IntFilter<"OrderHistory"> | number
    ordercode?: StringFilter<"OrderHistory"> | string
    tablename?: StringNullableFilter<"OrderHistory"> | string | null
    customername?: StringNullableFilter<"OrderHistory"> | string | null
    customermob?: StringNullableFilter<"OrderHistory"> | string | null
    subtotal?: FloatFilter<"OrderHistory"> | number
    discount?: FloatFilter<"OrderHistory"> | number
    servicecharge?: FloatFilter<"OrderHistory"> | number
    grandtotal?: FloatFilter<"OrderHistory"> | number
    timestamp?: DateTimeFilter<"OrderHistory"> | Date | string
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    items?: HistoryItemListRelationFilter
  }

  export type OrderHistoryOrderByWithRelationInput = {
    id?: SortOrder
    restroid?: SortOrder
    ordercode?: SortOrder
    tablename?: SortOrderInput | SortOrder
    customername?: SortOrderInput | SortOrder
    customermob?: SortOrderInput | SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    grandtotal?: SortOrder
    timestamp?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    items?: HistoryItemOrderByRelationAggregateInput
  }

  export type OrderHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderHistoryWhereInput | OrderHistoryWhereInput[]
    OR?: OrderHistoryWhereInput[]
    NOT?: OrderHistoryWhereInput | OrderHistoryWhereInput[]
    restroid?: IntFilter<"OrderHistory"> | number
    ordercode?: StringFilter<"OrderHistory"> | string
    tablename?: StringNullableFilter<"OrderHistory"> | string | null
    customername?: StringNullableFilter<"OrderHistory"> | string | null
    customermob?: StringNullableFilter<"OrderHistory"> | string | null
    subtotal?: FloatFilter<"OrderHistory"> | number
    discount?: FloatFilter<"OrderHistory"> | number
    servicecharge?: FloatFilter<"OrderHistory"> | number
    grandtotal?: FloatFilter<"OrderHistory"> | number
    timestamp?: DateTimeFilter<"OrderHistory"> | Date | string
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    items?: HistoryItemListRelationFilter
  }, "id">

  export type OrderHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    restroid?: SortOrder
    ordercode?: SortOrder
    tablename?: SortOrderInput | SortOrder
    customername?: SortOrderInput | SortOrder
    customermob?: SortOrderInput | SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    grandtotal?: SortOrder
    timestamp?: SortOrder
    _count?: OrderHistoryCountOrderByAggregateInput
    _avg?: OrderHistoryAvgOrderByAggregateInput
    _max?: OrderHistoryMaxOrderByAggregateInput
    _min?: OrderHistoryMinOrderByAggregateInput
    _sum?: OrderHistorySumOrderByAggregateInput
  }

  export type OrderHistoryScalarWhereWithAggregatesInput = {
    AND?: OrderHistoryScalarWhereWithAggregatesInput | OrderHistoryScalarWhereWithAggregatesInput[]
    OR?: OrderHistoryScalarWhereWithAggregatesInput[]
    NOT?: OrderHistoryScalarWhereWithAggregatesInput | OrderHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderHistory"> | number
    restroid?: IntWithAggregatesFilter<"OrderHistory"> | number
    ordercode?: StringWithAggregatesFilter<"OrderHistory"> | string
    tablename?: StringNullableWithAggregatesFilter<"OrderHistory"> | string | null
    customername?: StringNullableWithAggregatesFilter<"OrderHistory"> | string | null
    customermob?: StringNullableWithAggregatesFilter<"OrderHistory"> | string | null
    subtotal?: FloatWithAggregatesFilter<"OrderHistory"> | number
    discount?: FloatWithAggregatesFilter<"OrderHistory"> | number
    servicecharge?: FloatWithAggregatesFilter<"OrderHistory"> | number
    grandtotal?: FloatWithAggregatesFilter<"OrderHistory"> | number
    timestamp?: DateTimeWithAggregatesFilter<"OrderHistory"> | Date | string
  }

  export type HistoryItemWhereInput = {
    AND?: HistoryItemWhereInput | HistoryItemWhereInput[]
    OR?: HistoryItemWhereInput[]
    NOT?: HistoryItemWhereInput | HistoryItemWhereInput[]
    id?: IntFilter<"HistoryItem"> | number
    orderid?: IntFilter<"HistoryItem"> | number
    name_eng?: StringFilter<"HistoryItem"> | string
    name_guj?: StringNullableFilter<"HistoryItem"> | string | null
    name_hindi?: StringNullableFilter<"HistoryItem"> | string | null
    price?: FloatFilter<"HistoryItem"> | number
    quantity?: IntFilter<"HistoryItem"> | number
    totalprice?: FloatFilter<"HistoryItem"> | number
    order?: XOR<OrderHistoryRelationFilter, OrderHistoryWhereInput>
  }

  export type HistoryItemOrderByWithRelationInput = {
    id?: SortOrder
    orderid?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrderInput | SortOrder
    name_hindi?: SortOrderInput | SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalprice?: SortOrder
    order?: OrderHistoryOrderByWithRelationInput
  }

  export type HistoryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistoryItemWhereInput | HistoryItemWhereInput[]
    OR?: HistoryItemWhereInput[]
    NOT?: HistoryItemWhereInput | HistoryItemWhereInput[]
    orderid?: IntFilter<"HistoryItem"> | number
    name_eng?: StringFilter<"HistoryItem"> | string
    name_guj?: StringNullableFilter<"HistoryItem"> | string | null
    name_hindi?: StringNullableFilter<"HistoryItem"> | string | null
    price?: FloatFilter<"HistoryItem"> | number
    quantity?: IntFilter<"HistoryItem"> | number
    totalprice?: FloatFilter<"HistoryItem"> | number
    order?: XOR<OrderHistoryRelationFilter, OrderHistoryWhereInput>
  }, "id">

  export type HistoryItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderid?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrderInput | SortOrder
    name_hindi?: SortOrderInput | SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalprice?: SortOrder
    _count?: HistoryItemCountOrderByAggregateInput
    _avg?: HistoryItemAvgOrderByAggregateInput
    _max?: HistoryItemMaxOrderByAggregateInput
    _min?: HistoryItemMinOrderByAggregateInput
    _sum?: HistoryItemSumOrderByAggregateInput
  }

  export type HistoryItemScalarWhereWithAggregatesInput = {
    AND?: HistoryItemScalarWhereWithAggregatesInput | HistoryItemScalarWhereWithAggregatesInput[]
    OR?: HistoryItemScalarWhereWithAggregatesInput[]
    NOT?: HistoryItemScalarWhereWithAggregatesInput | HistoryItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HistoryItem"> | number
    orderid?: IntWithAggregatesFilter<"HistoryItem"> | number
    name_eng?: StringWithAggregatesFilter<"HistoryItem"> | string
    name_guj?: StringNullableWithAggregatesFilter<"HistoryItem"> | string | null
    name_hindi?: StringNullableWithAggregatesFilter<"HistoryItem"> | string | null
    price?: FloatWithAggregatesFilter<"HistoryItem"> | number
    quantity?: IntWithAggregatesFilter<"HistoryItem"> | number
    totalprice?: FloatWithAggregatesFilter<"HistoryItem"> | number
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: IntFilter<"Feedback"> | number
    restroid?: IntFilter<"Feedback"> | number
    fullname?: StringFilter<"Feedback"> | string
    mobile?: StringNullableFilter<"Feedback"> | string | null
    email?: StringNullableFilter<"Feedback"> | string | null
    feedback?: StringNullableFilter<"Feedback"> | string | null
    dob?: DateTimeNullableFilter<"Feedback"> | Date | string | null
    timestamp?: DateTimeFilter<"Feedback"> | Date | string
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    restroid?: SortOrder
    fullname?: SortOrder
    mobile?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    restroid?: IntFilter<"Feedback"> | number
    fullname?: StringFilter<"Feedback"> | string
    mobile?: StringNullableFilter<"Feedback"> | string | null
    email?: StringNullableFilter<"Feedback"> | string | null
    feedback?: StringNullableFilter<"Feedback"> | string | null
    dob?: DateTimeNullableFilter<"Feedback"> | Date | string | null
    timestamp?: DateTimeFilter<"Feedback"> | Date | string
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    restroid?: SortOrder
    fullname?: SortOrder
    mobile?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feedback"> | number
    restroid?: IntWithAggregatesFilter<"Feedback"> | number
    fullname?: StringWithAggregatesFilter<"Feedback"> | string
    mobile?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    email?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    dob?: DateTimeNullableWithAggregatesFilter<"Feedback"> | Date | string | null
    timestamp?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type PaymentHistoryWhereInput = {
    AND?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    OR?: PaymentHistoryWhereInput[]
    NOT?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    id?: IntFilter<"PaymentHistory"> | number
    restroid?: IntFilter<"PaymentHistory"> | number
    paymentdate?: DateTimeFilter<"PaymentHistory"> | Date | string
    subplan?: IntFilter<"PaymentHistory"> | number
    price?: IntFilter<"PaymentHistory"> | number
    subtype?: IntFilter<"PaymentHistory"> | number
    expdate?: DateTimeFilter<"PaymentHistory"> | Date | string
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }

  export type PaymentHistoryOrderByWithRelationInput = {
    id?: SortOrder
    restroid?: SortOrder
    paymentdate?: SortOrder
    subplan?: SortOrder
    price?: SortOrder
    subtype?: SortOrder
    expdate?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
  }

  export type PaymentHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    OR?: PaymentHistoryWhereInput[]
    NOT?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    restroid?: IntFilter<"PaymentHistory"> | number
    paymentdate?: DateTimeFilter<"PaymentHistory"> | Date | string
    subplan?: IntFilter<"PaymentHistory"> | number
    price?: IntFilter<"PaymentHistory"> | number
    subtype?: IntFilter<"PaymentHistory"> | number
    expdate?: DateTimeFilter<"PaymentHistory"> | Date | string
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }, "id">

  export type PaymentHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    restroid?: SortOrder
    paymentdate?: SortOrder
    subplan?: SortOrder
    price?: SortOrder
    subtype?: SortOrder
    expdate?: SortOrder
    _count?: PaymentHistoryCountOrderByAggregateInput
    _avg?: PaymentHistoryAvgOrderByAggregateInput
    _max?: PaymentHistoryMaxOrderByAggregateInput
    _min?: PaymentHistoryMinOrderByAggregateInput
    _sum?: PaymentHistorySumOrderByAggregateInput
  }

  export type PaymentHistoryScalarWhereWithAggregatesInput = {
    AND?: PaymentHistoryScalarWhereWithAggregatesInput | PaymentHistoryScalarWhereWithAggregatesInput[]
    OR?: PaymentHistoryScalarWhereWithAggregatesInput[]
    NOT?: PaymentHistoryScalarWhereWithAggregatesInput | PaymentHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentHistory"> | number
    restroid?: IntWithAggregatesFilter<"PaymentHistory"> | number
    paymentdate?: DateTimeWithAggregatesFilter<"PaymentHistory"> | Date | string
    subplan?: IntWithAggregatesFilter<"PaymentHistory"> | number
    price?: IntWithAggregatesFilter<"PaymentHistory"> | number
    subtype?: IntWithAggregatesFilter<"PaymentHistory"> | number
    expdate?: DateTimeWithAggregatesFilter<"PaymentHistory"> | Date | string
  }

  export type WaiterRequestWhereInput = {
    AND?: WaiterRequestWhereInput | WaiterRequestWhereInput[]
    OR?: WaiterRequestWhereInput[]
    NOT?: WaiterRequestWhereInput | WaiterRequestWhereInput[]
    id?: IntFilter<"WaiterRequest"> | number
    restroid?: IntFilter<"WaiterRequest"> | number
    tableid?: IntNullableFilter<"WaiterRequest"> | number | null
    status?: IntFilter<"WaiterRequest"> | number
    createdAt?: DateTimeFilter<"WaiterRequest"> | Date | string
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    table?: XOR<TableNullableRelationFilter, TableWhereInput> | null
  }

  export type WaiterRequestOrderByWithRelationInput = {
    id?: SortOrder
    restroid?: SortOrder
    tableid?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    table?: TableOrderByWithRelationInput
  }

  export type WaiterRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WaiterRequestWhereInput | WaiterRequestWhereInput[]
    OR?: WaiterRequestWhereInput[]
    NOT?: WaiterRequestWhereInput | WaiterRequestWhereInput[]
    restroid?: IntFilter<"WaiterRequest"> | number
    tableid?: IntNullableFilter<"WaiterRequest"> | number | null
    status?: IntFilter<"WaiterRequest"> | number
    createdAt?: DateTimeFilter<"WaiterRequest"> | Date | string
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    table?: XOR<TableNullableRelationFilter, TableWhereInput> | null
  }, "id">

  export type WaiterRequestOrderByWithAggregationInput = {
    id?: SortOrder
    restroid?: SortOrder
    tableid?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: WaiterRequestCountOrderByAggregateInput
    _avg?: WaiterRequestAvgOrderByAggregateInput
    _max?: WaiterRequestMaxOrderByAggregateInput
    _min?: WaiterRequestMinOrderByAggregateInput
    _sum?: WaiterRequestSumOrderByAggregateInput
  }

  export type WaiterRequestScalarWhereWithAggregatesInput = {
    AND?: WaiterRequestScalarWhereWithAggregatesInput | WaiterRequestScalarWhereWithAggregatesInput[]
    OR?: WaiterRequestScalarWhereWithAggregatesInput[]
    NOT?: WaiterRequestScalarWhereWithAggregatesInput | WaiterRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WaiterRequest"> | number
    restroid?: IntWithAggregatesFilter<"WaiterRequest"> | number
    tableid?: IntNullableWithAggregatesFilter<"WaiterRequest"> | number | null
    status?: IntWithAggregatesFilter<"WaiterRequest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WaiterRequest"> | Date | string
  }

  export type AdminCreateInput = {
    fullname: string
    username: string
    email: string
    password: string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password: string
  }

  export type AdminUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password: string
  }

  export type AdminUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantCreateInput = {
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    theme?: ThemeCreateNestedOneWithoutRestaurantsInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestCreateNestedManyWithoutRestaurantInput
    staff?: StaffCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateInput = {
    id?: number
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    themecode?: number | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestUncheckedCreateNestedManyWithoutRestaurantInput
    staff?: StaffUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUpdateInput = {
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    theme?: ThemeUpdateOneWithoutRestaurantsNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    themecode?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUncheckedUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateManyInput = {
    id?: number
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    themecode?: number | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
  }

  export type RestaurantUpdateManyMutationInput = {
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
  }

  export type RestaurantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    themecode?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
  }

  export type StaffCreateInput = {
    fullname: string
    username: string
    password: string
    role?: string
    status?: number
    createdAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    id?: number
    restroid: number
    fullname: string
    username: string
    password: string
    role?: string
    status?: number
    createdAt?: Date | string
  }

  export type StaffUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffCreateManyInput = {
    id?: number
    restroid: number
    fullname: string
    username: string
    password: string
    role?: string
    status?: number
    createdAt?: Date | string
  }

  export type StaffUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemeCreateInput = {
    title: string
    image?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    bgColor?: string
    cardColor?: string
    textColor?: string
    navBg?: string
    buttonTextColor?: string
    fontFamily?: string
    borderRadius?: string
    darkMode?: boolean
    restaurants?: RestaurantCreateNestedManyWithoutThemeInput
  }

  export type ThemeUncheckedCreateInput = {
    id?: number
    title: string
    image?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    bgColor?: string
    cardColor?: string
    textColor?: string
    navBg?: string
    buttonTextColor?: string
    fontFamily?: string
    borderRadius?: string
    darkMode?: boolean
    restaurants?: RestaurantUncheckedCreateNestedManyWithoutThemeInput
  }

  export type ThemeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    cardColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    navBg?: StringFieldUpdateOperationsInput | string
    buttonTextColor?: StringFieldUpdateOperationsInput | string
    fontFamily?: StringFieldUpdateOperationsInput | string
    borderRadius?: StringFieldUpdateOperationsInput | string
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    restaurants?: RestaurantUpdateManyWithoutThemeNestedInput
  }

  export type ThemeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    cardColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    navBg?: StringFieldUpdateOperationsInput | string
    buttonTextColor?: StringFieldUpdateOperationsInput | string
    fontFamily?: StringFieldUpdateOperationsInput | string
    borderRadius?: StringFieldUpdateOperationsInput | string
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    restaurants?: RestaurantUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type ThemeCreateManyInput = {
    id?: number
    title: string
    image?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    bgColor?: string
    cardColor?: string
    textColor?: string
    navBg?: string
    buttonTextColor?: string
    fontFamily?: string
    borderRadius?: string
    darkMode?: boolean
  }

  export type ThemeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    cardColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    navBg?: StringFieldUpdateOperationsInput | string
    buttonTextColor?: StringFieldUpdateOperationsInput | string
    fontFamily?: StringFieldUpdateOperationsInput | string
    borderRadius?: StringFieldUpdateOperationsInput | string
    darkMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThemeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    cardColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    navBg?: StringFieldUpdateOperationsInput | string
    buttonTextColor?: StringFieldUpdateOperationsInput | string
    fontFamily?: StringFieldUpdateOperationsInput | string
    borderRadius?: StringFieldUpdateOperationsInput | string
    darkMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryCreateInput = {
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    categorydesc?: string | null
    sortorder?: number
    restaurant: RestaurantCreateNestedOneWithoutCategoriesInput
    menuItems?: MenuItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    restroid: number
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    categorydesc?: string | null
    sortorder?: number
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    categorydesc?: NullableStringFieldUpdateOperationsInput | string | null
    sortorder?: IntFieldUpdateOperationsInput | number
    restaurant?: RestaurantUpdateOneRequiredWithoutCategoriesNestedInput
    menuItems?: MenuItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    categorydesc?: NullableStringFieldUpdateOperationsInput | string | null
    sortorder?: IntFieldUpdateOperationsInput | number
    menuItems?: MenuItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    restroid: number
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    categorydesc?: string | null
    sortorder?: number
  }

  export type CategoryUpdateManyMutationInput = {
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    categorydesc?: NullableStringFieldUpdateOperationsInput | string | null
    sortorder?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    categorydesc?: NullableStringFieldUpdateOperationsInput | string | null
    sortorder?: IntFieldUpdateOperationsInput | number
  }

  export type MenuItemCreateInput = {
    image?: string | null
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    veg?: boolean
    available?: boolean
    price: number
    restaurant: RestaurantCreateNestedOneWithoutMenuItemsInput
    category: CategoryCreateNestedOneWithoutMenuItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuitemInput
  }

  export type MenuItemUncheckedCreateInput = {
    id?: number
    restroid: number
    categoryid: number
    image?: string | null
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    veg?: boolean
    available?: boolean
    price: number
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuitemInput
  }

  export type MenuItemUpdateInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    veg?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    restaurant?: RestaurantUpdateOneRequiredWithoutMenuItemsNestedInput
    category?: CategoryUpdateOneRequiredWithoutMenuItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuitemNestedInput
  }

  export type MenuItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    categoryid?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    veg?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuitemNestedInput
  }

  export type MenuItemCreateManyInput = {
    id?: number
    restroid: number
    categoryid: number
    image?: string | null
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    veg?: boolean
    available?: boolean
    price: number
  }

  export type MenuItemUpdateManyMutationInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    veg?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type MenuItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    categoryid?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    veg?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type TableCreateInput = {
    name: string
    qrimage?: string | null
    restaurant: RestaurantCreateNestedOneWithoutTablesInput
    orders?: OrderCreateNestedManyWithoutTableInput
    waiterRequests?: WaiterRequestCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateInput = {
    id?: number
    restroid: number
    name: string
    qrimage?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutTableInput
    waiterRequests?: WaiterRequestUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    qrimage?: NullableStringFieldUpdateOperationsInput | string | null
    restaurant?: RestaurantUpdateOneRequiredWithoutTablesNestedInput
    orders?: OrderUpdateManyWithoutTableNestedInput
    waiterRequests?: WaiterRequestUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    qrimage?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutTableNestedInput
    waiterRequests?: WaiterRequestUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableCreateManyInput = {
    id?: number
    restroid: number
    name: string
    qrimage?: string | null
  }

  export type TableUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    qrimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    qrimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateInput = {
    ordercode: string
    customername?: string | null
    customermob?: string | null
    status?: $Enums.OrderStatus
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    table?: TableCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    restroid: number
    tableid?: number | null
    ordercode: string
    customername?: string | null
    customermob?: string | null
    status?: $Enums.OrderStatus
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    ordercode?: StringFieldUpdateOperationsInput | string
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    table?: TableUpdateOneWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    tableid?: NullableIntFieldUpdateOperationsInput | number | null
    ordercode?: StringFieldUpdateOperationsInput | string
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    restroid: number
    tableid?: number | null
    ordercode: string
    customername?: string | null
    customermob?: string | null
    status?: $Enums.OrderStatus
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    ordercode?: StringFieldUpdateOperationsInput | string
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    tableid?: NullableIntFieldUpdateOperationsInput | number | null
    ordercode?: StringFieldUpdateOperationsInput | string
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    price: number
    quantity: number
    totalprice: number
    order: OrderCreateNestedOneWithoutItemsInput
    menuitem: MenuItemCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: number
    orderid: number
    menuitemid: number
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    price: number
    quantity: number
    totalprice: number
  }

  export type OrderItemUpdateInput = {
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    menuitem?: MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderid?: IntFieldUpdateOperationsInput | number
    menuitemid?: IntFieldUpdateOperationsInput | number
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyInput = {
    id?: number
    orderid: number
    menuitemid: number
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    price: number
    quantity: number
    totalprice: number
  }

  export type OrderItemUpdateManyMutationInput = {
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderid?: IntFieldUpdateOperationsInput | number
    menuitemid?: IntFieldUpdateOperationsInput | number
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderHistoryCreateInput = {
    ordercode: string
    tablename?: string | null
    customername?: string | null
    customermob?: string | null
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    timestamp?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutOrderHistoryInput
    items?: HistoryItemCreateNestedManyWithoutOrderInput
  }

  export type OrderHistoryUncheckedCreateInput = {
    id?: number
    restroid: number
    ordercode: string
    tablename?: string | null
    customername?: string | null
    customermob?: string | null
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    timestamp?: Date | string
    items?: HistoryItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderHistoryUpdateInput = {
    ordercode?: StringFieldUpdateOperationsInput | string
    tablename?: NullableStringFieldUpdateOperationsInput | string | null
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutOrderHistoryNestedInput
    items?: HistoryItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    ordercode?: StringFieldUpdateOperationsInput | string
    tablename?: NullableStringFieldUpdateOperationsInput | string | null
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: HistoryItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderHistoryCreateManyInput = {
    id?: number
    restroid: number
    ordercode: string
    tablename?: string | null
    customername?: string | null
    customermob?: string | null
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    timestamp?: Date | string
  }

  export type OrderHistoryUpdateManyMutationInput = {
    ordercode?: StringFieldUpdateOperationsInput | string
    tablename?: NullableStringFieldUpdateOperationsInput | string | null
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    ordercode?: StringFieldUpdateOperationsInput | string
    tablename?: NullableStringFieldUpdateOperationsInput | string | null
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryItemCreateInput = {
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    price: number
    quantity: number
    totalprice: number
    order: OrderHistoryCreateNestedOneWithoutItemsInput
  }

  export type HistoryItemUncheckedCreateInput = {
    id?: number
    orderid: number
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    price: number
    quantity: number
    totalprice: number
  }

  export type HistoryItemUpdateInput = {
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
    order?: OrderHistoryUpdateOneRequiredWithoutItemsNestedInput
  }

  export type HistoryItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderid?: IntFieldUpdateOperationsInput | number
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
  }

  export type HistoryItemCreateManyInput = {
    id?: number
    orderid: number
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    price: number
    quantity: number
    totalprice: number
  }

  export type HistoryItemUpdateManyMutationInput = {
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
  }

  export type HistoryItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderid?: IntFieldUpdateOperationsInput | number
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
  }

  export type FeedbackCreateInput = {
    fullname: string
    mobile?: string | null
    email?: string | null
    feedback?: string | null
    dob?: Date | string | null
    timestamp?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: number
    restroid: number
    fullname: string
    mobile?: string | null
    email?: string | null
    feedback?: string | null
    dob?: Date | string | null
    timestamp?: Date | string
  }

  export type FeedbackUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: number
    restroid: number
    fullname: string
    mobile?: string | null
    email?: string | null
    feedback?: string | null
    dob?: Date | string | null
    timestamp?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryCreateInput = {
    paymentdate: Date | string
    subplan: number
    price: number
    subtype: number
    expdate: Date | string
    restaurant: RestaurantCreateNestedOneWithoutPaymentHistoryInput
  }

  export type PaymentHistoryUncheckedCreateInput = {
    id?: number
    restroid: number
    paymentdate: Date | string
    subplan: number
    price: number
    subtype: number
    expdate: Date | string
  }

  export type PaymentHistoryUpdateInput = {
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subplan?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    subtype?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutPaymentHistoryNestedInput
  }

  export type PaymentHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subplan?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    subtype?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryCreateManyInput = {
    id?: number
    restroid: number
    paymentdate: Date | string
    subplan: number
    price: number
    subtype: number
    expdate: Date | string
  }

  export type PaymentHistoryUpdateManyMutationInput = {
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subplan?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    subtype?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subplan?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    subtype?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterRequestCreateInput = {
    status?: number
    createdAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutWaiterRequestsInput
    table?: TableCreateNestedOneWithoutWaiterRequestsInput
  }

  export type WaiterRequestUncheckedCreateInput = {
    id?: number
    restroid: number
    tableid?: number | null
    status?: number
    createdAt?: Date | string
  }

  export type WaiterRequestUpdateInput = {
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutWaiterRequestsNestedInput
    table?: TableUpdateOneWithoutWaiterRequestsNestedInput
  }

  export type WaiterRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    tableid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterRequestCreateManyInput = {
    id?: number
    restroid: number
    tableid?: number | null
    status?: number
    createdAt?: Date | string
  }

  export type WaiterRequestUpdateManyMutationInput = {
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    tableid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ThemeNullableRelationFilter = {
    is?: ThemeWhereInput | null
    isNot?: ThemeWhereInput | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type MenuItemListRelationFilter = {
    every?: MenuItemWhereInput
    some?: MenuItemWhereInput
    none?: MenuItemWhereInput
  }

  export type TableListRelationFilter = {
    every?: TableWhereInput
    some?: TableWhereInput
    none?: TableWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderHistoryListRelationFilter = {
    every?: OrderHistoryWhereInput
    some?: OrderHistoryWhereInput
    none?: OrderHistoryWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type PaymentHistoryListRelationFilter = {
    every?: PaymentHistoryWhereInput
    some?: PaymentHistoryWhereInput
    none?: PaymentHistoryWhereInput
  }

  export type WaiterRequestListRelationFilter = {
    every?: WaiterRequestWhereInput
    some?: WaiterRequestWhereInput
    none?: WaiterRequestWhereInput
  }

  export type StaffListRelationFilter = {
    every?: StaffWhereInput
    some?: StaffWhereInput
    none?: StaffWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaiterRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantCountOrderByAggregateInput = {
    id?: SortOrder
    restroname?: SortOrder
    mobileno?: SortOrder
    email?: SortOrder
    address?: SortOrder
    password?: SortOrder
    gstno?: SortOrder
    logo?: SortOrder
    themecode?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    distance?: SortOrder
    joindate?: SortOrder
    paymentdate?: SortOrder
    subtype?: SortOrder
    subplan?: SortOrder
    expdate?: SortOrder
    price?: SortOrder
    pdf?: SortOrder
    slug?: SortOrder
    restrootp?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    maxStaff?: SortOrder
  }

  export type RestaurantAvgOrderByAggregateInput = {
    id?: SortOrder
    themecode?: SortOrder
    status?: SortOrder
    subtype?: SortOrder
    subplan?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    maxStaff?: SortOrder
  }

  export type RestaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    restroname?: SortOrder
    mobileno?: SortOrder
    email?: SortOrder
    address?: SortOrder
    password?: SortOrder
    gstno?: SortOrder
    logo?: SortOrder
    themecode?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    distance?: SortOrder
    joindate?: SortOrder
    paymentdate?: SortOrder
    subtype?: SortOrder
    subplan?: SortOrder
    expdate?: SortOrder
    price?: SortOrder
    pdf?: SortOrder
    slug?: SortOrder
    restrootp?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    maxStaff?: SortOrder
  }

  export type RestaurantMinOrderByAggregateInput = {
    id?: SortOrder
    restroname?: SortOrder
    mobileno?: SortOrder
    email?: SortOrder
    address?: SortOrder
    password?: SortOrder
    gstno?: SortOrder
    logo?: SortOrder
    themecode?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    distance?: SortOrder
    joindate?: SortOrder
    paymentdate?: SortOrder
    subtype?: SortOrder
    subplan?: SortOrder
    expdate?: SortOrder
    price?: SortOrder
    pdf?: SortOrder
    slug?: SortOrder
    restrootp?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    maxStaff?: SortOrder
  }

  export type RestaurantSumOrderByAggregateInput = {
    id?: SortOrder
    themecode?: SortOrder
    status?: SortOrder
    subtype?: SortOrder
    subplan?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    maxStaff?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RestaurantRelationFilter = {
    is?: RestaurantWhereInput
    isNot?: RestaurantWhereInput
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffAvgOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    status?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StaffSumOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    status?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RestaurantListRelationFilter = {
    every?: RestaurantWhereInput
    some?: RestaurantWhereInput
    none?: RestaurantWhereInput
  }

  export type RestaurantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThemeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    bgColor?: SortOrder
    cardColor?: SortOrder
    textColor?: SortOrder
    navBg?: SortOrder
    buttonTextColor?: SortOrder
    fontFamily?: SortOrder
    borderRadius?: SortOrder
    darkMode?: SortOrder
  }

  export type ThemeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ThemeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    bgColor?: SortOrder
    cardColor?: SortOrder
    textColor?: SortOrder
    navBg?: SortOrder
    buttonTextColor?: SortOrder
    fontFamily?: SortOrder
    borderRadius?: SortOrder
    darkMode?: SortOrder
  }

  export type ThemeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    bgColor?: SortOrder
    cardColor?: SortOrder
    textColor?: SortOrder
    navBg?: SortOrder
    buttonTextColor?: SortOrder
    fontFamily?: SortOrder
    borderRadius?: SortOrder
    darkMode?: SortOrder
  }

  export type ThemeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrder
    name_hindi?: SortOrder
    categorydesc?: SortOrder
    sortorder?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    sortorder?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrder
    name_hindi?: SortOrder
    categorydesc?: SortOrder
    sortorder?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrder
    name_hindi?: SortOrder
    categorydesc?: SortOrder
    sortorder?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    sortorder?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuItemCountOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    categoryid?: SortOrder
    image?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrder
    name_hindi?: SortOrder
    veg?: SortOrder
    available?: SortOrder
    price?: SortOrder
  }

  export type MenuItemAvgOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    categoryid?: SortOrder
    price?: SortOrder
  }

  export type MenuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    categoryid?: SortOrder
    image?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrder
    name_hindi?: SortOrder
    veg?: SortOrder
    available?: SortOrder
    price?: SortOrder
  }

  export type MenuItemMinOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    categoryid?: SortOrder
    image?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrder
    name_hindi?: SortOrder
    veg?: SortOrder
    available?: SortOrder
    price?: SortOrder
  }

  export type MenuItemSumOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    categoryid?: SortOrder
    price?: SortOrder
  }

  export type TableCountOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    name?: SortOrder
    qrimage?: SortOrder
  }

  export type TableAvgOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
  }

  export type TableMaxOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    name?: SortOrder
    qrimage?: SortOrder
  }

  export type TableMinOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    name?: SortOrder
    qrimage?: SortOrder
  }

  export type TableSumOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type TableNullableRelationFilter = {
    is?: TableWhereInput | null
    isNot?: TableWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    tableid?: SortOrder
    ordercode?: SortOrder
    customername?: SortOrder
    customermob?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    grandtotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    tableid?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    grandtotal?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    tableid?: SortOrder
    ordercode?: SortOrder
    customername?: SortOrder
    customermob?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    grandtotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    tableid?: SortOrder
    ordercode?: SortOrder
    customername?: SortOrder
    customermob?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    grandtotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    tableid?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    grandtotal?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type MenuItemRelationFilter = {
    is?: MenuItemWhereInput
    isNot?: MenuItemWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderid?: SortOrder
    menuitemid?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrder
    name_hindi?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalprice?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    orderid?: SortOrder
    menuitemid?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalprice?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderid?: SortOrder
    menuitemid?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrder
    name_hindi?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalprice?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderid?: SortOrder
    menuitemid?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrder
    name_hindi?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalprice?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    orderid?: SortOrder
    menuitemid?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalprice?: SortOrder
  }

  export type HistoryItemListRelationFilter = {
    every?: HistoryItemWhereInput
    some?: HistoryItemWhereInput
    none?: HistoryItemWhereInput
  }

  export type HistoryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    ordercode?: SortOrder
    tablename?: SortOrder
    customername?: SortOrder
    customermob?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    grandtotal?: SortOrder
    timestamp?: SortOrder
  }

  export type OrderHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    grandtotal?: SortOrder
  }

  export type OrderHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    ordercode?: SortOrder
    tablename?: SortOrder
    customername?: SortOrder
    customermob?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    grandtotal?: SortOrder
    timestamp?: SortOrder
  }

  export type OrderHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    ordercode?: SortOrder
    tablename?: SortOrder
    customername?: SortOrder
    customermob?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    grandtotal?: SortOrder
    timestamp?: SortOrder
  }

  export type OrderHistorySumOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    servicecharge?: SortOrder
    grandtotal?: SortOrder
  }

  export type OrderHistoryRelationFilter = {
    is?: OrderHistoryWhereInput
    isNot?: OrderHistoryWhereInput
  }

  export type HistoryItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderid?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrder
    name_hindi?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalprice?: SortOrder
  }

  export type HistoryItemAvgOrderByAggregateInput = {
    id?: SortOrder
    orderid?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalprice?: SortOrder
  }

  export type HistoryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderid?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrder
    name_hindi?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalprice?: SortOrder
  }

  export type HistoryItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderid?: SortOrder
    name_eng?: SortOrder
    name_guj?: SortOrder
    name_hindi?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalprice?: SortOrder
  }

  export type HistoryItemSumOrderByAggregateInput = {
    id?: SortOrder
    orderid?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    totalprice?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    fullname?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    feedback?: SortOrder
    dob?: SortOrder
    timestamp?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    fullname?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    feedback?: SortOrder
    dob?: SortOrder
    timestamp?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    fullname?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    feedback?: SortOrder
    dob?: SortOrder
    timestamp?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PaymentHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    paymentdate?: SortOrder
    subplan?: SortOrder
    price?: SortOrder
    subtype?: SortOrder
    expdate?: SortOrder
  }

  export type PaymentHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    subplan?: SortOrder
    price?: SortOrder
    subtype?: SortOrder
  }

  export type PaymentHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    paymentdate?: SortOrder
    subplan?: SortOrder
    price?: SortOrder
    subtype?: SortOrder
    expdate?: SortOrder
  }

  export type PaymentHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    paymentdate?: SortOrder
    subplan?: SortOrder
    price?: SortOrder
    subtype?: SortOrder
    expdate?: SortOrder
  }

  export type PaymentHistorySumOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    subplan?: SortOrder
    price?: SortOrder
    subtype?: SortOrder
  }

  export type WaiterRequestCountOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    tableid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WaiterRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    tableid?: SortOrder
    status?: SortOrder
  }

  export type WaiterRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    tableid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WaiterRequestMinOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    tableid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WaiterRequestSumOrderByAggregateInput = {
    id?: SortOrder
    restroid?: SortOrder
    tableid?: SortOrder
    status?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ThemeCreateNestedOneWithoutRestaurantsInput = {
    create?: XOR<ThemeCreateWithoutRestaurantsInput, ThemeUncheckedCreateWithoutRestaurantsInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutRestaurantsInput
    connect?: ThemeWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput> | CategoryCreateWithoutRestaurantInput[] | CategoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutRestaurantInput | CategoryCreateOrConnectWithoutRestaurantInput[]
    createMany?: CategoryCreateManyRestaurantInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type MenuItemCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<MenuItemCreateWithoutRestaurantInput, MenuItemUncheckedCreateWithoutRestaurantInput> | MenuItemCreateWithoutRestaurantInput[] | MenuItemUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutRestaurantInput | MenuItemCreateOrConnectWithoutRestaurantInput[]
    createMany?: MenuItemCreateManyRestaurantInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type TableCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput> | TableCreateWithoutRestaurantInput[] | TableUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: TableCreateOrConnectWithoutRestaurantInput | TableCreateOrConnectWithoutRestaurantInput[]
    createMany?: TableCreateManyRestaurantInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderHistoryCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OrderHistoryCreateWithoutRestaurantInput, OrderHistoryUncheckedCreateWithoutRestaurantInput> | OrderHistoryCreateWithoutRestaurantInput[] | OrderHistoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutRestaurantInput | OrderHistoryCreateOrConnectWithoutRestaurantInput[]
    createMany?: OrderHistoryCreateManyRestaurantInputEnvelope
    connect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<FeedbackCreateWithoutRestaurantInput, FeedbackUncheckedCreateWithoutRestaurantInput> | FeedbackCreateWithoutRestaurantInput[] | FeedbackUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutRestaurantInput | FeedbackCreateOrConnectWithoutRestaurantInput[]
    createMany?: FeedbackCreateManyRestaurantInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type PaymentHistoryCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<PaymentHistoryCreateWithoutRestaurantInput, PaymentHistoryUncheckedCreateWithoutRestaurantInput> | PaymentHistoryCreateWithoutRestaurantInput[] | PaymentHistoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutRestaurantInput | PaymentHistoryCreateOrConnectWithoutRestaurantInput[]
    createMany?: PaymentHistoryCreateManyRestaurantInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type WaiterRequestCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<WaiterRequestCreateWithoutRestaurantInput, WaiterRequestUncheckedCreateWithoutRestaurantInput> | WaiterRequestCreateWithoutRestaurantInput[] | WaiterRequestUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: WaiterRequestCreateOrConnectWithoutRestaurantInput | WaiterRequestCreateOrConnectWithoutRestaurantInput[]
    createMany?: WaiterRequestCreateManyRestaurantInputEnvelope
    connect?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
  }

  export type StaffCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<StaffCreateWithoutRestaurantInput, StaffUncheckedCreateWithoutRestaurantInput> | StaffCreateWithoutRestaurantInput[] | StaffUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutRestaurantInput | StaffCreateOrConnectWithoutRestaurantInput[]
    createMany?: StaffCreateManyRestaurantInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput> | CategoryCreateWithoutRestaurantInput[] | CategoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutRestaurantInput | CategoryCreateOrConnectWithoutRestaurantInput[]
    createMany?: CategoryCreateManyRestaurantInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type MenuItemUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<MenuItemCreateWithoutRestaurantInput, MenuItemUncheckedCreateWithoutRestaurantInput> | MenuItemCreateWithoutRestaurantInput[] | MenuItemUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutRestaurantInput | MenuItemCreateOrConnectWithoutRestaurantInput[]
    createMany?: MenuItemCreateManyRestaurantInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type TableUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput> | TableCreateWithoutRestaurantInput[] | TableUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: TableCreateOrConnectWithoutRestaurantInput | TableCreateOrConnectWithoutRestaurantInput[]
    createMany?: TableCreateManyRestaurantInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderHistoryUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OrderHistoryCreateWithoutRestaurantInput, OrderHistoryUncheckedCreateWithoutRestaurantInput> | OrderHistoryCreateWithoutRestaurantInput[] | OrderHistoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutRestaurantInput | OrderHistoryCreateOrConnectWithoutRestaurantInput[]
    createMany?: OrderHistoryCreateManyRestaurantInputEnvelope
    connect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<FeedbackCreateWithoutRestaurantInput, FeedbackUncheckedCreateWithoutRestaurantInput> | FeedbackCreateWithoutRestaurantInput[] | FeedbackUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutRestaurantInput | FeedbackCreateOrConnectWithoutRestaurantInput[]
    createMany?: FeedbackCreateManyRestaurantInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type PaymentHistoryUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<PaymentHistoryCreateWithoutRestaurantInput, PaymentHistoryUncheckedCreateWithoutRestaurantInput> | PaymentHistoryCreateWithoutRestaurantInput[] | PaymentHistoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutRestaurantInput | PaymentHistoryCreateOrConnectWithoutRestaurantInput[]
    createMany?: PaymentHistoryCreateManyRestaurantInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type WaiterRequestUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<WaiterRequestCreateWithoutRestaurantInput, WaiterRequestUncheckedCreateWithoutRestaurantInput> | WaiterRequestCreateWithoutRestaurantInput[] | WaiterRequestUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: WaiterRequestCreateOrConnectWithoutRestaurantInput | WaiterRequestCreateOrConnectWithoutRestaurantInput[]
    createMany?: WaiterRequestCreateManyRestaurantInputEnvelope
    connect?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<StaffCreateWithoutRestaurantInput, StaffUncheckedCreateWithoutRestaurantInput> | StaffCreateWithoutRestaurantInput[] | StaffUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutRestaurantInput | StaffCreateOrConnectWithoutRestaurantInput[]
    createMany?: StaffCreateManyRestaurantInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ThemeUpdateOneWithoutRestaurantsNestedInput = {
    create?: XOR<ThemeCreateWithoutRestaurantsInput, ThemeUncheckedCreateWithoutRestaurantsInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutRestaurantsInput
    upsert?: ThemeUpsertWithoutRestaurantsInput
    disconnect?: ThemeWhereInput | boolean
    delete?: ThemeWhereInput | boolean
    connect?: ThemeWhereUniqueInput
    update?: XOR<XOR<ThemeUpdateToOneWithWhereWithoutRestaurantsInput, ThemeUpdateWithoutRestaurantsInput>, ThemeUncheckedUpdateWithoutRestaurantsInput>
  }

  export type CategoryUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput> | CategoryCreateWithoutRestaurantInput[] | CategoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutRestaurantInput | CategoryCreateOrConnectWithoutRestaurantInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutRestaurantInput | CategoryUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: CategoryCreateManyRestaurantInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutRestaurantInput | CategoryUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutRestaurantInput | CategoryUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type MenuItemUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<MenuItemCreateWithoutRestaurantInput, MenuItemUncheckedCreateWithoutRestaurantInput> | MenuItemCreateWithoutRestaurantInput[] | MenuItemUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutRestaurantInput | MenuItemCreateOrConnectWithoutRestaurantInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutRestaurantInput | MenuItemUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: MenuItemCreateManyRestaurantInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutRestaurantInput | MenuItemUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutRestaurantInput | MenuItemUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type TableUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput> | TableCreateWithoutRestaurantInput[] | TableUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: TableCreateOrConnectWithoutRestaurantInput | TableCreateOrConnectWithoutRestaurantInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutRestaurantInput | TableUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: TableCreateManyRestaurantInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutRestaurantInput | TableUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: TableUpdateManyWithWhereWithoutRestaurantInput | TableUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRestaurantInput | OrderUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRestaurantInput | OrderUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRestaurantInput | OrderUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderHistoryUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OrderHistoryCreateWithoutRestaurantInput, OrderHistoryUncheckedCreateWithoutRestaurantInput> | OrderHistoryCreateWithoutRestaurantInput[] | OrderHistoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutRestaurantInput | OrderHistoryCreateOrConnectWithoutRestaurantInput[]
    upsert?: OrderHistoryUpsertWithWhereUniqueWithoutRestaurantInput | OrderHistoryUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OrderHistoryCreateManyRestaurantInputEnvelope
    set?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    disconnect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    delete?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    connect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    update?: OrderHistoryUpdateWithWhereUniqueWithoutRestaurantInput | OrderHistoryUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OrderHistoryUpdateManyWithWhereWithoutRestaurantInput | OrderHistoryUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OrderHistoryScalarWhereInput | OrderHistoryScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<FeedbackCreateWithoutRestaurantInput, FeedbackUncheckedCreateWithoutRestaurantInput> | FeedbackCreateWithoutRestaurantInput[] | FeedbackUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutRestaurantInput | FeedbackCreateOrConnectWithoutRestaurantInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutRestaurantInput | FeedbackUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: FeedbackCreateManyRestaurantInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutRestaurantInput | FeedbackUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutRestaurantInput | FeedbackUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type PaymentHistoryUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutRestaurantInput, PaymentHistoryUncheckedCreateWithoutRestaurantInput> | PaymentHistoryCreateWithoutRestaurantInput[] | PaymentHistoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutRestaurantInput | PaymentHistoryCreateOrConnectWithoutRestaurantInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutRestaurantInput | PaymentHistoryUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: PaymentHistoryCreateManyRestaurantInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutRestaurantInput | PaymentHistoryUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutRestaurantInput | PaymentHistoryUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type WaiterRequestUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<WaiterRequestCreateWithoutRestaurantInput, WaiterRequestUncheckedCreateWithoutRestaurantInput> | WaiterRequestCreateWithoutRestaurantInput[] | WaiterRequestUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: WaiterRequestCreateOrConnectWithoutRestaurantInput | WaiterRequestCreateOrConnectWithoutRestaurantInput[]
    upsert?: WaiterRequestUpsertWithWhereUniqueWithoutRestaurantInput | WaiterRequestUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: WaiterRequestCreateManyRestaurantInputEnvelope
    set?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
    disconnect?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
    delete?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
    connect?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
    update?: WaiterRequestUpdateWithWhereUniqueWithoutRestaurantInput | WaiterRequestUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: WaiterRequestUpdateManyWithWhereWithoutRestaurantInput | WaiterRequestUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: WaiterRequestScalarWhereInput | WaiterRequestScalarWhereInput[]
  }

  export type StaffUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<StaffCreateWithoutRestaurantInput, StaffUncheckedCreateWithoutRestaurantInput> | StaffCreateWithoutRestaurantInput[] | StaffUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutRestaurantInput | StaffCreateOrConnectWithoutRestaurantInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutRestaurantInput | StaffUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: StaffCreateManyRestaurantInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutRestaurantInput | StaffUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutRestaurantInput | StaffUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput> | CategoryCreateWithoutRestaurantInput[] | CategoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutRestaurantInput | CategoryCreateOrConnectWithoutRestaurantInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutRestaurantInput | CategoryUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: CategoryCreateManyRestaurantInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutRestaurantInput | CategoryUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutRestaurantInput | CategoryUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type MenuItemUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<MenuItemCreateWithoutRestaurantInput, MenuItemUncheckedCreateWithoutRestaurantInput> | MenuItemCreateWithoutRestaurantInput[] | MenuItemUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutRestaurantInput | MenuItemCreateOrConnectWithoutRestaurantInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutRestaurantInput | MenuItemUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: MenuItemCreateManyRestaurantInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutRestaurantInput | MenuItemUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutRestaurantInput | MenuItemUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type TableUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput> | TableCreateWithoutRestaurantInput[] | TableUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: TableCreateOrConnectWithoutRestaurantInput | TableCreateOrConnectWithoutRestaurantInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutRestaurantInput | TableUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: TableCreateManyRestaurantInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutRestaurantInput | TableUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: TableUpdateManyWithWhereWithoutRestaurantInput | TableUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRestaurantInput | OrderUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRestaurantInput | OrderUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRestaurantInput | OrderUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderHistoryUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OrderHistoryCreateWithoutRestaurantInput, OrderHistoryUncheckedCreateWithoutRestaurantInput> | OrderHistoryCreateWithoutRestaurantInput[] | OrderHistoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutRestaurantInput | OrderHistoryCreateOrConnectWithoutRestaurantInput[]
    upsert?: OrderHistoryUpsertWithWhereUniqueWithoutRestaurantInput | OrderHistoryUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OrderHistoryCreateManyRestaurantInputEnvelope
    set?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    disconnect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    delete?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    connect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    update?: OrderHistoryUpdateWithWhereUniqueWithoutRestaurantInput | OrderHistoryUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OrderHistoryUpdateManyWithWhereWithoutRestaurantInput | OrderHistoryUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OrderHistoryScalarWhereInput | OrderHistoryScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<FeedbackCreateWithoutRestaurantInput, FeedbackUncheckedCreateWithoutRestaurantInput> | FeedbackCreateWithoutRestaurantInput[] | FeedbackUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutRestaurantInput | FeedbackCreateOrConnectWithoutRestaurantInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutRestaurantInput | FeedbackUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: FeedbackCreateManyRestaurantInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutRestaurantInput | FeedbackUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutRestaurantInput | FeedbackUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutRestaurantInput, PaymentHistoryUncheckedCreateWithoutRestaurantInput> | PaymentHistoryCreateWithoutRestaurantInput[] | PaymentHistoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutRestaurantInput | PaymentHistoryCreateOrConnectWithoutRestaurantInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutRestaurantInput | PaymentHistoryUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: PaymentHistoryCreateManyRestaurantInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutRestaurantInput | PaymentHistoryUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutRestaurantInput | PaymentHistoryUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type WaiterRequestUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<WaiterRequestCreateWithoutRestaurantInput, WaiterRequestUncheckedCreateWithoutRestaurantInput> | WaiterRequestCreateWithoutRestaurantInput[] | WaiterRequestUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: WaiterRequestCreateOrConnectWithoutRestaurantInput | WaiterRequestCreateOrConnectWithoutRestaurantInput[]
    upsert?: WaiterRequestUpsertWithWhereUniqueWithoutRestaurantInput | WaiterRequestUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: WaiterRequestCreateManyRestaurantInputEnvelope
    set?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
    disconnect?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
    delete?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
    connect?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
    update?: WaiterRequestUpdateWithWhereUniqueWithoutRestaurantInput | WaiterRequestUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: WaiterRequestUpdateManyWithWhereWithoutRestaurantInput | WaiterRequestUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: WaiterRequestScalarWhereInput | WaiterRequestScalarWhereInput[]
  }

  export type StaffUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<StaffCreateWithoutRestaurantInput, StaffUncheckedCreateWithoutRestaurantInput> | StaffCreateWithoutRestaurantInput[] | StaffUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutRestaurantInput | StaffCreateOrConnectWithoutRestaurantInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutRestaurantInput | StaffUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: StaffCreateManyRestaurantInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutRestaurantInput | StaffUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutRestaurantInput | StaffUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutStaffInput = {
    create?: XOR<RestaurantCreateWithoutStaffInput, RestaurantUncheckedCreateWithoutStaffInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutStaffInput
    connect?: RestaurantWhereUniqueInput
  }

  export type RestaurantUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<RestaurantCreateWithoutStaffInput, RestaurantUncheckedCreateWithoutStaffInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutStaffInput
    upsert?: RestaurantUpsertWithoutStaffInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutStaffInput, RestaurantUpdateWithoutStaffInput>, RestaurantUncheckedUpdateWithoutStaffInput>
  }

  export type RestaurantCreateNestedManyWithoutThemeInput = {
    create?: XOR<RestaurantCreateWithoutThemeInput, RestaurantUncheckedCreateWithoutThemeInput> | RestaurantCreateWithoutThemeInput[] | RestaurantUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutThemeInput | RestaurantCreateOrConnectWithoutThemeInput[]
    createMany?: RestaurantCreateManyThemeInputEnvelope
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
  }

  export type RestaurantUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<RestaurantCreateWithoutThemeInput, RestaurantUncheckedCreateWithoutThemeInput> | RestaurantCreateWithoutThemeInput[] | RestaurantUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutThemeInput | RestaurantCreateOrConnectWithoutThemeInput[]
    createMany?: RestaurantCreateManyThemeInputEnvelope
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RestaurantUpdateManyWithoutThemeNestedInput = {
    create?: XOR<RestaurantCreateWithoutThemeInput, RestaurantUncheckedCreateWithoutThemeInput> | RestaurantCreateWithoutThemeInput[] | RestaurantUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutThemeInput | RestaurantCreateOrConnectWithoutThemeInput[]
    upsert?: RestaurantUpsertWithWhereUniqueWithoutThemeInput | RestaurantUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: RestaurantCreateManyThemeInputEnvelope
    set?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    disconnect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    delete?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    update?: RestaurantUpdateWithWhereUniqueWithoutThemeInput | RestaurantUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: RestaurantUpdateManyWithWhereWithoutThemeInput | RestaurantUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
  }

  export type RestaurantUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<RestaurantCreateWithoutThemeInput, RestaurantUncheckedCreateWithoutThemeInput> | RestaurantCreateWithoutThemeInput[] | RestaurantUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutThemeInput | RestaurantCreateOrConnectWithoutThemeInput[]
    upsert?: RestaurantUpsertWithWhereUniqueWithoutThemeInput | RestaurantUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: RestaurantCreateManyThemeInputEnvelope
    set?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    disconnect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    delete?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    update?: RestaurantUpdateWithWhereUniqueWithoutThemeInput | RestaurantUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: RestaurantUpdateManyWithWhereWithoutThemeInput | RestaurantUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<RestaurantCreateWithoutCategoriesInput, RestaurantUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutCategoriesInput
    connect?: RestaurantWhereUniqueInput
  }

  export type MenuItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type MenuItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type RestaurantUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<RestaurantCreateWithoutCategoriesInput, RestaurantUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutCategoriesInput
    upsert?: RestaurantUpsertWithoutCategoriesInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutCategoriesInput, RestaurantUpdateWithoutCategoriesInput>, RestaurantUncheckedUpdateWithoutCategoriesInput>
  }

  export type MenuItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutCategoryInput | MenuItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutCategoryInput | MenuItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutCategoryInput | MenuItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type MenuItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutCategoryInput | MenuItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutCategoryInput | MenuItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutCategoryInput | MenuItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutMenuItemsInput = {
    create?: XOR<RestaurantCreateWithoutMenuItemsInput, RestaurantUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutMenuItemsInput
    connect?: RestaurantWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutMenuItemsInput = {
    create?: XOR<CategoryCreateWithoutMenuItemsInput, CategoryUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMenuItemsInput
    connect?: CategoryWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutMenuitemInput = {
    create?: XOR<OrderItemCreateWithoutMenuitemInput, OrderItemUncheckedCreateWithoutMenuitemInput> | OrderItemCreateWithoutMenuitemInput[] | OrderItemUncheckedCreateWithoutMenuitemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuitemInput | OrderItemCreateOrConnectWithoutMenuitemInput[]
    createMany?: OrderItemCreateManyMenuitemInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutMenuitemInput = {
    create?: XOR<OrderItemCreateWithoutMenuitemInput, OrderItemUncheckedCreateWithoutMenuitemInput> | OrderItemCreateWithoutMenuitemInput[] | OrderItemUncheckedCreateWithoutMenuitemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuitemInput | OrderItemCreateOrConnectWithoutMenuitemInput[]
    createMany?: OrderItemCreateManyMenuitemInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type RestaurantUpdateOneRequiredWithoutMenuItemsNestedInput = {
    create?: XOR<RestaurantCreateWithoutMenuItemsInput, RestaurantUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutMenuItemsInput
    upsert?: RestaurantUpsertWithoutMenuItemsInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutMenuItemsInput, RestaurantUpdateWithoutMenuItemsInput>, RestaurantUncheckedUpdateWithoutMenuItemsInput>
  }

  export type CategoryUpdateOneRequiredWithoutMenuItemsNestedInput = {
    create?: XOR<CategoryCreateWithoutMenuItemsInput, CategoryUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMenuItemsInput
    upsert?: CategoryUpsertWithoutMenuItemsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutMenuItemsInput, CategoryUpdateWithoutMenuItemsInput>, CategoryUncheckedUpdateWithoutMenuItemsInput>
  }

  export type OrderItemUpdateManyWithoutMenuitemNestedInput = {
    create?: XOR<OrderItemCreateWithoutMenuitemInput, OrderItemUncheckedCreateWithoutMenuitemInput> | OrderItemCreateWithoutMenuitemInput[] | OrderItemUncheckedCreateWithoutMenuitemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuitemInput | OrderItemCreateOrConnectWithoutMenuitemInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMenuitemInput | OrderItemUpsertWithWhereUniqueWithoutMenuitemInput[]
    createMany?: OrderItemCreateManyMenuitemInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMenuitemInput | OrderItemUpdateWithWhereUniqueWithoutMenuitemInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMenuitemInput | OrderItemUpdateManyWithWhereWithoutMenuitemInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutMenuitemNestedInput = {
    create?: XOR<OrderItemCreateWithoutMenuitemInput, OrderItemUncheckedCreateWithoutMenuitemInput> | OrderItemCreateWithoutMenuitemInput[] | OrderItemUncheckedCreateWithoutMenuitemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuitemInput | OrderItemCreateOrConnectWithoutMenuitemInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMenuitemInput | OrderItemUpsertWithWhereUniqueWithoutMenuitemInput[]
    createMany?: OrderItemCreateManyMenuitemInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMenuitemInput | OrderItemUpdateWithWhereUniqueWithoutMenuitemInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMenuitemInput | OrderItemUpdateManyWithWhereWithoutMenuitemInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutTablesInput = {
    create?: XOR<RestaurantCreateWithoutTablesInput, RestaurantUncheckedCreateWithoutTablesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutTablesInput
    connect?: RestaurantWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutTableInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type WaiterRequestCreateNestedManyWithoutTableInput = {
    create?: XOR<WaiterRequestCreateWithoutTableInput, WaiterRequestUncheckedCreateWithoutTableInput> | WaiterRequestCreateWithoutTableInput[] | WaiterRequestUncheckedCreateWithoutTableInput[]
    connectOrCreate?: WaiterRequestCreateOrConnectWithoutTableInput | WaiterRequestCreateOrConnectWithoutTableInput[]
    createMany?: WaiterRequestCreateManyTableInputEnvelope
    connect?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type WaiterRequestUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<WaiterRequestCreateWithoutTableInput, WaiterRequestUncheckedCreateWithoutTableInput> | WaiterRequestCreateWithoutTableInput[] | WaiterRequestUncheckedCreateWithoutTableInput[]
    connectOrCreate?: WaiterRequestCreateOrConnectWithoutTableInput | WaiterRequestCreateOrConnectWithoutTableInput[]
    createMany?: WaiterRequestCreateManyTableInputEnvelope
    connect?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
  }

  export type RestaurantUpdateOneRequiredWithoutTablesNestedInput = {
    create?: XOR<RestaurantCreateWithoutTablesInput, RestaurantUncheckedCreateWithoutTablesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutTablesInput
    upsert?: RestaurantUpsertWithoutTablesInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutTablesInput, RestaurantUpdateWithoutTablesInput>, RestaurantUncheckedUpdateWithoutTablesInput>
  }

  export type OrderUpdateManyWithoutTableNestedInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTableInput | OrderUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTableInput | OrderUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTableInput | OrderUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type WaiterRequestUpdateManyWithoutTableNestedInput = {
    create?: XOR<WaiterRequestCreateWithoutTableInput, WaiterRequestUncheckedCreateWithoutTableInput> | WaiterRequestCreateWithoutTableInput[] | WaiterRequestUncheckedCreateWithoutTableInput[]
    connectOrCreate?: WaiterRequestCreateOrConnectWithoutTableInput | WaiterRequestCreateOrConnectWithoutTableInput[]
    upsert?: WaiterRequestUpsertWithWhereUniqueWithoutTableInput | WaiterRequestUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: WaiterRequestCreateManyTableInputEnvelope
    set?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
    disconnect?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
    delete?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
    connect?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
    update?: WaiterRequestUpdateWithWhereUniqueWithoutTableInput | WaiterRequestUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: WaiterRequestUpdateManyWithWhereWithoutTableInput | WaiterRequestUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: WaiterRequestScalarWhereInput | WaiterRequestScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTableInput | OrderUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTableInput | OrderUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTableInput | OrderUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type WaiterRequestUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<WaiterRequestCreateWithoutTableInput, WaiterRequestUncheckedCreateWithoutTableInput> | WaiterRequestCreateWithoutTableInput[] | WaiterRequestUncheckedCreateWithoutTableInput[]
    connectOrCreate?: WaiterRequestCreateOrConnectWithoutTableInput | WaiterRequestCreateOrConnectWithoutTableInput[]
    upsert?: WaiterRequestUpsertWithWhereUniqueWithoutTableInput | WaiterRequestUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: WaiterRequestCreateManyTableInputEnvelope
    set?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
    disconnect?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
    delete?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
    connect?: WaiterRequestWhereUniqueInput | WaiterRequestWhereUniqueInput[]
    update?: WaiterRequestUpdateWithWhereUniqueWithoutTableInput | WaiterRequestUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: WaiterRequestUpdateManyWithWhereWithoutTableInput | WaiterRequestUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: WaiterRequestScalarWhereInput | WaiterRequestScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutOrdersInput = {
    create?: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput
    connect?: RestaurantWhereUniqueInput
  }

  export type TableCreateNestedOneWithoutOrdersInput = {
    create?: XOR<TableCreateWithoutOrdersInput, TableUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TableCreateOrConnectWithoutOrdersInput
    connect?: TableWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type RestaurantUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput
    upsert?: RestaurantUpsertWithoutOrdersInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutOrdersInput, RestaurantUpdateWithoutOrdersInput>, RestaurantUncheckedUpdateWithoutOrdersInput>
  }

  export type TableUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<TableCreateWithoutOrdersInput, TableUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TableCreateOrConnectWithoutOrdersInput
    upsert?: TableUpsertWithoutOrdersInput
    disconnect?: TableWhereInput | boolean
    delete?: TableWhereInput | boolean
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutOrdersInput, TableUpdateWithoutOrdersInput>, TableUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type MenuItemCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutOrderItemsInput
    connect?: MenuItemWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutOrderItemsInput
    upsert?: MenuItemUpsertWithoutOrderItemsInput
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutOrderItemsInput, MenuItemUpdateWithoutOrderItemsInput>, MenuItemUncheckedUpdateWithoutOrderItemsInput>
  }

  export type RestaurantCreateNestedOneWithoutOrderHistoryInput = {
    create?: XOR<RestaurantCreateWithoutOrderHistoryInput, RestaurantUncheckedCreateWithoutOrderHistoryInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrderHistoryInput
    connect?: RestaurantWhereUniqueInput
  }

  export type HistoryItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<HistoryItemCreateWithoutOrderInput, HistoryItemUncheckedCreateWithoutOrderInput> | HistoryItemCreateWithoutOrderInput[] | HistoryItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: HistoryItemCreateOrConnectWithoutOrderInput | HistoryItemCreateOrConnectWithoutOrderInput[]
    createMany?: HistoryItemCreateManyOrderInputEnvelope
    connect?: HistoryItemWhereUniqueInput | HistoryItemWhereUniqueInput[]
  }

  export type HistoryItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<HistoryItemCreateWithoutOrderInput, HistoryItemUncheckedCreateWithoutOrderInput> | HistoryItemCreateWithoutOrderInput[] | HistoryItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: HistoryItemCreateOrConnectWithoutOrderInput | HistoryItemCreateOrConnectWithoutOrderInput[]
    createMany?: HistoryItemCreateManyOrderInputEnvelope
    connect?: HistoryItemWhereUniqueInput | HistoryItemWhereUniqueInput[]
  }

  export type RestaurantUpdateOneRequiredWithoutOrderHistoryNestedInput = {
    create?: XOR<RestaurantCreateWithoutOrderHistoryInput, RestaurantUncheckedCreateWithoutOrderHistoryInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrderHistoryInput
    upsert?: RestaurantUpsertWithoutOrderHistoryInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutOrderHistoryInput, RestaurantUpdateWithoutOrderHistoryInput>, RestaurantUncheckedUpdateWithoutOrderHistoryInput>
  }

  export type HistoryItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<HistoryItemCreateWithoutOrderInput, HistoryItemUncheckedCreateWithoutOrderInput> | HistoryItemCreateWithoutOrderInput[] | HistoryItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: HistoryItemCreateOrConnectWithoutOrderInput | HistoryItemCreateOrConnectWithoutOrderInput[]
    upsert?: HistoryItemUpsertWithWhereUniqueWithoutOrderInput | HistoryItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: HistoryItemCreateManyOrderInputEnvelope
    set?: HistoryItemWhereUniqueInput | HistoryItemWhereUniqueInput[]
    disconnect?: HistoryItemWhereUniqueInput | HistoryItemWhereUniqueInput[]
    delete?: HistoryItemWhereUniqueInput | HistoryItemWhereUniqueInput[]
    connect?: HistoryItemWhereUniqueInput | HistoryItemWhereUniqueInput[]
    update?: HistoryItemUpdateWithWhereUniqueWithoutOrderInput | HistoryItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: HistoryItemUpdateManyWithWhereWithoutOrderInput | HistoryItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: HistoryItemScalarWhereInput | HistoryItemScalarWhereInput[]
  }

  export type HistoryItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<HistoryItemCreateWithoutOrderInput, HistoryItemUncheckedCreateWithoutOrderInput> | HistoryItemCreateWithoutOrderInput[] | HistoryItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: HistoryItemCreateOrConnectWithoutOrderInput | HistoryItemCreateOrConnectWithoutOrderInput[]
    upsert?: HistoryItemUpsertWithWhereUniqueWithoutOrderInput | HistoryItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: HistoryItemCreateManyOrderInputEnvelope
    set?: HistoryItemWhereUniqueInput | HistoryItemWhereUniqueInput[]
    disconnect?: HistoryItemWhereUniqueInput | HistoryItemWhereUniqueInput[]
    delete?: HistoryItemWhereUniqueInput | HistoryItemWhereUniqueInput[]
    connect?: HistoryItemWhereUniqueInput | HistoryItemWhereUniqueInput[]
    update?: HistoryItemUpdateWithWhereUniqueWithoutOrderInput | HistoryItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: HistoryItemUpdateManyWithWhereWithoutOrderInput | HistoryItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: HistoryItemScalarWhereInput | HistoryItemScalarWhereInput[]
  }

  export type OrderHistoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderHistoryCreateWithoutItemsInput, OrderHistoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutItemsInput
    connect?: OrderHistoryWhereUniqueInput
  }

  export type OrderHistoryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderHistoryCreateWithoutItemsInput, OrderHistoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutItemsInput
    upsert?: OrderHistoryUpsertWithoutItemsInput
    connect?: OrderHistoryWhereUniqueInput
    update?: XOR<XOR<OrderHistoryUpdateToOneWithWhereWithoutItemsInput, OrderHistoryUpdateWithoutItemsInput>, OrderHistoryUncheckedUpdateWithoutItemsInput>
  }

  export type RestaurantCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<RestaurantCreateWithoutFeedbackInput, RestaurantUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutFeedbackInput
    connect?: RestaurantWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RestaurantUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<RestaurantCreateWithoutFeedbackInput, RestaurantUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutFeedbackInput
    upsert?: RestaurantUpsertWithoutFeedbackInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutFeedbackInput, RestaurantUpdateWithoutFeedbackInput>, RestaurantUncheckedUpdateWithoutFeedbackInput>
  }

  export type RestaurantCreateNestedOneWithoutPaymentHistoryInput = {
    create?: XOR<RestaurantCreateWithoutPaymentHistoryInput, RestaurantUncheckedCreateWithoutPaymentHistoryInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutPaymentHistoryInput
    connect?: RestaurantWhereUniqueInput
  }

  export type RestaurantUpdateOneRequiredWithoutPaymentHistoryNestedInput = {
    create?: XOR<RestaurantCreateWithoutPaymentHistoryInput, RestaurantUncheckedCreateWithoutPaymentHistoryInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutPaymentHistoryInput
    upsert?: RestaurantUpsertWithoutPaymentHistoryInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutPaymentHistoryInput, RestaurantUpdateWithoutPaymentHistoryInput>, RestaurantUncheckedUpdateWithoutPaymentHistoryInput>
  }

  export type RestaurantCreateNestedOneWithoutWaiterRequestsInput = {
    create?: XOR<RestaurantCreateWithoutWaiterRequestsInput, RestaurantUncheckedCreateWithoutWaiterRequestsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutWaiterRequestsInput
    connect?: RestaurantWhereUniqueInput
  }

  export type TableCreateNestedOneWithoutWaiterRequestsInput = {
    create?: XOR<TableCreateWithoutWaiterRequestsInput, TableUncheckedCreateWithoutWaiterRequestsInput>
    connectOrCreate?: TableCreateOrConnectWithoutWaiterRequestsInput
    connect?: TableWhereUniqueInput
  }

  export type RestaurantUpdateOneRequiredWithoutWaiterRequestsNestedInput = {
    create?: XOR<RestaurantCreateWithoutWaiterRequestsInput, RestaurantUncheckedCreateWithoutWaiterRequestsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutWaiterRequestsInput
    upsert?: RestaurantUpsertWithoutWaiterRequestsInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutWaiterRequestsInput, RestaurantUpdateWithoutWaiterRequestsInput>, RestaurantUncheckedUpdateWithoutWaiterRequestsInput>
  }

  export type TableUpdateOneWithoutWaiterRequestsNestedInput = {
    create?: XOR<TableCreateWithoutWaiterRequestsInput, TableUncheckedCreateWithoutWaiterRequestsInput>
    connectOrCreate?: TableCreateOrConnectWithoutWaiterRequestsInput
    upsert?: TableUpsertWithoutWaiterRequestsInput
    disconnect?: TableWhereInput | boolean
    delete?: TableWhereInput | boolean
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutWaiterRequestsInput, TableUpdateWithoutWaiterRequestsInput>, TableUncheckedUpdateWithoutWaiterRequestsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ThemeCreateWithoutRestaurantsInput = {
    title: string
    image?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    bgColor?: string
    cardColor?: string
    textColor?: string
    navBg?: string
    buttonTextColor?: string
    fontFamily?: string
    borderRadius?: string
    darkMode?: boolean
  }

  export type ThemeUncheckedCreateWithoutRestaurantsInput = {
    id?: number
    title: string
    image?: string | null
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    bgColor?: string
    cardColor?: string
    textColor?: string
    navBg?: string
    buttonTextColor?: string
    fontFamily?: string
    borderRadius?: string
    darkMode?: boolean
  }

  export type ThemeCreateOrConnectWithoutRestaurantsInput = {
    where: ThemeWhereUniqueInput
    create: XOR<ThemeCreateWithoutRestaurantsInput, ThemeUncheckedCreateWithoutRestaurantsInput>
  }

  export type CategoryCreateWithoutRestaurantInput = {
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    categorydesc?: string | null
    sortorder?: number
    menuItems?: MenuItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutRestaurantInput = {
    id?: number
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    categorydesc?: string | null
    sortorder?: number
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutRestaurantInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput>
  }

  export type CategoryCreateManyRestaurantInputEnvelope = {
    data: CategoryCreateManyRestaurantInput | CategoryCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type MenuItemCreateWithoutRestaurantInput = {
    image?: string | null
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    veg?: boolean
    available?: boolean
    price: number
    category: CategoryCreateNestedOneWithoutMenuItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuitemInput
  }

  export type MenuItemUncheckedCreateWithoutRestaurantInput = {
    id?: number
    categoryid: number
    image?: string | null
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    veg?: boolean
    available?: boolean
    price: number
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuitemInput
  }

  export type MenuItemCreateOrConnectWithoutRestaurantInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutRestaurantInput, MenuItemUncheckedCreateWithoutRestaurantInput>
  }

  export type MenuItemCreateManyRestaurantInputEnvelope = {
    data: MenuItemCreateManyRestaurantInput | MenuItemCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type TableCreateWithoutRestaurantInput = {
    name: string
    qrimage?: string | null
    orders?: OrderCreateNestedManyWithoutTableInput
    waiterRequests?: WaiterRequestCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutRestaurantInput = {
    id?: number
    name: string
    qrimage?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutTableInput
    waiterRequests?: WaiterRequestUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutRestaurantInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput>
  }

  export type TableCreateManyRestaurantInputEnvelope = {
    data: TableCreateManyRestaurantInput | TableCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutRestaurantInput = {
    ordercode: string
    customername?: string | null
    customermob?: string | null
    status?: $Enums.OrderStatus
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    table?: TableCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutRestaurantInput = {
    id?: number
    tableid?: number | null
    ordercode: string
    customername?: string | null
    customermob?: string | null
    status?: $Enums.OrderStatus
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput>
  }

  export type OrderCreateManyRestaurantInputEnvelope = {
    data: OrderCreateManyRestaurantInput | OrderCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type OrderHistoryCreateWithoutRestaurantInput = {
    ordercode: string
    tablename?: string | null
    customername?: string | null
    customermob?: string | null
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    timestamp?: Date | string
    items?: HistoryItemCreateNestedManyWithoutOrderInput
  }

  export type OrderHistoryUncheckedCreateWithoutRestaurantInput = {
    id?: number
    ordercode: string
    tablename?: string | null
    customername?: string | null
    customermob?: string | null
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    timestamp?: Date | string
    items?: HistoryItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderHistoryCreateOrConnectWithoutRestaurantInput = {
    where: OrderHistoryWhereUniqueInput
    create: XOR<OrderHistoryCreateWithoutRestaurantInput, OrderHistoryUncheckedCreateWithoutRestaurantInput>
  }

  export type OrderHistoryCreateManyRestaurantInputEnvelope = {
    data: OrderHistoryCreateManyRestaurantInput | OrderHistoryCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutRestaurantInput = {
    fullname: string
    mobile?: string | null
    email?: string | null
    feedback?: string | null
    dob?: Date | string | null
    timestamp?: Date | string
  }

  export type FeedbackUncheckedCreateWithoutRestaurantInput = {
    id?: number
    fullname: string
    mobile?: string | null
    email?: string | null
    feedback?: string | null
    dob?: Date | string | null
    timestamp?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutRestaurantInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutRestaurantInput, FeedbackUncheckedCreateWithoutRestaurantInput>
  }

  export type FeedbackCreateManyRestaurantInputEnvelope = {
    data: FeedbackCreateManyRestaurantInput | FeedbackCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type PaymentHistoryCreateWithoutRestaurantInput = {
    paymentdate: Date | string
    subplan: number
    price: number
    subtype: number
    expdate: Date | string
  }

  export type PaymentHistoryUncheckedCreateWithoutRestaurantInput = {
    id?: number
    paymentdate: Date | string
    subplan: number
    price: number
    subtype: number
    expdate: Date | string
  }

  export type PaymentHistoryCreateOrConnectWithoutRestaurantInput = {
    where: PaymentHistoryWhereUniqueInput
    create: XOR<PaymentHistoryCreateWithoutRestaurantInput, PaymentHistoryUncheckedCreateWithoutRestaurantInput>
  }

  export type PaymentHistoryCreateManyRestaurantInputEnvelope = {
    data: PaymentHistoryCreateManyRestaurantInput | PaymentHistoryCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type WaiterRequestCreateWithoutRestaurantInput = {
    status?: number
    createdAt?: Date | string
    table?: TableCreateNestedOneWithoutWaiterRequestsInput
  }

  export type WaiterRequestUncheckedCreateWithoutRestaurantInput = {
    id?: number
    tableid?: number | null
    status?: number
    createdAt?: Date | string
  }

  export type WaiterRequestCreateOrConnectWithoutRestaurantInput = {
    where: WaiterRequestWhereUniqueInput
    create: XOR<WaiterRequestCreateWithoutRestaurantInput, WaiterRequestUncheckedCreateWithoutRestaurantInput>
  }

  export type WaiterRequestCreateManyRestaurantInputEnvelope = {
    data: WaiterRequestCreateManyRestaurantInput | WaiterRequestCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type StaffCreateWithoutRestaurantInput = {
    fullname: string
    username: string
    password: string
    role?: string
    status?: number
    createdAt?: Date | string
  }

  export type StaffUncheckedCreateWithoutRestaurantInput = {
    id?: number
    fullname: string
    username: string
    password: string
    role?: string
    status?: number
    createdAt?: Date | string
  }

  export type StaffCreateOrConnectWithoutRestaurantInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutRestaurantInput, StaffUncheckedCreateWithoutRestaurantInput>
  }

  export type StaffCreateManyRestaurantInputEnvelope = {
    data: StaffCreateManyRestaurantInput | StaffCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type ThemeUpsertWithoutRestaurantsInput = {
    update: XOR<ThemeUpdateWithoutRestaurantsInput, ThemeUncheckedUpdateWithoutRestaurantsInput>
    create: XOR<ThemeCreateWithoutRestaurantsInput, ThemeUncheckedCreateWithoutRestaurantsInput>
    where?: ThemeWhereInput
  }

  export type ThemeUpdateToOneWithWhereWithoutRestaurantsInput = {
    where?: ThemeWhereInput
    data: XOR<ThemeUpdateWithoutRestaurantsInput, ThemeUncheckedUpdateWithoutRestaurantsInput>
  }

  export type ThemeUpdateWithoutRestaurantsInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    cardColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    navBg?: StringFieldUpdateOperationsInput | string
    buttonTextColor?: StringFieldUpdateOperationsInput | string
    fontFamily?: StringFieldUpdateOperationsInput | string
    borderRadius?: StringFieldUpdateOperationsInput | string
    darkMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ThemeUncheckedUpdateWithoutRestaurantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    cardColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    navBg?: StringFieldUpdateOperationsInput | string
    buttonTextColor?: StringFieldUpdateOperationsInput | string
    fontFamily?: StringFieldUpdateOperationsInput | string
    borderRadius?: StringFieldUpdateOperationsInput | string
    darkMode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutRestaurantInput, CategoryUncheckedUpdateWithoutRestaurantInput>
    create: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutRestaurantInput, CategoryUncheckedUpdateWithoutRestaurantInput>
  }

  export type CategoryUpdateManyWithWhereWithoutRestaurantInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    restroid?: IntFilter<"Category"> | number
    name_eng?: StringFilter<"Category"> | string
    name_guj?: StringNullableFilter<"Category"> | string | null
    name_hindi?: StringNullableFilter<"Category"> | string | null
    categorydesc?: StringNullableFilter<"Category"> | string | null
    sortorder?: IntFilter<"Category"> | number
  }

  export type MenuItemUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: MenuItemWhereUniqueInput
    update: XOR<MenuItemUpdateWithoutRestaurantInput, MenuItemUncheckedUpdateWithoutRestaurantInput>
    create: XOR<MenuItemCreateWithoutRestaurantInput, MenuItemUncheckedCreateWithoutRestaurantInput>
  }

  export type MenuItemUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: MenuItemWhereUniqueInput
    data: XOR<MenuItemUpdateWithoutRestaurantInput, MenuItemUncheckedUpdateWithoutRestaurantInput>
  }

  export type MenuItemUpdateManyWithWhereWithoutRestaurantInput = {
    where: MenuItemScalarWhereInput
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type MenuItemScalarWhereInput = {
    AND?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    OR?: MenuItemScalarWhereInput[]
    NOT?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    id?: IntFilter<"MenuItem"> | number
    restroid?: IntFilter<"MenuItem"> | number
    categoryid?: IntFilter<"MenuItem"> | number
    image?: StringNullableFilter<"MenuItem"> | string | null
    name_eng?: StringFilter<"MenuItem"> | string
    name_guj?: StringNullableFilter<"MenuItem"> | string | null
    name_hindi?: StringNullableFilter<"MenuItem"> | string | null
    veg?: BoolFilter<"MenuItem"> | boolean
    available?: BoolFilter<"MenuItem"> | boolean
    price?: FloatFilter<"MenuItem"> | number
  }

  export type TableUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: TableWhereUniqueInput
    update: XOR<TableUpdateWithoutRestaurantInput, TableUncheckedUpdateWithoutRestaurantInput>
    create: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput>
  }

  export type TableUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: TableWhereUniqueInput
    data: XOR<TableUpdateWithoutRestaurantInput, TableUncheckedUpdateWithoutRestaurantInput>
  }

  export type TableUpdateManyWithWhereWithoutRestaurantInput = {
    where: TableScalarWhereInput
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type TableScalarWhereInput = {
    AND?: TableScalarWhereInput | TableScalarWhereInput[]
    OR?: TableScalarWhereInput[]
    NOT?: TableScalarWhereInput | TableScalarWhereInput[]
    id?: IntFilter<"Table"> | number
    restroid?: IntFilter<"Table"> | number
    name?: StringFilter<"Table"> | string
    qrimage?: StringNullableFilter<"Table"> | string | null
  }

  export type OrderUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutRestaurantInput, OrderUncheckedUpdateWithoutRestaurantInput>
    create: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutRestaurantInput, OrderUncheckedUpdateWithoutRestaurantInput>
  }

  export type OrderUpdateManyWithWhereWithoutRestaurantInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    restroid?: IntFilter<"Order"> | number
    tableid?: IntNullableFilter<"Order"> | number | null
    ordercode?: StringFilter<"Order"> | string
    customername?: StringNullableFilter<"Order"> | string | null
    customermob?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    subtotal?: FloatFilter<"Order"> | number
    discount?: FloatFilter<"Order"> | number
    servicecharge?: FloatFilter<"Order"> | number
    grandtotal?: FloatFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type OrderHistoryUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: OrderHistoryWhereUniqueInput
    update: XOR<OrderHistoryUpdateWithoutRestaurantInput, OrderHistoryUncheckedUpdateWithoutRestaurantInput>
    create: XOR<OrderHistoryCreateWithoutRestaurantInput, OrderHistoryUncheckedCreateWithoutRestaurantInput>
  }

  export type OrderHistoryUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: OrderHistoryWhereUniqueInput
    data: XOR<OrderHistoryUpdateWithoutRestaurantInput, OrderHistoryUncheckedUpdateWithoutRestaurantInput>
  }

  export type OrderHistoryUpdateManyWithWhereWithoutRestaurantInput = {
    where: OrderHistoryScalarWhereInput
    data: XOR<OrderHistoryUpdateManyMutationInput, OrderHistoryUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type OrderHistoryScalarWhereInput = {
    AND?: OrderHistoryScalarWhereInput | OrderHistoryScalarWhereInput[]
    OR?: OrderHistoryScalarWhereInput[]
    NOT?: OrderHistoryScalarWhereInput | OrderHistoryScalarWhereInput[]
    id?: IntFilter<"OrderHistory"> | number
    restroid?: IntFilter<"OrderHistory"> | number
    ordercode?: StringFilter<"OrderHistory"> | string
    tablename?: StringNullableFilter<"OrderHistory"> | string | null
    customername?: StringNullableFilter<"OrderHistory"> | string | null
    customermob?: StringNullableFilter<"OrderHistory"> | string | null
    subtotal?: FloatFilter<"OrderHistory"> | number
    discount?: FloatFilter<"OrderHistory"> | number
    servicecharge?: FloatFilter<"OrderHistory"> | number
    grandtotal?: FloatFilter<"OrderHistory"> | number
    timestamp?: DateTimeFilter<"OrderHistory"> | Date | string
  }

  export type FeedbackUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutRestaurantInput, FeedbackUncheckedUpdateWithoutRestaurantInput>
    create: XOR<FeedbackCreateWithoutRestaurantInput, FeedbackUncheckedCreateWithoutRestaurantInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutRestaurantInput, FeedbackUncheckedUpdateWithoutRestaurantInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutRestaurantInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: IntFilter<"Feedback"> | number
    restroid?: IntFilter<"Feedback"> | number
    fullname?: StringFilter<"Feedback"> | string
    mobile?: StringNullableFilter<"Feedback"> | string | null
    email?: StringNullableFilter<"Feedback"> | string | null
    feedback?: StringNullableFilter<"Feedback"> | string | null
    dob?: DateTimeNullableFilter<"Feedback"> | Date | string | null
    timestamp?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type PaymentHistoryUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: PaymentHistoryWhereUniqueInput
    update: XOR<PaymentHistoryUpdateWithoutRestaurantInput, PaymentHistoryUncheckedUpdateWithoutRestaurantInput>
    create: XOR<PaymentHistoryCreateWithoutRestaurantInput, PaymentHistoryUncheckedCreateWithoutRestaurantInput>
  }

  export type PaymentHistoryUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: PaymentHistoryWhereUniqueInput
    data: XOR<PaymentHistoryUpdateWithoutRestaurantInput, PaymentHistoryUncheckedUpdateWithoutRestaurantInput>
  }

  export type PaymentHistoryUpdateManyWithWhereWithoutRestaurantInput = {
    where: PaymentHistoryScalarWhereInput
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type PaymentHistoryScalarWhereInput = {
    AND?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
    OR?: PaymentHistoryScalarWhereInput[]
    NOT?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
    id?: IntFilter<"PaymentHistory"> | number
    restroid?: IntFilter<"PaymentHistory"> | number
    paymentdate?: DateTimeFilter<"PaymentHistory"> | Date | string
    subplan?: IntFilter<"PaymentHistory"> | number
    price?: IntFilter<"PaymentHistory"> | number
    subtype?: IntFilter<"PaymentHistory"> | number
    expdate?: DateTimeFilter<"PaymentHistory"> | Date | string
  }

  export type WaiterRequestUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: WaiterRequestWhereUniqueInput
    update: XOR<WaiterRequestUpdateWithoutRestaurantInput, WaiterRequestUncheckedUpdateWithoutRestaurantInput>
    create: XOR<WaiterRequestCreateWithoutRestaurantInput, WaiterRequestUncheckedCreateWithoutRestaurantInput>
  }

  export type WaiterRequestUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: WaiterRequestWhereUniqueInput
    data: XOR<WaiterRequestUpdateWithoutRestaurantInput, WaiterRequestUncheckedUpdateWithoutRestaurantInput>
  }

  export type WaiterRequestUpdateManyWithWhereWithoutRestaurantInput = {
    where: WaiterRequestScalarWhereInput
    data: XOR<WaiterRequestUpdateManyMutationInput, WaiterRequestUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type WaiterRequestScalarWhereInput = {
    AND?: WaiterRequestScalarWhereInput | WaiterRequestScalarWhereInput[]
    OR?: WaiterRequestScalarWhereInput[]
    NOT?: WaiterRequestScalarWhereInput | WaiterRequestScalarWhereInput[]
    id?: IntFilter<"WaiterRequest"> | number
    restroid?: IntFilter<"WaiterRequest"> | number
    tableid?: IntNullableFilter<"WaiterRequest"> | number | null
    status?: IntFilter<"WaiterRequest"> | number
    createdAt?: DateTimeFilter<"WaiterRequest"> | Date | string
  }

  export type StaffUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutRestaurantInput, StaffUncheckedUpdateWithoutRestaurantInput>
    create: XOR<StaffCreateWithoutRestaurantInput, StaffUncheckedCreateWithoutRestaurantInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutRestaurantInput, StaffUncheckedUpdateWithoutRestaurantInput>
  }

  export type StaffUpdateManyWithWhereWithoutRestaurantInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type StaffScalarWhereInput = {
    AND?: StaffScalarWhereInput | StaffScalarWhereInput[]
    OR?: StaffScalarWhereInput[]
    NOT?: StaffScalarWhereInput | StaffScalarWhereInput[]
    id?: IntFilter<"Staff"> | number
    restroid?: IntFilter<"Staff"> | number
    fullname?: StringFilter<"Staff"> | string
    username?: StringFilter<"Staff"> | string
    password?: StringFilter<"Staff"> | string
    role?: StringFilter<"Staff"> | string
    status?: IntFilter<"Staff"> | number
    createdAt?: DateTimeFilter<"Staff"> | Date | string
  }

  export type RestaurantCreateWithoutStaffInput = {
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    theme?: ThemeCreateNestedOneWithoutRestaurantsInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutStaffInput = {
    id?: number
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    themecode?: number | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutStaffInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutStaffInput, RestaurantUncheckedCreateWithoutStaffInput>
  }

  export type RestaurantUpsertWithoutStaffInput = {
    update: XOR<RestaurantUpdateWithoutStaffInput, RestaurantUncheckedUpdateWithoutStaffInput>
    create: XOR<RestaurantCreateWithoutStaffInput, RestaurantUncheckedCreateWithoutStaffInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutStaffInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutStaffInput, RestaurantUncheckedUpdateWithoutStaffInput>
  }

  export type RestaurantUpdateWithoutStaffInput = {
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    theme?: ThemeUpdateOneWithoutRestaurantsNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    themecode?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateWithoutThemeInput = {
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestCreateNestedManyWithoutRestaurantInput
    staff?: StaffCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutThemeInput = {
    id?: number
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestUncheckedCreateNestedManyWithoutRestaurantInput
    staff?: StaffUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutThemeInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutThemeInput, RestaurantUncheckedCreateWithoutThemeInput>
  }

  export type RestaurantCreateManyThemeInputEnvelope = {
    data: RestaurantCreateManyThemeInput | RestaurantCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithWhereUniqueWithoutThemeInput = {
    where: RestaurantWhereUniqueInput
    update: XOR<RestaurantUpdateWithoutThemeInput, RestaurantUncheckedUpdateWithoutThemeInput>
    create: XOR<RestaurantCreateWithoutThemeInput, RestaurantUncheckedCreateWithoutThemeInput>
  }

  export type RestaurantUpdateWithWhereUniqueWithoutThemeInput = {
    where: RestaurantWhereUniqueInput
    data: XOR<RestaurantUpdateWithoutThemeInput, RestaurantUncheckedUpdateWithoutThemeInput>
  }

  export type RestaurantUpdateManyWithWhereWithoutThemeInput = {
    where: RestaurantScalarWhereInput
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyWithoutThemeInput>
  }

  export type RestaurantScalarWhereInput = {
    AND?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
    OR?: RestaurantScalarWhereInput[]
    NOT?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
    id?: IntFilter<"Restaurant"> | number
    restroname?: StringFilter<"Restaurant"> | string
    mobileno?: StringFilter<"Restaurant"> | string
    email?: StringFilter<"Restaurant"> | string
    address?: StringFilter<"Restaurant"> | string
    password?: StringFilter<"Restaurant"> | string
    gstno?: StringNullableFilter<"Restaurant"> | string | null
    logo?: StringNullableFilter<"Restaurant"> | string | null
    themecode?: IntNullableFilter<"Restaurant"> | number | null
    status?: IntFilter<"Restaurant"> | number
    latitude?: StringNullableFilter<"Restaurant"> | string | null
    longitude?: StringNullableFilter<"Restaurant"> | string | null
    distance?: StringNullableFilter<"Restaurant"> | string | null
    joindate?: DateTimeFilter<"Restaurant"> | Date | string
    paymentdate?: DateTimeFilter<"Restaurant"> | Date | string
    subtype?: IntFilter<"Restaurant"> | number
    subplan?: IntFilter<"Restaurant"> | number
    expdate?: DateTimeFilter<"Restaurant"> | Date | string
    price?: IntFilter<"Restaurant"> | number
    pdf?: StringNullableFilter<"Restaurant"> | string | null
    slug?: StringFilter<"Restaurant"> | string
    restrootp?: StringFilter<"Restaurant"> | string
    discount?: FloatFilter<"Restaurant"> | number
    servicecharge?: FloatFilter<"Restaurant"> | number
    maxStaff?: IntFilter<"Restaurant"> | number
  }

  export type RestaurantCreateWithoutCategoriesInput = {
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    theme?: ThemeCreateNestedOneWithoutRestaurantsInput
    menuItems?: MenuItemCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestCreateNestedManyWithoutRestaurantInput
    staff?: StaffCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutCategoriesInput = {
    id?: number
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    themecode?: number | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestUncheckedCreateNestedManyWithoutRestaurantInput
    staff?: StaffUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutCategoriesInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutCategoriesInput, RestaurantUncheckedCreateWithoutCategoriesInput>
  }

  export type MenuItemCreateWithoutCategoryInput = {
    image?: string | null
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    veg?: boolean
    available?: boolean
    price: number
    restaurant: RestaurantCreateNestedOneWithoutMenuItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuitemInput
  }

  export type MenuItemUncheckedCreateWithoutCategoryInput = {
    id?: number
    restroid: number
    image?: string | null
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    veg?: boolean
    available?: boolean
    price: number
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuitemInput
  }

  export type MenuItemCreateOrConnectWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemCreateManyCategoryInputEnvelope = {
    data: MenuItemCreateManyCategoryInput | MenuItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithoutCategoriesInput = {
    update: XOR<RestaurantUpdateWithoutCategoriesInput, RestaurantUncheckedUpdateWithoutCategoriesInput>
    create: XOR<RestaurantCreateWithoutCategoriesInput, RestaurantUncheckedCreateWithoutCategoriesInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutCategoriesInput, RestaurantUncheckedUpdateWithoutCategoriesInput>
  }

  export type RestaurantUpdateWithoutCategoriesInput = {
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    theme?: ThemeUpdateOneWithoutRestaurantsNestedInput
    menuItems?: MenuItemUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    themecode?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    menuItems?: MenuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUncheckedUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type MenuItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    update: XOR<MenuItemUpdateWithoutCategoryInput, MenuItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    data: XOR<MenuItemUpdateWithoutCategoryInput, MenuItemUncheckedUpdateWithoutCategoryInput>
  }

  export type MenuItemUpdateManyWithWhereWithoutCategoryInput = {
    where: MenuItemScalarWhereInput
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type RestaurantCreateWithoutMenuItemsInput = {
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    theme?: ThemeCreateNestedOneWithoutRestaurantsInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestCreateNestedManyWithoutRestaurantInput
    staff?: StaffCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutMenuItemsInput = {
    id?: number
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    themecode?: number | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestUncheckedCreateNestedManyWithoutRestaurantInput
    staff?: StaffUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutMenuItemsInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutMenuItemsInput, RestaurantUncheckedCreateWithoutMenuItemsInput>
  }

  export type CategoryCreateWithoutMenuItemsInput = {
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    categorydesc?: string | null
    sortorder?: number
    restaurant: RestaurantCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutMenuItemsInput = {
    id?: number
    restroid: number
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    categorydesc?: string | null
    sortorder?: number
  }

  export type CategoryCreateOrConnectWithoutMenuItemsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMenuItemsInput, CategoryUncheckedCreateWithoutMenuItemsInput>
  }

  export type OrderItemCreateWithoutMenuitemInput = {
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    price: number
    quantity: number
    totalprice: number
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateWithoutMenuitemInput = {
    id?: number
    orderid: number
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    price: number
    quantity: number
    totalprice: number
  }

  export type OrderItemCreateOrConnectWithoutMenuitemInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutMenuitemInput, OrderItemUncheckedCreateWithoutMenuitemInput>
  }

  export type OrderItemCreateManyMenuitemInputEnvelope = {
    data: OrderItemCreateManyMenuitemInput | OrderItemCreateManyMenuitemInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithoutMenuItemsInput = {
    update: XOR<RestaurantUpdateWithoutMenuItemsInput, RestaurantUncheckedUpdateWithoutMenuItemsInput>
    create: XOR<RestaurantCreateWithoutMenuItemsInput, RestaurantUncheckedCreateWithoutMenuItemsInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutMenuItemsInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutMenuItemsInput, RestaurantUncheckedUpdateWithoutMenuItemsInput>
  }

  export type RestaurantUpdateWithoutMenuItemsInput = {
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    theme?: ThemeUpdateOneWithoutRestaurantsNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutMenuItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    themecode?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUncheckedUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type CategoryUpsertWithoutMenuItemsInput = {
    update: XOR<CategoryUpdateWithoutMenuItemsInput, CategoryUncheckedUpdateWithoutMenuItemsInput>
    create: XOR<CategoryCreateWithoutMenuItemsInput, CategoryUncheckedCreateWithoutMenuItemsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutMenuItemsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutMenuItemsInput, CategoryUncheckedUpdateWithoutMenuItemsInput>
  }

  export type CategoryUpdateWithoutMenuItemsInput = {
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    categorydesc?: NullableStringFieldUpdateOperationsInput | string | null
    sortorder?: IntFieldUpdateOperationsInput | number
    restaurant?: RestaurantUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutMenuItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    categorydesc?: NullableStringFieldUpdateOperationsInput | string | null
    sortorder?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUpsertWithWhereUniqueWithoutMenuitemInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutMenuitemInput, OrderItemUncheckedUpdateWithoutMenuitemInput>
    create: XOR<OrderItemCreateWithoutMenuitemInput, OrderItemUncheckedCreateWithoutMenuitemInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutMenuitemInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutMenuitemInput, OrderItemUncheckedUpdateWithoutMenuitemInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutMenuitemInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutMenuitemInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    orderid?: IntFilter<"OrderItem"> | number
    menuitemid?: IntFilter<"OrderItem"> | number
    name_eng?: StringFilter<"OrderItem"> | string
    name_guj?: StringNullableFilter<"OrderItem"> | string | null
    name_hindi?: StringNullableFilter<"OrderItem"> | string | null
    price?: FloatFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    totalprice?: FloatFilter<"OrderItem"> | number
  }

  export type RestaurantCreateWithoutTablesInput = {
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    theme?: ThemeCreateNestedOneWithoutRestaurantsInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestCreateNestedManyWithoutRestaurantInput
    staff?: StaffCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutTablesInput = {
    id?: number
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    themecode?: number | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestUncheckedCreateNestedManyWithoutRestaurantInput
    staff?: StaffUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutTablesInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutTablesInput, RestaurantUncheckedCreateWithoutTablesInput>
  }

  export type OrderCreateWithoutTableInput = {
    ordercode: string
    customername?: string | null
    customermob?: string | null
    status?: $Enums.OrderStatus
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutTableInput = {
    id?: number
    restroid: number
    ordercode: string
    customername?: string | null
    customermob?: string | null
    status?: $Enums.OrderStatus
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutTableInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput>
  }

  export type OrderCreateManyTableInputEnvelope = {
    data: OrderCreateManyTableInput | OrderCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type WaiterRequestCreateWithoutTableInput = {
    status?: number
    createdAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutWaiterRequestsInput
  }

  export type WaiterRequestUncheckedCreateWithoutTableInput = {
    id?: number
    restroid: number
    status?: number
    createdAt?: Date | string
  }

  export type WaiterRequestCreateOrConnectWithoutTableInput = {
    where: WaiterRequestWhereUniqueInput
    create: XOR<WaiterRequestCreateWithoutTableInput, WaiterRequestUncheckedCreateWithoutTableInput>
  }

  export type WaiterRequestCreateManyTableInputEnvelope = {
    data: WaiterRequestCreateManyTableInput | WaiterRequestCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithoutTablesInput = {
    update: XOR<RestaurantUpdateWithoutTablesInput, RestaurantUncheckedUpdateWithoutTablesInput>
    create: XOR<RestaurantCreateWithoutTablesInput, RestaurantUncheckedCreateWithoutTablesInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutTablesInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutTablesInput, RestaurantUncheckedUpdateWithoutTablesInput>
  }

  export type RestaurantUpdateWithoutTablesInput = {
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    theme?: ThemeUpdateOneWithoutRestaurantsNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutTablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    themecode?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUncheckedUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutTableInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutTableInput, OrderUncheckedUpdateWithoutTableInput>
    create: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutTableInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutTableInput, OrderUncheckedUpdateWithoutTableInput>
  }

  export type OrderUpdateManyWithWhereWithoutTableInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutTableInput>
  }

  export type WaiterRequestUpsertWithWhereUniqueWithoutTableInput = {
    where: WaiterRequestWhereUniqueInput
    update: XOR<WaiterRequestUpdateWithoutTableInput, WaiterRequestUncheckedUpdateWithoutTableInput>
    create: XOR<WaiterRequestCreateWithoutTableInput, WaiterRequestUncheckedCreateWithoutTableInput>
  }

  export type WaiterRequestUpdateWithWhereUniqueWithoutTableInput = {
    where: WaiterRequestWhereUniqueInput
    data: XOR<WaiterRequestUpdateWithoutTableInput, WaiterRequestUncheckedUpdateWithoutTableInput>
  }

  export type WaiterRequestUpdateManyWithWhereWithoutTableInput = {
    where: WaiterRequestScalarWhereInput
    data: XOR<WaiterRequestUpdateManyMutationInput, WaiterRequestUncheckedUpdateManyWithoutTableInput>
  }

  export type RestaurantCreateWithoutOrdersInput = {
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    theme?: ThemeCreateNestedOneWithoutRestaurantsInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestCreateNestedManyWithoutRestaurantInput
    staff?: StaffCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutOrdersInput = {
    id?: number
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    themecode?: number | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestUncheckedCreateNestedManyWithoutRestaurantInput
    staff?: StaffUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutOrdersInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
  }

  export type TableCreateWithoutOrdersInput = {
    name: string
    qrimage?: string | null
    restaurant: RestaurantCreateNestedOneWithoutTablesInput
    waiterRequests?: WaiterRequestCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutOrdersInput = {
    id?: number
    restroid: number
    name: string
    qrimage?: string | null
    waiterRequests?: WaiterRequestUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutOrdersInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutOrdersInput, TableUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    price: number
    quantity: number
    totalprice: number
    menuitem: MenuItemCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: number
    menuitemid: number
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    price: number
    quantity: number
    totalprice: number
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithoutOrdersInput = {
    update: XOR<RestaurantUpdateWithoutOrdersInput, RestaurantUncheckedUpdateWithoutOrdersInput>
    create: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutOrdersInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutOrdersInput, RestaurantUncheckedUpdateWithoutOrdersInput>
  }

  export type RestaurantUpdateWithoutOrdersInput = {
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    theme?: ThemeUpdateOneWithoutRestaurantsNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    themecode?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUncheckedUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type TableUpsertWithoutOrdersInput = {
    update: XOR<TableUpdateWithoutOrdersInput, TableUncheckedUpdateWithoutOrdersInput>
    create: XOR<TableCreateWithoutOrdersInput, TableUncheckedCreateWithoutOrdersInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutOrdersInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutOrdersInput, TableUncheckedUpdateWithoutOrdersInput>
  }

  export type TableUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    qrimage?: NullableStringFieldUpdateOperationsInput | string | null
    restaurant?: RestaurantUpdateOneRequiredWithoutTablesNestedInput
    waiterRequests?: WaiterRequestUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    qrimage?: NullableStringFieldUpdateOperationsInput | string | null
    waiterRequests?: WaiterRequestUncheckedUpdateManyWithoutTableNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutItemsInput = {
    ordercode: string
    customername?: string | null
    customermob?: string | null
    status?: $Enums.OrderStatus
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    table?: TableCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: number
    restroid: number
    tableid?: number | null
    ordercode: string
    customername?: string | null
    customermob?: string | null
    status?: $Enums.OrderStatus
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type MenuItemCreateWithoutOrderItemsInput = {
    image?: string | null
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    veg?: boolean
    available?: boolean
    price: number
    restaurant: RestaurantCreateNestedOneWithoutMenuItemsInput
    category: CategoryCreateNestedOneWithoutMenuItemsInput
  }

  export type MenuItemUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    restroid: number
    categoryid: number
    image?: string | null
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    veg?: boolean
    available?: boolean
    price: number
  }

  export type MenuItemCreateOrConnectWithoutOrderItemsInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    ordercode?: StringFieldUpdateOperationsInput | string
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    table?: TableUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    tableid?: NullableIntFieldUpdateOperationsInput | number | null
    ordercode?: StringFieldUpdateOperationsInput | string
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUpsertWithoutOrderItemsInput = {
    update: XOR<MenuItemUpdateWithoutOrderItemsInput, MenuItemUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutOrderItemsInput, MenuItemUncheckedUpdateWithoutOrderItemsInput>
  }

  export type MenuItemUpdateWithoutOrderItemsInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    veg?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    restaurant?: RestaurantUpdateOneRequiredWithoutMenuItemsNestedInput
    category?: CategoryUpdateOneRequiredWithoutMenuItemsNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    categoryid?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    veg?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type RestaurantCreateWithoutOrderHistoryInput = {
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    theme?: ThemeCreateNestedOneWithoutRestaurantsInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestCreateNestedManyWithoutRestaurantInput
    staff?: StaffCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutOrderHistoryInput = {
    id?: number
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    themecode?: number | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestUncheckedCreateNestedManyWithoutRestaurantInput
    staff?: StaffUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutOrderHistoryInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutOrderHistoryInput, RestaurantUncheckedCreateWithoutOrderHistoryInput>
  }

  export type HistoryItemCreateWithoutOrderInput = {
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    price: number
    quantity: number
    totalprice: number
  }

  export type HistoryItemUncheckedCreateWithoutOrderInput = {
    id?: number
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    price: number
    quantity: number
    totalprice: number
  }

  export type HistoryItemCreateOrConnectWithoutOrderInput = {
    where: HistoryItemWhereUniqueInput
    create: XOR<HistoryItemCreateWithoutOrderInput, HistoryItemUncheckedCreateWithoutOrderInput>
  }

  export type HistoryItemCreateManyOrderInputEnvelope = {
    data: HistoryItemCreateManyOrderInput | HistoryItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithoutOrderHistoryInput = {
    update: XOR<RestaurantUpdateWithoutOrderHistoryInput, RestaurantUncheckedUpdateWithoutOrderHistoryInput>
    create: XOR<RestaurantCreateWithoutOrderHistoryInput, RestaurantUncheckedCreateWithoutOrderHistoryInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutOrderHistoryInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutOrderHistoryInput, RestaurantUncheckedUpdateWithoutOrderHistoryInput>
  }

  export type RestaurantUpdateWithoutOrderHistoryInput = {
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    theme?: ThemeUpdateOneWithoutRestaurantsNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutOrderHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    themecode?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUncheckedUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type HistoryItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: HistoryItemWhereUniqueInput
    update: XOR<HistoryItemUpdateWithoutOrderInput, HistoryItemUncheckedUpdateWithoutOrderInput>
    create: XOR<HistoryItemCreateWithoutOrderInput, HistoryItemUncheckedCreateWithoutOrderInput>
  }

  export type HistoryItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: HistoryItemWhereUniqueInput
    data: XOR<HistoryItemUpdateWithoutOrderInput, HistoryItemUncheckedUpdateWithoutOrderInput>
  }

  export type HistoryItemUpdateManyWithWhereWithoutOrderInput = {
    where: HistoryItemScalarWhereInput
    data: XOR<HistoryItemUpdateManyMutationInput, HistoryItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type HistoryItemScalarWhereInput = {
    AND?: HistoryItemScalarWhereInput | HistoryItemScalarWhereInput[]
    OR?: HistoryItemScalarWhereInput[]
    NOT?: HistoryItemScalarWhereInput | HistoryItemScalarWhereInput[]
    id?: IntFilter<"HistoryItem"> | number
    orderid?: IntFilter<"HistoryItem"> | number
    name_eng?: StringFilter<"HistoryItem"> | string
    name_guj?: StringNullableFilter<"HistoryItem"> | string | null
    name_hindi?: StringNullableFilter<"HistoryItem"> | string | null
    price?: FloatFilter<"HistoryItem"> | number
    quantity?: IntFilter<"HistoryItem"> | number
    totalprice?: FloatFilter<"HistoryItem"> | number
  }

  export type OrderHistoryCreateWithoutItemsInput = {
    ordercode: string
    tablename?: string | null
    customername?: string | null
    customermob?: string | null
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    timestamp?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutOrderHistoryInput
  }

  export type OrderHistoryUncheckedCreateWithoutItemsInput = {
    id?: number
    restroid: number
    ordercode: string
    tablename?: string | null
    customername?: string | null
    customermob?: string | null
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    timestamp?: Date | string
  }

  export type OrderHistoryCreateOrConnectWithoutItemsInput = {
    where: OrderHistoryWhereUniqueInput
    create: XOR<OrderHistoryCreateWithoutItemsInput, OrderHistoryUncheckedCreateWithoutItemsInput>
  }

  export type OrderHistoryUpsertWithoutItemsInput = {
    update: XOR<OrderHistoryUpdateWithoutItemsInput, OrderHistoryUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderHistoryCreateWithoutItemsInput, OrderHistoryUncheckedCreateWithoutItemsInput>
    where?: OrderHistoryWhereInput
  }

  export type OrderHistoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderHistoryWhereInput
    data: XOR<OrderHistoryUpdateWithoutItemsInput, OrderHistoryUncheckedUpdateWithoutItemsInput>
  }

  export type OrderHistoryUpdateWithoutItemsInput = {
    ordercode?: StringFieldUpdateOperationsInput | string
    tablename?: NullableStringFieldUpdateOperationsInput | string | null
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutOrderHistoryNestedInput
  }

  export type OrderHistoryUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    ordercode?: StringFieldUpdateOperationsInput | string
    tablename?: NullableStringFieldUpdateOperationsInput | string | null
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantCreateWithoutFeedbackInput = {
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    theme?: ThemeCreateNestedOneWithoutRestaurantsInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestCreateNestedManyWithoutRestaurantInput
    staff?: StaffCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutFeedbackInput = {
    id?: number
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    themecode?: number | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestUncheckedCreateNestedManyWithoutRestaurantInput
    staff?: StaffUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutFeedbackInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutFeedbackInput, RestaurantUncheckedCreateWithoutFeedbackInput>
  }

  export type RestaurantUpsertWithoutFeedbackInput = {
    update: XOR<RestaurantUpdateWithoutFeedbackInput, RestaurantUncheckedUpdateWithoutFeedbackInput>
    create: XOR<RestaurantCreateWithoutFeedbackInput, RestaurantUncheckedCreateWithoutFeedbackInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutFeedbackInput, RestaurantUncheckedUpdateWithoutFeedbackInput>
  }

  export type RestaurantUpdateWithoutFeedbackInput = {
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    theme?: ThemeUpdateOneWithoutRestaurantsNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutFeedbackInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    themecode?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUncheckedUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateWithoutPaymentHistoryInput = {
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    theme?: ThemeCreateNestedOneWithoutRestaurantsInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestCreateNestedManyWithoutRestaurantInput
    staff?: StaffCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutPaymentHistoryInput = {
    id?: number
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    themecode?: number | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutRestaurantInput
    waiterRequests?: WaiterRequestUncheckedCreateNestedManyWithoutRestaurantInput
    staff?: StaffUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutPaymentHistoryInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutPaymentHistoryInput, RestaurantUncheckedCreateWithoutPaymentHistoryInput>
  }

  export type RestaurantUpsertWithoutPaymentHistoryInput = {
    update: XOR<RestaurantUpdateWithoutPaymentHistoryInput, RestaurantUncheckedUpdateWithoutPaymentHistoryInput>
    create: XOR<RestaurantCreateWithoutPaymentHistoryInput, RestaurantUncheckedCreateWithoutPaymentHistoryInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutPaymentHistoryInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutPaymentHistoryInput, RestaurantUncheckedUpdateWithoutPaymentHistoryInput>
  }

  export type RestaurantUpdateWithoutPaymentHistoryInput = {
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    theme?: ThemeUpdateOneWithoutRestaurantsNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutPaymentHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    themecode?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUncheckedUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateWithoutWaiterRequestsInput = {
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    theme?: ThemeCreateNestedOneWithoutRestaurantsInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutRestaurantInput
    staff?: StaffCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutWaiterRequestsInput = {
    id?: number
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    themecode?: number | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutRestaurantInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutRestaurantInput
    staff?: StaffUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutWaiterRequestsInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutWaiterRequestsInput, RestaurantUncheckedCreateWithoutWaiterRequestsInput>
  }

  export type TableCreateWithoutWaiterRequestsInput = {
    name: string
    qrimage?: string | null
    restaurant: RestaurantCreateNestedOneWithoutTablesInput
    orders?: OrderCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutWaiterRequestsInput = {
    id?: number
    restroid: number
    name: string
    qrimage?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutWaiterRequestsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutWaiterRequestsInput, TableUncheckedCreateWithoutWaiterRequestsInput>
  }

  export type RestaurantUpsertWithoutWaiterRequestsInput = {
    update: XOR<RestaurantUpdateWithoutWaiterRequestsInput, RestaurantUncheckedUpdateWithoutWaiterRequestsInput>
    create: XOR<RestaurantCreateWithoutWaiterRequestsInput, RestaurantUncheckedCreateWithoutWaiterRequestsInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutWaiterRequestsInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutWaiterRequestsInput, RestaurantUncheckedUpdateWithoutWaiterRequestsInput>
  }

  export type RestaurantUpdateWithoutWaiterRequestsInput = {
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    theme?: ThemeUpdateOneWithoutRestaurantsNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutWaiterRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    themecode?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type TableUpsertWithoutWaiterRequestsInput = {
    update: XOR<TableUpdateWithoutWaiterRequestsInput, TableUncheckedUpdateWithoutWaiterRequestsInput>
    create: XOR<TableCreateWithoutWaiterRequestsInput, TableUncheckedCreateWithoutWaiterRequestsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutWaiterRequestsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutWaiterRequestsInput, TableUncheckedUpdateWithoutWaiterRequestsInput>
  }

  export type TableUpdateWithoutWaiterRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    qrimage?: NullableStringFieldUpdateOperationsInput | string | null
    restaurant?: RestaurantUpdateOneRequiredWithoutTablesNestedInput
    orders?: OrderUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutWaiterRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    qrimage?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutTableNestedInput
  }

  export type CategoryCreateManyRestaurantInput = {
    id?: number
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    categorydesc?: string | null
    sortorder?: number
  }

  export type MenuItemCreateManyRestaurantInput = {
    id?: number
    categoryid: number
    image?: string | null
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    veg?: boolean
    available?: boolean
    price: number
  }

  export type TableCreateManyRestaurantInput = {
    id?: number
    name: string
    qrimage?: string | null
  }

  export type OrderCreateManyRestaurantInput = {
    id?: number
    tableid?: number | null
    ordercode: string
    customername?: string | null
    customermob?: string | null
    status?: $Enums.OrderStatus
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderHistoryCreateManyRestaurantInput = {
    id?: number
    ordercode: string
    tablename?: string | null
    customername?: string | null
    customermob?: string | null
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    timestamp?: Date | string
  }

  export type FeedbackCreateManyRestaurantInput = {
    id?: number
    fullname: string
    mobile?: string | null
    email?: string | null
    feedback?: string | null
    dob?: Date | string | null
    timestamp?: Date | string
  }

  export type PaymentHistoryCreateManyRestaurantInput = {
    id?: number
    paymentdate: Date | string
    subplan: number
    price: number
    subtype: number
    expdate: Date | string
  }

  export type WaiterRequestCreateManyRestaurantInput = {
    id?: number
    tableid?: number | null
    status?: number
    createdAt?: Date | string
  }

  export type StaffCreateManyRestaurantInput = {
    id?: number
    fullname: string
    username: string
    password: string
    role?: string
    status?: number
    createdAt?: Date | string
  }

  export type CategoryUpdateWithoutRestaurantInput = {
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    categorydesc?: NullableStringFieldUpdateOperationsInput | string | null
    sortorder?: IntFieldUpdateOperationsInput | number
    menuItems?: MenuItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    categorydesc?: NullableStringFieldUpdateOperationsInput | string | null
    sortorder?: IntFieldUpdateOperationsInput | number
    menuItems?: MenuItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    categorydesc?: NullableStringFieldUpdateOperationsInput | string | null
    sortorder?: IntFieldUpdateOperationsInput | number
  }

  export type MenuItemUpdateWithoutRestaurantInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    veg?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutMenuItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuitemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryid?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    veg?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuitemNestedInput
  }

  export type MenuItemUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryid?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    veg?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type TableUpdateWithoutRestaurantInput = {
    name?: StringFieldUpdateOperationsInput | string
    qrimage?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutTableNestedInput
    waiterRequests?: WaiterRequestUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    qrimage?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutTableNestedInput
    waiterRequests?: WaiterRequestUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    qrimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUpdateWithoutRestaurantInput = {
    ordercode?: StringFieldUpdateOperationsInput | string
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableid?: NullableIntFieldUpdateOperationsInput | number | null
    ordercode?: StringFieldUpdateOperationsInput | string
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableid?: NullableIntFieldUpdateOperationsInput | number | null
    ordercode?: StringFieldUpdateOperationsInput | string
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderHistoryUpdateWithoutRestaurantInput = {
    ordercode?: StringFieldUpdateOperationsInput | string
    tablename?: NullableStringFieldUpdateOperationsInput | string | null
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: HistoryItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderHistoryUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordercode?: StringFieldUpdateOperationsInput | string
    tablename?: NullableStringFieldUpdateOperationsInput | string | null
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: HistoryItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderHistoryUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordercode?: StringFieldUpdateOperationsInput | string
    tablename?: NullableStringFieldUpdateOperationsInput | string | null
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpdateWithoutRestaurantInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUpdateWithoutRestaurantInput = {
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subplan?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    subtype?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subplan?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    subtype?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subplan?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    subtype?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterRequestUpdateWithoutRestaurantInput = {
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneWithoutWaiterRequestsNestedInput
  }

  export type WaiterRequestUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterRequestUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUpdateWithoutRestaurantInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantCreateManyThemeInput = {
    id?: number
    restroname: string
    mobileno: string
    email: string
    address: string
    password: string
    gstno?: string | null
    logo?: string | null
    status?: number
    latitude?: string | null
    longitude?: string | null
    distance?: string | null
    joindate?: Date | string
    paymentdate?: Date | string
    subtype?: number
    subplan?: number
    expdate?: Date | string
    price?: number
    pdf?: string | null
    slug: string
    restrootp?: string
    discount?: number
    servicecharge?: number
    maxStaff?: number
  }

  export type RestaurantUpdateWithoutThemeInput = {
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    menuItems?: MenuItemUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutRestaurantNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutRestaurantNestedInput
    waiterRequests?: WaiterRequestUncheckedUpdateManyWithoutRestaurantNestedInput
    staff?: StaffUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateManyWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroname?: StringFieldUpdateOperationsInput | string
    mobileno?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gstno?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: NullableStringFieldUpdateOperationsInput | string | null
    joindate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdate?: DateTimeFieldUpdateOperationsInput | Date | string
    subtype?: IntFieldUpdateOperationsInput | number
    subplan?: IntFieldUpdateOperationsInput | number
    expdate?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    restrootp?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    maxStaff?: IntFieldUpdateOperationsInput | number
  }

  export type MenuItemCreateManyCategoryInput = {
    id?: number
    restroid: number
    image?: string | null
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    veg?: boolean
    available?: boolean
    price: number
  }

  export type MenuItemUpdateWithoutCategoryInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    veg?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    restaurant?: RestaurantUpdateOneRequiredWithoutMenuItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuitemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    veg?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuitemNestedInput
  }

  export type MenuItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    veg?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyMenuitemInput = {
    id?: number
    orderid: number
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    price: number
    quantity: number
    totalprice: number
  }

  export type OrderItemUpdateWithoutMenuitemInput = {
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutMenuitemInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderid?: IntFieldUpdateOperationsInput | number
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutMenuitemInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderid?: IntFieldUpdateOperationsInput | number
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyTableInput = {
    id?: number
    restroid: number
    ordercode: string
    customername?: string | null
    customermob?: string | null
    status?: $Enums.OrderStatus
    subtotal?: number
    discount?: number
    servicecharge?: number
    grandtotal?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaiterRequestCreateManyTableInput = {
    id?: number
    restroid: number
    status?: number
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutTableInput = {
    ordercode?: StringFieldUpdateOperationsInput | string
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    ordercode?: StringFieldUpdateOperationsInput | string
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    ordercode?: StringFieldUpdateOperationsInput | string
    customername?: NullableStringFieldUpdateOperationsInput | string | null
    customermob?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    subtotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    servicecharge?: FloatFieldUpdateOperationsInput | number
    grandtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterRequestUpdateWithoutTableInput = {
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutWaiterRequestsNestedInput
  }

  export type WaiterRequestUncheckedUpdateWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaiterRequestUncheckedUpdateManyWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    restroid?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: number
    menuitemid: number
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    price: number
    quantity: number
    totalprice: number
  }

  export type OrderItemUpdateWithoutOrderInput = {
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
    menuitem?: MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuitemid?: IntFieldUpdateOperationsInput | number
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuitemid?: IntFieldUpdateOperationsInput | number
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
  }

  export type HistoryItemCreateManyOrderInput = {
    id?: number
    name_eng: string
    name_guj?: string | null
    name_hindi?: string | null
    price: number
    quantity: number
    totalprice: number
  }

  export type HistoryItemUpdateWithoutOrderInput = {
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
  }

  export type HistoryItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
  }

  export type HistoryItemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_eng?: StringFieldUpdateOperationsInput | string
    name_guj?: NullableStringFieldUpdateOperationsInput | string | null
    name_hindi?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalprice?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RestaurantCountOutputTypeDefaultArgs instead
     */
    export type RestaurantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RestaurantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ThemeCountOutputTypeDefaultArgs instead
     */
    export type ThemeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ThemeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuItemCountOutputTypeDefaultArgs instead
     */
    export type MenuItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TableCountOutputTypeDefaultArgs instead
     */
    export type TableCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TableCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderHistoryCountOutputTypeDefaultArgs instead
     */
    export type OrderHistoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderHistoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RestaurantDefaultArgs instead
     */
    export type RestaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RestaurantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StaffDefaultArgs instead
     */
    export type StaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StaffDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ThemeDefaultArgs instead
     */
    export type ThemeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ThemeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuItemDefaultArgs instead
     */
    export type MenuItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TableDefaultArgs instead
     */
    export type TableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TableDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderItemDefaultArgs instead
     */
    export type OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderHistoryDefaultArgs instead
     */
    export type OrderHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HistoryItemDefaultArgs instead
     */
    export type HistoryItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HistoryItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeedbackDefaultArgs instead
     */
    export type FeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeedbackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentHistoryDefaultArgs instead
     */
    export type PaymentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WaiterRequestDefaultArgs instead
     */
    export type WaiterRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WaiterRequestDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}