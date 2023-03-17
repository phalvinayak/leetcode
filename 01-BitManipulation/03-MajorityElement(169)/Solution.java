class Solution {

    /**
     * Counting the bits of the all the element in the array based on the postion of
     * bit.
     * Find the majority count, to filter the bits to construct the final number.
     * Find all the bits which are set majority count times and reconstruct the
     * number.
     * 
     * There is a conrver case for JAVA of Interger.MIN_NUMBER, which is handled
     * using (-x -1)
     * same trick used while construcitng the number back.
     */
    public static int majorityElement(int[] nums) {
        int[] bits = new int[32];
        for (int x : nums) {
            if (x < 0) {
                x = -x - 1;
            } // Handling the -ve number while counting the bits
            int bit = 0;
            while (x > 0) {
                bits[bit++] += 1 & x; // Checking the last bit is set or not
                x >>= 1; // Right shifting by 1 to integer divide it by 2
            }
        }
        // System.out.println(Arrays.toString(bits));
        int majorityCount = (nums.length >> 1) + 1;
        int res = 0;
        for (int i = 0; i < bits.length; i++) {
            // Bit has to be set majorityCount times
            if (bits[i] >= majorityCount) {
                // Adding 2^i to result to construct the result.
                res |= 1 << i;
            }
        }
        for (int x : nums) {
            if ((x ^ res) == 0) {
                return res;
            }
        }
        // Handling -ve number scenario
        return -res - 1;
    }
}