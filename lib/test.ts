import util from 'util';
import { performance } from 'perf_hooks';

/**
 * Interface for defining test cases
 */
interface TestCase {
  args: any[];
  expected: any;
}

/**
 * @module TestingUtilities
 *
 * Module containing utility methods for testing and inspection.
 *
 */
export default (() => {
  return {
    /**
     * @method inspect
     *
     * Prints an in-depth inspection of a given item.
     *
     * @param {unknown} itemToInspect - The item to inspect.
     * @param {number} [depth=2] - Depth level for inspection.
     */
    inspect(itemToInspect: unknown, depth: number = 2): void {
      console.log(
        util.inspect(itemToInspect, { depth, colors: true, showHidden: false })
      );
    },

    /**
     * @method performance
     *
     * Measures and prints the performance of a given function.
     *
     * @param {string} testName - The name of the test.
     * @param {Function} funcReference - A reference to the function to be tested.
     * @param {Array} args - An array containing the arguments to be passed to the function.
     */
    performance(
      testName: string,
      funcReference: (...args: any[]) => any,
      args: any[]
    ): void {
      const start = performance.now();
      const result = funcReference(...args);
      const end = performance.now();
      const time = end - start;

      console.log(`
\x1b[36mTest Name:\x1b[0m ${testName}
\x1b[36mExecution time:\x1b[0m ${time} ms
\x1b[36mReturn Value:\x1b[0m ${util.inspect(result, { depth: 0, colors: true })}
      `);
    },

    /**
     * @method unit
     *
     * Runs unit tests for a given function.
     *
     * @param {Function} func - A reference to the function to be tested.
     * @param {Array<TestCase>} testCases - An array of test case objects.
     */
    unit(func: (...args: any[]) => any, testCases: TestCase[]): void {
      console.log(`Running unit tests for function: ${func.name}`);

      testCases.forEach(({ args, expected }, index) => {
        const result = func(...args);
        const isTestPassed = util.inspect(result) === util.inspect(expected);

        console.log(`
\x1b[36mTest Case ${index + 1}:\x1b[0m ${
          isTestPassed ? '\x1b[32mPASSED\x1b[0m' : '\x1b[31mFAILED\x1b[0m'
        }
\x1b[36mInput:\x1b[0m ${util.inspect(args)}
\x1b[36mExpected Output:\x1b[0m ${util.inspect(expected)}
\x1b[36mActual Output:\x1b[0m ${util.inspect(result)}
        `);
      });
    },
  };
})();
