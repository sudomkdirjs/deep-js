/**
 * Generator Function (Pause and Resume)
 * Regular functions cannot be stopped mid-way after invocation. 
 * However, a generator function can be "stopped" midway, and later continue from where it stopped. 
 * Every time a generator function encounters a yield keyword, the function yields the value specified after it. 
 * Note that the generator function in that case doesn’t return the value, it yields the value.
 */

 function* generator(i) {
    yield i;
    yield i * 2;
  }
  
  const gen = generator(10);
  
  console.log(gen.next().value); // 10
  console.log(gen.next().value); // 20

/**
 * First, we initialize the generator function with i equal to 10. 
 * We invoke the generator function using the next() method. 
 * The first time we invoke the generator function, i is equal to 10. 
 * It encounters the first yield keyword: it yields the value of i. 
 * The generator is now "paused", and 10 gets logged.
 * Then, we invoke the function again with the next() method. 
 * It starts to continue where it stopped previously, still with i equal to 10. 
 * Now, it encounters the next yield keyword, and yields i * 2. i is equal to 10, so it returns 10 * 2, which is 20. This results in 10, 20.
 */