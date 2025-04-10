export interface UserInfoInterface {
  userName?: string;
  address?: string;
  email?: string;
}

export enum SolanaWalletsEnum {
  Backpack = "Backpack",
  Phantom = "Phantom",
  Solflare = "Solflare",
}

export enum TriggerType {
  WS = "WS",
}

interface SchemaField {
  name: string;
  type: string;
  nullable: boolean;
}

export interface IndexerTableMetadata {
  id: number;
  tableName: string;
  fullTableName: string;
  schema: SchemaField[];
  indexerId: number;
}

export interface ExecuteQueryResponse {
  query: string;
  schema: { [key: string]: any };
  rows: { [key: string]: any }[];
}

export interface TransformerPda {
  script: string;
}

export interface TriggerAndTransformer {
  triggerType: string;
  pdaPubkey: string;
  pdaName: string;
  transformerPdaId: number;
  transformerPda: TransformerPda;
  indexerTableId: number;
  indexerId: number;
}
