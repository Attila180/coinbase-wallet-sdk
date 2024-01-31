import { ErrorHandler } from '../core/error';

export interface RelayUIOptions {
  linkAPIUrl: string;
  version: string;
  darkMode: boolean;
}

export interface RelayUI {
  attach(): void;

  /**
   *
   * @param options onCancel callback for user clicking cancel,
   *  onResetConnection user clicked reset connection
   *
   * @returns callback that call can call to hide the connecting ui
   */
  showConnecting(options: {
    isUnlinkedErrorState?: boolean;
    onCancel: ErrorHandler;
    onResetConnection: () => void;
  }): () => void;

  /**
   * Reload document ui
   */
  reloadUI(): void;
}
