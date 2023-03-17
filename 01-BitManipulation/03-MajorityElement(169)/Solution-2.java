class Solution {

    /**
     * Creating a map which keeps track of the number frequency
     * Find the majority mark, which will decide the element has majority occurance
     * When we reach that mark, store the number and break the loop
     *
     * Return the saved number as high frequency number.
     */
    public static int majorityElement(int[] nums) {
        Map<Integer, Integer> freqMap = new HashMap<>();
        int majoritySize = (int) Math.ceil((double)nums.length/2);
        int highFreqNumber = 0;
        for(int num: nums){
            freqMap.put(num, freqMap.getOrDefault(num, 0)+1);
            if(freqMap.getOrDefault(num, 0) >= majoritySize){
                highFreqNumber = num;
                break;
            }
        }
        return highFreqNumber;
    }
}