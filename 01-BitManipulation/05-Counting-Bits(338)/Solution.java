class Solution {

    /**
     * Generating N+1 ouput by looping from 0 to n
     * Using pre defined technique of counting setbits
     * using n = n & (n-1), untill it becomes 0.
     * Adding the count in the array and return it back.
     * 
     */
    public static int[] countBits(int n) {
        int[] bitCounts = new int[n+1];
        bitCounts[0] = 0;
        for(int i=1; i<=n; i++){
            int count = 0;
            int num = i;
            while(num != 0) {
                num = num & (num-1);
                count++;
            }
            bitCounts[i] = count;
        }
        return bitCounts;
    }
}