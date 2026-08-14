export interface Device {
  id: number;
  name: string;
  slotToAssetMap?: Record<string, string>;
}
