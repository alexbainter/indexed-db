# @alexbainter/indexed-db

IndexedDB utilities.

## Usage

```javascript
import { makeOpenDb, promififyRequest } from '@alexbainter/indexed-db';

const dbName = 'my-indexed-db';
const dbVersion = 2;

const onUpgradeNeeded = (event) => {
  if (event.oldVersion === 1) {
    // do something
  }
  const db = event.target.result;
  db.createObjectStore('my-object-store');
};

const openDb = makeOpenDb({ dbName, dbVersion, onUpgradeNeeded });

openDb()
  .then((db) =>
    promisifyRequest(
      db
        .transaction(['my-object-store'])
        .objectStore('my-object-store')
        .get('my-object')
    )
  )
  .then((myObject) => {
    // do something
  })
  .catch((error) => {
    // oh no
  });
```
