class Solution {
    public int singleNumber(int[] nums) {
        return singleNumberGeneric(nums, 3);
    }

    /**
     * Creating a array of 32 bits, and counting all numbers bits at all the
     * positions
     * By mod operation of bit count with K, will be 0 or not 0 based on the bits
     * frequency.
     * When its non zero, thats the bit of the single number.
     * We can reconstruct the single number by adding the 2^i to the number or by
     * performing |(OR)
     * operation with the result to add 2^i to the number.
     * 
     * There is a conrver case for JAVA of Interger.MIN_NUMBER, which is handled
     * using (-x -1)
     * same trick used while construcitng the number back.
     */
    static private int singleNumberGeneric(int[] arr, int k) {
        // Frequency counter for position bits, for int we have 32 bits, so the array
        // size is 32
        // to hold 32 bits count of all the nums at corresponding position
        // Setting initial value to 0, as int will be by default 0
        int[] freq = new int[32];

        // Setting the ith bit, based on the number in the frequency array
        // eg: number 10 => 1010 in binary, so here 2nd and 4th bits counter will be
        // updated
        for (int x : arr) {
            // Handling the -ve number by deducting 1 from it,
            // which will handle the corner case of Integer.MIN_VALUE
            if (x < 0)
                x = -x - 1;

            int bit = 0; // Counting bits from 0th position for every number
            while (x > 0) {
                // AND operation with 1 will remove the last bit and add to freq arr couner
                freq[bit++] += (1 & x);
                // X right shift with 1, will chop off the last bit, which is integer division
                // by 2
                x >>= 1;
            }
        }

        // Lets iterate over the frequency array, and check if its mod k is 0
        // If not thats the bit of the single element.
        // Based on the position of the bit, try to reconstruct the same number
        // By setting that using OR operation
        int result = 0;
        for (int i = 0; i < 32; i++) {
            if (freq[i] % k != 0) {
                // Or operation with number 2^i, will add 2^i to that number
                result |= 1 << i;
            }
        }

        for (int x : arr) {
            // Checking both the numbers are equal using XOR operation
            // If its a positive number, there will be a match
            if ((x ^ result) == 0) {
                return result;
            }
        }
        // No match in actual array, means it's a -ve number
        // This is the -ve number handling scenario, which we did in the begining.
        return -result - 1;
    }
}