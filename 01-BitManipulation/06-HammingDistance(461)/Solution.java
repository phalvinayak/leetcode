class Solution {

    /**
     * First needs to perform XOR(^) operation on both the numbers to get differnce bit.
     * After getting the difference bit, count the bits using n = n & (n-1), until n becomes 0
     */
    public int hammingDistance(int x, int y) {
        int count = 0;
        int num = x ^ y;
        while(num != 0) {
            num = num & (num-1);
            count++;
        }
        return count;
    }
}