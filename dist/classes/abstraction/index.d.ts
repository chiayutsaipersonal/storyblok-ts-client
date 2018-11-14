import { Asset } from './Asset';
import { AssetFolder } from './AssetFolder';
import { Component } from './Component';
import { Content } from './Content';
import { Folder } from './Folder';
import { FolderIndex } from './FolderIndex';
import { RootFolder } from './RootFolder';
import { Space } from './Space';
import { Story } from './Story';
import { Subfolder } from './Subfolder';
import { IAssetFolder, ICredentials, IPendingComponent, IPendingStory } from '../../interfaces';
export declare function abstraction(credentials?: ICredentials): {
    Asset: (filePath: string, assetFolder: IAssetFolder) => Asset;
    AssetFolder: (data: IAssetFolder) => AssetFolder;
    Component: (data: IPendingComponent) => Component;
    Content: (data: IPendingStory, parent: Story | Folder | RootFolder | Subfolder) => Content;
    Folder: (data: IPendingStory) => Folder;
    FolderIndex: (data: IPendingStory, parent: Story | Folder | RootFolder | Subfolder) => FolderIndex;
    RootFolder: (data: IPendingStory) => RootFolder;
    Space: () => Space;
    Story: (data: IPendingStory) => Story;
    Subfolder: (data: IPendingStory, parent: Story | Folder | RootFolder | Subfolder) => Subfolder;
};
//# sourceMappingURL=index.d.ts.map