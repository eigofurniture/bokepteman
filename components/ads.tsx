import Script from 'next/script';
const AdScript = () => {
  useEffect(() => {
<Script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></Script>
<Ins id="1052552" data-width="300" data-height="112"></Ins>
<Script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1052552});</Script>
    return () => {
      // Clean up and remove the ad script
      // ...
    };
  }, []);

  return null;
};

export default AdScript;
