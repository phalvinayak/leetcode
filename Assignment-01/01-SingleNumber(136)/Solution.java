class Solution {

    /**
     * XOR all the numbers such that similar numbers will
     * cancle out each other and will left out with the only
     ) odd number in the list.
     */
    public int singleNumber(int[] nums) {
        int singleNum = 0;
        for(int num : nums) {
            singleNum ^= num;
        }
        return singleNum;
    }
}