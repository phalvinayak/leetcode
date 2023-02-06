class Solution {
    public int singleNumber(int[] nums) {
        Map<Integer, Integer> freqMap = new HashMap<>();
        for(int num : nums) {
            if (freqMap.containsKey(num)) {
                freqMap.remove(num);
            } else {
                freqMap.put(num, 1);
            }
        }
        return freqMap.keySet().iterator().next();
    }
}