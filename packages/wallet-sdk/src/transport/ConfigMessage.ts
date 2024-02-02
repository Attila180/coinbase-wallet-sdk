import { Message } from './CrossDomainCommunicator';

export interface ConfigMessage extends Message {
  type: 'config';
  event: {
    type: ClientConfigEventType | HostConfigEventType;
    value?: unknown;
  };
}

export enum ClientConfigEventType {
  SelectConnectionType = 'selectConnectionType',
  DappOriginMessage = 'dappOriginMessage',
  WalletLinkUrl = 'walletLinkUrl',
}

export enum HostConfigEventType {
  PopupListenerAdded = 'popupListenerAdded',
  PopupReadyForRequest = 'popupReadyForRequest',
  ConnectionTypeSelected = 'connectionTypeSelected',
  RequestWalletLinkUrl = 'requestWalletLinkUrl',
}

export type ConnectionType = 'scw' | 'walletlink' | 'extension';

export function isConfigMessage(msg: Message): msg is ConfigMessage {
  return msg.type === 'config' && 'event' in msg;
}