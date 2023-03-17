class Solution {

    /**
     * Finding 2's comliment as first element
     * Using rule a ^ b = c then c ^ a = b
     * calculate the rest of the series by iterating over it.
     */
    public static int[] decode(int[] encoded) {
        int first = 0;
        int n = encoded.length + 1;

        // XORed all the natural numbers from 1-n+1
        for (int i = 1; i <= n; i++) {
            first ^= i;
        }

        // XORed all the odd numbers
        // It's like canceling all the element except first one in
        // perm array to get the first element
        // 1 ^ 2 ^ 3 ^ 4 ^ 5 first n Odd number of Natural numbers
        // Encoded elements will be
        // a^b | b^c | c^d | d^e If I start with index 1 and inc by 2 (All oadd
        // elements)
        // it will be b^c^d^e, which lefts out a
        for (int i = 1; i < n - 1; i += 2) {
            first ^= encoded[i];
        }

        int[] perm = new int[n];
        perm[0] = first;
        int index = 1;
        for (int x : encoded) {
            perm[index] = perm[index - 1] ^ x;
            index++;
        }
        return perm;
    }
}