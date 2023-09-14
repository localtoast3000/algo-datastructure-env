import test from '@lib/test';
import { bitCounting } from './algorithms/incomplete/easy/bitCounting';

test.unit(bitCounting, [{ args: [10], expected: 2 }]);
