import * as React from 'react';
import { IAzureFileManagerProps } from './IAzureFileManagerProps';
import { Button, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger } from '@fluentui/react-components';
import { MoreHorizontalRegular } from '@fluentui/react-icons';

const AzureFileManager: React.FC<IAzureFileManagerProps> = (props) => {

    return (
      <section>
            <Menu>                    
                <MenuTrigger disableButtonEnhancement>
                <Button icon={<MoreHorizontalRegular />} aria-label="More" />
            </MenuTrigger>

                <MenuPopover>
                    <MenuList>
                        <MenuItem>New </MenuItem>
                        <MenuItem>New Window</MenuItem>
                        <MenuItem disabled>Open File</MenuItem>
                        <MenuItem>Open Folder</MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>
      </section>
    );
  }
export default AzureFileManager;
