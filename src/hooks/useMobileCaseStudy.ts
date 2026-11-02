import { useSyncExternalStore } from 'react';

const subscribe = (notify: () => void) => {
  const query = matchMedia('(max-width: 719px)');
  query.addEventListener('change', notify);
  return () => query.removeEventListener('change', notify);
};
export function useMobileCaseStudy() {
  return useSyncExternalStore(
    subscribe,
    () => matchMedia('(max-width: 719px)').matches,
    () => false,
  );
}
