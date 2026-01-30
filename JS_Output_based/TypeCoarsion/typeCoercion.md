# JavaScript == Coercion Cheat Sheet

1. null & undefined

   - null == undefined → true
   - null === undefined → false

2. Booleans

   - true == 1 → true
   - false == 0 → true
   - true == 2 → false

3. Strings & Numbers

   - "0" == 0 → true
   - "" == 0 → true
   - " " == 0 → true (because " " → 0)
   - "123" == 123 → true

4. Arrays

   - [] == false → true  
     (because [] → "" → 0, false → 0)

   - [1] == 1 → true  
     (because [1].toString() → "1" → 1)

   - [1,2] == "1,2" → true

5. Objects

   - {} == "[object Object]" → false
   - {} == false → false

6. NaN

   - NaN == NaN → false
   - NaN === NaN → false
   - isNaN(NaN) → true

7. Infinity

   - 1/0 → Infinity
   - -1/0 → -Infinity
   - Infinity == Infinity → true

8. Special Weird Ones

   - [] == ![] → true  
     (![] → false → 0, [] → "" → 0)

   - 0 == false → true

   - "false" == false → false  
     (string "false" doesn’t coerce to 0)
