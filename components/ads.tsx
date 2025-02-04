import {useEffect} from 'react';

export function GoogleAd() {
  useEffect(() => {
    try {
      // @ts-ignore
      (adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1052552});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <ins
      id="1052552" data-width="300" data-height="112"
    />
  );
}
