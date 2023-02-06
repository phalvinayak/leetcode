class Solution {

    /**
     * Finding 2's comliment as first element
     * Using rule a ^ b = c then c ^ a = b
     * calculate the rest of the series by iterating over it.
     */
    public static int[] decode(int[] encoded) {
        int[] arr = new int[encoded.length +1];

        // Finding 2's compliment of the first element.
        // Using rule a ^ b = c then c ^ a = b
        // Can iterate over the loop
        int num = encoded[0];
        // Logic to get the Kth significant bit (Woks for +ve integer)
        int k = (int) (Math.log(num) / Math.log(2)) + 1;
        // Creating mask with left shifting significant bit times and - 1.
        int mask = (1 << k) - 1;
        // 2's compliment by XOR with mask and adding 1 to it.
        arr[0] = (num ^ mask) + 1;
        int index = 1;
        for(int x: encoded){
            arr[index] = arr[index-1] ^ x;
            index++;
        }
        return arr;
    }
}