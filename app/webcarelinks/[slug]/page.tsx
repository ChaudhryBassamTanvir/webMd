"use client"
import BrowseOptions from '@/app/components/webcarelinks/BrowseOptions';
import FindDoc2 from '@/app/components/webcarelinks/FindDoc2';
import FindTopDentists from '@/app/components/webcarelinks/FindTopDentists';
import ProviderList2 from '@/app/components/webcarelinks/ProviderList2';
import Search from '@/app/components/webcarelinks/Search';
import TopBar2 from '@/app/components/webcarelinks/TopBar2';
import WebCareFooter from '@/app/components/webcarelinks/WebCareFooter';
import { TopDoctors } from '@/constants/top-doctors';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

function CareLinksDetails( ) {
  const { slug } = useParams();
  const [condition, setCondition] = useState(null);
  console.log("condition", condition);

  const fetchCondition = TopDoctors.find((item) => {
    return item.slug === slug;
  });

  return (
    <div>
      <div className='bg-[#F1F4F4]'>
        <div className='bg-[#05284A]'>
          <TopBar2 />
          <Search />
        </div>
        <div className='space-y-6'>
          <FindTopDentists condition={fetchCondition} />
          <BrowseOptions />
          <FindDoc2 />
          <ProviderList2 />
        </div>
        <WebCareFooter />
      </div>
    </div>
  );
}

export default CareLinksDetails;
