class Solution {
    public int countPrimes(int n) {
        if(n<=2){ return 0; }

        boolean[] isNotPrimes = new boolean[n];

        for(int i=2; i<=Math.sqrt(n-1); i++){
            if(!isNotPrimes[i] || n % i != 0){
                for(int j=i; i*j<=n-1; j++){
                    isNotPrimes[i*j] = true;
                }
            }
        }

        int count = 0;
        for(boolean x: isNotPrimes){
            if(!x){
                count++;
            }
        }
        return count - 2;
    }
}