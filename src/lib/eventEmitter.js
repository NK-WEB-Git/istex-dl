import { EventEmitter } from 'eventemitter3';

export const events = {
  compressionLevelChanged: 'compressionLevelChanged',
  archiveTypeChanged: 'archiveTypeChanged',
  localStorageUpdated: 'localStorageUpdated',
  modalCloseRequest: 'modalCloseRequest',
  queryInputChanged: 'queryInputChanged',
  qIdChanged: 'qIdChanged',
  queryModeChanged: 'queryModeChanged',
  numberOfDocumentsChanged: 'numberOfDocumentsChanged',
  rankingModeChanged: 'rankingModeChanged',
  resultPreviewResponseReceived: 'resultPreviewResponseReceived',
  resetResultPreview: 'resetResultPreview',
  updateQueryStringParam: 'updateQueryStringParam',
  updateQIdParam: 'updateQIdParam',
  updateNumberOfDocumentsParam: 'updateNumberOfDocumentsParam',
  updateRankingModeParam: 'updateRankingModeParam',
  updateExtractParam: 'updateExtractParam',
  updateCompressionLevelParam: 'updateCompressionLevelParam',
  updateArchiveTypeParam: 'updateArchiveTypeParam',
  resetSearchParams: 'resetSearchParams',
  formatsChanged: 'formatsChanged',
};

export default new EventEmitter();