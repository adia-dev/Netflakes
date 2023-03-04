type TableFields {
  name: string;
  type: string;
  key?: string;
}

export type Table = {
  name: string;
  fields: TableFields[];
  isRelationTable: boolean;
  relations?: string[];
  comment?: string;
};
