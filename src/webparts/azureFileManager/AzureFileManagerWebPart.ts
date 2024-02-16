import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import AzureFileManager from './components/AzureFileManager';
import { IAzureFileManagerProps } from './components/IAzureFileManagerProps';
import { SPFI } from '@pnp/sp';
import { getSP } from '../../pnp-preset';
import * as strings from 'AzureFileManagerWebPartStrings';


export interface IAzureFileManagerWebPartProps {
  description: string;
  sp: SPFI;
}

export default class AzureFileManagerWebPart extends BaseClientSideWebPart<IAzureFileManagerWebPartProps> {


  private _environmentMessage: string = '';
  private _sp: SPFI;

  public render(): void {
    const element: React.ReactElement<IAzureFileManagerProps> = React.createElement(
      AzureFileManager,
      {
        description: this.properties.description,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    this._sp = getSP(this.context);
    console.log(this._sp.web);
    return super.onInit();
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
