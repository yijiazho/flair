import { Asset } from "src/data/asset";
import { SearchFilters } from "src/data/search-filters";

export const filterAssets = (assets: Asset[], filters: SearchFilters): Asset[] => {
    return assets.filter(asset => {
        
        const assetDate = new Date(asset.date).getTime();
        const startDate = filters.dateRange.start;
        const endDate = filters.dateRange.end;

        console.log(asset)
        
        asset.tags.forEach(tag => {
            console.log(tag)

            const flag = tag.includes(filters.tags);
            console.log(flag);
        })

        return (
            asset.title.includes(filters.query) &&
            asset.description.includes(filters.description) &&
            asset.tags.some(tag => tag.includes(filters.tags)) &&
            assetDate >= startDate &&
            assetDate <= endDate
        );
    });
};