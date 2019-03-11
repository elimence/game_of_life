# Services

## `createEchoService(options)`

#### Arguments

1. `options` (*object*): [EchoService](#echoservice) options.

#### Returns

(*object*): New [EchoService](#echoservice) instance.

## Echo Service

All methods are asynchronous (return a promise) unless otherwise noted.

### Constructor

1. `options` (*object*):
  - `log` (*object*): A [Logger]. If not provided, a silent one will be created.

### `health()`

#### Returns

(*boolean*): If the service is healthy.

### `echo(value)`

#### Arguments

1. `value` (*string*): The value to echo.

#### Returns

(*string*): The echoed value.

[Logger]: https://fire-docs.meltwaterlabs.com/packages/logger/
