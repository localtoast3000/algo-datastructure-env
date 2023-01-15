import util from 'util';
import { performance } from 'perf_hooks';

export function inspect(itemToInspect: any) {
  console.log(util.inspect(itemToInspect, false, Infinity, true));
}

export function performanceTest(testName:string, func:Function, args:any[] = []){
  const startTime = performance.now()
  func(...args)
  const endTime = performance.now()
  console.log(`${testName} execution time: ${(endTime - startTime) / 1000} seconds`)
}

