'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

class AdCodeWithoutRouter extends React.Component {
  renderAds() {
    (adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1052552});
  }

  componentDidMount() {
    this.renderAds();
  }

  componentDidUpdate(prevProps) {
    if (this.props.router.asPath !== prevProps.router.asPath) {
      this.renderAds();
    }
  }

  render() {
    return (
      <div className="container mx-auto text-center" aria-hidden={true}>
        <Ins
          className="adsbyjuicy"
          id="1052552" data-width="300" data-height="112"
        ></Ins>
        <Script dangerouslySetInnerHTML={{ __html: '(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1052552});' }}></Script>
      </div>
    );
  }
}

const AdCode = () => {
  const router = useRouter();
  return <AdCodeWithoutRouter router={router} />;
};

export default AdCode;
