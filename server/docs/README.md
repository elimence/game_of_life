# API Reference

## Top-Level Exports

- [`createServer(options)`](#createserveroptions)
- [`createRouter(options)`](#createrouteroptions)
- [`createClient(options)`](#createclientoptions)

### [Services](services.md)

- [`createEchoService(options)`](services.md#createechoserviceoptions)

### Importing

Every function described above is a top-level export.
You can import any of them like this:

```js
import { createServer } from '@mlabs/ceruba-api'
```

## `createServer(options)`

Creates an Express server and health monitor.

#### Arguments

1. `options` (*object*):
  - `log` (*object*): A [Logger]. If not provided, a silent one will be created.

#### Returns

- (*object*):
  - `server` (*object*): The [Express Application].
  - `healthMonitor` (*object*): The [Health Monitor].

### Example

```js
const { server } = createServer()
server.listen(3000)
```

## `createRouter(options)`

Creates an Express router for the API.

#### Arguments

1. `options` (*object*):
  - `echoService` (*object*): An [EchoService](services.md#echoservice) instance.
  - `healthMonitor` (*object*): A [Health Monitor].
    Defaults to an always healthy monitor.
  - `log` (*object*): A [Logger]. If not provided, a silent one will be created.

#### Returns

(*object*): The [Express Router].

### Example

```js
const app = express()
const echoService = createEchoService({...})
const router = createRouter({echoService})
app.use('/', router)
app.listen(3000)
```

## `createClient(options)`

#### Arguments

1. `options` (*object*): [Client](#client) options.

#### Returns

(*object*): New [Client](#client) instance.

### Example

```js
const client = createClient({api: 'https://example.com'})
client.getEcho('foo')
```

## Client

All methods are asynchronous (return a promise) unless otherwise noted.

### Constructor

1. `options` (*object*):
  - `api` (*string*): The API URL to use for requests.
  - `log` (*object*): A [Logger]. If not provided, a silent one will be created.

### `health()`

#### Returns

(*boolean*): If the client is healthy.

### `getEcho(value)`

#### Arguments

1. `value` (*string*): The value to echo.

#### Returns

(*string*): The echoed value.

[Express Application]: https://expressjs.com/en/api.html#app
[Express Router]: https://expressjs.com/en/api.html#router
[Health Monitor]: https://fire-docs.meltwaterlabs.com/packages/health-monitor/
[Logger]: https://fire-docs.meltwaterlabs.com/packages/logger/
