import { inspect, performanceTest } from '../lib/util';
import { maxSequence } from './incomplete/medium/maximumSubArray';
import { findAllSubArrays } from './custom/findAllSubArrays';

// inspect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), Infinity);
inspect(
  maxSequence([7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43]),
  Infinity
);
