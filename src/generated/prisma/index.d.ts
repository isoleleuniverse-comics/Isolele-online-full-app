
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>
/**
 * Model TranslationGroup
 * 
 */
export type TranslationGroup = $Result.DefaultSelection<Prisma.$TranslationGroupPayload>
/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ArticleStatus: {
  DRAFT: 'DRAFT',
  REVIEW: 'REVIEW',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type ArticleStatus = (typeof ArticleStatus)[keyof typeof ArticleStatus]


export const TranslationStatus: {
  UP_TO_DATE: 'UP_TO_DATE',
  OUTDATED: 'OUTDATED',
  MACHINE_TRANSLATED: 'MACHINE_TRANSLATED',
  NEEDS_REVIEW: 'NEEDS_REVIEW'
};

export type TranslationStatus = (typeof TranslationStatus)[keyof typeof TranslationStatus]

}

export type ArticleStatus = $Enums.ArticleStatus

export const ArticleStatus: typeof $Enums.ArticleStatus

export type TranslationStatus = $Enums.TranslationStatus

export const TranslationStatus: typeof $Enums.TranslationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Languages
 * const languages = await prisma.language.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Languages
   * const languages = await prisma.language.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.translationGroup`: Exposes CRUD operations for the **TranslationGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TranslationGroups
    * const translationGroups = await prisma.translationGroup.findMany()
    * ```
    */
  get translationGroup(): Prisma.TranslationGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Language: 'Language',
    TranslationGroup: 'TranslationGroup',
    Article: 'Article'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "language" | "translationGroup" | "article"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
      TranslationGroup: {
        payload: Prisma.$TranslationGroupPayload<ExtArgs>
        fields: Prisma.TranslationGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranslationGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranslationGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationGroupPayload>
          }
          findFirst: {
            args: Prisma.TranslationGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranslationGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationGroupPayload>
          }
          findMany: {
            args: Prisma.TranslationGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationGroupPayload>[]
          }
          create: {
            args: Prisma.TranslationGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationGroupPayload>
          }
          createMany: {
            args: Prisma.TranslationGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TranslationGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationGroupPayload>[]
          }
          delete: {
            args: Prisma.TranslationGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationGroupPayload>
          }
          update: {
            args: Prisma.TranslationGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationGroupPayload>
          }
          deleteMany: {
            args: Prisma.TranslationGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranslationGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TranslationGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationGroupPayload>[]
          }
          upsert: {
            args: Prisma.TranslationGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationGroupPayload>
          }
          aggregate: {
            args: Prisma.TranslationGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranslationGroup>
          }
          groupBy: {
            args: Prisma.TranslationGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranslationGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranslationGroupCountArgs<ExtArgs>
            result: $Utils.Optional<TranslationGroupCountAggregateOutputType> | number
          }
        }
      }
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    language?: LanguageOmit
    translationGroup?: TranslationGroupOmit
    article?: ArticleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type LanguageCountOutputType
   */

  export type LanguageCountOutputType = {
    articles: number
  }

  export type LanguageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | LanguageCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageCountOutputType
     */
    select?: LanguageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }


  /**
   * Count Type TranslationGroupCountOutputType
   */

  export type TranslationGroupCountOutputType = {
    articles: number
  }

  export type TranslationGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | TranslationGroupCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * TranslationGroupCountOutputType without action
   */
  export type TranslationGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationGroupCountOutputType
     */
    select?: TranslationGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TranslationGroupCountOutputType without action
   */
  export type TranslationGroupCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageMinAggregateOutputType = {
    code: string | null
    name: string | null
    nativeName: string | null
    enabled: boolean | null
    isDefault: boolean | null
    createdAt: Date | null
  }

  export type LanguageMaxAggregateOutputType = {
    code: string | null
    name: string | null
    nativeName: string | null
    enabled: boolean | null
    isDefault: boolean | null
    createdAt: Date | null
  }

  export type LanguageCountAggregateOutputType = {
    code: number
    name: number
    nativeName: number
    enabled: number
    isDefault: number
    createdAt: number
    _all: number
  }


  export type LanguageMinAggregateInputType = {
    code?: true
    name?: true
    nativeName?: true
    enabled?: true
    isDefault?: true
    createdAt?: true
  }

  export type LanguageMaxAggregateInputType = {
    code?: true
    name?: true
    nativeName?: true
    enabled?: true
    isDefault?: true
    createdAt?: true
  }

  export type LanguageCountAggregateInputType = {
    code?: true
    name?: true
    nativeName?: true
    enabled?: true
    isDefault?: true
    createdAt?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    code: string
    name: string
    nativeName: string
    enabled: boolean
    isDefault: boolean
    createdAt: Date
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    nativeName?: boolean
    enabled?: boolean
    isDefault?: boolean
    createdAt?: boolean
    articles?: boolean | Language$articlesArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    nativeName?: boolean
    enabled?: boolean
    isDefault?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    nativeName?: boolean
    enabled?: boolean
    isDefault?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectScalar = {
    code?: boolean
    name?: boolean
    nativeName?: boolean
    enabled?: boolean
    isDefault?: boolean
    createdAt?: boolean
  }

  export type LanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "name" | "nativeName" | "enabled" | "isDefault" | "createdAt", ExtArgs["result"]["language"]>
  export type LanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | Language$articlesArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LanguageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {
      articles: Prisma.$ArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      name: string
      nativeName: string
      enabled: boolean
      isDefault: boolean
      createdAt: Date
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const languageWithCodeOnly = await prisma.language.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguageCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `code`
     * const languageWithCodeOnly = await prisma.language.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages and returns the data updated in the database.
     * @param {LanguageUpdateManyAndReturnArgs} args - Arguments to update many Languages.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Languages and only return the `code`
     * const languageWithCodeOnly = await prisma.language.updateManyAndReturn({
     *   select: { code: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
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
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends Language$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Language$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Language model
   */
  interface LanguageFieldRefs {
    readonly code: FieldRef<"Language", 'String'>
    readonly name: FieldRef<"Language", 'String'>
    readonly nativeName: FieldRef<"Language", 'String'>
    readonly enabled: FieldRef<"Language", 'Boolean'>
    readonly isDefault: FieldRef<"Language", 'Boolean'>
    readonly createdAt: FieldRef<"Language", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language createManyAndReturn
   */
  export type LanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language updateManyAndReturn
   */
  export type LanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Language.articles
   */
  export type Language$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
  }


  /**
   * Model TranslationGroup
   */

  export type AggregateTranslationGroup = {
    _count: TranslationGroupCountAggregateOutputType | null
    _min: TranslationGroupMinAggregateOutputType | null
    _max: TranslationGroupMaxAggregateOutputType | null
  }

  export type TranslationGroupMinAggregateOutputType = {
    id: string | null
    sourceLocale: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TranslationGroupMaxAggregateOutputType = {
    id: string | null
    sourceLocale: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TranslationGroupCountAggregateOutputType = {
    id: number
    sourceLocale: number
    targetLocales: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TranslationGroupMinAggregateInputType = {
    id?: true
    sourceLocale?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TranslationGroupMaxAggregateInputType = {
    id?: true
    sourceLocale?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TranslationGroupCountAggregateInputType = {
    id?: true
    sourceLocale?: true
    targetLocales?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TranslationGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranslationGroup to aggregate.
     */
    where?: TranslationGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationGroups to fetch.
     */
    orderBy?: TranslationGroupOrderByWithRelationInput | TranslationGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranslationGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TranslationGroups
    **/
    _count?: true | TranslationGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranslationGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranslationGroupMaxAggregateInputType
  }

  export type GetTranslationGroupAggregateType<T extends TranslationGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateTranslationGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranslationGroup[P]>
      : GetScalarType<T[P], AggregateTranslationGroup[P]>
  }




  export type TranslationGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationGroupWhereInput
    orderBy?: TranslationGroupOrderByWithAggregationInput | TranslationGroupOrderByWithAggregationInput[]
    by: TranslationGroupScalarFieldEnum[] | TranslationGroupScalarFieldEnum
    having?: TranslationGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranslationGroupCountAggregateInputType | true
    _min?: TranslationGroupMinAggregateInputType
    _max?: TranslationGroupMaxAggregateInputType
  }

  export type TranslationGroupGroupByOutputType = {
    id: string
    sourceLocale: string
    targetLocales: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: TranslationGroupCountAggregateOutputType | null
    _min: TranslationGroupMinAggregateOutputType | null
    _max: TranslationGroupMaxAggregateOutputType | null
  }

  type GetTranslationGroupGroupByPayload<T extends TranslationGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranslationGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranslationGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranslationGroupGroupByOutputType[P]>
            : GetScalarType<T[P], TranslationGroupGroupByOutputType[P]>
        }
      >
    >


  export type TranslationGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceLocale?: boolean
    targetLocales?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    articles?: boolean | TranslationGroup$articlesArgs<ExtArgs>
    _count?: boolean | TranslationGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["translationGroup"]>

  export type TranslationGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceLocale?: boolean
    targetLocales?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["translationGroup"]>

  export type TranslationGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceLocale?: boolean
    targetLocales?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["translationGroup"]>

  export type TranslationGroupSelectScalar = {
    id?: boolean
    sourceLocale?: boolean
    targetLocales?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TranslationGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceLocale" | "targetLocales" | "createdAt" | "updatedAt", ExtArgs["result"]["translationGroup"]>
  export type TranslationGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | TranslationGroup$articlesArgs<ExtArgs>
    _count?: boolean | TranslationGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TranslationGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TranslationGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TranslationGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TranslationGroup"
    objects: {
      articles: Prisma.$ArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceLocale: string
      targetLocales: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["translationGroup"]>
    composites: {}
  }

  type TranslationGroupGetPayload<S extends boolean | null | undefined | TranslationGroupDefaultArgs> = $Result.GetResult<Prisma.$TranslationGroupPayload, S>

  type TranslationGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TranslationGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TranslationGroupCountAggregateInputType | true
    }

  export interface TranslationGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TranslationGroup'], meta: { name: 'TranslationGroup' } }
    /**
     * Find zero or one TranslationGroup that matches the filter.
     * @param {TranslationGroupFindUniqueArgs} args - Arguments to find a TranslationGroup
     * @example
     * // Get one TranslationGroup
     * const translationGroup = await prisma.translationGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranslationGroupFindUniqueArgs>(args: SelectSubset<T, TranslationGroupFindUniqueArgs<ExtArgs>>): Prisma__TranslationGroupClient<$Result.GetResult<Prisma.$TranslationGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TranslationGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TranslationGroupFindUniqueOrThrowArgs} args - Arguments to find a TranslationGroup
     * @example
     * // Get one TranslationGroup
     * const translationGroup = await prisma.translationGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranslationGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, TranslationGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranslationGroupClient<$Result.GetResult<Prisma.$TranslationGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranslationGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationGroupFindFirstArgs} args - Arguments to find a TranslationGroup
     * @example
     * // Get one TranslationGroup
     * const translationGroup = await prisma.translationGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranslationGroupFindFirstArgs>(args?: SelectSubset<T, TranslationGroupFindFirstArgs<ExtArgs>>): Prisma__TranslationGroupClient<$Result.GetResult<Prisma.$TranslationGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranslationGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationGroupFindFirstOrThrowArgs} args - Arguments to find a TranslationGroup
     * @example
     * // Get one TranslationGroup
     * const translationGroup = await prisma.translationGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranslationGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, TranslationGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranslationGroupClient<$Result.GetResult<Prisma.$TranslationGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TranslationGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TranslationGroups
     * const translationGroups = await prisma.translationGroup.findMany()
     * 
     * // Get first 10 TranslationGroups
     * const translationGroups = await prisma.translationGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const translationGroupWithIdOnly = await prisma.translationGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranslationGroupFindManyArgs>(args?: SelectSubset<T, TranslationGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TranslationGroup.
     * @param {TranslationGroupCreateArgs} args - Arguments to create a TranslationGroup.
     * @example
     * // Create one TranslationGroup
     * const TranslationGroup = await prisma.translationGroup.create({
     *   data: {
     *     // ... data to create a TranslationGroup
     *   }
     * })
     * 
     */
    create<T extends TranslationGroupCreateArgs>(args: SelectSubset<T, TranslationGroupCreateArgs<ExtArgs>>): Prisma__TranslationGroupClient<$Result.GetResult<Prisma.$TranslationGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TranslationGroups.
     * @param {TranslationGroupCreateManyArgs} args - Arguments to create many TranslationGroups.
     * @example
     * // Create many TranslationGroups
     * const translationGroup = await prisma.translationGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranslationGroupCreateManyArgs>(args?: SelectSubset<T, TranslationGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TranslationGroups and returns the data saved in the database.
     * @param {TranslationGroupCreateManyAndReturnArgs} args - Arguments to create many TranslationGroups.
     * @example
     * // Create many TranslationGroups
     * const translationGroup = await prisma.translationGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TranslationGroups and only return the `id`
     * const translationGroupWithIdOnly = await prisma.translationGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TranslationGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, TranslationGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TranslationGroup.
     * @param {TranslationGroupDeleteArgs} args - Arguments to delete one TranslationGroup.
     * @example
     * // Delete one TranslationGroup
     * const TranslationGroup = await prisma.translationGroup.delete({
     *   where: {
     *     // ... filter to delete one TranslationGroup
     *   }
     * })
     * 
     */
    delete<T extends TranslationGroupDeleteArgs>(args: SelectSubset<T, TranslationGroupDeleteArgs<ExtArgs>>): Prisma__TranslationGroupClient<$Result.GetResult<Prisma.$TranslationGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TranslationGroup.
     * @param {TranslationGroupUpdateArgs} args - Arguments to update one TranslationGroup.
     * @example
     * // Update one TranslationGroup
     * const translationGroup = await prisma.translationGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranslationGroupUpdateArgs>(args: SelectSubset<T, TranslationGroupUpdateArgs<ExtArgs>>): Prisma__TranslationGroupClient<$Result.GetResult<Prisma.$TranslationGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TranslationGroups.
     * @param {TranslationGroupDeleteManyArgs} args - Arguments to filter TranslationGroups to delete.
     * @example
     * // Delete a few TranslationGroups
     * const { count } = await prisma.translationGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranslationGroupDeleteManyArgs>(args?: SelectSubset<T, TranslationGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranslationGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TranslationGroups
     * const translationGroup = await prisma.translationGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranslationGroupUpdateManyArgs>(args: SelectSubset<T, TranslationGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranslationGroups and returns the data updated in the database.
     * @param {TranslationGroupUpdateManyAndReturnArgs} args - Arguments to update many TranslationGroups.
     * @example
     * // Update many TranslationGroups
     * const translationGroup = await prisma.translationGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TranslationGroups and only return the `id`
     * const translationGroupWithIdOnly = await prisma.translationGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TranslationGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, TranslationGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TranslationGroup.
     * @param {TranslationGroupUpsertArgs} args - Arguments to update or create a TranslationGroup.
     * @example
     * // Update or create a TranslationGroup
     * const translationGroup = await prisma.translationGroup.upsert({
     *   create: {
     *     // ... data to create a TranslationGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TranslationGroup we want to update
     *   }
     * })
     */
    upsert<T extends TranslationGroupUpsertArgs>(args: SelectSubset<T, TranslationGroupUpsertArgs<ExtArgs>>): Prisma__TranslationGroupClient<$Result.GetResult<Prisma.$TranslationGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TranslationGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationGroupCountArgs} args - Arguments to filter TranslationGroups to count.
     * @example
     * // Count the number of TranslationGroups
     * const count = await prisma.translationGroup.count({
     *   where: {
     *     // ... the filter for the TranslationGroups we want to count
     *   }
     * })
    **/
    count<T extends TranslationGroupCountArgs>(
      args?: Subset<T, TranslationGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranslationGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TranslationGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TranslationGroupAggregateArgs>(args: Subset<T, TranslationGroupAggregateArgs>): Prisma.PrismaPromise<GetTranslationGroupAggregateType<T>>

    /**
     * Group by TranslationGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationGroupGroupByArgs} args - Group by arguments.
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
      T extends TranslationGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranslationGroupGroupByArgs['orderBy'] }
        : { orderBy?: TranslationGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TranslationGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranslationGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TranslationGroup model
   */
  readonly fields: TranslationGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TranslationGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranslationGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends TranslationGroup$articlesArgs<ExtArgs> = {}>(args?: Subset<T, TranslationGroup$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TranslationGroup model
   */
  interface TranslationGroupFieldRefs {
    readonly id: FieldRef<"TranslationGroup", 'String'>
    readonly sourceLocale: FieldRef<"TranslationGroup", 'String'>
    readonly targetLocales: FieldRef<"TranslationGroup", 'Json'>
    readonly createdAt: FieldRef<"TranslationGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"TranslationGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TranslationGroup findUnique
   */
  export type TranslationGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationGroup
     */
    select?: TranslationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationGroup
     */
    omit?: TranslationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationGroupInclude<ExtArgs> | null
    /**
     * Filter, which TranslationGroup to fetch.
     */
    where: TranslationGroupWhereUniqueInput
  }

  /**
   * TranslationGroup findUniqueOrThrow
   */
  export type TranslationGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationGroup
     */
    select?: TranslationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationGroup
     */
    omit?: TranslationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationGroupInclude<ExtArgs> | null
    /**
     * Filter, which TranslationGroup to fetch.
     */
    where: TranslationGroupWhereUniqueInput
  }

  /**
   * TranslationGroup findFirst
   */
  export type TranslationGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationGroup
     */
    select?: TranslationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationGroup
     */
    omit?: TranslationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationGroupInclude<ExtArgs> | null
    /**
     * Filter, which TranslationGroup to fetch.
     */
    where?: TranslationGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationGroups to fetch.
     */
    orderBy?: TranslationGroupOrderByWithRelationInput | TranslationGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranslationGroups.
     */
    cursor?: TranslationGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranslationGroups.
     */
    distinct?: TranslationGroupScalarFieldEnum | TranslationGroupScalarFieldEnum[]
  }

  /**
   * TranslationGroup findFirstOrThrow
   */
  export type TranslationGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationGroup
     */
    select?: TranslationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationGroup
     */
    omit?: TranslationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationGroupInclude<ExtArgs> | null
    /**
     * Filter, which TranslationGroup to fetch.
     */
    where?: TranslationGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationGroups to fetch.
     */
    orderBy?: TranslationGroupOrderByWithRelationInput | TranslationGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranslationGroups.
     */
    cursor?: TranslationGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranslationGroups.
     */
    distinct?: TranslationGroupScalarFieldEnum | TranslationGroupScalarFieldEnum[]
  }

  /**
   * TranslationGroup findMany
   */
  export type TranslationGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationGroup
     */
    select?: TranslationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationGroup
     */
    omit?: TranslationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationGroupInclude<ExtArgs> | null
    /**
     * Filter, which TranslationGroups to fetch.
     */
    where?: TranslationGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationGroups to fetch.
     */
    orderBy?: TranslationGroupOrderByWithRelationInput | TranslationGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TranslationGroups.
     */
    cursor?: TranslationGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranslationGroups.
     */
    distinct?: TranslationGroupScalarFieldEnum | TranslationGroupScalarFieldEnum[]
  }

  /**
   * TranslationGroup create
   */
  export type TranslationGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationGroup
     */
    select?: TranslationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationGroup
     */
    omit?: TranslationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a TranslationGroup.
     */
    data: XOR<TranslationGroupCreateInput, TranslationGroupUncheckedCreateInput>
  }

  /**
   * TranslationGroup createMany
   */
  export type TranslationGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TranslationGroups.
     */
    data: TranslationGroupCreateManyInput | TranslationGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TranslationGroup createManyAndReturn
   */
  export type TranslationGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationGroup
     */
    select?: TranslationGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationGroup
     */
    omit?: TranslationGroupOmit<ExtArgs> | null
    /**
     * The data used to create many TranslationGroups.
     */
    data: TranslationGroupCreateManyInput | TranslationGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TranslationGroup update
   */
  export type TranslationGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationGroup
     */
    select?: TranslationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationGroup
     */
    omit?: TranslationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a TranslationGroup.
     */
    data: XOR<TranslationGroupUpdateInput, TranslationGroupUncheckedUpdateInput>
    /**
     * Choose, which TranslationGroup to update.
     */
    where: TranslationGroupWhereUniqueInput
  }

  /**
   * TranslationGroup updateMany
   */
  export type TranslationGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TranslationGroups.
     */
    data: XOR<TranslationGroupUpdateManyMutationInput, TranslationGroupUncheckedUpdateManyInput>
    /**
     * Filter which TranslationGroups to update
     */
    where?: TranslationGroupWhereInput
    /**
     * Limit how many TranslationGroups to update.
     */
    limit?: number
  }

  /**
   * TranslationGroup updateManyAndReturn
   */
  export type TranslationGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationGroup
     */
    select?: TranslationGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationGroup
     */
    omit?: TranslationGroupOmit<ExtArgs> | null
    /**
     * The data used to update TranslationGroups.
     */
    data: XOR<TranslationGroupUpdateManyMutationInput, TranslationGroupUncheckedUpdateManyInput>
    /**
     * Filter which TranslationGroups to update
     */
    where?: TranslationGroupWhereInput
    /**
     * Limit how many TranslationGroups to update.
     */
    limit?: number
  }

  /**
   * TranslationGroup upsert
   */
  export type TranslationGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationGroup
     */
    select?: TranslationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationGroup
     */
    omit?: TranslationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the TranslationGroup to update in case it exists.
     */
    where: TranslationGroupWhereUniqueInput
    /**
     * In case the TranslationGroup found by the `where` argument doesn't exist, create a new TranslationGroup with this data.
     */
    create: XOR<TranslationGroupCreateInput, TranslationGroupUncheckedCreateInput>
    /**
     * In case the TranslationGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranslationGroupUpdateInput, TranslationGroupUncheckedUpdateInput>
  }

  /**
   * TranslationGroup delete
   */
  export type TranslationGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationGroup
     */
    select?: TranslationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationGroup
     */
    omit?: TranslationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationGroupInclude<ExtArgs> | null
    /**
     * Filter which TranslationGroup to delete.
     */
    where: TranslationGroupWhereUniqueInput
  }

  /**
   * TranslationGroup deleteMany
   */
  export type TranslationGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranslationGroups to delete
     */
    where?: TranslationGroupWhereInput
    /**
     * Limit how many TranslationGroups to delete.
     */
    limit?: number
  }

  /**
   * TranslationGroup.articles
   */
  export type TranslationGroup$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * TranslationGroup without action
   */
  export type TranslationGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationGroup
     */
    select?: TranslationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationGroup
     */
    omit?: TranslationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationGroupInclude<ExtArgs> | null
  }


  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    sourceVersion: number | null
    translatedFromVersion: number | null
  }

  export type ArticleSumAggregateOutputType = {
    sourceVersion: number | null
    translatedFromVersion: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: string | null
    translationGroupId: string | null
    locale: string | null
    slug: string | null
    title: string | null
    excerpt: string | null
    coverImage: string | null
    status: $Enums.ArticleStatus | null
    translationStatus: $Enums.TranslationStatus | null
    sourceVersion: number | null
    translatedFromVersion: number | null
    seoTitle: string | null
    seoDescription: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: string | null
    translationGroupId: string | null
    locale: string | null
    slug: string | null
    title: string | null
    excerpt: string | null
    coverImage: string | null
    status: $Enums.ArticleStatus | null
    translationStatus: $Enums.TranslationStatus | null
    sourceVersion: number | null
    translatedFromVersion: number | null
    seoTitle: string | null
    seoDescription: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    translationGroupId: number
    locale: number
    slug: number
    title: number
    excerpt: number
    coverImage: number
    blocksJson: number
    status: number
    translationStatus: number
    sourceVersion: number
    translatedFromVersion: number
    seoTitle: number
    seoDescription: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    sourceVersion?: true
    translatedFromVersion?: true
  }

  export type ArticleSumAggregateInputType = {
    sourceVersion?: true
    translatedFromVersion?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    translationGroupId?: true
    locale?: true
    slug?: true
    title?: true
    excerpt?: true
    coverImage?: true
    status?: true
    translationStatus?: true
    sourceVersion?: true
    translatedFromVersion?: true
    seoTitle?: true
    seoDescription?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    translationGroupId?: true
    locale?: true
    slug?: true
    title?: true
    excerpt?: true
    coverImage?: true
    status?: true
    translationStatus?: true
    sourceVersion?: true
    translatedFromVersion?: true
    seoTitle?: true
    seoDescription?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    translationGroupId?: true
    locale?: true
    slug?: true
    title?: true
    excerpt?: true
    coverImage?: true
    blocksJson?: true
    status?: true
    translationStatus?: true
    sourceVersion?: true
    translatedFromVersion?: true
    seoTitle?: true
    seoDescription?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: string
    translationGroupId: string
    locale: string
    slug: string
    title: string
    excerpt: string | null
    coverImage: string | null
    blocksJson: JsonValue
    status: $Enums.ArticleStatus
    translationStatus: $Enums.TranslationStatus
    sourceVersion: number
    translatedFromVersion: number | null
    seoTitle: string | null
    seoDescription: string | null
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    translationGroupId?: boolean
    locale?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    coverImage?: boolean
    blocksJson?: boolean
    status?: boolean
    translationStatus?: boolean
    sourceVersion?: boolean
    translatedFromVersion?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    translationGroup?: boolean | TranslationGroupDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    translationGroupId?: boolean
    locale?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    coverImage?: boolean
    blocksJson?: boolean
    status?: boolean
    translationStatus?: boolean
    sourceVersion?: boolean
    translatedFromVersion?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    translationGroup?: boolean | TranslationGroupDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    translationGroupId?: boolean
    locale?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    coverImage?: boolean
    blocksJson?: boolean
    status?: boolean
    translationStatus?: boolean
    sourceVersion?: boolean
    translatedFromVersion?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    translationGroup?: boolean | TranslationGroupDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    translationGroupId?: boolean
    locale?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    coverImage?: boolean
    blocksJson?: boolean
    status?: boolean
    translationStatus?: boolean
    sourceVersion?: boolean
    translatedFromVersion?: boolean
    seoTitle?: boolean
    seoDescription?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "translationGroupId" | "locale" | "slug" | "title" | "excerpt" | "coverImage" | "blocksJson" | "status" | "translationStatus" | "sourceVersion" | "translatedFromVersion" | "seoTitle" | "seoDescription" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translationGroup?: boolean | TranslationGroupDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translationGroup?: boolean | TranslationGroupDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translationGroup?: boolean | TranslationGroupDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      translationGroup: Prisma.$TranslationGroupPayload<ExtArgs>
      language: Prisma.$LanguagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      translationGroupId: string
      locale: string
      slug: string
      title: string
      excerpt: string | null
      coverImage: string | null
      blocksJson: Prisma.JsonValue
      status: $Enums.ArticleStatus
      translationStatus: $Enums.TranslationStatus
      sourceVersion: number
      translatedFromVersion: number | null
      seoTitle: string | null
      seoDescription: string | null
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
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
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    translationGroup<T extends TranslationGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TranslationGroupDefaultArgs<ExtArgs>>): Prisma__TranslationGroupClient<$Result.GetResult<Prisma.$TranslationGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    language<T extends LanguageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageDefaultArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'String'>
    readonly translationGroupId: FieldRef<"Article", 'String'>
    readonly locale: FieldRef<"Article", 'String'>
    readonly slug: FieldRef<"Article", 'String'>
    readonly title: FieldRef<"Article", 'String'>
    readonly excerpt: FieldRef<"Article", 'String'>
    readonly coverImage: FieldRef<"Article", 'String'>
    readonly blocksJson: FieldRef<"Article", 'Json'>
    readonly status: FieldRef<"Article", 'ArticleStatus'>
    readonly translationStatus: FieldRef<"Article", 'TranslationStatus'>
    readonly sourceVersion: FieldRef<"Article", 'Int'>
    readonly translatedFromVersion: FieldRef<"Article", 'Int'>
    readonly seoTitle: FieldRef<"Article", 'String'>
    readonly seoDescription: FieldRef<"Article", 'String'>
    readonly publishedAt: FieldRef<"Article", 'DateTime'>
    readonly createdAt: FieldRef<"Article", 'DateTime'>
    readonly updatedAt: FieldRef<"Article", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article updateManyAndReturn
   */
  export type ArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
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


  export const LanguageScalarFieldEnum: {
    code: 'code',
    name: 'name',
    nativeName: 'nativeName',
    enabled: 'enabled',
    isDefault: 'isDefault',
    createdAt: 'createdAt'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const TranslationGroupScalarFieldEnum: {
    id: 'id',
    sourceLocale: 'sourceLocale',
    targetLocales: 'targetLocales',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TranslationGroupScalarFieldEnum = (typeof TranslationGroupScalarFieldEnum)[keyof typeof TranslationGroupScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    translationGroupId: 'translationGroupId',
    locale: 'locale',
    slug: 'slug',
    title: 'title',
    excerpt: 'excerpt',
    coverImage: 'coverImage',
    blocksJson: 'blocksJson',
    status: 'status',
    translationStatus: 'translationStatus',
    sourceVersion: 'sourceVersion',
    translatedFromVersion: 'translatedFromVersion',
    seoTitle: 'seoTitle',
    seoDescription: 'seoDescription',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ArticleStatus'
   */
  export type EnumArticleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArticleStatus'>
    


  /**
   * Reference to a field of type 'ArticleStatus[]'
   */
  export type ListEnumArticleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArticleStatus[]'>
    


  /**
   * Reference to a field of type 'TranslationStatus'
   */
  export type EnumTranslationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TranslationStatus'>
    


  /**
   * Reference to a field of type 'TranslationStatus[]'
   */
  export type ListEnumTranslationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TranslationStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    code?: StringFilter<"Language"> | string
    name?: StringFilter<"Language"> | string
    nativeName?: StringFilter<"Language"> | string
    enabled?: BoolFilter<"Language"> | boolean
    isDefault?: BoolFilter<"Language"> | boolean
    createdAt?: DateTimeFilter<"Language"> | Date | string
    articles?: ArticleListRelationFilter
  }

  export type LanguageOrderByWithRelationInput = {
    code?: SortOrder
    name?: SortOrder
    nativeName?: SortOrder
    enabled?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    articles?: ArticleOrderByRelationAggregateInput
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    name?: StringFilter<"Language"> | string
    nativeName?: StringFilter<"Language"> | string
    enabled?: BoolFilter<"Language"> | boolean
    isDefault?: BoolFilter<"Language"> | boolean
    createdAt?: DateTimeFilter<"Language"> | Date | string
    articles?: ArticleListRelationFilter
  }, "code">

  export type LanguageOrderByWithAggregationInput = {
    code?: SortOrder
    name?: SortOrder
    nativeName?: SortOrder
    enabled?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Language"> | string
    name?: StringWithAggregatesFilter<"Language"> | string
    nativeName?: StringWithAggregatesFilter<"Language"> | string
    enabled?: BoolWithAggregatesFilter<"Language"> | boolean
    isDefault?: BoolWithAggregatesFilter<"Language"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Language"> | Date | string
  }

  export type TranslationGroupWhereInput = {
    AND?: TranslationGroupWhereInput | TranslationGroupWhereInput[]
    OR?: TranslationGroupWhereInput[]
    NOT?: TranslationGroupWhereInput | TranslationGroupWhereInput[]
    id?: StringFilter<"TranslationGroup"> | string
    sourceLocale?: StringFilter<"TranslationGroup"> | string
    targetLocales?: JsonFilter<"TranslationGroup">
    createdAt?: DateTimeFilter<"TranslationGroup"> | Date | string
    updatedAt?: DateTimeFilter<"TranslationGroup"> | Date | string
    articles?: ArticleListRelationFilter
  }

  export type TranslationGroupOrderByWithRelationInput = {
    id?: SortOrder
    sourceLocale?: SortOrder
    targetLocales?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    articles?: ArticleOrderByRelationAggregateInput
  }

  export type TranslationGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TranslationGroupWhereInput | TranslationGroupWhereInput[]
    OR?: TranslationGroupWhereInput[]
    NOT?: TranslationGroupWhereInput | TranslationGroupWhereInput[]
    sourceLocale?: StringFilter<"TranslationGroup"> | string
    targetLocales?: JsonFilter<"TranslationGroup">
    createdAt?: DateTimeFilter<"TranslationGroup"> | Date | string
    updatedAt?: DateTimeFilter<"TranslationGroup"> | Date | string
    articles?: ArticleListRelationFilter
  }, "id">

  export type TranslationGroupOrderByWithAggregationInput = {
    id?: SortOrder
    sourceLocale?: SortOrder
    targetLocales?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TranslationGroupCountOrderByAggregateInput
    _max?: TranslationGroupMaxOrderByAggregateInput
    _min?: TranslationGroupMinOrderByAggregateInput
  }

  export type TranslationGroupScalarWhereWithAggregatesInput = {
    AND?: TranslationGroupScalarWhereWithAggregatesInput | TranslationGroupScalarWhereWithAggregatesInput[]
    OR?: TranslationGroupScalarWhereWithAggregatesInput[]
    NOT?: TranslationGroupScalarWhereWithAggregatesInput | TranslationGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TranslationGroup"> | string
    sourceLocale?: StringWithAggregatesFilter<"TranslationGroup"> | string
    targetLocales?: JsonWithAggregatesFilter<"TranslationGroup">
    createdAt?: DateTimeWithAggregatesFilter<"TranslationGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TranslationGroup"> | Date | string
  }

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: StringFilter<"Article"> | string
    translationGroupId?: StringFilter<"Article"> | string
    locale?: StringFilter<"Article"> | string
    slug?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    excerpt?: StringNullableFilter<"Article"> | string | null
    coverImage?: StringNullableFilter<"Article"> | string | null
    blocksJson?: JsonFilter<"Article">
    status?: EnumArticleStatusFilter<"Article"> | $Enums.ArticleStatus
    translationStatus?: EnumTranslationStatusFilter<"Article"> | $Enums.TranslationStatus
    sourceVersion?: IntFilter<"Article"> | number
    translatedFromVersion?: IntNullableFilter<"Article"> | number | null
    seoTitle?: StringNullableFilter<"Article"> | string | null
    seoDescription?: StringNullableFilter<"Article"> | string | null
    publishedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    translationGroup?: XOR<TranslationGroupScalarRelationFilter, TranslationGroupWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    translationGroupId?: SortOrder
    locale?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    blocksJson?: SortOrder
    status?: SortOrder
    translationStatus?: SortOrder
    sourceVersion?: SortOrder
    translatedFromVersion?: SortOrderInput | SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    translationGroup?: TranslationGroupOrderByWithRelationInput
    language?: LanguageOrderByWithRelationInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    translationGroupId_locale?: ArticleTranslationGroupIdLocaleCompoundUniqueInput
    locale_slug?: ArticleLocaleSlugCompoundUniqueInput
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    translationGroupId?: StringFilter<"Article"> | string
    locale?: StringFilter<"Article"> | string
    slug?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    excerpt?: StringNullableFilter<"Article"> | string | null
    coverImage?: StringNullableFilter<"Article"> | string | null
    blocksJson?: JsonFilter<"Article">
    status?: EnumArticleStatusFilter<"Article"> | $Enums.ArticleStatus
    translationStatus?: EnumTranslationStatusFilter<"Article"> | $Enums.TranslationStatus
    sourceVersion?: IntFilter<"Article"> | number
    translatedFromVersion?: IntNullableFilter<"Article"> | number | null
    seoTitle?: StringNullableFilter<"Article"> | string | null
    seoDescription?: StringNullableFilter<"Article"> | string | null
    publishedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    translationGroup?: XOR<TranslationGroupScalarRelationFilter, TranslationGroupWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }, "id" | "translationGroupId_locale" | "locale_slug">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    translationGroupId?: SortOrder
    locale?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    blocksJson?: SortOrder
    status?: SortOrder
    translationStatus?: SortOrder
    sourceVersion?: SortOrder
    translatedFromVersion?: SortOrderInput | SortOrder
    seoTitle?: SortOrderInput | SortOrder
    seoDescription?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _avg?: ArticleAvgOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
    _sum?: ArticleSumOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Article"> | string
    translationGroupId?: StringWithAggregatesFilter<"Article"> | string
    locale?: StringWithAggregatesFilter<"Article"> | string
    slug?: StringWithAggregatesFilter<"Article"> | string
    title?: StringWithAggregatesFilter<"Article"> | string
    excerpt?: StringNullableWithAggregatesFilter<"Article"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"Article"> | string | null
    blocksJson?: JsonWithAggregatesFilter<"Article">
    status?: EnumArticleStatusWithAggregatesFilter<"Article"> | $Enums.ArticleStatus
    translationStatus?: EnumTranslationStatusWithAggregatesFilter<"Article"> | $Enums.TranslationStatus
    sourceVersion?: IntWithAggregatesFilter<"Article"> | number
    translatedFromVersion?: IntNullableWithAggregatesFilter<"Article"> | number | null
    seoTitle?: StringNullableWithAggregatesFilter<"Article"> | string | null
    seoDescription?: StringNullableWithAggregatesFilter<"Article"> | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Article"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
  }

  export type LanguageCreateInput = {
    code: string
    name: string
    nativeName: string
    enabled?: boolean
    isDefault?: boolean
    createdAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateInput = {
    code: string
    name: string
    nativeName: string
    enabled?: boolean
    isDefault?: boolean
    createdAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nativeName?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nativeName?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageCreateManyInput = {
    code: string
    name: string
    nativeName: string
    enabled?: boolean
    isDefault?: boolean
    createdAt?: Date | string
  }

  export type LanguageUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nativeName?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nativeName?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationGroupCreateInput = {
    id?: string
    sourceLocale: string
    targetLocales: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutTranslationGroupInput
  }

  export type TranslationGroupUncheckedCreateInput = {
    id?: string
    sourceLocale: string
    targetLocales: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutTranslationGroupInput
  }

  export type TranslationGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLocale?: StringFieldUpdateOperationsInput | string
    targetLocales?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutTranslationGroupNestedInput
  }

  export type TranslationGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLocale?: StringFieldUpdateOperationsInput | string
    targetLocales?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutTranslationGroupNestedInput
  }

  export type TranslationGroupCreateManyInput = {
    id?: string
    sourceLocale: string
    targetLocales: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLocale?: StringFieldUpdateOperationsInput | string
    targetLocales?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLocale?: StringFieldUpdateOperationsInput | string
    targetLocales?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateInput = {
    id?: string
    slug: string
    title: string
    excerpt?: string | null
    coverImage?: string | null
    blocksJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ArticleStatus
    translationStatus?: $Enums.TranslationStatus
    sourceVersion?: number
    translatedFromVersion?: number | null
    seoTitle?: string | null
    seoDescription?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    translationGroup: TranslationGroupCreateNestedOneWithoutArticlesInput
    language: LanguageCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: string
    translationGroupId: string
    locale: string
    slug: string
    title: string
    excerpt?: string | null
    coverImage?: string | null
    blocksJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ArticleStatus
    translationStatus?: $Enums.TranslationStatus
    sourceVersion?: number
    translatedFromVersion?: number | null
    seoTitle?: string | null
    seoDescription?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    blocksJson?: JsonNullValueInput | InputJsonValue
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    translationStatus?: EnumTranslationStatusFieldUpdateOperationsInput | $Enums.TranslationStatus
    sourceVersion?: IntFieldUpdateOperationsInput | number
    translatedFromVersion?: NullableIntFieldUpdateOperationsInput | number | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translationGroup?: TranslationGroupUpdateOneRequiredWithoutArticlesNestedInput
    language?: LanguageUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    translationGroupId?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    blocksJson?: JsonNullValueInput | InputJsonValue
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    translationStatus?: EnumTranslationStatusFieldUpdateOperationsInput | $Enums.TranslationStatus
    sourceVersion?: IntFieldUpdateOperationsInput | number
    translatedFromVersion?: NullableIntFieldUpdateOperationsInput | number | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyInput = {
    id?: string
    translationGroupId: string
    locale: string
    slug: string
    title: string
    excerpt?: string | null
    coverImage?: string | null
    blocksJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ArticleStatus
    translationStatus?: $Enums.TranslationStatus
    sourceVersion?: number
    translatedFromVersion?: number | null
    seoTitle?: string | null
    seoDescription?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    blocksJson?: JsonNullValueInput | InputJsonValue
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    translationStatus?: EnumTranslationStatusFieldUpdateOperationsInput | $Enums.TranslationStatus
    sourceVersion?: IntFieldUpdateOperationsInput | number
    translatedFromVersion?: NullableIntFieldUpdateOperationsInput | number | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    translationGroupId?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    blocksJson?: JsonNullValueInput | InputJsonValue
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    translationStatus?: EnumTranslationStatusFieldUpdateOperationsInput | $Enums.TranslationStatus
    sourceVersion?: IntFieldUpdateOperationsInput | number
    translatedFromVersion?: NullableIntFieldUpdateOperationsInput | number | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguageCountOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    nativeName?: SortOrder
    enabled?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    nativeName?: SortOrder
    enabled?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    nativeName?: SortOrder
    enabled?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TranslationGroupCountOrderByAggregateInput = {
    id?: SortOrder
    sourceLocale?: SortOrder
    targetLocales?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranslationGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceLocale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranslationGroupMinOrderByAggregateInput = {
    id?: SortOrder
    sourceLocale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type EnumArticleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArticleStatusFilter<$PrismaModel> | $Enums.ArticleStatus
  }

  export type EnumTranslationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TranslationStatus | EnumTranslationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TranslationStatus[] | ListEnumTranslationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TranslationStatus[] | ListEnumTranslationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTranslationStatusFilter<$PrismaModel> | $Enums.TranslationStatus
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

  export type TranslationGroupScalarRelationFilter = {
    is?: TranslationGroupWhereInput
    isNot?: TranslationGroupWhereInput
  }

  export type LanguageScalarRelationFilter = {
    is?: LanguageWhereInput
    isNot?: LanguageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArticleTranslationGroupIdLocaleCompoundUniqueInput = {
    translationGroupId: string
    locale: string
  }

  export type ArticleLocaleSlugCompoundUniqueInput = {
    locale: string
    slug: string
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    translationGroupId?: SortOrder
    locale?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    coverImage?: SortOrder
    blocksJson?: SortOrder
    status?: SortOrder
    translationStatus?: SortOrder
    sourceVersion?: SortOrder
    translatedFromVersion?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    sourceVersion?: SortOrder
    translatedFromVersion?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    translationGroupId?: SortOrder
    locale?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    coverImage?: SortOrder
    status?: SortOrder
    translationStatus?: SortOrder
    sourceVersion?: SortOrder
    translatedFromVersion?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    translationGroupId?: SortOrder
    locale?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    coverImage?: SortOrder
    status?: SortOrder
    translationStatus?: SortOrder
    sourceVersion?: SortOrder
    translatedFromVersion?: SortOrder
    seoTitle?: SortOrder
    seoDescription?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    sourceVersion?: SortOrder
    translatedFromVersion?: SortOrder
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

  export type EnumArticleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ArticleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArticleStatusFilter<$PrismaModel>
    _max?: NestedEnumArticleStatusFilter<$PrismaModel>
  }

  export type EnumTranslationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TranslationStatus | EnumTranslationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TranslationStatus[] | ListEnumTranslationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TranslationStatus[] | ListEnumTranslationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTranslationStatusWithAggregatesFilter<$PrismaModel> | $Enums.TranslationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTranslationStatusFilter<$PrismaModel>
    _max?: NestedEnumTranslationStatusFilter<$PrismaModel>
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

  export type ArticleCreateNestedManyWithoutLanguageInput = {
    create?: XOR<ArticleCreateWithoutLanguageInput, ArticleUncheckedCreateWithoutLanguageInput> | ArticleCreateWithoutLanguageInput[] | ArticleUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutLanguageInput | ArticleCreateOrConnectWithoutLanguageInput[]
    createMany?: ArticleCreateManyLanguageInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<ArticleCreateWithoutLanguageInput, ArticleUncheckedCreateWithoutLanguageInput> | ArticleCreateWithoutLanguageInput[] | ArticleUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutLanguageInput | ArticleCreateOrConnectWithoutLanguageInput[]
    createMany?: ArticleCreateManyLanguageInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArticleUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<ArticleCreateWithoutLanguageInput, ArticleUncheckedCreateWithoutLanguageInput> | ArticleCreateWithoutLanguageInput[] | ArticleUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutLanguageInput | ArticleCreateOrConnectWithoutLanguageInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutLanguageInput | ArticleUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: ArticleCreateManyLanguageInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutLanguageInput | ArticleUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutLanguageInput | ArticleUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<ArticleCreateWithoutLanguageInput, ArticleUncheckedCreateWithoutLanguageInput> | ArticleCreateWithoutLanguageInput[] | ArticleUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutLanguageInput | ArticleCreateOrConnectWithoutLanguageInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutLanguageInput | ArticleUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: ArticleCreateManyLanguageInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutLanguageInput | ArticleUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutLanguageInput | ArticleUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type ArticleCreateNestedManyWithoutTranslationGroupInput = {
    create?: XOR<ArticleCreateWithoutTranslationGroupInput, ArticleUncheckedCreateWithoutTranslationGroupInput> | ArticleCreateWithoutTranslationGroupInput[] | ArticleUncheckedCreateWithoutTranslationGroupInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutTranslationGroupInput | ArticleCreateOrConnectWithoutTranslationGroupInput[]
    createMany?: ArticleCreateManyTranslationGroupInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutTranslationGroupInput = {
    create?: XOR<ArticleCreateWithoutTranslationGroupInput, ArticleUncheckedCreateWithoutTranslationGroupInput> | ArticleCreateWithoutTranslationGroupInput[] | ArticleUncheckedCreateWithoutTranslationGroupInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutTranslationGroupInput | ArticleCreateOrConnectWithoutTranslationGroupInput[]
    createMany?: ArticleCreateManyTranslationGroupInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ArticleUpdateManyWithoutTranslationGroupNestedInput = {
    create?: XOR<ArticleCreateWithoutTranslationGroupInput, ArticleUncheckedCreateWithoutTranslationGroupInput> | ArticleCreateWithoutTranslationGroupInput[] | ArticleUncheckedCreateWithoutTranslationGroupInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutTranslationGroupInput | ArticleCreateOrConnectWithoutTranslationGroupInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutTranslationGroupInput | ArticleUpsertWithWhereUniqueWithoutTranslationGroupInput[]
    createMany?: ArticleCreateManyTranslationGroupInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutTranslationGroupInput | ArticleUpdateWithWhereUniqueWithoutTranslationGroupInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutTranslationGroupInput | ArticleUpdateManyWithWhereWithoutTranslationGroupInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutTranslationGroupNestedInput = {
    create?: XOR<ArticleCreateWithoutTranslationGroupInput, ArticleUncheckedCreateWithoutTranslationGroupInput> | ArticleCreateWithoutTranslationGroupInput[] | ArticleUncheckedCreateWithoutTranslationGroupInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutTranslationGroupInput | ArticleCreateOrConnectWithoutTranslationGroupInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutTranslationGroupInput | ArticleUpsertWithWhereUniqueWithoutTranslationGroupInput[]
    createMany?: ArticleCreateManyTranslationGroupInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutTranslationGroupInput | ArticleUpdateWithWhereUniqueWithoutTranslationGroupInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutTranslationGroupInput | ArticleUpdateManyWithWhereWithoutTranslationGroupInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type TranslationGroupCreateNestedOneWithoutArticlesInput = {
    create?: XOR<TranslationGroupCreateWithoutArticlesInput, TranslationGroupUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: TranslationGroupCreateOrConnectWithoutArticlesInput
    connect?: TranslationGroupWhereUniqueInput
  }

  export type LanguageCreateNestedOneWithoutArticlesInput = {
    create?: XOR<LanguageCreateWithoutArticlesInput, LanguageUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutArticlesInput
    connect?: LanguageWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumArticleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ArticleStatus
  }

  export type EnumTranslationStatusFieldUpdateOperationsInput = {
    set?: $Enums.TranslationStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TranslationGroupUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<TranslationGroupCreateWithoutArticlesInput, TranslationGroupUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: TranslationGroupCreateOrConnectWithoutArticlesInput
    upsert?: TranslationGroupUpsertWithoutArticlesInput
    connect?: TranslationGroupWhereUniqueInput
    update?: XOR<XOR<TranslationGroupUpdateToOneWithWhereWithoutArticlesInput, TranslationGroupUpdateWithoutArticlesInput>, TranslationGroupUncheckedUpdateWithoutArticlesInput>
  }

  export type LanguageUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<LanguageCreateWithoutArticlesInput, LanguageUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutArticlesInput
    upsert?: LanguageUpsertWithoutArticlesInput
    connect?: LanguageWhereUniqueInput
    update?: XOR<XOR<LanguageUpdateToOneWithWhereWithoutArticlesInput, LanguageUpdateWithoutArticlesInput>, LanguageUncheckedUpdateWithoutArticlesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumArticleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArticleStatusFilter<$PrismaModel> | $Enums.ArticleStatus
  }

  export type NestedEnumTranslationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TranslationStatus | EnumTranslationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TranslationStatus[] | ListEnumTranslationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TranslationStatus[] | ListEnumTranslationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTranslationStatusFilter<$PrismaModel> | $Enums.TranslationStatus
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

  export type NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ArticleStatus[] | ListEnumArticleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ArticleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArticleStatusFilter<$PrismaModel>
    _max?: NestedEnumArticleStatusFilter<$PrismaModel>
  }

  export type NestedEnumTranslationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TranslationStatus | EnumTranslationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TranslationStatus[] | ListEnumTranslationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TranslationStatus[] | ListEnumTranslationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTranslationStatusWithAggregatesFilter<$PrismaModel> | $Enums.TranslationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTranslationStatusFilter<$PrismaModel>
    _max?: NestedEnumTranslationStatusFilter<$PrismaModel>
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

  export type ArticleCreateWithoutLanguageInput = {
    id?: string
    slug: string
    title: string
    excerpt?: string | null
    coverImage?: string | null
    blocksJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ArticleStatus
    translationStatus?: $Enums.TranslationStatus
    sourceVersion?: number
    translatedFromVersion?: number | null
    seoTitle?: string | null
    seoDescription?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    translationGroup: TranslationGroupCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateWithoutLanguageInput = {
    id?: string
    translationGroupId: string
    slug: string
    title: string
    excerpt?: string | null
    coverImage?: string | null
    blocksJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ArticleStatus
    translationStatus?: $Enums.TranslationStatus
    sourceVersion?: number
    translatedFromVersion?: number | null
    seoTitle?: string | null
    seoDescription?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCreateOrConnectWithoutLanguageInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutLanguageInput, ArticleUncheckedCreateWithoutLanguageInput>
  }

  export type ArticleCreateManyLanguageInputEnvelope = {
    data: ArticleCreateManyLanguageInput | ArticleCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithWhereUniqueWithoutLanguageInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutLanguageInput, ArticleUncheckedUpdateWithoutLanguageInput>
    create: XOR<ArticleCreateWithoutLanguageInput, ArticleUncheckedCreateWithoutLanguageInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutLanguageInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutLanguageInput, ArticleUncheckedUpdateWithoutLanguageInput>
  }

  export type ArticleUpdateManyWithWhereWithoutLanguageInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutLanguageInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    OR?: ArticleScalarWhereInput[]
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    id?: StringFilter<"Article"> | string
    translationGroupId?: StringFilter<"Article"> | string
    locale?: StringFilter<"Article"> | string
    slug?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    excerpt?: StringNullableFilter<"Article"> | string | null
    coverImage?: StringNullableFilter<"Article"> | string | null
    blocksJson?: JsonFilter<"Article">
    status?: EnumArticleStatusFilter<"Article"> | $Enums.ArticleStatus
    translationStatus?: EnumTranslationStatusFilter<"Article"> | $Enums.TranslationStatus
    sourceVersion?: IntFilter<"Article"> | number
    translatedFromVersion?: IntNullableFilter<"Article"> | number | null
    seoTitle?: StringNullableFilter<"Article"> | string | null
    seoDescription?: StringNullableFilter<"Article"> | string | null
    publishedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
  }

  export type ArticleCreateWithoutTranslationGroupInput = {
    id?: string
    slug: string
    title: string
    excerpt?: string | null
    coverImage?: string | null
    blocksJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ArticleStatus
    translationStatus?: $Enums.TranslationStatus
    sourceVersion?: number
    translatedFromVersion?: number | null
    seoTitle?: string | null
    seoDescription?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    language: LanguageCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateWithoutTranslationGroupInput = {
    id?: string
    locale: string
    slug: string
    title: string
    excerpt?: string | null
    coverImage?: string | null
    blocksJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ArticleStatus
    translationStatus?: $Enums.TranslationStatus
    sourceVersion?: number
    translatedFromVersion?: number | null
    seoTitle?: string | null
    seoDescription?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCreateOrConnectWithoutTranslationGroupInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutTranslationGroupInput, ArticleUncheckedCreateWithoutTranslationGroupInput>
  }

  export type ArticleCreateManyTranslationGroupInputEnvelope = {
    data: ArticleCreateManyTranslationGroupInput | ArticleCreateManyTranslationGroupInput[]
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithWhereUniqueWithoutTranslationGroupInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutTranslationGroupInput, ArticleUncheckedUpdateWithoutTranslationGroupInput>
    create: XOR<ArticleCreateWithoutTranslationGroupInput, ArticleUncheckedCreateWithoutTranslationGroupInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutTranslationGroupInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutTranslationGroupInput, ArticleUncheckedUpdateWithoutTranslationGroupInput>
  }

  export type ArticleUpdateManyWithWhereWithoutTranslationGroupInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutTranslationGroupInput>
  }

  export type TranslationGroupCreateWithoutArticlesInput = {
    id?: string
    sourceLocale: string
    targetLocales: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationGroupUncheckedCreateWithoutArticlesInput = {
    id?: string
    sourceLocale: string
    targetLocales: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationGroupCreateOrConnectWithoutArticlesInput = {
    where: TranslationGroupWhereUniqueInput
    create: XOR<TranslationGroupCreateWithoutArticlesInput, TranslationGroupUncheckedCreateWithoutArticlesInput>
  }

  export type LanguageCreateWithoutArticlesInput = {
    code: string
    name: string
    nativeName: string
    enabled?: boolean
    isDefault?: boolean
    createdAt?: Date | string
  }

  export type LanguageUncheckedCreateWithoutArticlesInput = {
    code: string
    name: string
    nativeName: string
    enabled?: boolean
    isDefault?: boolean
    createdAt?: Date | string
  }

  export type LanguageCreateOrConnectWithoutArticlesInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutArticlesInput, LanguageUncheckedCreateWithoutArticlesInput>
  }

  export type TranslationGroupUpsertWithoutArticlesInput = {
    update: XOR<TranslationGroupUpdateWithoutArticlesInput, TranslationGroupUncheckedUpdateWithoutArticlesInput>
    create: XOR<TranslationGroupCreateWithoutArticlesInput, TranslationGroupUncheckedCreateWithoutArticlesInput>
    where?: TranslationGroupWhereInput
  }

  export type TranslationGroupUpdateToOneWithWhereWithoutArticlesInput = {
    where?: TranslationGroupWhereInput
    data: XOR<TranslationGroupUpdateWithoutArticlesInput, TranslationGroupUncheckedUpdateWithoutArticlesInput>
  }

  export type TranslationGroupUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLocale?: StringFieldUpdateOperationsInput | string
    targetLocales?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationGroupUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceLocale?: StringFieldUpdateOperationsInput | string
    targetLocales?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUpsertWithoutArticlesInput = {
    update: XOR<LanguageUpdateWithoutArticlesInput, LanguageUncheckedUpdateWithoutArticlesInput>
    create: XOR<LanguageCreateWithoutArticlesInput, LanguageUncheckedCreateWithoutArticlesInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutArticlesInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutArticlesInput, LanguageUncheckedUpdateWithoutArticlesInput>
  }

  export type LanguageUpdateWithoutArticlesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nativeName?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUncheckedUpdateWithoutArticlesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nativeName?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyLanguageInput = {
    id?: string
    translationGroupId: string
    slug: string
    title: string
    excerpt?: string | null
    coverImage?: string | null
    blocksJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ArticleStatus
    translationStatus?: $Enums.TranslationStatus
    sourceVersion?: number
    translatedFromVersion?: number | null
    seoTitle?: string | null
    seoDescription?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    blocksJson?: JsonNullValueInput | InputJsonValue
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    translationStatus?: EnumTranslationStatusFieldUpdateOperationsInput | $Enums.TranslationStatus
    sourceVersion?: IntFieldUpdateOperationsInput | number
    translatedFromVersion?: NullableIntFieldUpdateOperationsInput | number | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translationGroup?: TranslationGroupUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    translationGroupId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    blocksJson?: JsonNullValueInput | InputJsonValue
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    translationStatus?: EnumTranslationStatusFieldUpdateOperationsInput | $Enums.TranslationStatus
    sourceVersion?: IntFieldUpdateOperationsInput | number
    translatedFromVersion?: NullableIntFieldUpdateOperationsInput | number | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    translationGroupId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    blocksJson?: JsonNullValueInput | InputJsonValue
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    translationStatus?: EnumTranslationStatusFieldUpdateOperationsInput | $Enums.TranslationStatus
    sourceVersion?: IntFieldUpdateOperationsInput | number
    translatedFromVersion?: NullableIntFieldUpdateOperationsInput | number | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyTranslationGroupInput = {
    id?: string
    locale: string
    slug: string
    title: string
    excerpt?: string | null
    coverImage?: string | null
    blocksJson: JsonNullValueInput | InputJsonValue
    status?: $Enums.ArticleStatus
    translationStatus?: $Enums.TranslationStatus
    sourceVersion?: number
    translatedFromVersion?: number | null
    seoTitle?: string | null
    seoDescription?: string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateWithoutTranslationGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    blocksJson?: JsonNullValueInput | InputJsonValue
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    translationStatus?: EnumTranslationStatusFieldUpdateOperationsInput | $Enums.TranslationStatus
    sourceVersion?: IntFieldUpdateOperationsInput | number
    translatedFromVersion?: NullableIntFieldUpdateOperationsInput | number | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    language?: LanguageUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateWithoutTranslationGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    blocksJson?: JsonNullValueInput | InputJsonValue
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    translationStatus?: EnumTranslationStatusFieldUpdateOperationsInput | $Enums.TranslationStatus
    sourceVersion?: IntFieldUpdateOperationsInput | number
    translatedFromVersion?: NullableIntFieldUpdateOperationsInput | number | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyWithoutTranslationGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    blocksJson?: JsonNullValueInput | InputJsonValue
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    translationStatus?: EnumTranslationStatusFieldUpdateOperationsInput | $Enums.TranslationStatus
    sourceVersion?: IntFieldUpdateOperationsInput | number
    translatedFromVersion?: NullableIntFieldUpdateOperationsInput | number | null
    seoTitle?: NullableStringFieldUpdateOperationsInput | string | null
    seoDescription?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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