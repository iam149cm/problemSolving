/** ๐ Dynamic Programming
 * - A method for solving a complex problem by breaking it down into a collection of simpler subproblems,
 * solving each of those subproblems just once, and storing their solutions.
 * - ๋ณต์กํ ๋ฌธ์ ๋ฅผ ๋ ๊ฐ๋จํ ํ์ ๋ฌธ์ ์ ๋ชจ์์ผ๋ก ์ชผ๊ฐ์ ๊ฐ ํ์ ๋ฌธ์ ๋ค์ ํ์ด์ ๊ทธ ๋ต์ ์ ์ฅํ๋ ๋ฐฉ์.
 * 
 * - .... Q.here does the name come from? 
 * - ์ฝ๋ / ํ์ค(์ํ) ์ ์์ญ์์ ์ต์ ์ ํด๋ต์ ์ฐพ์๋ด๋ ๊ฒ.
 * 
 * ๐ Q. ์ธ์  ์ด ๋ฐฉ๋ฒ์ ์ฌ์ฉํ  ์ ์๋๊ฐ? ๐ ์๋ ๋ ๊ฐ์ง๊ฐ ์๋์ง ํ์ธํด์ผ ํจ.
 * 1. Overlapping Subproblems ๋ฐ๋ณต๋๋ ํ์ ๋ฌธ์  
 * - A problem is said to have overlapping subproblmes if it can be broken down into subproblems which are reused several times.
 * - ์ฆ ํ ๋ฌธ์ ๋ฅผ ๋ ์์ ๋ฌธ์ ๋ค๋ก ๋๋ ์ ์๊ณ , ๊ทธ ์กฐ๊ฐ๋ค ์ค ์ผ๋ถ๊ฐ ์ฌํ์ฉ ๊ฐ๋ฅํ๋ค๋ ๋ป.
 * 
 * ex) ํผ๋ณด๋์น ์์ด Fibonacci sequence : Every number after the first two is the sum of the two preceding ones.
 * [1, 1, 2, 3, 5, 8, 13, ...] 
 * - ๋ค์ฏ๋ฒ์งธ ํผ๋ณด๋์น ์๋ฅผ ์ฐพ๊ธฐ ์ํด์๋ ์ธ๋ฒ์งธ ์๋ฅผ ๋ ๋ฒ ๊ณ์ฐํด์ผ ํ๋ค.
 * - ๋ค์ฏ๋ฒ์งธ ์๋ฅผ ๊ตฌํ๊ธฐ ์ํด ๋ค๋ฒ์งธ ์๊ฐ ํ์ํจ. ๋ค๋ฒ์งธ ์๋ฅผ ๊ตฌํ๋ ค๋ฉด ์ธ๋ฒ์งธ์ ๋๋ฒ์งธ๋ฅผ ๋ํด์ผ ํจ.
 * - ์ธ๋ฒ์งธ๋ฅผ ๊ตฌํ๋ ค๋ฉด ๋๋ฒ์งธ์ ์ฒซ๋ฒ์งธ๋ฅผ ๋ํด์ผ ํจ.
 * 
 * ex) ๋ฐ๋ณต๋์ง ์๋ ๋ฌธ์ ๋ค์ด ํฌํจ๋ ์์ - ํฉ๋ณ ์ ๋ ฌ Merge Sort. 
 * - [10, 24, 73, 77] : ์ชผ๊ฐ๊ธฐ๋ ํ์ง๋ง ์ค์ฒฉ๋์ง๋ ์๋๋ค. ๋งค๋ฒ ๋ค๋ฅธ ๊ฐ์ ์กฐ๊ฐ์ ์ ๋ ฌํ๋ค.
 * - ๋ง์ฝ [10, 24, 10, 24] ๋ผ๋ฉด ๋ฐ๋ณต๋๋ ๋ฌธ์ ๊ฐ ์๊ธฐ๊ณ  ๋์  ํ๋ก๊ทธ๋๋ฐ์ ์ฌ์ฉํ  ์ ์๋ค. (๋๋ฌธ ๊ฒฝ์ฐ)
 * 
 * 
 * 2. Optimal Substructure ์ต์  ๋ถ๋ถ ๊ตฌ์กฐ
 * - A problem is said to have potimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems
 * - ํ์ ๋ฌธ์ ์ ์ต์  ํด๋ต์ ํตํด์ ๋ ํฐ ๋ฒ์ฃผ์ ๋ฌธ์ ์ ์ต์  ํด๋ต์ ๊ตฌ์ฑํ  ์ ์๋ ๊ฒฝ์ฐ ํด๋น ๋ฌธ์ ๊ฐ ์ต์  ๋ถ๋ถ ๊ตฌ์กฐ๋ฅผ ๊ฐ์ง๋ค๊ณ  ํ๋ค.
 * - ๋ค์ฏ๋ฒ์งธ ํผ๋ณด๋์น ์๋ฅผ ์ฐพ๋ ์ต์ ์ ํด๋ต์ ๋ค๋ฒ์งธ ์ธ๋ฒ์งธ ํผ๋ณด๋์น ์๋ฅผ ๊ตฌํด์ ๋ํ๋ ๊ฒ.
 * - ๊ทธ๋ํ์์ ์ ์  ์ฌ์ด์ ์ต๋จ ๊ฒฝ๋ก๋ฅผ ์ฐพ๋ ๊ฒ : A->D [A-B-C-D] / A->C [A-B-C] / A-B [A-B]
 * 
 * ex) ์ต์  ๋ถ๋ถ ๊ตฌ์กฐ๋ฅผ ๊ฐ์ง๊ณ  ์์ง ์์ ์์ - ์ต์ ๊ฐ ํญ๊ณต๊ถ ์ฐพ๊ธฐ (SFO -> FAI)
 * 1. [ SFO - SEA - FAI ] - SFO -> FAI ๊น์ง ๊ฐ๋ ์ต์ ๊ฐ๋ SEA ๋ฅผ ๊ฒฝ์ ํ๋ ๊ฒ
 * 2. [ SFO - PDX - SEA ] - SFO -> SEA ๊น์ง ๊ฐ๋ ์ต์ ๊ฐ๋ PDX ๋ฅผ ๊ฒฝ์ ํ๋ ๊ฒ. 1์๋ PDX ๊ฐ ์๋ค.
 * 
 */