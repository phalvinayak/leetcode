class Solution {

    /**
     * Looping through the range from left to right
     * and performing the BITWISE AND operation,
     * when the results become 0 terminating the loop
     * As after 0, any number of AND operation will yield 0
     *
     * Adding Rangle logic for the corner cases where
     * further increment to int becomes -2147483646 and loops forever.
     */
    public int rangeBitwiseAnd(int left, int right) {
        int bitwiseOp = left;
        int range = right - left;
        for(int i=1; i<=range; i++){
            bitwiseOp = bitwiseOp & (left+i);
            if(bitwiseOp == 0){ break; }
        }
        return bitwiseOp;
    }
}