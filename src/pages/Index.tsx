
import React from 'react';
import { Layout } from '@/components/Layout';
import { HomeHero } from '@/components/HomeHero';
import { GitScanner } from '@/components/GitScanner';
import { WebsiteScanner } from '@/components/WebsiteScanner';

const Index: React.FC = () => {
  return (
    <Layout>
      <HomeHero />
      <div id="git-scanner">
        <GitScanner />
      </div>
      <div id="website-scanner">
        <WebsiteScanner />
      </div>
    </Layout>
  );
};

export default Index;
