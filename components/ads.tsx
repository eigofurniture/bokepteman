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
        <Ins
          className="adsbyjuicy" id="1052552" data-width="300" data-height="112"
        ></Ins>
        <Script dangerouslySetInnerHTML={{ __html: '(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1052552});' }}></Script>
    );
  }
}

const AdCode = () => {
  const router = useRouter();
  return <AdCodeWithoutRouter router={router} />;
};

export default AdCode;
