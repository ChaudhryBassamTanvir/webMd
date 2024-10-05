"use client";
import Cities from '@/app/components/topdoctorcomponents/cities';
import BrowseOptions from '@/app/components/webcarelinks/BrowseOptions';
import FindDoc2 from '@/app/components/webcarelinks/FindDoc2';
import ProviderList2 from '@/app/components/webcarelinks/ProviderList2';
import Search from '@/app/components/webcarelinks/Search';
import TopBar2 from '@/app/components/webcarelinks/TopBar2';
import WebCareFooter from '@/app/components/webcarelinks/WebCareFooter';
import { linksData } from '@/constants/state-links-data';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

function LinksDetails() {
  const { slug } = useParams();
  const [condition, setCondition] = useState(null);

  useEffect(() => {
    const fetchCondition:any = linksData.find((item) => item.slug === slug);
    setCondition(fetchCondition);
  }, [slug]);

  return (
    <div>
      <div className='bg-[#F1F4F4]'>
        <div className='bg-[#05284A]'>
          <TopBar2 />
          <Search />
        </div>
        <div className='space-y-6'>
          {condition ? <Cities condition={condition} /> : <p>Loading...</p>}
          <BrowseOptions />
          <FindDoc2 />
          <ProviderList2 />
        </div>
        <WebCareFooter />
      </div>
    </div>
  );
}

export default LinksDetails;
