declare interface IEmployeeDirectoryStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'employeeDirectoryStrings' {
  const strings: IEmployeeDirectoryStrings;
  export = strings;
}
