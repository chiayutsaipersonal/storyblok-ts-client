import { ICredentials, IPendingStory } from '../interfaces';
import { Folder } from './Folder';
import { RootFolder } from './RootFolder';
import { Story } from './Story';
import { Subfolder } from './Subfolder';
export declare class FolderIndex extends Story {
    private parent;
    constructor(credentials: ICredentials, data: IPendingStory, parent: Folder | RootFolder | Subfolder | Story);
    protected sync(): Promise<void>;
}
//# sourceMappingURL=FolderIndex.d.ts.map