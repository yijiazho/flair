import React, { Component } from 'react';
import { Asset } from 'src/data/asset';

interface AssetGridProps {
  assets: Asset[];
}

export class AssetGridComponent extends Component<AssetGridProps> {
  render() {
    const { assets } = this.props;

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {assets.map((asset, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded">
            <h2 className="font-bold">{asset.title}</h2>
            <p>{asset.description}</p>
            <div className="text-sm text-gray-500">{asset.date}</div>
            <div className="mt-2">
              {asset.tags.map((tag, idx) => (
                <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
