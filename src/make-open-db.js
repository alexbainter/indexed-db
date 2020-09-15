import attachEventListener from './attach-event-listener';
import promisifyRequest from './promisify-request';

const makeOpenDb = ({ dbName, dbVersion, onUpgradeNeeded } = {}) => () => {
  const request = self.indexedDB.open(dbName, dbVersion);
  attachEventListener(request, 'upgradeneeded', onUpgradeNeeded);
  return promisifyRequest(request);
};

export default makeOpenDb;
