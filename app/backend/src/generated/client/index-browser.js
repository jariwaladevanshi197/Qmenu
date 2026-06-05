
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  fullname: 'fullname',
  username: 'username',
  email: 'email',
  password: 'password'
};

exports.Prisma.RestaurantScalarFieldEnum = {
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
  maxStaff: 'maxStaff',
  websiteEnabled: 'websiteEnabled',
  tagline: 'tagline',
  aboutText: 'aboutText',
  bannerImage: 'bannerImage',
  openingHours: 'openingHours',
  phone: 'phone',
  whatsapp: 'whatsapp',
  facebookUrl: 'facebookUrl',
  instagramUrl: 'instagramUrl',
  galleryImages: 'galleryImages',
  mapEmbed: 'mapEmbed'
};

exports.Prisma.StaffScalarFieldEnum = {
  id: 'id',
  restroid: 'restroid',
  fullname: 'fullname',
  username: 'username',
  password: 'password',
  role: 'role',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.ThemeScalarFieldEnum = {
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

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  restroid: 'restroid',
  name_eng: 'name_eng',
  name_guj: 'name_guj',
  name_hindi: 'name_hindi',
  categorydesc: 'categorydesc',
  sortorder: 'sortorder'
};

exports.Prisma.MenuItemScalarFieldEnum = {
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

exports.Prisma.TableScalarFieldEnum = {
  id: 'id',
  restroid: 'restroid',
  name: 'name',
  qrimage: 'qrimage'
};

exports.Prisma.OrderScalarFieldEnum = {
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

exports.Prisma.OrderItemScalarFieldEnum = {
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

exports.Prisma.OrderHistoryScalarFieldEnum = {
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

exports.Prisma.HistoryItemScalarFieldEnum = {
  id: 'id',
  orderid: 'orderid',
  name_eng: 'name_eng',
  name_guj: 'name_guj',
  name_hindi: 'name_hindi',
  price: 'price',
  quantity: 'quantity',
  totalprice: 'totalprice'
};

exports.Prisma.FeedbackScalarFieldEnum = {
  id: 'id',
  restroid: 'restroid',
  fullname: 'fullname',
  mobile: 'mobile',
  email: 'email',
  feedback: 'feedback',
  dob: 'dob',
  timestamp: 'timestamp'
};

exports.Prisma.PaymentHistoryScalarFieldEnum = {
  id: 'id',
  restroid: 'restroid',
  paymentdate: 'paymentdate',
  subplan: 'subplan',
  price: 'price',
  subtype: 'subtype',
  expdate: 'expdate'
};

exports.Prisma.WaiterRequestScalarFieldEnum = {
  id: 'id',
  restroid: 'restroid',
  tableid: 'tableid',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.OrderStatus = exports.$Enums.OrderStatus = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
