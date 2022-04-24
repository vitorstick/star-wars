import { MultiResult } from './multi-result.interface';

export type Pagination = Pick<MultiResult<any>, 'next' | 'previous'>;
