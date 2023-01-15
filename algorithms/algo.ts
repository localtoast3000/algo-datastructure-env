import { inspect, performanceTest } from '../lib/util';
import { maxSequence } from './complete/hard/maximumSubArray';
import { findAllSubArrays } from './custom/findAllSubArrays';

// inspect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), Infinity);
inspect(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]), Infinity);
