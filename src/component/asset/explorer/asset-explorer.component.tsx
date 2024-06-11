import React, { useState } from 'react';
// import SearchBar from './SearchBar';

// import AssetGrid from './AssetGrid';
import { Asset } from 'src/data/asset';
 import { sampleAssets } from 'src/data/sample.data';

const AssetExplorer: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>(sampleAssets);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAssets = assets.filter(asset =>
    asset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="container mx-auto p-4">
      {/* <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <AssetGrid assets={filteredAssets} /> */}
    </div>
  );
};

export default AssetExplorer;