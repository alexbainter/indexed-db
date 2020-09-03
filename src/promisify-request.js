import attachEventListener from './attach-event-listener';

const promisifyRequest = (request) =>
  new Promise((resolve, reject) => {
    attachEventListener(request, 'error', () => reject(request.error));
    attachEventListener(request, 'success', (event) =>
      resolve(event.target.result)
    );
  });

export default promisifyRequest;
