const assert = require('assert');

// Given nested structure (array), return flattened version
const flatten = arr => {
   const flattened = [];

   // loop through each item in array
   for (const item of arr) {
      // if item is an array, call flatten on item and push sub-items
      if (item instanceof Array) {
         flattened.push(...flatten(item));
         continue;
      }

      // if not array, push item
      flattened.push(item);
   }

   // return flattened array
   return flattened;
};

try {
   const result = flatten([1, 2, 3, 4, [5, [6], 7, 8]], []);
   assert.deepEqual(result, [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
   ]);
   console.info('Tests success', result);
   // Tests success [
   //    1, 2, 3, 4,
   //    5, 6, 7, 8
   //  ]

} catch (e) {
   console.info('Tests failed');
   console.log(e.message);
}

