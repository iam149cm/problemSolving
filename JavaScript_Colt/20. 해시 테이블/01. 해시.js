/** ๐ Hash Table (Hash map)
 * - key - value data structure. ๊ธฐ๋ณธ์ ์ผ๋ก ๋นํธ์ธ ๋์ด ์๋ ์ธ์ด๊ฐ ๋ง๋ค.  (ํ์ด์ฌ-๋์๋๋ฆฌ/js-์ค๋ธ์ ํธ,๋งต/์๋ฐ-๋งต..)
 * - colors["cyan"] is better than colors[2] 
 * - How can we get human-readability and computer readability? Computers don't know how to find an element at index pink!
 * 
 * - In order to look up values by key, we need a way to convert keys into valid array indices.
 * - A function that perform this task is called hash function
 * 
 *   0   1   2   3   4   5   6   7   8     ------------ index
 * [   ,   ,   ,   ,   ,   ,   ,   ,   ]  
 *   ๐                          ๐ 
 * ["pink", "#ff69b4"]      ["orangered", "#ff4500"]
 * 
 * input:pink ---(Hash function)--->   output:0   /  input:orangered ---(Hash function)--->  output:7 
 * 
 * ๐ Hash function
 * - ์คํธ๋ง์ผ๋ก ๋ ํค๋ฅผ ๋ฐฐ์ด์์ ์ฌ์ฉ๋๋ ์ธ๋ฑ์ค, ์ฆ ์์ ์ซ์๋ก ๋ฐ๊ฟ์ฃผ๋ ๋ฐ ์ฌ์ฉํ๋ค.
 * - ์ ๋ณด๋ณด์, ์ํธํํ, ์ํธํ ๊ธฐ์  ๋ฑ์ ์ฌ์ฉ.
 * 
 * ํจ์์ ์ ์ : ์์์ ํฌ๊ธฐ๋ฅผ ๊ฐ์ง๋ ๋ฐ์ดํฐ๋ฅผ ์๋ ฅํ๋ฉด ์ ํด์ง ํฌ๊ธฐ์ ๋ฐ์ดํฐ๋ฅผ ์ถ๋ ฅํ๋ค. 
 * Q. What makes a goot hash?
 * 1. Fast (i.e. constant time) 
 * - ํด์ํ์ด๋ธ์ crud ํ ๋๋ง๋ค ํด์ฑํด์ผ ํ๋๋ฐ ์ค๋ ๊ฑธ๋ฆฌ๋ฉด ์๋๋ค.
 * 
 * 2. Doesn't cluster outputs at specific indices, but distributes uniformly
 * - ๊ธฐ๋ณธ์ ์ผ๋ก ์ผ๊ด๋ ๋ฐฉ์์ผ๋ก ๋ถ๋ฐฐํด์ ๋ค๋ฅธ๊ฒ๋ค๊ณผ ๊ฒน์น์ง ์๊ฒ ํด์ผ ํ๋ค.
 * 
 * 3. Deterministic (same input yields same output)
 * - ๊ฒฐ์ ๋ก ์ . ํน์  ์๋ ฅ๊ฐ์ ์๋ ฅํ  ๋ ๋ง๋ค ํน์  ์ถ๋ ฅ๊ฐ์ด ๋์์ผ ํ๋ค. ๋ถํ์ค์ฑ์ด ์์ผ๋ฉด ์๋๋ค.
 * 
 * 
 * ๐ Big O (average case)
 * - Insertion : O(1) /  Deletion : O(1) 
 * - Access : O(1) --- ์ฐ์ฐ์ ์๊ฐ ์ ํด์ ธ ์๊ธฐ ๋๋ฌธ์ ์์๊ฐ์ด ๋์จ๋ค. 
 * - but ... ๋ถ๊ท ํํ๊ฒ ๋ถ๋ฐฐ๊ฐ ๋์ด ๋ชจ๋  ๊ฒ์ด ํ ์ธ๋ฑ์ค์ ๋ค์ด์๋ ๊ฒฝ์ฐ O(n) ์ด ๋์ด ๋ฒ๋ฆฐ๋ค 
 * 
 * Hash function ์ ์ฑ๋ฅ์ ๋ฌ๋ ค ์๋ค
 * 1. ํด์ ํจ์๊ฐ ์ผ๋ง๋ ๋น ๋ฅธ์ง
 * 2. ์ผ๋ง๋ ๊ณ ๋ฅด๊ฒ ๋ฐ์ดํฐ๋ฅผ ๋ถ๋ฐฐํด์ ์ถฉ๋์ ํ์๋ฅผ ์ค์ด๋์ง
 * 
 */ 